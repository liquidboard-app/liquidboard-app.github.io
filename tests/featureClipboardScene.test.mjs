import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import vm from 'node:vm';
import ts from 'typescript';
import { bindPhaseScrollInput, clipboardPhaseAt, createClipboardPhases, railProgress } from '../src/utils/scrollPhases.ts';

// Execute the production desktop scene with deterministic layout/tween clocks.
// This covers callback ordering and input ownership; it does not render a browser.
function sceneHarness({ deferScrollUpdates = false } = {}) {
  const source = readFileSync(new URL('../src/views/Home/components/FeatureClipboard/index.tsx', import.meta.url), 'utf8');
  const start = source.indexOf('        const copyWordGroups =');
  const end = source.indexOf('\n      });\n\n      cleanup =', start);
  assert.ok(start > 0 && end > start);
  const window = new EventTarget();
  Object.assign(window, { scrollY: 0, innerHeight: 800, innerWidth: 1200, writes: [] });
  window.scrollTo = ({ top }) => { window.scrollY = top; window.writes.push(top); };
  globalThis.window = window;
  globalThis.Element = class {};
  globalThis.document = { body: {} };
  let clock = 0;
  const tweens = [];
  const set = (targets, values) => {
    for (const target of Array.isArray(targets) ? targets : [targets]) {
      for (const [key, value] of Object.entries(values)) {
        if (!['duration', 'ease', 'overwrite', 'stagger'].includes(key)) target[key] = typeof value === 'function' ? value() : value;
      }
    }
  };
  class Tween {
    constructor(options = {}) {
      this.options = options;
      this.started = clock;
      this.operations = [];
      this.duration = 0;
      this.dead = !!options.scrollTrigger;
      tweens.push(this);
      if (options.scrollTrigger) this.scrollTrigger = trigger(options.scrollTrigger);
    }
    to(target, values, at = this.duration) {
      const finish = at + (values.duration ?? 0);
      this.operations.push({ target, values, finish });
      this.duration = Math.max(this.duration, finish);
      return this;
    }
    set(target, values, at = this.duration) { return this.to(target, { ...values, duration: 0 }, at); }
    eventCallback(name, callback) { this.options[name] = callback; return this; }
    kill() { this.dead = true; }
  }
  let scene;
  let previous = 0;
  function trigger(options) {
    scene = { start: 1000, end: 0, direction: 1, progress: 0, isActive: false, scroll: () => window.scrollY, options };
    options.onRefreshInit?.(scene);
    scene.end = scene.start + Number(options.end().slice(2));
    options.onRefresh?.(scene);
    return scene;
  }
  const ScrollTrigger = {
    update(nativeEvent = false) {
      if (deferScrollUpdates && !nativeEvent) return;
      const p = Math.max(0, Math.min(1, (window.scrollY - scene.start) / (scene.end - scene.start)));
      if (p === previous) return;
      const old = previous;
      scene.direction = p > old ? 1 : -1;
      scene.progress = p;
      scene.isActive = p > 0 && p < 1;
      previous = p;
      // Match ScrollTrigger's scrubbed-scene order: onUpdate before boundary callbacks.
      scene.options.onUpdate?.(scene);
      if (old === 0 && p > 0) scene.options.onEnter?.(scene);
      if (old === 1 && p < 1) scene.options.onEnterBack?.(scene);
      if (p === 1) scene.options.onLeave?.(scene);
      if (p === 0) scene.options.onLeaveBack?.(scene);
    },
  };
  const gsap = { set, timeline: (options) => new Tween(options), to: (target, values) => new Tween().to(target, values) };
  const copies = Array.from({ length: 3 }, () => {
    const words = [{}, {}];
    const nodes = [{}, {}];
    return {
      words,
      nodes,
      style: { setProperty() {}, removeProperty() {} },
      querySelectorAll: (selector) => selector.includes('grapheme') ? words : nodes,
    };
  });
  const viewports = [{}, {}, {}];
  const rails = [{ distance: 6000 }, { distance: 3000 }, { distance: 1500 }];
  const motionCleanups = [];
  const context = {
    window, document: globalThis.document, gsap, ScrollTrigger,
    bindPhaseScrollInput, clipboardPhaseAt, createClipboardPhases, railProgress,
    copyContents: copies, listViewports: viewports,
    textListTrack: rails[0], imageListTrack: rails[1], stickerListTrack: rails[2],
    textListViewport: viewports[0], imageListViewport: viewports[1], stickerListViewport: viewports[2],
    track: {}, pin: {}, motionCleanups, displayedIndex: 0,
    copyCenterOffset: () => 200, slideDistance: () => 1200, headerOffset: () => 0,
    listStartOffset: () => 800, listEndOffset: (rail) => 800 - rail.distance / 2.5,
    listTravelDistance: (rail) => rail.distance,
    updateRail() {}, updateCardScale() {}, updateImageCardScale() {}, updateStickerCardScale() {}, refreshMeasurements() {}, setActiveIndex() {},
  };
  const code = ts.transpileModule(`function install() { ${source.slice(start, end)}
    return { snapshot: () => ({ index: trackHandoffIndex, moving: trackMoving,
      states: [...copyMotionStates], ready: [...copyMoveComplete], rows: [...listRenderedProgress],
      phases, busy: motionBusy(), position: latestProgressDistance }), scene };
  }; install();`, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.None } }).outputText;
  const installed = vm.runInNewContext(code, context);
  const snapshot = () => JSON.parse(JSON.stringify(installed.snapshot()));
  const finish = () => {
    let iterations = 0;
    while (tweens.some((tween) => !tween.dead)) {
      assert.ok(iterations++ < 100, 'animation callbacks must settle without looping');
      const next = tweens.filter((tween) => !tween.dead).sort((a, b) => a.started + a.duration - b.started - b.duration)[0];
      clock = next.started + next.duration;
      for (const operation of next.operations) set(operation.target, operation.values);
      next.dead = true;
      next.options.onComplete?.();
    }
  };
  const wheel = (delta) => {
    const event = new Event('wheel', { cancelable: true });
    Object.assign(event, { deltaY: delta, deltaX: 0, deltaMode: 0, ctrlKey: false });
    window.dispatchEvent(event);
    if (!event.defaultPrevented) { window.scrollY += delta; ScrollTrigger.update(true); }
    return snapshot();
  };
  return {
    wheel, finish, snapshot, window, scene,
    flushNativeScroll() { ScrollTrigger.update(true); return snapshot(); },
    nativeScroll(position) { window.scrollY = position; ScrollTrigger.update(true); return snapshot(); },
    refresh() { scene.options.onRefresh?.(scene); return snapshot(); },
    seek(position) {
      const event = new Event('pointerdown');
      Object.assign(event, { button: 0, clientX: 1198 });
      window.dispatchEvent(event);
      window.scrollY = position; ScrollTrigger.update(); return snapshot();
    },
    cleanup() { motionCleanups.forEach((cleanup) => cleanup()); },
  };
}

test('all three production phases finish before advancing and reverse without rail drift', () => {
  const h = sceneHarness();
  try {
    // An entry checkpoint may lie one pixel outside the pin. Continue until entered.
    while (h.window.scrollY <= h.scene.start) h.wheel(100000);
    h.finish();
    for (let index = 0; index < 3; index++) {
      assert.equal(h.snapshot().index, index);
      assert.equal(h.snapshot().states[index], 'center');
      h.wheel(100000); // center hold -> left transition
      const before = h.window.scrollY;
      h.wheel(100000); // rejected during movement
      assert.equal(h.window.scrollY, before);
      assert.equal(h.snapshot().rows[index], 0);
      h.finish();
      assert.equal(h.snapshot().ready[index], true);
      h.wheel(100); // first visible rail movement
      assert.ok(h.snapshot().rows[index] > 0 && h.snapshot().rows[index] < 1);
      h.wheel(100000); // final row, then handoff
      assert.equal(h.snapshot().rows[index], 1);
      h.finish();
    }
    assert.equal(h.snapshot().index, 2);
    for (let index = 2; index >= 0; index--) {
      h.wheel(-100000); // return rail to first row, then copy to center
      h.finish();
      assert.equal(h.snapshot().index, index);
      assert.equal(h.snapshot().rows[index], 0);
      assert.equal(h.snapshot().states[index], 'center');
      h.wheel(-100000); // centered copy blur-out, previous panel lands left
      const position = h.window.scrollY;
      h.wheel(-100000);
      assert.equal(h.window.scrollY, position);
      h.finish();
      if (index > 0) {
        assert.equal(h.snapshot().index, index - 1);
        assert.equal(h.snapshot().ready[index - 1], true);
        assert.equal(h.snapshot().rows[index - 1], 1, 'reverse handoff must retain the final row');
      }
    }
  } finally { h.cleanup(); }
});

test('delayed native scroll notifications preserve the center-to-left animation', () => {
  const h = sceneHarness({ deferScrollUpdates: true });
  try {
    while (h.window.scrollY <= h.scene.start) h.wheel(100000);
    h.flushNativeScroll();
    h.finish();
    assert.equal(h.snapshot().states[0], 'center');
    h.wheel(100000);
    // The browser dispatches scroll after the wheel handler has returned.
    const moving = h.flushNativeScroll();
    assert.equal(moving.states[0], 'left');
    assert.equal(moving.ready[0], false, 'must animate, not snap directly into the ready pose');
    assert.equal(moving.busy, true);
    assert.equal(moving.rows[0], 0);
    h.finish();
    assert.equal(h.snapshot().ready[0], true);
  } finally { h.cleanup(); }
});

test('direction changes during title movement cannot spend hidden list distance', () => {
  const h = sceneHarness();
  try {
    while (h.window.scrollY <= h.scene.start) h.wheel(100000);
    h.finish();
    h.wheel(100000);
    const anchor = h.window.scrollY;
    h.wheel(-900);
    assert.equal(h.window.scrollY, anchor);
    h.finish();
    h.wheel(-100);
    h.finish();
    assert.equal(h.snapshot().states[0], 'center');
    assert.equal(h.snapshot().rows[0], 0);
    h.wheel(100);
    h.finish();
    assert.equal(h.snapshot().ready[0], true);
    assert.equal(h.snapshot().rows[0], 0);
  } finally { h.cleanup(); }
});

test('ordinary native scroll and a layout refresh never snap a moving title to the left', () => {
  const h = sceneHarness();
  try {
    while (h.window.scrollY <= h.scene.start) h.wheel(100000);
    h.finish();
    const anchor = h.scene.start + h.snapshot().phases.railStarts[0];
    const moving = h.nativeScroll(anchor);
    assert.equal(moving.states[0], 'left');
    assert.equal(moving.ready[0], false);
    assert.equal(h.refresh().ready[0], false, 'refresh must not complete or cancel the transition');
    h.finish();
    assert.equal(h.snapshot().ready[0], true);
    assert.equal(h.snapshot().rows[0], 0);
  } finally { h.cleanup(); }
});

test('native scrollbar seeks settle immediately without growing page or queued transitions', () => {
  const h = sceneHarness();
  try {
    const end = h.scene.end;
    const phases = h.snapshot().phases;
    for (const index of [2, 0, 1, 2, 1, 0]) {
      const state = h.seek(h.scene.start + phases.railStarts[index] + 250);
      assert.equal(state.index, index);
      assert.equal(state.ready[index], true);
      assert.equal(state.busy, false);
      assert.equal(h.scene.end, end);
      assert.deepEqual(h.window.writes, [], 'native seeking must not be counteracted by a scroll writer');
    }
  } finally { h.cleanup(); }
});

import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import vm from 'node:vm';
import ts from 'typescript';
import { gsap } from 'gsap';
import { bindPhaseScrollInput } from '../src/utils/scrollPhases.ts';

function install(width, height) {
  const source = readFileSync(new URL('../src/views/Home/components/CoreClipboard/index.tsx', import.meta.url), 'utf8');
  const start = source.indexOf('      const stageShift =');
  const end = source.indexOf('      revertScene =', start);
  const phones = Array.from({ length: 3 }, () => ({ x: 0, xPercent: 0, yPercent: 0, autoAlpha: 0, scale: 1, filter: '', force3D: false, willChange: '', zIndex: 0 }));
  const timelines = [];
  const window = new EventTarget();
  Object.assign(window, { scrollY: 1000, innerHeight: height });
  window.scrollTo = ({ top }) => { window.scrollY = top; };
  globalThis.window = window;
  globalThis.Element = class {};
  globalThis.document = { body: {} };
  let scene;
  let input;
  let cleanup;
  let options;
  const nativeScroll = (top) => {
    const direction = Math.sign(top - window.scrollY);
    window.scrollY = top;
    scene.direction = direction;
    options.onUpdate(scene);
  };
  const code = ts.transpileModule(source.slice(start, end), { compilerOptions: { target: ts.ScriptTarget.ES2022 } }).outputText;
  vm.runInNewContext(code, {
    stage: { clientWidth: width, clientHeight: height }, phoneItems: phones,
    firstPhone: phones[0], secondPhone: phones[1], thirdPhone: phones[2], headerOffset: () => 75,
    gsap: { set: gsap.set, context: (fn) => fn(), timeline(options) { const t = gsap.timeline(options); timelines.push(t); return t; } },
    ScrollTrigger: {
      create(config) {
        options = config;
        scene = {
          start: 1000, end: 1000 + Number(config.end().slice(2)), direction: 1,
          scroll: (top) => { if (top !== undefined) window.scrollY = top; return window.scrollY; },
        };
        return scene;
      },
      update() { options.onUpdate(scene); },
    },
    bindPhaseScrollInput(config) {
      input = config;
      cleanup = bindPhaseScrollInput({ ...config, beforeScroll(distance, direction) {
        scene.direction = direction;
        config.beforeScroll(distance, direction);
      } });
      return cleanup;
    },
  });
  const touch = (type, y) => {
    const event = new Event(type, { cancelable: true });
    Object.assign(event, { touches: type === 'touchend' ? [] : [{ clientX: 100, clientY: y }] });
    window.dispatchEvent(event);
  };
  const wheel = (deltaY, timeStamp) => {
    const event = new Event('wheel', { cancelable: true });
    Object.assign(event, { deltaY, deltaX: 0, deltaMode: 0, ctrlKey: false });
    Object.defineProperty(event, 'timeStamp', { value: timeStamp });
    window.dispatchEvent(event);
  };
  return { phones, timelines, input, window, scene, touch, wheel, nativeScroll, cleanup() {
    cleanup();
    timelines.forEach((t) => t.kill());
    gsap.ticker.sleep();
  } };
}

for (const [width, height] of [[390, 700], [820, 1000]]) {
  test(`${width}px: longer holds, synchronized complete handoffs, and reverse`, () => {
    const h = install(width, height);
    const first = Math.max(height * 1.6, 1100);
    const second = Math.max(height * 1.5, 1000);
    try {
      h.input.beforeScroll(first - 100, 1);
      assert.equal(h.timelines.length, 0, 'first photo survives well beyond the old hold');
      h.input.beforeScroll(first, 1);
      h.timelines[0].progress(.5).pause();
      assert.ok(h.phones[0].x < 0 && h.phones[1].x > 0);
      h.timelines[0].progress(1);
      assert.equal(h.phones[0].autoAlpha, 0);
      assert.equal(h.phones[1].x, 0);
      assert.equal(h.phones[1].filter, 'none');
      assert.equal(h.input.busy(), true, 'completed animation does not unlock the gesture');
      h.input.beforeScroll(first + second + 1000, 1);
      assert.equal(h.timelines.length, 1);
      h.touch('touchstart', 700);
      h.input.beforeScroll(first + second - 100, 1);
      assert.equal(h.timelines.length, 1, 'next image also requires the longer distance');
      h.input.beforeScroll(first + second, 1);
      h.timelines[1].progress(1).pause();
      h.touch('touchstart', 100);
      h.input.beforeScroll(first + second - 48, -1);
      h.timelines[2].progress(.5).pause();
      assert.ok(h.phones[1].x < 0 && h.phones[2].x > 0);
      h.timelines[2].progress(1);
      h.input.beforeScroll(0, -1);
      assert.equal(h.timelines.length, 3, 'reverse gesture cannot change two images');
      h.touch('touchstart', 100);
      h.input.beforeScroll(first - 48, -1);
      h.timelines[3].progress(1).pause();
      assert.equal(h.phones[0].autoAlpha, 1);
      assert.equal(h.phones[0].filter, 'none');
      assert.equal(h.scene.end - h.scene.start, first + second + Math.max(height * .5, 320));
    } finally { h.cleanup(); }
  });

  test(`${width}px: one long touch plus native momentum changes only one image`, () => {
    const h = install(width, height);
    try {
      h.touch('touchstart', 700);
      for (const y of [-10000, -20000, -30000, -40000]) h.touch('touchmove', y);
      assert.equal(h.timelines.length, 1);
      h.timelines[0].progress(1).pause();
      const anchor = h.window.scrollY;
      h.touch('touchmove', -50000);
      h.touch('touchend', 0);
      for (let i = 0; i < 4; i++) h.nativeScroll(h.scene.end + 10000);
      assert.equal(h.timelines.length, 1, 'native momentum after finger lift must remain locked');
      assert.equal(h.window.scrollY, anchor, 'momentum must not consume the next hold');
      h.touch('touchstart', 700);
      for (const y of [-10000, -20000, -30000]) h.touch('touchmove', y);
      assert.equal(h.timelines.length, 2, 'new swipe may advance exactly one image');
      h.timelines[1].progress(1).pause();
      h.touch('touchstart', 100);
      for (const y of [10000, 20000, 30000]) h.touch('touchmove', y);
      assert.equal(h.timelines.length, 3);
      h.timelines[2].progress(1).pause();
      const reverseAnchor = h.window.scrollY;
      h.nativeScroll(0);
      assert.equal(h.timelines.length, 3);
      assert.equal(h.window.scrollY, reverseAnchor);
    } finally { h.cleanup(); }
  });

  test(`${width}px: noncancelable native fling and trackpad tail cannot skip photos`, () => {
    const h = install(width, height);
    try {
      h.touch('touchstart', 700);
      h.nativeScroll(h.scene.end + 10000);
      assert.equal(h.timelines.length, 1);
      h.timelines[0].progress(1).pause();
      h.nativeScroll(h.scene.end + 10000);
      assert.equal(h.timelines.length, 1);
      // Fresh trackpad gesture, followed by a long tail after completion.
      for (const time of [0, 50, 100, 150]) h.wheel(10000, time);
      assert.equal(h.timelines.length, 2);
      h.timelines[1].progress(1).pause();
      const anchor = h.window.scrollY;
      for (let time = 200; time < 2000; time += 50) h.wheel(10000, time);
      assert.equal(h.window.scrollY, anchor, 'trackpad tail cannot spend further scroll');
      h.wheel(-10000, 2500);
      assert.equal(h.timelines.length, 3, 'fresh reverse gesture unlocks immediately');
    } finally { h.cleanup(); }
  });
}

import assert from 'node:assert/strict';
import { afterEach, test } from 'node:test';
import { bindPhaseScrollInput, clampPhaseScroll, clipboardPhaseAt, createClipboardPhases, railProgress } from '../src/utils/scrollPhases.ts';

const cleanups = [];
afterEach(() => { while (cleanups.length) cleanups.pop()(); });

function environment(position = 0) {
  const window = new EventTarget();
  Object.assign(window, { scrollY: position, innerHeight: 800, writes: [] });
  window.scrollTo = ({ top }) => { window.scrollY = top; window.writes.push(top); };
  globalThis.window = window;
  globalThis.Element = class {};
  globalThis.document = { body: {} };
  function wheel(deltaY, extra = {}) {
    const event = new Event('wheel', { cancelable: true });
    Object.assign(event, { deltaY, deltaX: 0, deltaMode: 0, ctrlKey: false, ...extra });
    window.dispatchEvent(event);
    return event;
  }
  return { window, wheel };
}

test('all rails share a speed and return to the same row at the same coordinate', () => {
  const distances = [6000, 3000, 1500];
  const phases = createClipboardPhases(distances, 400, 80);
  assert.deepEqual(phases.starts, [0, 6400, 9800]);
  for (let i = 0; i < 3; i++) {
    const start = phases.railStarts[i];
    assert.equal(railProgress(start, start, distances[i]), 0);
    assert.equal(railProgress(phases.ends[i], start, distances[i]), 1);
    const movement = railProgress(start + 250, start, distances[i]) * distances[i] / 2.5;
    assert.equal(movement, 100);
    const forward = [0, 100, 600, 1000].map((delta) => railProgress(start + delta, start, distances[i]));
    const reverse = [1000, 600, 100, 0].map((delta) => railProgress(start + delta, start, distances[i]));
    assert.deepEqual(reverse.reverse(), forward);
  }
  assert.equal(phases.totalDistance, phases.ends[2] + 80);
});

test('large gestures stop at every forward and reverse checkpoint', () => {
  const phases = createClipboardPhases([6000, 3000, 1500], 400, 80);
  let position = -100;
  for (const checkpoint of phases.checkpoints) {
    position = clampPhaseScroll(position, 100000, phases.checkpoints);
    assert.equal(position, checkpoint);
  }
  for (const checkpoint of phases.checkpoints.slice(0, -1).reverse()) {
    position = clampPhaseScroll(position, -100000, phases.checkpoints);
    assert.equal(position, checkpoint);
  }
  assert.equal(clampPhaseScroll(400, .25, phases.checkpoints), 400.25);
  assert.equal(clampPhaseScroll(400, -.25, phases.checkpoints), 399.75);
  assert.equal(clampPhaseScroll(399.75, 10000, phases.checkpoints), 400);
  assert.equal(clampPhaseScroll(400.25, -10000, phases.checkpoints), 400);
});

test('native seeks resolve each title, each rail, and both section boundaries', () => {
  const phases = createClipboardPhases([6000, 3000, 1500], 400, 80);
  for (let index = 0; index < 3; index++) {
    assert.deepEqual(clipboardPhaseAt(phases, phases.starts[index]), { index, left: false });
    assert.deepEqual(clipboardPhaseAt(phases, phases.railStarts[index]), { index, left: true });
    assert.deepEqual(clipboardPhaseAt(phases, phases.ends[index] - 1), { index, left: true });
  }
  assert.deepEqual(clipboardPhaseAt(phases, -100), { index: 0, left: false });
  assert.deepEqual(clipboardPhaseAt(phases, phases.totalDistance + 100), { index: 2, left: true });
});

test('transition input is discarded, never replayed or added to rail progress', () => {
  const { window, wheel } = environment(1400);
  let busy = true;
  cleanups.push(bindPhaseScrollInput({
    range: () => ({ start: 1000, end: 9000 }), checkpoints: () => [1, 400, 8000],
    busy: () => busy, afterScroll() {},
  }));
  for (const delta of [100, 4000, -800, 60]) {
    assert.equal(wheel(delta).defaultPrevented, true);
    assert.equal(window.scrollY, 1400);
  }
  assert.deepEqual(window.writes, []);
  busy = false;
  wheel(100);
  assert.equal(window.scrollY, 1500);
  assert.equal(railProgress(window.scrollY - 1000, 400, 6000), 100 / 6000);
});

test('a boundary transition starts before a new gesture spends rail distance', () => {
  const { window, wheel } = environment(1400);
  let busy = false;
  cleanups.push(bindPhaseScrollInput({
    range: () => ({ start: 1000, end: 9000 }), checkpoints: () => [1, 400, 8000],
    busy: () => busy,
    beforeScroll(distance, direction) { assert.equal(distance, 400); assert.equal(direction, 1); busy = true; },
    afterScroll() { assert.fail('must not scroll during title movement'); },
  }));
  wheel(900);
  assert.equal(window.scrollY, 1400);
  assert.deepEqual(window.writes, []);
});

test('nearest component owns input even when effects register in reverse order', () => {
  const { window, wheel } = environment(500);
  // Action mounts synchronously; Feature registers after its dynamic import.
  for (const [start, end] of [[10000, 11700], [1000, 9000]]) {
    cleanups.push(bindPhaseScrollInput({
      range: () => ({ start, end }), checkpoints: () => [1, 400, end - start],
      busy: () => false, afterScroll() {},
    }));
  }
  wheel(20000);
  assert.ok(window.scrollY < 1002, 'must stop at Feature, not jump to Action');
  assert.equal(window.writes.length, 1, 'only one scene may write scroll for an input');
  window.scrollY = 12000;
  wheel(-20000);
  assert.ok(window.scrollY >= 11700, 'reverse must enter Action first');
  assert.equal(window.writes.length, 2);
});

test('outside scene, pinch zoom and horizontal gestures retain native behavior; cleanup releases input', () => {
  const { wheel } = environment(500);
  const cleanup = bindPhaseScrollInput({
    range: () => ({ start: 1000, end: 9000 }), checkpoints: () => [1, 8000],
    busy: () => true, afterScroll() {},
  });
  assert.equal(wheel(100).defaultPrevented, false);
  assert.equal(wheel(1000, { ctrlKey: true }).defaultPrevented, false);
  assert.equal(wheel(1000, { deltaX: 2000 }).defaultPrevented, false);
  cleanup();
  assert.equal(wheel(10000).defaultPrevented, false);
});

test('fractional layout anchors remain traversable when browser scroll offsets are rounded', () => {
  const { window, wheel } = environment(1200);
  window.scrollTo = ({ top }) => { window.scrollY = Math.round(top); };
  cleanups.push(bindPhaseScrollInput({
    range: () => ({ start: 1000.4, end: 9000.4 }), checkpoints: () => [1, 400.2, 8000],
    busy: () => false, afterScroll() {},
  }));
  wheel(1000);
  assert.equal(window.scrollY, 1401);
  wheel(100);
  assert.equal(window.scrollY, 1501, 'next input must get past the rounded checkpoint');
  wheel(-1000);
  assert.equal(window.scrollY, 1400);
  wheel(-100);
  assert.equal(window.scrollY, 1300, 'reverse must also get past the rounded checkpoint');
});

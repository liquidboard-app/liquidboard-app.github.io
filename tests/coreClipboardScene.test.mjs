import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import vm from 'node:vm';
import ts from 'typescript';
import { gsap } from 'gsap';

for (const width of [390, 820]) test(`${width}px: Core handoffs finish together, hold longer, and reverse`, () => {
  const source = readFileSync(new URL('../src/views/Home/components/CoreClipboard/index.tsx', import.meta.url), 'utf8');
  const start = source.indexOf('      const stageShift =');
  const end = source.indexOf('      revertScene =', start);
  const phones = Array.from({ length: 3 }, () => ({ x: 0, xPercent: 0, yPercent: 0, autoAlpha: 0, scale: 1, filter: '', force3D: false, willChange: '', zIndex: 0 }));
  const timelines = [];
  let input;
  let scene;
  const code = ts.transpileModule(source.slice(start, end), { compilerOptions: { target: ts.ScriptTarget.ES2022 } }).outputText;
  vm.runInNewContext(code, {
    stage: { clientWidth: width, clientHeight: 800 }, phoneItems: phones,
    firstPhone: phones[0], secondPhone: phones[1], thirdPhone: phones[2], headerOffset: () => 75,
    gsap: { set: gsap.set, context: (fn) => fn(), timeline(options) { const t = gsap.timeline(options); timelines.push(t); return t; } },
    ScrollTrigger: { create(options) { scene = { start: 1000, end: 2800, ...options }; return scene; }, update() {} },
    bindPhaseScrollInput(options) { input = options; return () => {}; },
  });
  try {
    input.beforeScroll(600, 1);
    assert.equal(timelines.length, 0, 'first phone remains centered for at least 600px');
    input.beforeScroll(720, 1);
    assert.equal(input.busy(), true);
    const first = timelines[0];
    first.progress(.5).pause();
    assert.ok(phones[0].x < 0 && phones[1].x > 0, 'both phones move during the same frame');
    input.beforeScroll(2000, 1);
    assert.equal(timelines.length, 1, 'cannot skip a phase while moving');
    first.progress(1);
    assert.equal(input.busy(), false);
    assert.equal(phones[0].autoAlpha, 0);
    assert.equal(phones[1].x, 0);
    assert.equal(phones[1].filter, 'none');
    input.beforeScroll(1000, 1);
    assert.equal(timelines.length, 1, 'second phone has its own longer reading distance');
    input.beforeScroll(1400, 1);
    timelines[1].progress(1).pause();
    assert.equal(phones[2].autoAlpha, 1);
    input.beforeScroll(1352, -1);
    timelines[2].progress(.5).pause();
    assert.ok(phones[1].x < 0 && phones[2].x > 0, 'reverse returns prior phone from left');
    timelines[2].progress(1);
    input.beforeScroll(672, -1);
    timelines[3].progress(1).pause();
    assert.equal(phones[0].autoAlpha, 1);
    assert.equal(phones[0].filter, 'none');
    assert.equal(phones[1].autoAlpha, 0);
    assert.equal(scene.end(), '+=1800');
  } finally {
    timelines.forEach((t) => t.kill());
    gsap.ticker.sleep();
  }
});

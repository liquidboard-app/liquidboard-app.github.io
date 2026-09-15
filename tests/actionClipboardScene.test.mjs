import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import vm from 'node:vm';
import ts from 'typescript';
import { gsap } from 'gsap';

test('Action holds centered copy with hidden wrapper, reveals on further scroll and reverses coherently', () => {
  const source = readFileSync(new URL('../src/views/Home/components/ActionClipboard/index.tsx', import.meta.url), 'utf8');
  const start = source.indexOf("      const heading = section.querySelector('.action-clipboard-heading');");
  const end = source.indexOf('    }, section);', start);
  assert.ok(start > 0 && end > start);
  // Real GSAP timelines on plain objects: test timing without a DOM/browser.
  const target = () => ({ autoAlpha: 0, filter: 'blur(14px)', y: 0, clearProps: '' });
  const heading = { ...target(), getBoundingClientRect: () => ({ height: 120 }) };
  const grid = target();
  const panels = Array.from({ length: 6 }, target);
  const timelines = [];
  let scene;
  let gate;
  const code = ts.transpileModule(`function install() { ${source.slice(start, end)} }; install();`, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.None },
  }).outputText;
  const cleanup = vm.runInNewContext(code, {
    section: {
      querySelector: (selector) => selector.endsWith('heading') ? heading : grid,
      querySelectorAll: () => panels,
    },
    window: { innerHeight: 800 }, getComputedStyle: () => ({ paddingTop: '160px' }),
    gsap: {
      set: gsap.set,
      timeline(options) { const timeline = gsap.timeline(options); timelines.push(timeline); return timeline; },
    },
    ScrollTrigger: { create(options) { scene = { start: 1000, end: 2840, options }; return scene; } },
    bindPhaseScrollInput(options) { gate = options; return () => {}; },
  });
  try {
    const [reveal, content] = timelines;
    assert.equal(grid.autoAlpha, 0);
    assert.ok(panels.every((panel) => panel.autoAlpha === 0));
    assert.equal(scene.options.start(), 'top 180px', 'heading center must account for height and section padding');
    scene.options.onEnter();
    assert.equal(gate.busy(), true);
    reveal.progress(1).pause();
    assert.equal(gate.busy(), false);
    assert.equal(heading.autoAlpha, 1);
    content.progress(.74);
    assert.equal(heading.y, 0);
    assert.equal(grid.autoAlpha, 0);
    assert.ok(panels.every((panel) => panel.autoAlpha === 0));
    content.progress(.85);
    assert.ok(heading.y < 0 && heading.y > -96);
    assert.equal(heading.y, grid.y);
    assert.ok(grid.autoAlpha > 0 && grid.autoAlpha < 1);
    content.progress(1);
    assert.equal(heading.y, -96);
    assert.equal(grid.autoAlpha, 1);
    assert.ok(panels.every((panel) => panel.autoAlpha === 1));
    content.progress(.74);
    assert.equal(heading.y, 0);
    assert.equal(heading.autoAlpha, 1);
    assert.equal(grid.autoAlpha, 0);
    scene.options.onLeaveBack();
    assert.equal(heading.autoAlpha, 0);
    assert.equal(gate.busy(), false);
    scene.options.onEnter();
    reveal.progress(1).pause();
    assert.equal(heading.autoAlpha, 1);
    assert.equal(grid.autoAlpha, 0);
  } finally {
    cleanup();
    timelines.forEach((timeline) => timeline.kill());
    gsap.ticker.sleep();
  }
});

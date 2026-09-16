import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import vm from 'node:vm';
import ts from 'typescript';
import { gsap } from 'gsap';

function install(width, height) {
  const source = readFileSync(new URL('../src/views/Home/components/CoreClipboard/index.tsx', import.meta.url), 'utf8');
  const start = source.indexOf('      const stageShift =');
  const end = source.indexOf('      revertScene =', start);
  const phones = Array.from({ length: 3 }, () => ({ x: 0, xPercent: 0, yPercent: 0, autoAlpha: 0, scale: 1, filter: '', force3D: false, willChange: '', zIndex: 0 }));
  const timelines = [];
  let scene;
  let options;
  const code = ts.transpileModule(source.slice(start, end), { compilerOptions: { target: ts.ScriptTarget.ES2022 } }).outputText;
  vm.runInNewContext(code, {
    stage: { clientWidth: width, clientHeight: height }, phoneItems: phones,
    firstPhone: phones[0], secondPhone: phones[1], thirdPhone: phones[2], headerOffset: () => 75,
    gsap: { set: gsap.set, context: (fn) => fn(), timeline(config) { const timeline = gsap.timeline(config); timelines.push(timeline); return timeline; } },
    ScrollTrigger: { create(config) {
      options = config;
      scene = { start: 1000, end: 1000 + Number(config.end().slice(2)), scroll: () => scene.position };
      return scene;
    } },
  });
  const scrollTo = (distance) => {
    scene.position = scene.start + distance;
    options.onUpdate(scene);
  };
  return { phones, timelines, scene, scrollTo, cleanup() { timelines.forEach((timeline) => timeline.kill()); gsap.ticker.sleep(); } };
}

for (const [width, height] of [[390, 700], [820, 1000]]) {
  test(`${width}px: Core is a discrete blur slider with longer holds`, () => {
    const slider = install(width, height);
    const firstHold = Math.max(height * 1.6, 1100);
    const secondHold = Math.max(height * 1.5, 1000);
    try {
      slider.scrollTo(firstHold - 1);
      assert.equal(slider.timelines.length, 0, 'the first phone remains centered through its hold');

      slider.scrollTo(firstHold + 1);
      const firstTransition = slider.timelines[0];
      firstTransition.progress(.5).pause();
      assert.ok(slider.phones[0].x < 0 && slider.phones[1].x > 0, 'outgoing and incoming phones move together');
      firstTransition.progress(1).pause();
      assert.equal(slider.phones[0].autoAlpha, 0);
      assert.equal(slider.phones[1].x, 0);
      assert.equal(slider.phones[1].filter, 'none');

      slider.scrollTo(firstHold + secondHold - 1);
      assert.equal(slider.timelines.length, 1, 'the second phone receives its own hold');
      slider.scrollTo(firstHold + secondHold + 1);
      slider.timelines[1].progress(1).pause();
      assert.equal(slider.phones[2].autoAlpha, 1);

      slider.scrollTo(firstHold + secondHold - 1);
      slider.timelines[2].progress(1).pause();
      assert.equal(slider.phones[1].autoAlpha, 1, 'scrolling up returns to the prior phone');
      slider.scrollTo(firstHold - 1);
      slider.timelines[3].progress(1).pause();
      assert.equal(slider.phones[0].autoAlpha, 1);
      assert.equal(slider.scene.end - slider.scene.start, firstHold + secondHold + Math.max(height * .5, 320));
    } finally { slider.cleanup(); }
  });

  test(`${width}px: a transition never locks later scroll updates`, () => {
    const slider = install(width, height);
    const firstHold = Math.max(height * 1.6, 1100);
    try {
      slider.scrollTo(firstHold + 1);
      slider.timelines[0].progress(1).pause();
      slider.scrollTo(firstHold - 1);
      assert.equal(slider.timelines.length, 2, 'the first reverse scroll starts immediately');
      slider.timelines[1].progress(1).pause();
      slider.scrollTo(firstHold + 1);
      assert.equal(slider.timelines.length, 3, 'the next forward scroll remains available');
    } finally { slider.cleanup(); }
  });
}

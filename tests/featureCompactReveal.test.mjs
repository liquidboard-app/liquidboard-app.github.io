import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import vm from 'node:vm';
import ts from 'typescript';

// Run the actual compact effect with a deterministic rAF clock and DOM writes.
// This measures work ownership and motion, not device GPU frame rate.
function harness(width = 390) {
  const source = readFileSync(new URL('../src/views/Home/components/FeatureClipboard/index.tsx', import.meta.url), 'utf8');
  const start = source.indexOf('    const section = sectionRef.current;\n    if (!compactLayout');
  const end = source.indexOf('\n  }, [compactLayout]);', start);
  assert.ok(start > 0 && end > start);
  const window = new EventTarget();
  const frames = new Map();
  let id = 0;
  let time = 0;
  Object.assign(window, {
    innerWidth: width, innerHeight: 844, scrollX: 0, scrollY: 0,
    matchMedia: query => ({ matches: query.includes('max-width: 767px') && width <= 767 }),
    requestAnimationFrame(fn) { frames.set(++id, fn); return id; },
    cancelAnimationFrame(key) { frames.delete(key); },
  });
  const cards = [];
  const tracks = ['text', 'image', 'sticker'].map((kind, index) => {
    const track = {
      children: [], top: 1000 + index * 6000,
      getBoundingClientRect: () => ({ top: track.top - window.scrollY, left: 20 }),
    };
    for (let i = 0; i < 20; i++) {
      const writes = [];
      const properties = {};
      const style = new Proxy(properties, {
        get(target, key) {
          if (key === 'setProperty') return (name, value) => { target[name] = value; };
          if (key === 'removeProperty') return (name) => { delete target[name === 'will-change' ? 'willChange' : name]; };
          return target[key] ?? '';
        },
        set(target, key, value) { writes.push([key, value]); target[key] = value; return true; },
      });
      const card = { parentElement: track, offsetTop: Math.floor(i / 2) * 180,
        offsetLeft: (i % 2) * 175, offsetWidth: 160, offsetHeight: 160,
        classList: { contains: name => name === `feature-${kind}-list-item` }, style, writes };
      track.children.push(card);
      cards.push(card);
    }
    return track;
  });
  const code = ts.transpileModule(`(function () { ${source.slice(start, end)} })()`, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.None },
  }).outputText;
  const cleanup = vm.runInNewContext(code, {
    window, compactLayout: true, sectionRef: { current: { querySelectorAll: () => cards } },
  });
  function frame() {
    time += 1000 / 60;
    const callbacks = [...frames.values()];
    frames.clear();
    callbacks.forEach(fn => fn(time));
  }
  function scroll(y) { window.scrollY = y; window.dispatchEvent(new Event('scroll')); frame(); }
  function settle() { for (let i = 0; frames.size && i < 100; i++) frame(); assert.equal(frames.size, 0); }
  return { cards, tracks, scroll, frame, settle, cleanup };
}

for (const width of [390, 820]) {
test(`${width}px: distant image/sticker cards stay parked while scrolling text`, () => {
  const h = harness(width);
  h.cards.forEach(card => { card.writes.length = 0; });
  for (let y = 400; y <= 800; y += 4) { h.scroll(y); h.settle(); }
  for (const card of h.cards.slice(20)) {
    assert.deepEqual(card.writes, [], 'distant cards must stay parked across slow scroll frames');
    assert.equal(card.style.willChange, 'auto');
    assert.equal(card.style.visibility, 'hidden');
  }
  h.cleanup();
  h.cards.forEach(card => assert.equal(card.style.visibility, ''));
});

test(`${width}px: all rails have identical forward/reverse motion`, () => {
  const paths = [0, 1, 2].map(index => {
    const h = harness(width);
    const anchor = h.tracks[index].top;
    h.scroll(anchor - 1100);
    h.settle();
    const path = [];
    for (const offset of [-850, -800, -760, -700, -600, -500, -600, -700, -800]) {
      h.scroll(anchor + offset);
      path.push(h.cards[index * 20].style.transform);
      h.frame();
      path.push(h.cards[index * 20].style.transform);
      h.settle();
    }
    h.cleanup();
    return path;
  });
  assert.deepEqual(paths[0], paths[2]);
  assert.deepEqual(paths[1], paths[2]);
});

}

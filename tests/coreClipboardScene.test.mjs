import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const componentSource = readFileSync(new URL('../src/views/Home/components/CoreClipboard/index.tsx', import.meta.url), 'utf8');
const styleSource = readFileSync(new URL('../src/views/Home/components/CoreClipboard/styled.ts', import.meta.url), 'utf8');

test('CoreClipboard renders multiple vertical items with two previews per item', () => {
  const itemDefinitions = componentSource.match(/\n  \{\n    label:/g) ?? [];
  const imagePairs = componentSource.match(/images: \[publicAsset\([^\n]+\), publicAsset\([^\n]+\)\]/g) ?? [];

  assert.equal(itemDefinitions.length, 3, 'CoreClipboard should contain exactly three content items');
  assert.equal(imagePairs.length, itemDefinitions.length, 'each content item should define two preview images');
  assert.match(componentSource, /className="core-clipboard-list"/);
  assert.match(componentSource, /core-clipboard-item-\$\{index \+ 1\}/);
  assert.match(componentSource, /lucide-smartphone preview-icon core-preview-icon/);
  assert.match(componentSource, /lucide-keyboard preview-icon core-preview-icon/);
  assert.match(componentSource, />App<\/span>/);
  assert.match(componentSource, />Keyboard<\/span>/);
  assert.match(styleSource, /width: min\(calc\(100% - \(var\(--page-gutter\) \* 2\)\), 991px\)/);
  assert.match(styleSource, /grid-template-columns: repeat\(2, minmax\(0, 1fr\)\)/);
  assert.match(styleSource, /background: linear-gradient\(90deg, #f2f2f2 0 50%, #000 50% 100%\)/);
  assert.match(styleSource, /\.core-clipboard-item-2[\s\S]*background: linear-gradient\(90deg, #000 0 50%, #f2f2f2 50% 100%\)/);
  assert.match(styleSource, /\.core-clipboard-item-3[\s\S]*background: linear-gradient\(90deg, #f2f2f2 0 50%, #000 50% 100%\)/);
  assert.match(styleSource, /\.core-clipboard-media:hover img[\s\S]*transform: scale\(1\.02\)/);
  assert.match(styleSource, /\.core-clipboard-media \{[\s\S]*overflow: visible/);
  assert.match(styleSource, /\.core-preview-icons \.core-preview-icon/);
  assert.match(styleSource, /\.core-preview-icons[\s\S]*padding-top: clamp/);
  assert.match(styleSource, /\.core-preview-badge[\s\S]*border-radius: 999px/);
  assert.match(styleSource, /\.core-clipboard-item-images[\s\S]*margin: clamp\(24px/);
  assert.match(styleSource, /border-radius: 0/);
});

test('CoreClipboard keeps native scrolling and reveals items with blur', () => {
  assert.doesNotMatch(componentSource, /ScrollTrigger/);
  assert.doesNotMatch(componentSource, /pin:\s*true/);
  assert.doesNotMatch(componentSource, /phoneStageRef|phoneRowRef/);
  assert.match(componentSource, /new IntersectionObserver/);
  assert.match(componentSource, /item\.classList\.add\('is-item-revealed'\)/);
  assert.match(styleSource, /\.core-clipboard-media[\s\S]*filter: blur\(18px\)/);
  assert.match(styleSource, /\.core-clipboard-item\.is-item-revealed \.core-clipboard-media/);
  assert.match(styleSource, /filter: blur\(0\)/);
  assert.match(styleSource, /transition-delay: 130ms/);
});

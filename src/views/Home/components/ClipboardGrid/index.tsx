import React, { useEffect, useMemo, useRef, useState } from 'react';
import GridBackground from '@/components/GridBackground';
import { useTranslation } from '@/contexts/LanguageContext';
import { getHeroImageSrcSet, heroImageSizes } from '@/utils/responsiveImages';
import { publicAsset } from '@/utils/publicAssets';
import { getHeroClipboardItemCopy, type HeroClipboardItemKey } from '../../heroClipboardCopy';
import { ClipboardGridSection } from './styled';

type ClipboardItem = {
  type: 'text' | 'link' | 'color' | 'image' | 'sticker';
  x: string;
  y: string;
  width: string;
  height: string;
  rotate: string;
  title?: string;
  body?: string;
  href?: string;
  color?: string;
  lightText?: boolean;
  contentKey?: HeroClipboardItemKey;
  image?: { src: string; alt: string };
};

type ClipboardScene = ClipboardItem[];
type ItemStyle = React.CSSProperties & Record<`--${string}`, string>;
type LayoutPlacement = { x: number; y: number; scale: number };

const galleryImages = [
  { src: publicAsset('/assets/hero-image/HERO_IMG_1.JPG'), alt: 'Sculptural green landscape' },
  { src: publicAsset('/assets/hero-image/HERO_IMG_2.JPG'), alt: 'Blue botanical composition' },
  { src: publicAsset('/assets/hero-image/HERO_IMG_3.JPG'), alt: 'Architectural curve at dusk' },
  { src: publicAsset('/assets/hero-image/HERO_IMG_4.JPG'), alt: 'Circular wheat field beneath a blue sky' },
  { src: publicAsset('/assets/hero-image/HERO_IMG_5.JPG'), alt: 'Layered garden waterfalls' },
  { src: publicAsset('/assets/hero-image/HERO_IMG_6.JPG'), alt: 'Fashion portrait framed by foliage' },
  { src: publicAsset('/assets/hero-image/HERO_IMG_7.JPG'), alt: 'Concrete bridge between buildings' },
  { src: publicAsset('/assets/hero-image/HERO_IMG_8.JPG'), alt: 'Monumental circular sculpture' },
  { src: publicAsset('/assets/hero-image/HERO_IMG_9.JPG'), alt: 'Red architectural landscape' },
  { src: publicAsset('/assets/hero-image/HERO_IMG_10.JPG'), alt: 'Figure crossing a concrete bridge' },
  { src: publicAsset('/assets/hero-image/HERO_IMG_11.JPG'), alt: 'Figure standing among dark basalt columns' },
];

const linkPreviewImages = {
  apple: { src: 'https://image.thum.io/get/width/1200/crop/720/noanimate/https://www.apple.com/', alt: 'Apple website preview' },
  iCloud: { src: 'https://image.thum.io/get/width/1200/crop/720/noanimate/https://www.icloud.com/', alt: 'iCloud website preview' },
  airbnb: { src: 'https://image.thum.io/get/width/1200/crop/720/noanimate/https://www.airbnb.com/', alt: 'Airbnb website preview' },
  behance: { src: 'https://image.thum.io/get/width/1200/crop/720/noanimate/https://www.behance.net/', alt: 'Behance website preview' },
  spotify: { src: 'https://image.thum.io/get/width/1200/crop/720/noanimate/https://www.spotify.com/', alt: 'Spotify website preview' },
  disney: { src: 'https://image.thum.io/get/width/1200/crop/720/noanimate/https://www.disney.com/', alt: 'Disney website preview' },
  samsung: { src: 'https://image.thum.io/get/width/1200/crop/720/noanimate/https://www.samsung.com/', alt: 'Samsung website preview' },
  porsche: { src: 'https://image.thum.io/get/width/1200/crop/720/noanimate/https://www.porsche.com/', alt: 'Porsche website preview' },
};

const desktopItemDimensions: Record<ClipboardItem['type'], { width: number; height: number }> = {
  text: { width: 7.3, height: 6.3 },
  link: { width: 6.4, height: 5.5 },
  color: { width: 6, height: 5.3 },
  image: { width: 7.2, height: 7 },
  sticker: { width: 6.2, height: 6.4 },
};
const tabletItemDimensions: Record<ClipboardItem['type'], { width: number; height: number }> = {
  text: { width: 9.2, height: 9.1 },
  link: { width: 9, height: 7 },
  color: { width: 8.7, height: 6.6 },
  image: { width: 10.2, height: 10.2 },
  sticker: { width: 9.8, height: 6.8 },
};
const mobileItemDimensions: Record<ClipboardItem['type'], { width: number; height: number }> = {
  text: { width: 16.4, height: 13.6 },
  link: { width: 16.2, height: 12.6 },
  color: { width: 15.8, height: 11.8 },
  image: { width: 16.4, height: 14.4 },
  sticker: { width: 16, height: 13 },
};

const getItemDimensions = (type: ClipboardItem['type'], viewportWidth: number) => (
  viewportWidth < 768
    ? mobileItemDimensions[type]
    : viewportWidth < 1200
      ? tabletItemDimensions[type]
      : desktopItemDimensions[type]
);
const itemCursorLabels: Record<ClipboardItem['type'], string> = {
  text: 'Text', link: 'Link', color: 'Color', image: 'Image', sticker: 'Sticker',
};
const itemsPerScene = 8;
const sceneCycleDuration = 7000;
const minimumPostCopyCycleDelay = 3500;
const getVisibleItemCount = (viewportWidth: number) => (
  viewportWidth < 768 ? 4 : viewportWidth < 1200 ? 6 : itemsPerScene
);
const getResponsiveCanvasHeight = (viewportWidth: number) => (
  viewportWidth < 768
    ? Math.min(540, Math.max(400, viewportWidth * 1.12))
    : viewportWidth < 1200
      ? Math.min(680, Math.max(540, viewportWidth * .58))
    : Math.min(800, Math.max(620, viewportWidth * .67))
);

const gridSizeValue = (units: number, scale = 1) => (
  `calc(var(--grid-size) * ${(units * scale).toFixed(2)})`
);

const copiedImageCache = new Map<string, Blob>();
const copiedImageTasks = new Map<string, Promise<Blob>>();

const copyTextLegacy = (value: string) => {
  const field = document.createElement('textarea');
  field.value = value;
  field.setAttribute('readonly', '');
  field.setAttribute('aria-hidden', 'true');
  field.style.cssText = 'position:fixed;top:0;left:-9999px;width:1px;height:1px;padding:0;border:0;opacity:0;font-size:16px;pointer-events:none;';
  document.body.appendChild(field);
  field.focus({ preventScroll: true });
  field.select();
  field.setSelectionRange(0, value.length);
  const copied = document.execCommand('copy');
  field.remove();
  if (!copied) throw new Error('Unable to copy clipboard item');
};

const copyText = async (value: string) => {
  // Safari exposes navigator.clipboard on some HTTP/LAN pages but rejects
  // writes because the page is not a secure context. Skip directly to the
  // synchronous fallback there so the touch gesture is still active.
  if (window.isSecureContext && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value);
      return;
    } catch {
      // Permission policies and embedded previews can reject a supported API.
    }
  }

  copyTextLegacy(value);
};

const createPngBlob = async (src: string) => {
  const response = await fetch(src);
  if (!response.ok) throw new Error('Unable to load image for clipboard');
  const image = await response.blob();
  if (!image.type.startsWith('image/')) throw new Error('Clipboard item is not an image');
  const bitmap = await createImageBitmap(image);
  const canvas = document.createElement('canvas');
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  const context = canvas.getContext('2d');
  if (!context) {
    bitmap.close();
    throw new Error('Unable to prepare image for clipboard');
  }
  context.drawImage(bitmap, 0, 0);
  bitmap.close();
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error('Unable to encode image for clipboard')), 'image/png');
  });
};

const getPngBlob = (src: string) => {
  const cached = copiedImageCache.get(src);
  if (cached) return Promise.resolve(cached);

  const pending = copiedImageTasks.get(src);
  if (pending) return pending;

  const task = createPngBlob(src)
    .then((png) => {
      copiedImageCache.set(src, png);
      copiedImageTasks.delete(src);
      return png;
    })
    .catch((error) => {
      copiedImageTasks.delete(src);
      throw error;
    });
  copiedImageTasks.set(src, task);
  return task;
};

const copyImage = async (src: string) => {
  if (!window.isSecureContext || !navigator.clipboard?.write || typeof ClipboardItem === 'undefined') {
    await copyText(new URL(src, window.location.href).href);
    return;
  }

  try {
    const png = copiedImageCache.get(src) ?? getPngBlob(src);
    await navigator.clipboard.write([new ClipboardItem({ 'image/png': png })]);
  } catch {
    await copyText(new URL(src, window.location.href).href);
  }
};

const createResponsiveLayout = (scene: ClipboardScene, viewportWidth: number): LayoutPlacement[] => {
  const minX = .25;
  const maxX = 39.75;
  const minY = .7;
  const pageGutter = Math.min(48, Math.max(16, viewportWidth * .034));
  const contentWidth = Math.min(viewportWidth, 1440) - pageGutter * 2;
  const gridSize = Math.min(32, contentWidth / 40);
  const canvasHeight = getResponsiveCanvasHeight(viewportWidth);
  const maxY = Math.max(minY + 1, canvasHeight / gridSize - .8);
  const columnCount = viewportWidth < 768 ? 2 : 3;
  const horizontalInset = viewportWidth < 768 ? 1.4 : 1;
  const horizontalGap = viewportWidth < 768 ? 2.1 : 1.5;
  const verticalInset = viewportWidth < 768 ? 2.2 : 2;
  const rowItemCounts = Array.from({ length: Math.ceil(scene.length / columnCount) }, (_, row) => (
    Math.min(columnCount, scene.length - row * columnCount)
  ));
  const rowCount = rowItemCounts.length;
  const dimensions = scene.map((item) => getItemDimensions(item.type, viewportWidth));
  let itemOffset = 0;
  const rowHeights = rowItemCounts.map((count) => {
    const rowHeight = Math.max(...dimensions.slice(itemOffset, itemOffset + count).map(({ height }) => height));
    itemOffset += count;
    return rowHeight;
  });
  const totalHeight = rowHeights.reduce((total, rowHeight) => total + rowHeight, 0);
  const availableHeight = maxY - minY - verticalInset * 2 - totalHeight;
  const verticalGap = rowCount > 1
    ? viewportWidth < 768
      ? Math.min(4.2, Math.max(2.6, availableHeight / (rowCount - 1)))
      : Math.max(1.3, availableHeight / (rowCount - 1))
    : 0;
  const verticalOffset = viewportWidth < 768 && rowCount > 1
    ? Math.max(0, (availableHeight - verticalGap * (rowCount - 1)) / 2)
    : 0;
  const cellWidth = (maxX - minX - horizontalInset * 2 - horizontalGap * (columnCount - 1)) / columnCount;

  return scene.map((item, index) => {
    let row = 0;
    let rowStartIndex = 0;
    while (index >= rowStartIndex + rowItemCounts[row]) {
      rowStartIndex += rowItemCounts[row];
      row += 1;
    }
    const column = index - rowStartIndex;
    const rowColumnOffset = (columnCount - rowItemCounts[row]) / 2;
    const { width, height } = getItemDimensions(item.type, viewportWidth);
    const previousRowsHeight = rowHeights.slice(0, row).reduce((total, rowHeight) => total + rowHeight, 0);
    const x = minX + horizontalInset + (column + rowColumnOffset) * (cellWidth + horizontalGap) + (cellWidth - width) / 2;
    const y = minY + verticalInset + verticalOffset + previousRowsHeight + row * verticalGap + (rowHeights[row] - height) / 2;

    return { x: Number(x.toFixed(2)), y: Number(y.toFixed(2)), scale: 1 };
  });
};

const createRandomLayout = (
  scene: ClipboardScene,
  variation = 0,
  viewportWidth = typeof window === 'undefined' ? 1280 : window.innerWidth,
): LayoutPlacement[] => {
  if (viewportWidth < 1200) return createResponsiveLayout(scene, viewportWidth);

  const random = () => (Math.random() + variation * .61803398875) % 1;
  const positions: LayoutPlacement[] = Array(scene.length);
  const shuffle = (indexes: number[]) => [...indexes].sort(() => random() - .5);
  const textItems = shuffle(scene.flatMap((item, index) => item.type === 'text' ? [index] : []));

  // Keep eight evenly spaced slots while varying which types occupy each row.
  const topSlots = [{ x: 5, y: 2 }, { x: 15, y: 2 }, { x: 25, y: 2 }, { x: 35, y: 2 }];
  const bottomSlots = [{ x: 5, y: 10.2 }, { x: 15, y: 10.2 }, { x: 25, y: 10.2 }, { x: 35, y: 10.2 }];
  const slots = [...topSlots, ...bottomSlots];
  const textSlotSets = [[0, 2], [1, 3], [0, 5], [1, 6], [2, 7], [3, 4]];
  const selectedTextSlots = textSlotSets[Math.floor(random() * textSlotSets.length)];
  const slotItems: Array<number | undefined> = Array(slots.length);
  selectedTextSlots.forEach((slotIndex, itemIndex) => { slotItems[slotIndex] = textItems[itemIndex]; });

  const fillRemainingSlots = (remaining: number[]): boolean => {
    const slotIndex = slotItems.findIndex((itemIndex) => itemIndex === undefined);
    if (slotIndex === -1) return true;

    const column = slotIndex % 4;
    const leftItemIndex = column === 0 ? undefined : slotItems[slotIndex - 1];
    const aboveItemIndex = slotIndex < 4 ? undefined : slotItems[slotIndex - 4];
    const leftType = leftItemIndex === undefined ? undefined : scene[leftItemIndex].type;
    const aboveType = aboveItemIndex === undefined ? undefined : scene[aboveItemIndex].type;

    for (const itemIndex of shuffle(remaining)) {
      const type = scene[itemIndex].type;
      if (type === leftType || type === aboveType) continue;

      slotItems[slotIndex] = itemIndex;
      if (fillRemainingSlots(remaining.filter((index) => index !== itemIndex))) return true;
      slotItems[slotIndex] = undefined;
    }

    return false;
  };

  const remainingItems = scene.map((_, index) => index).filter((index) => !textItems.includes(index));
  fillRemainingSlots(remainingItems);

  const slotScales = slotItems.map((itemIndex, slotIndex) => {
    if (itemIndex === undefined) return 1;
    const type = scene[itemIndex].type;
    if (type !== 'image' && type !== 'sticker') return 1;

    return slotIndex < 4
      ? [.94, 1, 1.06][Math.floor(random() * 3)]
      : [.7, .74, .78][Math.floor(random() * 3)];
  });
  const verticalItemGap = 1.9;
  const desktopPageGutter = Math.min(48, Math.max(16, viewportWidth * .034));
  const desktopContentWidth = Math.min(viewportWidth, 1440) - desktopPageGutter * 2;
  const desktopGridSize = Math.min(32, desktopContentWidth / 40);
  const desktopCanvasHeight = Math.min(640, Math.max(420, viewportWidth * .5));
  const canvasUnits = desktopCanvasHeight / desktopGridSize;
  const tallestColumn = Math.max(...topSlots.map((_, column) => {
    const topItemIndex = slotItems[column];
    const bottomItemIndex = slotItems[column + topSlots.length];
    if (topItemIndex === undefined || bottomItemIndex === undefined) return 0;

    return getItemDimensions(scene[topItemIndex].type, viewportWidth).height * slotScales[column]
      + verticalItemGap
      + getItemDimensions(scene[bottomItemIndex].type, viewportWidth).height * slotScales[column + topSlots.length];
  }));
  // Center the two-row composition in the actual canvas, so its top and bottom
  // breathing room stay balanced even when the selected card types vary.
  const topRowY = Math.max(.7, (canvasUnits - tallestColumn) / 2);

  slotItems.forEach((itemIndex, slotIndex) => {
    if (itemIndex === undefined) return;
    const item = scene[itemIndex];
    const scale = slotScales[slotIndex];
    const { width } = getItemDimensions(item.type, viewportWidth);
    const aboveItemIndex = slotIndex < 4 ? undefined : slotItems[slotIndex - 4];
    const y = aboveItemIndex === undefined
      ? topRowY
      : topRowY
        + getItemDimensions(scene[aboveItemIndex].type, viewportWidth).height * slotScales[slotIndex - 4]
        + verticalItemGap;
    positions[itemIndex] = {
      x: Number((slots[slotIndex].x - width * scale / 2).toFixed(2)),
      y: Number(y.toFixed(2)),
      scale,
    };
  });

  return positions;
};

const ClipboardGrid: React.FC = () => {
  const { lang } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const scenes = useMemo<ClipboardScene[]>(() => {
    const [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth] = galleryImages;

    const sceneItems = ([
      [
        { type: 'text', x: 'calc(var(--grid-size) * 2)', y: 'calc(var(--grid-size) * 1.3)', width: 'calc(var(--grid-size) * 5.5)', height: 'auto', rotate: '-3deg', contentKey: 'meetingFollowUp' },
        { type: 'link', x: 'calc(var(--grid-size) * 8.7)', y: 'calc(var(--grid-size) * .7)', width: 'calc(var(--grid-size) * 5.5)', height: 'calc(var(--grid-size) * 4.7)', rotate: '2deg', title: 'Apple', href: 'https://www.apple.com/', image: linkPreviewImages.apple },
        { type: 'color', x: 'calc(var(--grid-size) * 15.4)', y: 'calc(var(--grid-size) * 1.4)', width: 'calc(var(--grid-size) * 5.2)', height: 'calc(var(--grid-size) * 4.2)', rotate: '-2deg', contentKey: 'electricBlue', color: '#243CFF' },
        { type: 'image', x: 'calc(var(--grid-size) * 21.7)', y: 'calc(var(--grid-size) * .8)', width: 'calc(var(--grid-size) * 5.5)', height: 'calc(var(--grid-size) * 4.8)', rotate: '-2deg', image: second },
        { type: 'sticker', x: 'calc(var(--grid-size) * 28.1)', y: 'calc(var(--grid-size) * 1.2)', width: 'calc(var(--grid-size) * 5.2)', height: 'calc(var(--grid-size) * 4.4)', rotate: '-6deg', image: third },
        { type: 'text', x: 'calc(var(--grid-size) * 2.8)', y: 'calc(var(--grid-size) * 8.5)', width: 'calc(var(--grid-size) * 5.5)', height: 'auto', rotate: '2deg', contentKey: 'aiWritingPrompt' },
        { type: 'image', x: 'calc(var(--grid-size) * 9.5)', y: 'calc(var(--grid-size) * 8.3)', width: 'calc(var(--grid-size) * 5.5)', height: 'calc(var(--grid-size) * 4.8)', rotate: '-3deg', image: fourth },
        { type: 'link', x: 'calc(var(--grid-size) * 16.3)', y: 'calc(var(--grid-size) * 8.9)', width: 'calc(var(--grid-size) * 5.7)', height: 'calc(var(--grid-size) * 4.8)', rotate: '3deg', title: 'iCloud', href: 'https://www.icloud.com/', image: linkPreviewImages.iCloud },
        { type: 'color', x: 'calc(var(--grid-size) * 23)', y: 'calc(var(--grid-size) * 8.3)', width: 'calc(var(--grid-size) * 5.2)', height: 'calc(var(--grid-size) * 4.2)', rotate: '2deg', contentKey: 'softRose', color: '#F4A4B7' },
        { type: 'sticker', x: 'calc(var(--grid-size) * 28.8)', y: 'calc(var(--grid-size) * 8.9)', width: 'calc(var(--grid-size) * 4.7)', height: 'calc(var(--grid-size) * 4.2)', rotate: '5deg', image: sixth },
      ],
      [
        { type: 'color', x: 'calc(var(--grid-size) * 2)', y: 'calc(var(--grid-size) * 1.4)', width: 'calc(var(--grid-size) * 5.2)', height: 'calc(var(--grid-size) * 4.2)', rotate: '3deg', contentKey: 'warmLemon', color: '#F4CB3F', lightText: true },
        { type: 'image', x: 'calc(var(--grid-size) * 8.7)', y: 'calc(var(--grid-size) * .8)', width: 'calc(var(--grid-size) * 5.8)', height: 'calc(var(--grid-size) * 4.8)', rotate: '-2deg', image: fourth },
        { type: 'text', x: 'calc(var(--grid-size) * 15.5)', y: 'calc(var(--grid-size) * 1.2)', width: 'calc(var(--grid-size) * 5.5)', height: 'auto', rotate: '2deg', contentKey: 'emailReplyTemplate' },
        { type: 'sticker', x: 'calc(var(--grid-size) * 22.2)', y: 'calc(var(--grid-size) * 1.1)', width: 'calc(var(--grid-size) * 5.2)', height: 'calc(var(--grid-size) * 4.4)', rotate: '-5deg', image: fifth },
        { type: 'link', x: 'calc(var(--grid-size) * 28.3)', y: 'calc(var(--grid-size) * .8)', width: 'calc(var(--grid-size) * 5.2)', height: 'calc(var(--grid-size) * 4.8)', rotate: '3deg', title: 'Airbnb', href: 'https://www.airbnb.com/', image: linkPreviewImages.airbnb },
        { type: 'image', x: 'calc(var(--grid-size) * 2.8)', y: 'calc(var(--grid-size) * 8.5)', width: 'calc(var(--grid-size) * 5.5)', height: 'calc(var(--grid-size) * 4.8)', rotate: '2deg', image: seventh },
        { type: 'color', x: 'calc(var(--grid-size) * 9.5)', y: 'calc(var(--grid-size) * 8.3)', width: 'calc(var(--grid-size) * 5.2)', height: 'calc(var(--grid-size) * 4.2)', rotate: '-2deg', contentKey: 'deepViolet', color: '#7C4DFF' },
        { type: 'text', x: 'calc(var(--grid-size) * 16.2)', y: 'calc(var(--grid-size) * 8.7)', width: 'calc(var(--grid-size) * 5.5)', height: 'auto', rotate: '-3deg', contentKey: 'projectBrief' },
        { type: 'link', x: 'calc(var(--grid-size) * 22.8)', y: 'calc(var(--grid-size) * 8.4)', width: 'calc(var(--grid-size) * 5.7)', height: 'calc(var(--grid-size) * 4.8)', rotate: '2deg', title: 'Spotify', href: 'https://www.spotify.com/', image: linkPreviewImages.spotify },
        { type: 'sticker', x: 'calc(var(--grid-size) * 29)', y: 'calc(var(--grid-size) * 8.8)', width: 'calc(var(--grid-size) * 4.5)', height: 'calc(var(--grid-size) * 4.1)', rotate: '-4deg', image: ninth },
      ],
      [
        { type: 'sticker', x: 'calc(var(--grid-size) * 2)', y: 'calc(var(--grid-size) * .8)', width: 'calc(var(--grid-size) * 5.2)', height: 'calc(var(--grid-size) * 4.8)', rotate: '-5deg', image: seventh },
        { type: 'text', x: 'calc(var(--grid-size) * 8.7)', y: 'calc(var(--grid-size) * 1.1)', width: 'calc(var(--grid-size) * 5.8)', height: 'auto', rotate: '2deg', contentKey: 'weeklyStatusUpdate' },
        { type: 'image', x: 'calc(var(--grid-size) * 15.7)', y: 'calc(var(--grid-size) * .7)', width: 'calc(var(--grid-size) * 5.5)', height: 'calc(var(--grid-size) * 4.8)', rotate: '-2deg', image: eighth },
        { type: 'color', x: 'calc(var(--grid-size) * 22.2)', y: 'calc(var(--grid-size) * 1.4)', width: 'calc(var(--grid-size) * 5.2)', height: 'calc(var(--grid-size) * 4.2)', rotate: '3deg', contentKey: 'softRose', color: '#F4A4B7' },
        { type: 'link', x: 'calc(var(--grid-size) * 28.3)', y: 'calc(var(--grid-size) * .8)', width: 'calc(var(--grid-size) * 5.2)', height: 'calc(var(--grid-size) * 4.8)', rotate: '-3deg', title: 'Disney', href: 'https://www.disney.com/', image: linkPreviewImages.disney },
        { type: 'text', x: 'calc(var(--grid-size) * 2.8)', y: 'calc(var(--grid-size) * 8.5)', width: 'calc(var(--grid-size) * 5.5)', height: 'auto', rotate: '-2deg', contentKey: 'contentStrategyAgent' },
        { type: 'image', x: 'calc(var(--grid-size) * 9.5)', y: 'calc(var(--grid-size) * 8.2)', width: 'calc(var(--grid-size) * 5.5)', height: 'calc(var(--grid-size) * 4.8)', rotate: '2deg', image: tenth },
        { type: 'link', x: 'calc(var(--grid-size) * 16.2)', y: 'calc(var(--grid-size) * 8.8)', width: 'calc(var(--grid-size) * 5.7)', height: 'calc(var(--grid-size) * 4.8)', rotate: '-3deg', title: 'Behance', href: 'https://www.behance.net/', image: linkPreviewImages.behance },
        { type: 'color', x: 'calc(var(--grid-size) * 22.8)', y: 'calc(var(--grid-size) * 8.4)', width: 'calc(var(--grid-size) * 5.2)', height: 'calc(var(--grid-size) * 4.2)', rotate: '-2deg', contentKey: 'freshGreen', color: '#35C878' },
        { type: 'sticker', x: 'calc(var(--grid-size) * 29)', y: 'calc(var(--grid-size) * 8.9)', width: 'calc(var(--grid-size) * 4.5)', height: 'calc(var(--grid-size) * 4.1)', rotate: '4deg', image: first },
      ],
      [
        { type: 'image', x: 'calc(var(--grid-size) * 2)', y: 'calc(var(--grid-size) * .8)', width: 'calc(var(--grid-size) * 5.5)', height: 'calc(var(--grid-size) * 4.8)', rotate: '-2deg', image: tenth },
        { type: 'color', x: 'calc(var(--grid-size) * 8.7)', y: 'calc(var(--grid-size) * 1.4)', width: 'calc(var(--grid-size) * 5.2)', height: 'calc(var(--grid-size) * 4.2)', rotate: '2deg', contentKey: 'basaltBlack', color: '#151515' },
        { type: 'text', x: 'calc(var(--grid-size) * 15.4)', y: 'calc(var(--grid-size) * 1.1)', width: 'calc(var(--grid-size) * 5.7)', height: 'auto', rotate: '-2deg', contentKey: 'launchAnnouncement' },
        { type: 'link', x: 'calc(var(--grid-size) * 22.2)', y: 'calc(var(--grid-size) * .8)', width: 'calc(var(--grid-size) * 5.7)', height: 'calc(var(--grid-size) * 4.8)', rotate: '3deg', title: 'Samsung', href: 'https://www.samsung.com/', image: linkPreviewImages.samsung },
        { type: 'sticker', x: 'calc(var(--grid-size) * 28.8)', y: 'calc(var(--grid-size) * 1.1)', width: 'calc(var(--grid-size) * 4.7)', height: 'calc(var(--grid-size) * 4.2)', rotate: '-4deg', image: second },
        { type: 'text', x: 'calc(var(--grid-size) * 2.8)', y: 'calc(var(--grid-size) * 8.5)', width: 'calc(var(--grid-size) * 5.5)', height: 'auto', rotate: '3deg', contentKey: 'invoiceReminder' },
        { type: 'image', x: 'calc(var(--grid-size) * 9.5)', y: 'calc(var(--grid-size) * 8.2)', width: 'calc(var(--grid-size) * 5.5)', height: 'calc(var(--grid-size) * 4.8)', rotate: '-2deg', image: third },
        { type: 'color', x: 'calc(var(--grid-size) * 16.2)', y: 'calc(var(--grid-size) * 8.4)', width: 'calc(var(--grid-size) * 5.2)', height: 'calc(var(--grid-size) * 4.2)', rotate: '2deg', contentKey: 'oceanBlue', color: '#2B8CFF' },
        { type: 'link', x: 'calc(var(--grid-size) * 22.8)', y: 'calc(var(--grid-size) * 8.8)', width: 'calc(var(--grid-size) * 5.7)', height: 'calc(var(--grid-size) * 4.8)', rotate: '-3deg', title: 'Porsche', href: 'https://www.porsche.com/', image: linkPreviewImages.porsche },
        { type: 'sticker', x: 'calc(var(--grid-size) * 29)', y: 'calc(var(--grid-size) * 8.9)', width: 'calc(var(--grid-size) * 4.5)', height: 'calc(var(--grid-size) * 4.1)', rotate: '5deg', image: fifth },
      ],
    ] as ClipboardScene[]);

    return sceneItems.map((scene) => {
      let hasSticker = false;
      const displayedItems = scene.slice(0, itemsPerScene);

      return displayedItems.map((item) => {
        if (item.type === 'sticker') {
          if (!hasSticker) {
            hasSticker = true;
            return item;
          }

          return { ...item, type: 'image' };
        }

        return item;
      });
    });
  }, []);
  const [sceneIndex, setSceneIndex] = useState(0);
  const [layoutVersion, setLayoutVersion] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(() => (
    typeof window === 'undefined' ? 1280 : window.innerWidth
  ));
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [sceneResetVersion, setSceneResetVersion] = useState(0);
  const [copiedItemKey, setCopiedItemKey] = useState<string | null>(null);
  const [isCopyConfirmationLeaving, setIsCopyConfirmationLeaving] = useState(false);
  const [unavailableLinkPreviews, setUnavailableLinkPreviews] = useState<Set<string>>(() => new Set());
  const copiedItemTimeout = useRef<number>();
  const copiedItemExitTimeout = useRef<number>();
  const sceneCycleTimeout = useRef<number>();
  const sceneChangeTimeout = useRef<number>();
  const sceneCycleStartedAt = useRef(0);
  const nextSceneCycleDelay = useRef<number | null>(null);
  const visibleScenes = useMemo<ClipboardScene[]>(() => (
    scenes.map((scene) => scene.slice(0, getVisibleItemCount(viewportWidth)))
  ), [scenes, viewportWidth]);
  const randomizedScenes = useMemo<ClipboardScene[]>(() => visibleScenes.map((scene) => {
    const positions = createRandomLayout(scene, layoutVersion, viewportWidth);
    return scene.flatMap((item, itemIndex) => {
      const placement = positions[itemIndex] ?? { x: 1, y: 1, scale: 1 };
      if (!positions[itemIndex]) return [];
      const dimensions = getItemDimensions(item.type, viewportWidth);
      return [{
        ...item,
        x: `calc(var(--grid-size) * ${placement.x})`,
        y: `calc(var(--grid-size) * ${placement.y})`,
        width: gridSizeValue(dimensions.width, placement.scale),
        height: gridSizeValue(dimensions.height, placement.scale),
      }];
    });
  }), [visibleScenes, layoutVersion, viewportWidth]);

  useEffect(() => {
    const updateViewportWidth = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', updateViewportWidth);
    return () => window.removeEventListener('resize', updateViewportWidth);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const updateTextClamps = () => {
      section.querySelectorAll<HTMLElement>('.clipboard-item-text').forEach((card) => {
        const title = card.querySelector<HTMLElement>('h3');
        const body = card.querySelector<HTMLElement>('p');
        if (!title || !body) return;

        const cardStyles = window.getComputedStyle(card);
        const bodyStyles = window.getComputedStyle(body);
        const availableHeight = card.clientHeight
          - title.offsetHeight
          - Number.parseFloat(bodyStyles.marginTop)
          - Number.parseFloat(cardStyles.paddingTop)
          - Number.parseFloat(cardStyles.paddingBottom);
        const lineHeight = Number.parseFloat(bodyStyles.lineHeight);
        const lineClamp = Math.max(1, Math.floor(availableHeight / lineHeight));
        card.style.setProperty('--text-line-clamp', String(lineClamp));
      });
    };

    const frame = window.requestAnimationFrame(updateTextClamps);
    const resizeObserver = new ResizeObserver(updateTextClamps);
    resizeObserver.observe(section);
    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
    };
  }, [lang, layoutVersion, sceneIndex, viewportWidth]);

  useEffect(() => {
    const delay = nextSceneCycleDelay.current ?? sceneCycleDuration;
    nextSceneCycleDelay.current = null;
    sceneCycleStartedAt.current = window.performance.now();
    sceneCycleTimeout.current = window.setTimeout(() => {
      setIsTransitioning(true);
      sceneChangeTimeout.current = window.setTimeout(() => {
        setSceneIndex((current) => (current + 1 + Math.floor(Math.random() * (scenes.length - 1))) % scenes.length);
        setLayoutVersion((current) => current + 1);
        setIsTransitioning(false);
        setSceneResetVersion((current) => current + 1);
      }, 760);
    }, delay);

    return () => {
      if (sceneCycleTimeout.current !== undefined) window.clearTimeout(sceneCycleTimeout.current);
      if (sceneChangeTimeout.current !== undefined) window.clearTimeout(sceneChangeTimeout.current);
    };
  }, [scenes.length, sceneResetVersion]);

  useEffect(() => {
    window.dispatchEvent(new Event(isTransitioning ? 'liquidboard-cursor-hide' : 'liquidboard-cursor-refresh'));
  }, [isTransitioning, sceneIndex, layoutVersion]);

  useEffect(() => () => {
    if (copiedItemTimeout.current !== undefined) window.clearTimeout(copiedItemTimeout.current);
    if (copiedItemExitTimeout.current !== undefined) window.clearTimeout(copiedItemExitTimeout.current);
  }, []);

  const handleItemCopy = async (item: ClipboardItem, itemCopy: Pick<ClipboardItem, 'title' | 'body'>, key: string) => {
    const value = item.type === 'link'
      ? item.href
      : item.type === 'text' || item.type === 'color'
        ? itemCopy.body
        : item.image?.src ?? itemCopy.title;

    if (!value) return;

    try {
      const elapsed = window.performance.now() - sceneCycleStartedAt.current;
      const remaining = Math.max(0, sceneCycleDuration - elapsed);
      nextSceneCycleDelay.current = Math.max(minimumPostCopyCycleDelay, remaining);
      if (sceneCycleTimeout.current !== undefined) window.clearTimeout(sceneCycleTimeout.current);

      if (item.type === 'link') {
        await copyText(item.href!);
      } else if ((item.type === 'image' || item.type === 'sticker') && item.image?.src) {
        await copyImage(item.image.src);
      } else {
        await copyText(value);
      }
      setCopiedItemKey(key);
      setIsCopyConfirmationLeaving(false);
      if (copiedItemTimeout.current !== undefined) window.clearTimeout(copiedItemTimeout.current);
      if (copiedItemExitTimeout.current !== undefined) window.clearTimeout(copiedItemExitTimeout.current);
      copiedItemExitTimeout.current = window.setTimeout(() => setIsCopyConfirmationLeaving(true), 950);
      copiedItemTimeout.current = window.setTimeout(() => {
        setCopiedItemKey(null);
        setIsCopyConfirmationLeaving(false);
        window.dispatchEvent(new CustomEvent('liquidboard-cursor-change', {
          detail: { label: itemCursorLabels[item.type], color: '#4f8fe9', textColor: '#fff' },
        }));
      }, 1250);
      window.dispatchEvent(new CustomEvent('liquidboard-cursor-change', {
        detail: { label: 'Copied', color: '#147a45', textColor: '#fff' },
      }));
      setIsTransitioning(false);
      setSceneResetVersion((current) => current + 1);
    } catch {
      // Clipboard access can be unavailable in an embedded preview.
      setSceneResetVersion((current) => current + 1);
    }
  };

  return (
    <ClipboardGridSection ref={sectionRef}>
      <GridBackground className="hero-grid" aria-label="LiquidBoard feature preview">
        <div className="clipboard-container">
          <div className={`clipboard-canvas${isTransitioning ? ' is-leaving' : ''}`} key={sceneIndex}>
            {randomizedScenes[sceneIndex].map((item, index) => {
              const itemCopy = item.contentKey ? getHeroClipboardItemCopy(lang, item.contentKey) : item;
              const itemKey = `${sceneIndex}-${item.type}-${index}`;
              const hasLinkPreview = item.type === 'link' && item.image && !unavailableLinkPreviews.has(itemKey);

              return <button
                type="button"
                disabled={isTransitioning}
                className={`clipboard-item clipboard-item-${item.type}${item.type === 'text' ? ' clipboard-item-text' : ''}${item.lightText ? ' clipboard-item-light' : ''}`}
                key={itemKey}
                aria-label={`Copy ${itemCopy.title ?? item.image?.alt ?? 'item'}`}
                data-cursor-label={copiedItemKey === itemKey ? 'Copied' : itemCursorLabels[item.type]}
                data-cursor-color={copiedItemKey === itemKey ? '#147a45' : '#4f8fe9'}
                data-cursor-text-color="#fff"
                onClick={() => { void handleItemCopy(item, itemCopy, itemKey); }}
                style={{
                  '--item-x': item.x,
                  '--item-y': item.y,
                  '--item-width': item.width,
                  '--item-height': item.height,
                  '--item-rotate': item.rotate,
                  '--item-color': item.color ?? '#fff',
                } as ItemStyle}
              >
                {item.type === 'text' && <><h3>{itemCopy.title}</h3><p>{itemCopy.body}</p></>}
                {item.type === 'color' && <><span>{itemCopy.title}</span><strong>{itemCopy.body}</strong></>}
                {item.type === 'image' && item.image && <img src={item.image.src} srcSet={getHeroImageSrcSet(item.image.src)} sizes={heroImageSizes} alt={item.image.alt} loading="lazy" decoding="async" />}
                {item.type === 'sticker' && item.image && <img src={item.image.src} srcSet={getHeroImageSrcSet(item.image.src)} sizes={heroImageSizes} alt={item.image.alt} loading="lazy" decoding="async" />}
                {item.type === 'link' && <>
                  {hasLinkPreview
                    ? <img src={item.image!.src} alt={item.image!.alt} loading="lazy" decoding="async" onError={() => setUnavailableLinkPreviews((current) => new Set(current).add(itemKey))} />
                    : <span className="clipboard-link-placeholder" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg></span>}
                  <div><strong>{item.title}</strong><span>{item.href}</span></div>
                </>}
                {copiedItemKey === itemKey && <span className={`clipboard-copy-confirmation${isCopyConfirmationLeaving ? ' is-leaving' : ''}`} aria-hidden="true"><span className="clipboard-copy-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span></span>}
              </button>;
            })}
          </div>
        </div>
      </GridBackground>
    </ClipboardGridSection>
  );
};

export default ClipboardGrid;

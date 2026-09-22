import React, { useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
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
type MarqueeTween = ReturnType<typeof gsap.to>;

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
const stickerImage = { src: publicAsset('/assets/STICKER_10.png'), alt: 'Sticker illustration' };

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

const itemCursorLabels: Record<ClipboardItem['type'], string> = {
  text: 'Text', link: 'Link', color: 'Color', image: 'Image', sticker: 'Sticker',
};
const marqueeMinimumItems = 18;
const scrollIdleDelay = 180;
const marqueePixelsPerSecond = 96;
const marqueeMaxScrollTimeScale = 25;
const marqueeVelocityForMaxBoost = 2400;
const scrollVelocitySmoothing = .35;

const shuffleItems = (items: ClipboardScene) => items
  .map((item) => ({ item, sort: Math.random() }))
  .sort((left, right) => left.sort - right.sort)
  .map(({ item }) => item);

const randomizeMarqueeRow = (items: ClipboardScene) => {
  const buckets = new Map<ClipboardItem['type'], ClipboardScene>();
  items.forEach((item) => {
    const bucket = buckets.get(item.type) ?? [];
    bucket.push(item);
    buckets.set(item.type, bucket);
  });

  const typeEntries = [...buckets.entries()]
    .map(([type, bucket]) => [type, shuffleItems(bucket)] as const)
    .sort((left, right) => right[1].length - left[1].length || Math.random() - .5);
  const typeOrder: ClipboardItem['type'][] = [];
  let position = 0;

  typeEntries.forEach(([type, bucket]) => {
    for (let index = 0; index < bucket.length; index += 1) {
      typeOrder[position] = type;
      position += 2;
      if (position >= items.length) position = 1;
    }
  });

  const orderedItems = typeOrder.map((type) => {
    const bucket = buckets.get(type);
    return bucket?.pop();
  }).filter((item): item is ClipboardItem => Boolean(item));

  const hasAdjacentSameType = orderedItems.some((item, index) => (
    item.type === orderedItems[(index + 1) % orderedItems.length]?.type
  ));

  if (!hasAdjacentSameType) return orderedItems;

  for (let attempt = 0; attempt < 100; attempt += 1) {
    const candidate = shuffleItems(items);
    const candidateHasAdjacentSameType = candidate.some((item, index) => (
      item.type === candidate[(index + 1) % candidate.length]?.type
    ));
    if (!candidateHasAdjacentSameType) return candidate;
  }

  return orderedItems;
};

const fillMarqueeRow = (items: ClipboardScene) => {
  if (items.length === 0) return [];

  return Array.from({ length: Math.max(marqueeMinimumItems, items.length) }, (_, index) => (
    items[index % items.length]
  ));
};

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

type MarqueeDirection = 'forward' | 'reverse';

const ClipboardGrid: React.FC = () => {
  const { lang } = useTranslation();
  const rows = useMemo<{ top: ClipboardScene; middle: ClipboardScene; bottom: ClipboardScene }>(() => {
    const [, second, third, fourth, , , seventh, eighth, , tenth] = galleryImages;

    const sceneItems = ([
      [
        { type: 'text', x: 'calc(var(--grid-size) * 2)', y: 'calc(var(--grid-size) * 1.3)', width: 'calc(var(--grid-size) * 5.5)', height: 'auto', rotate: '-3deg', contentKey: 'meetingFollowUp' },
        { type: 'link', x: 'calc(var(--grid-size) * 8.7)', y: 'calc(var(--grid-size) * .7)', width: 'calc(var(--grid-size) * 5.5)', height: 'calc(var(--grid-size) * 4.7)', rotate: '2deg', title: 'Apple', href: 'https://www.apple.com/', image: linkPreviewImages.apple },
        { type: 'color', x: 'calc(var(--grid-size) * 15.4)', y: 'calc(var(--grid-size) * 1.4)', width: 'calc(var(--grid-size) * 5.2)', height: 'calc(var(--grid-size) * 4.2)', rotate: '-2deg', contentKey: 'electricBlue', color: '#243CFF' },
        { type: 'image', x: 'calc(var(--grid-size) * 21.7)', y: 'calc(var(--grid-size) * .8)', width: 'calc(var(--grid-size) * 5.5)', height: 'calc(var(--grid-size) * 4.8)', rotate: '-2deg', image: second },
        { type: 'sticker', x: 'calc(var(--grid-size) * 28.1)', y: 'calc(var(--grid-size) * 1.2)', width: 'calc(var(--grid-size) * 5.2)', height: 'calc(var(--grid-size) * 4.4)', rotate: '-6deg', image: stickerImage },
        { type: 'text', x: 'calc(var(--grid-size) * 2.8)', y: 'calc(var(--grid-size) * 8.5)', width: 'calc(var(--grid-size) * 5.5)', height: 'auto', rotate: '2deg', contentKey: 'aiWritingPrompt' },
        { type: 'image', x: 'calc(var(--grid-size) * 9.5)', y: 'calc(var(--grid-size) * 8.3)', width: 'calc(var(--grid-size) * 5.5)', height: 'calc(var(--grid-size) * 4.8)', rotate: '-3deg', image: fourth },
        { type: 'link', x: 'calc(var(--grid-size) * 16.3)', y: 'calc(var(--grid-size) * 8.9)', width: 'calc(var(--grid-size) * 5.7)', height: 'calc(var(--grid-size) * 4.8)', rotate: '3deg', title: 'iCloud', href: 'https://www.icloud.com/', image: linkPreviewImages.iCloud },
        { type: 'color', x: 'calc(var(--grid-size) * 23)', y: 'calc(var(--grid-size) * 8.3)', width: 'calc(var(--grid-size) * 5.2)', height: 'calc(var(--grid-size) * 4.2)', rotate: '2deg', contentKey: 'softRose', color: '#F4A4B7' },
        { type: 'sticker', x: 'calc(var(--grid-size) * 28.8)', y: 'calc(var(--grid-size) * 8.9)', width: 'calc(var(--grid-size) * 4.7)', height: 'calc(var(--grid-size) * 4.2)', rotate: '5deg', image: stickerImage },
      ],
      [
        { type: 'color', x: 'calc(var(--grid-size) * 2)', y: 'calc(var(--grid-size) * 1.4)', width: 'calc(var(--grid-size) * 5.2)', height: 'calc(var(--grid-size) * 4.2)', rotate: '3deg', contentKey: 'warmLemon', color: '#F4CB3F', lightText: true },
        { type: 'image', x: 'calc(var(--grid-size) * 8.7)', y: 'calc(var(--grid-size) * .8)', width: 'calc(var(--grid-size) * 5.8)', height: 'calc(var(--grid-size) * 4.8)', rotate: '-2deg', image: fourth },
        { type: 'text', x: 'calc(var(--grid-size) * 15.5)', y: 'calc(var(--grid-size) * 1.2)', width: 'calc(var(--grid-size) * 5.5)', height: 'auto', rotate: '2deg', contentKey: 'emailReplyTemplate' },
        { type: 'sticker', x: 'calc(var(--grid-size) * 22.2)', y: 'calc(var(--grid-size) * 1.1)', width: 'calc(var(--grid-size) * 5.2)', height: 'calc(var(--grid-size) * 4.4)', rotate: '-5deg', image: stickerImage },
        { type: 'link', x: 'calc(var(--grid-size) * 28.3)', y: 'calc(var(--grid-size) * .8)', width: 'calc(var(--grid-size) * 5.2)', height: 'calc(var(--grid-size) * 4.8)', rotate: '3deg', title: 'Airbnb', href: 'https://www.airbnb.com/', image: linkPreviewImages.airbnb },
        { type: 'image', x: 'calc(var(--grid-size) * 2.8)', y: 'calc(var(--grid-size) * 8.5)', width: 'calc(var(--grid-size) * 5.5)', height: 'calc(var(--grid-size) * 4.8)', rotate: '2deg', image: seventh },
        { type: 'color', x: 'calc(var(--grid-size) * 9.5)', y: 'calc(var(--grid-size) * 8.3)', width: 'calc(var(--grid-size) * 5.2)', height: 'calc(var(--grid-size) * 4.2)', rotate: '-2deg', contentKey: 'deepViolet', color: '#7C4DFF' },
        { type: 'text', x: 'calc(var(--grid-size) * 16.2)', y: 'calc(var(--grid-size) * 8.7)', width: 'calc(var(--grid-size) * 5.5)', height: 'auto', rotate: '-3deg', contentKey: 'projectBrief' },
        { type: 'link', x: 'calc(var(--grid-size) * 22.8)', y: 'calc(var(--grid-size) * 8.4)', width: 'calc(var(--grid-size) * 5.7)', height: 'calc(var(--grid-size) * 4.8)', rotate: '2deg', title: 'Spotify', href: 'https://www.spotify.com/', image: linkPreviewImages.spotify },
        { type: 'sticker', x: 'calc(var(--grid-size) * 29)', y: 'calc(var(--grid-size) * 8.8)', width: 'calc(var(--grid-size) * 4.5)', height: 'calc(var(--grid-size) * 4.1)', rotate: '-4deg', image: stickerImage },
      ],
      [
        { type: 'sticker', x: 'calc(var(--grid-size) * 2)', y: 'calc(var(--grid-size) * .8)', width: 'calc(var(--grid-size) * 5.2)', height: 'calc(var(--grid-size) * 4.8)', rotate: '-5deg', image: stickerImage },
        { type: 'text', x: 'calc(var(--grid-size) * 8.7)', y: 'calc(var(--grid-size) * 1.1)', width: 'calc(var(--grid-size) * 5.8)', height: 'auto', rotate: '2deg', contentKey: 'weeklyStatusUpdate' },
        { type: 'image', x: 'calc(var(--grid-size) * 15.7)', y: 'calc(var(--grid-size) * .7)', width: 'calc(var(--grid-size) * 5.5)', height: 'calc(var(--grid-size) * 4.8)', rotate: '-2deg', image: eighth },
        { type: 'link', x: 'calc(var(--grid-size) * 28.3)', y: 'calc(var(--grid-size) * .8)', width: 'calc(var(--grid-size) * 5.2)', height: 'calc(var(--grid-size) * 4.8)', rotate: '-3deg', title: 'Disney', href: 'https://www.disney.com/', image: linkPreviewImages.disney },
        { type: 'text', x: 'calc(var(--grid-size) * 2.8)', y: 'calc(var(--grid-size) * 8.5)', width: 'calc(var(--grid-size) * 5.5)', height: 'auto', rotate: '-2deg', contentKey: 'contentStrategyAgent' },
        { type: 'image', x: 'calc(var(--grid-size) * 9.5)', y: 'calc(var(--grid-size) * 8.2)', width: 'calc(var(--grid-size) * 5.5)', height: 'calc(var(--grid-size) * 4.8)', rotate: '2deg', image: tenth },
        { type: 'link', x: 'calc(var(--grid-size) * 16.2)', y: 'calc(var(--grid-size) * 8.8)', width: 'calc(var(--grid-size) * 5.7)', height: 'calc(var(--grid-size) * 4.8)', rotate: '-3deg', title: 'Behance', href: 'https://www.behance.net/', image: linkPreviewImages.behance },
        { type: 'color', x: 'calc(var(--grid-size) * 22.8)', y: 'calc(var(--grid-size) * 8.4)', width: 'calc(var(--grid-size) * 5.2)', height: 'calc(var(--grid-size) * 4.2)', rotate: '-2deg', contentKey: 'freshGreen', color: '#35C878' },
        { type: 'sticker', x: 'calc(var(--grid-size) * 29)', y: 'calc(var(--grid-size) * 8.9)', width: 'calc(var(--grid-size) * 4.5)', height: 'calc(var(--grid-size) * 4.1)', rotate: '4deg', image: stickerImage },
      ],
      [
        { type: 'image', x: 'calc(var(--grid-size) * 2)', y: 'calc(var(--grid-size) * .8)', width: 'calc(var(--grid-size) * 5.5)', height: 'calc(var(--grid-size) * 4.8)', rotate: '-2deg', image: tenth },
        { type: 'color', x: 'calc(var(--grid-size) * 8.7)', y: 'calc(var(--grid-size) * 1.4)', width: 'calc(var(--grid-size) * 5.2)', height: 'calc(var(--grid-size) * 4.2)', rotate: '2deg', contentKey: 'basaltBlack', color: '#151515' },
        { type: 'text', x: 'calc(var(--grid-size) * 15.4)', y: 'calc(var(--grid-size) * 1.1)', width: 'calc(var(--grid-size) * 5.7)', height: 'auto', rotate: '-2deg', contentKey: 'launchAnnouncement' },
        { type: 'link', x: 'calc(var(--grid-size) * 22.2)', y: 'calc(var(--grid-size) * .8)', width: 'calc(var(--grid-size) * 5.7)', height: 'calc(var(--grid-size) * 4.8)', rotate: '3deg', title: 'Samsung', href: 'https://www.samsung.com/', image: linkPreviewImages.samsung },
        { type: 'sticker', x: 'calc(var(--grid-size) * 28.8)', y: 'calc(var(--grid-size) * 1.1)', width: 'calc(var(--grid-size) * 4.7)', height: 'calc(var(--grid-size) * 4.2)', rotate: '-4deg', image: stickerImage },
        { type: 'text', x: 'calc(var(--grid-size) * 2.8)', y: 'calc(var(--grid-size) * 8.5)', width: 'calc(var(--grid-size) * 5.5)', height: 'auto', rotate: '3deg', contentKey: 'invoiceReminder' },
        { type: 'image', x: 'calc(var(--grid-size) * 9.5)', y: 'calc(var(--grid-size) * 8.2)', width: 'calc(var(--grid-size) * 5.5)', height: 'calc(var(--grid-size) * 4.8)', rotate: '-2deg', image: third },
        { type: 'color', x: 'calc(var(--grid-size) * 16.2)', y: 'calc(var(--grid-size) * 8.4)', width: 'calc(var(--grid-size) * 5.2)', height: 'calc(var(--grid-size) * 4.2)', rotate: '2deg', contentKey: 'oceanBlue', color: '#2B8CFF' },
        { type: 'link', x: 'calc(var(--grid-size) * 22.8)', y: 'calc(var(--grid-size) * 8.8)', width: 'calc(var(--grid-size) * 5.7)', height: 'calc(var(--grid-size) * 4.8)', rotate: '-3deg', title: 'Porsche', href: 'https://www.porsche.com/', image: linkPreviewImages.porsche },
        { type: 'sticker', x: 'calc(var(--grid-size) * 29)', y: 'calc(var(--grid-size) * 8.9)', width: 'calc(var(--grid-size) * 4.5)', height: 'calc(var(--grid-size) * 4.1)', rotate: '5deg', image: stickerImage },
      ],
    ] as ClipboardScene[]);

    const items = sceneItems.flatMap((scene) => scene);

    const rowItems: ClipboardScene[] = [[], [], []];
    items.forEach((item, index) => rowItems[index % rowItems.length].push(item));

    return {
      top: fillMarqueeRow(randomizeMarqueeRow(rowItems[0])),
      middle: fillMarqueeRow(randomizeMarqueeRow(rowItems[1])),
      bottom: fillMarqueeRow(randomizeMarqueeRow(rowItems[2])),
    };
  }, []);
  const [copiedItemKey, setCopiedItemKey] = useState<string | null>(null);
  const [isCopyConfirmationLeaving, setIsCopyConfirmationLeaving] = useState(false);
  const [unavailableLinkPreviews, setUnavailableLinkPreviews] = useState<Set<string>>(() => new Set());
  const [loadedLinkPreviews, setLoadedLinkPreviews] = useState<Set<string>>(() => new Set());
  const marqueeCanvasRef = useRef<HTMLDivElement>(null);
  const copiedItemTimeout = useRef<number>();
  const copiedItemExitTimeout = useRef<number>();

  const { top: topRowItems, middle: middleRowItems, bottom: bottomRowItems } = rows;

  useEffect(() => {
    const canvas = marqueeCanvasRef.current;
    if (!canvas) return undefined;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let marqueeTweens: MarqueeTween[] = [];
    let speedTweens: MarqueeTween[] = [];
    let resizeFrame: number | undefined;
    let scrollIdleTimeout: number | undefined;
    let currentTimeScale = 1;
    let lastScrollY = window.scrollY;
    let lastScrollTime = performance.now();
    let smoothedScrollVelocity = 0;
    let lastScrollDirection = 1;

    const killSpeedTweens = () => {
      speedTweens.forEach((tween) => tween.kill());
      speedTweens = [];
    };

    const applyTimeScale = (timeScale: number) => {
      currentTimeScale = timeScale;
      if (motionQuery.matches || marqueeTweens.length === 0) return;
      killSpeedTweens();
      speedTweens = marqueeTweens.map((tween) => gsap.to(tween, {
        timeScale,
        duration: .45,
        ease: 'power2.out',
        overwrite: true,
      }));
    };

    const rebuildMarquee = (preservePosition: boolean) => {
      const tracks = Array.from(canvas.querySelectorAll<HTMLElement>('.clipboard-marquee-track'));
      const progress = preservePosition ? marqueeTweens.map((tween) => tween.progress()) : [];

      killSpeedTweens();
      marqueeTweens.forEach((tween) => tween.kill());
      marqueeTweens = [];

      marqueeTweens = tracks.map((track, trackIndex) => {
        const group = track.querySelector<HTMLElement>('.clipboard-marquee-group');
        const distance = group?.getBoundingClientRect().width ?? 0;
        if (distance <= 0) return undefined;

        const isForward = trackIndex % 2 === 0;
        const currentProgress = progress[trackIndex] ?? 0;
        const initialX = motionQuery.matches
          ? 0
          : isForward
            ? -distance + (distance * currentProgress)
            : -(distance * currentProgress);
        const finalX = isForward ? 0 : -distance;

        gsap.set(track, { x: initialX, willChange: 'transform' });
        return gsap.to(track, {
          x: finalX,
          duration: distance / marqueePixelsPerSecond,
          ease: 'none',
          repeat: -1,
          paused: motionQuery.matches,
          timeScale: currentTimeScale,
        });
      }).filter((tween): tween is MarqueeTween => Boolean(tween));
    };

    const handleScroll = () => {
      if (motionQuery.matches) return;

      const now = performance.now();
      const elapsed = Math.max(now - lastScrollTime, 16);
      const scrollDelta = window.scrollY - lastScrollY;
      if (scrollDelta !== 0) lastScrollDirection = scrollDelta > 0 ? 1 : -1;
      const distance = Math.abs(scrollDelta);
      const instantVelocity = (distance / elapsed) * 1000;
      smoothedScrollVelocity += (instantVelocity - smoothedScrollVelocity) * scrollVelocitySmoothing;
      const velocityProgress = Math.min(smoothedScrollVelocity / marqueeVelocityForMaxBoost, 1);
      const targetTimeScale = lastScrollDirection * (1 + ((marqueeMaxScrollTimeScale - 1) * velocityProgress));

      lastScrollY = window.scrollY;
      lastScrollTime = now;
      applyTimeScale(targetTimeScale);

      if (scrollIdleTimeout !== undefined) window.clearTimeout(scrollIdleTimeout);
      scrollIdleTimeout = window.setTimeout(() => {
        smoothedScrollVelocity = 0;
        lastScrollDirection = 1;
        applyTimeScale(1);
      }, scrollIdleDelay);
    };

    const handleResize = () => {
      if (resizeFrame !== undefined) window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(() => rebuildMarquee(true));
    };

    const setupFrame = window.requestAnimationFrame(() => rebuildMarquee(false));
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.cancelAnimationFrame(setupFrame);
      if (resizeFrame !== undefined) window.cancelAnimationFrame(resizeFrame);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (scrollIdleTimeout !== undefined) window.clearTimeout(scrollIdleTimeout);
      killSpeedTweens();
      marqueeTweens.forEach((tween) => tween.kill());
    };
  }, []);

  useEffect(() => () => {
    if (copiedItemTimeout.current !== undefined) window.clearTimeout(copiedItemTimeout.current);
    if (copiedItemExitTimeout.current !== undefined) window.clearTimeout(copiedItemExitTimeout.current);
  }, []);

  const renderMarqueeItem = (item: ClipboardItem, row: MarqueeDirection, groupIndex: number, itemIndex: number) => {
    const itemCopy = item.contentKey ? getHeroClipboardItemCopy(lang, item.contentKey) : item;
    const itemKey = `${row}-${groupIndex}-${itemIndex}-${item.type}`;
    const hasLinkPreview = item.type === 'link' && item.image && !unavailableLinkPreviews.has(itemKey);
    const isLinkPreviewLoading = Boolean(hasLinkPreview && !loadedLinkPreviews.has(itemKey));

    return <div className="clipboard-item-wrap" key={itemKey}>
      <button
        type="button"
        tabIndex={groupIndex === 0 ? undefined : -1}
        className={`clipboard-item clipboard-item-${item.type}${item.type === 'text' ? ' clipboard-item-text' : ''}${item.lightText ? ' clipboard-item-light' : ''}`}
        aria-label={`Copy ${itemCopy.title ?? item.image?.alt ?? 'item'}`}
        data-cursor-label={copiedItemKey === itemKey ? 'Copied' : itemCursorLabels[item.type]}
        data-cursor-color={copiedItemKey === itemKey ? '#147a45' : '#4f8fe9'}
        data-cursor-text-color="#fff"
        onClick={() => { void handleItemCopy(item, itemCopy, itemKey); }}
        style={{ '--item-color': item.color ?? '#fff' } as ItemStyle}
      >
        {item.type === 'text' && <><h3>{itemCopy.title}</h3><p>{itemCopy.body}</p></>}
        {item.type === 'color' && <><span>{itemCopy.title}</span><strong>{itemCopy.body}</strong></>}
        {item.type === 'image' && item.image && <img src={item.image.src} srcSet={getHeroImageSrcSet(item.image.src)} sizes={heroImageSizes} alt={item.image.alt} loading="lazy" decoding="async" />}
        {item.type === 'sticker' && item.image && <img src={item.image.src} srcSet={getHeroImageSrcSet(item.image.src)} sizes={heroImageSizes} alt={item.image.alt} loading="lazy" decoding="async" />}
        {item.type === 'link' && <>
          {hasLinkPreview
            ? <span className={`clipboard-link-preview${isLinkPreviewLoading ? ' is-loading' : ' is-loaded'}`}>
                {isLinkPreviewLoading && <span className="clipboard-link-loader" aria-hidden="true" />}
                <img src={item.image!.src} alt={item.image!.alt} loading="lazy" decoding="async" onLoad={() => setLoadedLinkPreviews((current) => current.has(itemKey) ? current : new Set(current).add(itemKey))} onError={() => setUnavailableLinkPreviews((current) => new Set(current).add(itemKey))} />
              </span>
            : <span className="clipboard-link-placeholder" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg></span>}
          <div><strong>{item.title}</strong><span>{item.href}</span></div>
        </>}
        {copiedItemKey === itemKey && <span className={`clipboard-copy-confirmation${isCopyConfirmationLeaving ? ' is-leaving' : ''}`} aria-hidden="true"><span className="clipboard-copy-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span></span>}
      </button>
    </div>;
  };

  const renderMarqueeRow = (items: ClipboardScene, direction: MarqueeDirection, label: string) => (
    <div className={`clipboard-marquee-row clipboard-marquee-row-${direction}`} role="list" aria-label={label}>
      <div className="clipboard-marquee-track">
        {[0, 1].map((groupIndex) => (
          <div className="clipboard-marquee-group" key={`${direction}-${groupIndex}`} aria-hidden={groupIndex === 1}>
            {items.map((item, itemIndex) => renderMarqueeItem(item, direction, groupIndex, itemIndex))}
          </div>
        ))}
      </div>
    </div>
  );

  const handleItemCopy = async (item: ClipboardItem, itemCopy: Pick<ClipboardItem, 'title' | 'body'>, key: string) => {
    const value = item.type === 'link'
      ? item.href
      : item.type === 'text' || item.type === 'color'
        ? itemCopy.body
        : item.image?.src ?? itemCopy.title;

    if (!value) return;

    try {
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
    } catch {
      // Clipboard access can be unavailable in an embedded preview.
    }
  };

  return (
    <ClipboardGridSection>
      <GridBackground className="hero-grid" aria-label="LiquidBoard feature preview">
        <div className="clipboard-container">
          <div ref={marqueeCanvasRef} className="clipboard-canvas">
            {renderMarqueeRow(topRowItems, 'forward', 'Clipboard items moving left to right')}
            {renderMarqueeRow(middleRowItems, 'reverse', 'Clipboard items moving right to left')}
            {renderMarqueeRow(bottomRowItems, 'forward', 'Clipboard items moving left to right')}
          </div>
        </div>
      </GridBackground>
    </ClipboardGridSection>
  );
};

export default ClipboardGrid;

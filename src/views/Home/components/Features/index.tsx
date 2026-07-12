import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Copy, FileDown, FileText, FolderTree, ImagePlay, Pin, Sticker } from 'lucide-react';
import { useTranslation } from '@/contexts/LanguageContext';
import { sentenceCase } from '@/locales/casing';
import { FeatureTail, LegacyContent, LegacyContentItem } from '../../styled';

gsap.registerPlugin(ScrollTrigger);

const featureIcons = [FileText, ImagePlay, Sticker];
const actionIcons = [FolderTree, Pin, Copy, FileDown];

const renderSplitText = (text: string, startIndex = 0) => {
  let animationIndex = startIndex;
  return text.split(/(\s+)/).flatMap((part, partIndex) => {
    if (/^\s+$/.test(part)) {
      return <React.Fragment key={`space-${partIndex}`}>{part}</React.Fragment>;
    }
    const units = part.length > 18 ? Array.from(part) : [part];
    return units.map((unit, unitIndex) => {
      const splitIndex = Math.min(animationIndex, 60);
      animationIndex += 1;
      return (
        <span
          className="split-word"
          key={`${partIndex}-${unitIndex}-${unit}`}
          style={{ '--split-index': splitIndex } as React.CSSProperties}
        >
          {unit}
        </span>
      );
    });
  });
};

const Features: React.FC = () => {
  const { dict, lang } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const items = [
    ...dict.features.titles.map((title, index) => ({
      id: `feature-${index}`,
      title,
      paragraph: dict.features.paragraphs[index],
      image: dict.features.images[index],
      icon: featureIcons[index],
      group: 'features',
    })),
    ...dict.action.titles.map((title, index) => ({
      id: `action-${index}`,
      title,
      paragraph: dict.action.paragraphs[index],
      image: dict.action.images[index],
      icon: actionIcons[index],
      group: 'actions',
    })),
  ];
  const horizontalItems = items.slice(0, 4);
  const verticalItems = items.slice(4);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!section || !pin || !track) return undefined;

    const cards = Array.from(section.querySelectorAll<HTMLElement>('article'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let revealObserver: IntersectionObserver | undefined;
    let revealResizeObserver: ResizeObserver | undefined;
    let refreshTimer: number | undefined;
    let active = true;

    const updateRevealOffset = (card: HTMLElement) => {
      const visual = card.querySelector<HTMLElement>('.content-visual');
      if (!visual) return;
      const cardRect = card.getBoundingClientRect();
      const visualRect = visual.getBoundingClientRect();
      const transform = getComputedStyle(visual).transform;
      const matrix = transform === 'none' ? new DOMMatrixReadOnly() : new DOMMatrixReadOnly(transform);
      const visualCenterX = visualRect.left + visualRect.width / 2 - matrix.m41;
      const visualCenterY = visualRect.top + visualRect.height / 2 - matrix.m42;
      card.style.setProperty('--feature-visual-enter-x', `${cardRect.left + cardRect.width / 2 - visualCenterX}px`);
      const enterY = cardRect.top + cardRect.height / 2 - visualCenterY;
      card.style.setProperty('--feature-visual-enter-y', `${enterY}px`);
      card.style.setProperty('--feature-visual-enter-y-inverse', `${-enterY}px`);
    };

    if (!reduceMotion) {
      cards.forEach(updateRevealOffset);
      revealResizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const card = target.matches('article') ? target : target.closest<HTMLElement>('article');
          if (card) updateRevealOffset(card);
        });
      });
      cards.forEach((card) => {
        revealResizeObserver?.observe(card);
        const visual = card.querySelector<HTMLElement>('.content-visual');
        if (visual) revealResizeObserver?.observe(visual);
      });

      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const card = entry.target as HTMLElement;
          const isDesktop = window.matchMedia('(min-width: 1200px)').matches;
          const revealRatio = isDesktop ? (track.contains(card) ? 0.52 : 0.18) : 0.08;
          if (entry.isIntersecting && entry.intersectionRatio >= revealRatio) {
            if (card.classList.contains('is-visible')) return;
            card.classList.add('is-preparing');
            card.classList.remove('is-visible');
            void card.offsetWidth;
            card.classList.remove('is-preparing');
            card.classList.add('is-visible');
          }
        });
      }, { threshold: [0, 0.08, 0.18, 0.52] });
      cards.forEach((card) => revealObserver?.observe(card));
    }

    const context = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add('(min-width: 1200px) and (prefers-reduced-motion: no-preference)', () => {
        const distance = () => {
          const lastItem = track.lastElementChild as HTMLElement | null;
          if (!lastItem) return 0;
          return Math.max(0, lastItem.offsetLeft + lastItem.offsetWidth / 2 - pin.clientWidth / 2);
        };
        const headerOffset = () => document.querySelector('header')?.getBoundingClientRect().height ?? 0;
        const viewportHeight = () => window.visualViewport?.height ?? document.documentElement.clientHeight;
        const settleDistance = () => gsap.utils.clamp(110, 180, viewportHeight() * 0.18);
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: pin,
            start: () => `top ${headerOffset()}px`,
            end: () => `+=${Math.max(distance() * 1.8 + settleDistance(), 1)}`,
            pin: true,
            pinSpacing: true,
            scrub: 1.1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .to(track, { x: () => -distance() * 0.99, duration: 0.94, ease: 'none' })
          .to(track, { x: () => -distance(), duration: 0.06, ease: 'power2.out' });
      });
      return () => media.revert();
    }, section);

    const scheduleRefresh = (delay = 140) => {
      if (refreshTimer !== undefined) window.clearTimeout(refreshTimer);
      refreshTimer = window.setTimeout(() => {
        refreshTimer = undefined;
        if (!active) return;
        cards.forEach(updateRevealOffset);
        ScrollTrigger.refresh();
      }, delay);
    };
    const handleResize = () => scheduleRefresh(140);
    const handleOrientationChange = () => scheduleRefresh(320);
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleOrientationChange, { passive: true });
    window.visualViewport?.addEventListener('resize', handleResize, { passive: true });
    void document.fonts.ready.then(() => { if (active) scheduleRefresh(0); });

    return () => {
      active = false;
      if (refreshTimer !== undefined) window.clearTimeout(refreshTimer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.visualViewport?.removeEventListener('resize', handleResize);
      revealObserver?.disconnect();
      revealResizeObserver?.disconnect();
      context.revert();
    };
  }, [dict, lang, horizontalItems.length]);

  const renderItem = ({ icon: Icon, ...item }: (typeof items)[number], vertical = false) => (
    <LegacyContentItem
      key={item.id}
      className={`feature-reveal-ready${vertical ? ' vertical-feature' : ''}${item.group === 'actions' ? ' reverse-layout' : ''}`}
    >
      <div className="content-visual"><img src={item.image.src} alt={item.image.alt} loading="lazy" decoding="async" /></div>
      <div className="content-copy">
        <div className="title-row"><Icon size={30} strokeWidth={2.25} aria-hidden="true" /><h2>{renderSplitText(sentenceCase(item.title, lang))}</h2></div>
        <p>{renderSplitText(item.paragraph, 6)}</p>
      </div>
    </LegacyContentItem>
  );

  return (
    <LegacyContent ref={sectionRef} aria-label="LiquidBoard features">
      <div className="feature-pin" ref={pinRef}>
        <div className="feature-track" ref={trackRef}>
          {horizontalItems.map((item) => renderItem(item))}
        </div>
      </div>
      <FeatureTail>{verticalItems.map((item) => renderItem(item, true))}</FeatureTail>
    </LegacyContent>
  );
};

export default Features;

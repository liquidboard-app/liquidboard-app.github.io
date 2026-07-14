import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpDown, ClipboardPaste, Cloud, Copy, CopyPlus, FileDown, FileText, FileUp, Filter,
  FolderTree, ImagePlay, Pin, Search, Sticker, TimerOff,
} from 'lucide-react';
import { useTranslation } from '@/contexts/LanguageContext';
import { sentenceCase } from '@/locales/casing';
import { getFeatureDetails } from '../../featureContent';
import { FeatureStack, LegacyContent, LegacyContentItem } from '../../styled';

gsap.registerPlugin(ScrollTrigger);

const featureIcons = [FileText, ImagePlay, Sticker];
const actionIcons = [
  FolderTree, Pin, Copy, CopyPlus, FileDown, FileUp, Filter, Search, ArrowUpDown,
  ClipboardPaste, TimerOff, Cloud,
];
const actionImages = [
  '/assets/lb-text.webp', '/assets/lb-photos.webp', '/assets/lb-keyboard.webp',
  '/assets/lb-keyboard.webp', '/assets/lb-text.webp', '/assets/lb-text.webp',
  '/assets/lb-photos.webp', '/assets/lb-text.webp', '/assets/lb-photos.webp',
  '/assets/lb-keyboard.webp', '/assets/lb-text.webp', '/assets/lb-photos.webp',
];

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
  const stackTrackRef = useRef<HTMLDivElement>(null);
  const details = getFeatureDetails(lang);
  const items = [
    ...dict.features.titles.map((title, index) => ({
      id: `feature-${index}`,
      title,
      paragraph: details.featureParagraphs[index] ?? dict.features.paragraphs[index],
      image: dict.features.images[index],
      icon: featureIcons[index],
      group: 'features',
    })),
    ...details.actionTitles.map((title, index) => ({
      id: `action-${index}`,
      title,
      paragraph: details.actionParagraphs[index] ?? dict.action.paragraphs[index],
      image: {
        src: actionImages[index] ?? dict.action.images[index]?.src ?? '/assets/lb-text.webp',
        alt: dict.action.images[index]?.alt ?? `LiquidBoard ${title}`,
      },
      icon: actionIcons[index],
      group: 'actions',
    })),
  ];
  // Group closes the horizontal track; only the following actions are stacked over that same card.
  const horizontalItems = items.slice(0, 4);
  const stackedItems = items.slice(4);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    const stackTrack = stackTrackRef.current;
    if (!section || !pin || !track || !stackTrack) return undefined;

    const cards = Array.from(section.querySelectorAll<HTMLElement>('article'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let revealObserver: IntersectionObserver | undefined;
    let revealResizeObserver: ResizeObserver | undefined;
    let iconObserver: IntersectionObserver | undefined;
    let refreshTimer: number | undefined;
    let active = true;

    const revealCard = (card: HTMLElement) => {
      if (card.classList.contains('is-visible')) return;
      card.classList.add('is-preparing');
      void card.offsetWidth;
      card.classList.remove('is-preparing');
      card.classList.add('is-visible');
    };

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
          if (isDesktop && card.classList.contains('stacked-feature')) return;
          const revealRatio = isDesktop ? (track.contains(card) ? 0.52 : 0.18) : 0.08;
          if (entry.isIntersecting && entry.intersectionRatio >= revealRatio) {
            revealCard(card);
          }
        });
      }, { threshold: [0, 0.08, 0.18, 0.52] });
      cards.forEach((card) => revealObserver?.observe(card));

      iconObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const card = (entry.target as HTMLElement).closest<HTMLElement>('article');
          if (!card) return;
          if (!entry.isIntersecting || entry.intersectionRatio < 0.4) {
            card.classList.remove('is-icon-animated');
            return;
          }
          card.classList.remove('is-icon-animated');
          void card.offsetWidth;
          card.classList.add('is-icon-animated');
        });
      }, { threshold: [0, 0.4] });
      section.querySelectorAll<SVGSVGElement>('.title-row > svg').forEach((icon) => iconObserver?.observe(icon));
    }

    const context = gsap.context(() => {
      const media = gsap.matchMedia();
      const headerOffset = () => document.querySelector('header')?.getBoundingClientRect().height ?? 0;
      const viewportHeight = () => window.visualViewport?.height ?? document.documentElement.clientHeight;
      media.add('(min-width: 1200px) and (prefers-reduced-motion: no-preference)', () => {
        const groupCard = track.lastElementChild as HTMLElement | null;
        const stickerCard = track.children.item(2) as HTMLElement | null;
        const horizontalCards = Array.from(track.children) as HTMLElement[];
        const fadingHorizontalCards = horizontalCards.slice(0, 3);
        const stackCards = Array.from(stackTrack.querySelectorAll<HTMLElement>('article'));
        if (!groupCard || !stackCards.length) return undefined;

        const distance = () => {
          const lastItem = track.lastElementChild as HTMLElement | null;
          if (!lastItem) return 0;
          return Math.max(0, lastItem.offsetLeft + lastItem.offsetWidth / 2 - pin.clientWidth / 2);
        };
        const settleDistance = () => gsap.utils.clamp(110, 180, viewportHeight() * 0.18);
        const horizontalScrollDistance = Math.max(distance() * 1.8 + settleDistance(), 1);
        const stickerExitDistance = Math.max(viewportHeight() * 0.44, 1);
        const stackStepDistance = Math.max(viewportHeight() * 1.48, 1);
        const stackEntryDuration = stackStepDistance * 0.84;
        const stackSettleDuration = stackStepDistance * 0.16;
        const stackFadeStart = stackStepDistance * 0.46;
        const stackFadeDuration = stackEntryDuration - stackFadeStart;
        // Keep the transitions long enough to read smoothly, while reducing the idle hold after Group and its following cards.
        const stackHoldDistance = Math.max(viewportHeight() * 0.48, 1);
        const finalStackHoldDistance = Math.max(viewportHeight() * 0.8, 1);
        const publishStackStart = () => {
          const pinStart = pin.getBoundingClientRect().top + window.scrollY - headerOffset();
          section.dataset.featureStackStart = String(Math.round(pinStart + horizontalScrollDistance + stickerExitDistance));
          window.dispatchEvent(new Event('liquidboard:feature-stack-threshold-change'));
        };

        gsap.set(groupCard, {
          transformOrigin: 'center top',
          transformStyle: 'flat',
          transformPerspective: 1300,
        });
        gsap.set(horizontalCards, {
          transformPerspective: 1300,
          transformStyle: 'flat',
          willChange: 'transform',
        });

        stackCards.forEach((card, index) => {
          gsap.set(card, {
            yPercent: 108,
            y: 15,
            rotationX: 14,
            z: 0,
            scale: 1,
            width: '100%',
            autoAlpha: 1,
            filter: 'blur(0px)',
            zIndex: index + 2,
            transformOrigin: 'center top',
            transformPerspective: 1300,
          });
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: pin,
            start: () => `top ${headerOffset()}px`,
            end: () => `+=${Math.max(distance() * 1.8 + settleDistance() + stickerExitDistance + stackCards.length * viewportHeight() * 1.48 + Math.max(stackCards.length - 1, 0) * stackHoldDistance + finalStackHoldDistance, 1)}`,
            pin: true,
            pinSpacing: true,
            scrub: 1.1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
        publishStackStart();
        ScrollTrigger.addEventListener('refresh', publishStackStart);

        timeline
          .to(track, { x: () => -distance() * 0.99, duration: horizontalScrollDistance * 0.94, ease: 'none' })
          .to(track, { x: () => -distance(), duration: horizontalScrollDistance * 0.06, ease: 'power2.out' });

        const horizontalDepthEnd = horizontalScrollDistance + stickerExitDistance;
        const updateHorizontalDepth = () => {
          const pinRect = pin.getBoundingClientRect();
          const pinCenter = pinRect.left + pinRect.width / 2;
          const fadeStart = pinRect.left + pinRect.width * 0.56;
          const fadeEnd = pinRect.left - pinRect.width * 0.07;
          horizontalCards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const offset = gsap.utils.clamp(-1, 1, (rect.left + rect.width / 2 - pinCenter) / (rect.width * 0.9));
            const depth = Math.abs(offset);
            const fadeProgress = fadingHorizontalCards.includes(card)
              ? gsap.utils.clamp(0, 1, (fadeStart - rect.right) / (fadeStart - fadeEnd))
              : 0;
            gsap.set(card, {
              rotationY: -offset * 11,
              scale: 1 - depth * 0.06,
              z: -depth * 56,
              autoAlpha: 1 - fadeProgress,
              filter: `blur(${fadeProgress * 16}px)`,
            });
          });
        };
        updateHorizontalDepth();
        timeline.eventCallback('onUpdate', () => {
          if (timeline.time() <= horizontalDepthEnd) updateHorizontalDepth();
        });

        if (stickerCard) {
          timeline.to(stickerCard, {
            xPercent: -42,
            autoAlpha: 0,
            filter: 'blur(14px)',
            duration: stickerExitDistance,
            ease: 'none',
          });
        }

        stackCards.forEach((card, index) => {
          const previousCard = index === 0 ? groupCard : stackCards[index - 1];
          timeline
            .call(() => revealCard(card))
            .to(card, { yPercent: 8, y: 0, rotationX: 3, z: 0, scale: 0.995, duration: stackEntryDuration, ease: 'none' })
            .to(previousCard, {
              scale: 0.9,
              yPercent: -1,
              rotationX: 10,
              z: 0,
              duration: stackEntryDuration,
              ease: 'none',
            }, '<')
            .to(previousCard, {
              backgroundColor: '#f3dfca',
              duration: stackEntryDuration * 0.72,
              ease: 'none',
            }, '<')
            .to(previousCard, {
              autoAlpha: 0.34,
              filter: 'blur(9px)',
              duration: stackFadeDuration,
              ease: 'none',
            }, `<+=${stackFadeStart}`)
            .to(card, { yPercent: 0, y: 0, rotationX: 0, z: 0, scale: 1, duration: stackSettleDuration, ease: 'power1.out' })
            .to(previousCard, {
              autoAlpha: 0,
              filter: 'blur(12px)',
              yPercent: -3,
              rotationX: 12,
              z: 0,
              duration: stackSettleDuration,
              ease: 'power1.out',
            }, '<');

          timeline.to({}, {
            duration: index < stackCards.length - 1 ? stackHoldDistance : finalStackHoldDistance,
            ease: 'none',
          });
        });

        return () => {
          ScrollTrigger.removeEventListener('refresh', publishStackStart);
          delete section.dataset.featureStackStart;
          window.dispatchEvent(new Event('liquidboard:feature-stack-threshold-change'));
        };
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
      iconObserver?.disconnect();
      context.revert();
    };
  }, [dict, lang, horizontalItems.length]);

  const renderItem = ({ icon: Icon, ...item }: (typeof items)[number], stacked = false) => (
    <LegacyContentItem
      key={item.id}
      className={stacked
        ? `stacked-feature feature-reveal-ready${item.group === 'actions' ? ' reverse-layout' : ''}`
        : `feature-reveal-ready${item.group === 'actions' ? ' reverse-layout' : ''}`}
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
        <FeatureStack>
          <div className="feature-stack-pin">
            <div className="feature-stack-track" ref={stackTrackRef}>
              {stackedItems.map((item) => renderItem(item, true))}
            </div>
          </div>
        </FeatureStack>
      </div>
    </LegacyContent>
  );
};

export default Features;

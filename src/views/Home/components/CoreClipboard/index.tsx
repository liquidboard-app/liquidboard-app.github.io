import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '@/contexts/LanguageContext';
import { CoreClipboardSection } from './styled';

const phones = [
  { label: 'Text', image: '/assets/lb-text.webp', tone: 'sand' },
  { label: 'Image', image: '/assets/lb-photos.webp', tone: 'sky' },
  { label: 'Sticker', image: '/assets/lb-keyboard.webp', tone: 'violet' },
] as const;

const coreHighlightTerms: Record<string, { line1: string; line2: string }> = {
  bn: { line1: 'ক্লিপবোর্ড', line2: 'iOS কীবোর্ড' },
  de: { line1: 'Zwischenablage', line2: 'iOS-Tastatur' },
  en: { line1: 'clipboard', line2: 'iOS Keyboard' },
  es: { line1: 'portapapeles', line2: 'teclado de iOS' },
  fr: { line1: 'presse-papiers', line2: 'clavier iOS' },
  hi: { line1: 'क्लिपबोर्ड', line2: 'iOS कीबोर्ड' },
  id: { line1: 'Clipboard', line2: 'Keyboard iOS' },
  it: { line1: 'appunti', line2: 'tastiera iOS' },
  ja: { line1: 'クリップボード', line2: 'iOSキーボード' },
  ko: { line1: '클립보드', line2: 'iOS 키보드' },
  pl: { line1: 'schowka', line2: 'klawiaturę iOS' },
  'pt-BR': { line1: 'área de transferência', line2: 'teclado do iOS' },
  ru: { line1: 'буфера обмена', line2: 'клавиатуры iOS' },
  th: { line1: 'คลิปบอร์ด', line2: 'คีย์บอร์ด iOS' },
  tl: { line1: 'Clipboard', line2: 'iOS Keyboard' },
  tr: { line1: 'panodan', line2: 'iOS klavyenize' },
  vi: { line1: 'Clipboard', line2: 'Bàn Phím iOS' },
  'zh-CN': { line1: '剪贴板', line2: 'iOS 键盘' },
  'zh-TW': { line1: '剪貼簿', line2: 'iOS 鍵盤' },
};

const renderHighlightedCoreLine = (text: string, term: string, tone: 'green' | 'blue') => {
  const start = text.toLocaleLowerCase().indexOf(term.toLocaleLowerCase());
  if (start < 0) return <span>{text}</span>;

  const end = start + term.length;
  return (
    <span>
      {text.slice(0, start)}
      <span className={`core-heading-highlight core-heading-highlight-${tone}`}>
        {text.slice(start, end)}
        <span className="core-heading-underline" aria-hidden="true" />
      </span>
      {text.slice(end)}
    </span>
  );
};

type AnimationPhase = 'idle' | 'entering' | 'entered' | 'reversing';
type SidePhonesLock = 'top' | 'bottom';
type ScrollDirection = 'up' | 'down';

const CoreClipboard: React.FC = () => {
  const { dict, lang } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const phoneStageRef = useRef<HTMLDivElement>(null);
  const phoneRowRef = useRef<HTMLDivElement>(null);
  const [headingPhase, setHeadingPhase] = useState<AnimationPhase>('idle');
  const [sidePhonesPhase, setSidePhonesPhase] = useState<AnimationPhase>('idle');
  const [centerPhonePhase, setCenterPhonePhase] = useState<AnimationPhase>('idle');
  const [isPinnedScroll, setIsPinnedScroll] = useState(false);

  useEffect(() => {
    const compactViewportQuery = window.matchMedia('(max-width: 1199px)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: no-preference)');
    const syncPinnedScroll = () => {
      setIsPinnedScroll(compactViewportQuery.matches && motionQuery.matches);
    };

    syncPinnedScroll();
    compactViewportQuery.addEventListener('change', syncPinnedScroll);
    motionQuery.addEventListener('change', syncPinnedScroll);
    return () => {
      compactViewportQuery.removeEventListener('change', syncPinnedScroll);
      motionQuery.removeEventListener('change', syncPinnedScroll);
    };
  }, []);

  useEffect(() => {
    let headingPhase: AnimationPhase = 'idle';
    let sidePhonesPhase: AnimationPhase = 'idle';
    let centerPhonePhase: AnimationPhase = 'idle';
    let sidePhonesLock: SidePhonesLock | null = null;
    let headingAnimationTimer: number | undefined;
    let sidePhonesAnimationTimer: number | undefined;
    let sidePhonesReverseTimer: number | undefined;
    let centerPhoneAnimationTimer: number | undefined;
    let updateFrame: number | undefined;
    let lastViewportWidth = window.innerWidth;
    let lastScrollY = window.scrollY;
    let isScrollingUp = false;
    let isScrollingDown = false;
    let scrollDirection: ScrollDirection | null = null;
    let scrollDirectionDistance = 0;
    const directionCommitDistance = 80;
    const desktopQuery = window.matchMedia('(min-width: 1200px)');

    const syncPhoneCenterShift = () => {
      const section = sectionRef.current;
      const row = phoneRowRef.current;
      if (!section || !row || !desktopQuery.matches) {
        section?.style.removeProperty('--core-phone-center-shift');
        return;
      }

      const phoneItems = Array.from(row.querySelectorAll<HTMLElement>('.core-phone'));
      if (phoneItems.length < 3) return;
      const centers = phoneItems.map((phone) => {
        const bounds = phone.getBoundingClientRect();
        return bounds.left + bounds.width / 2;
      });
      section.style.setProperty('--core-phone-center-shift', `${centers[1] - centers[0]}px`);
    };

    const setHeading = (phase: typeof headingPhase) => {
      headingPhase = phase;
      setHeadingPhase(phase);
    };
    const setSidePhones = (phase: typeof sidePhonesPhase) => {
      sidePhonesPhase = phase;
      setSidePhonesPhase(phase);
    };
    const setCenterPhone = (phase: typeof centerPhonePhase) => {
      centerPhonePhase = phase;
      setCenterPhonePhase(phase);
    };
    const beginHeadingEnter = () => {
      if (headingPhase !== 'idle') return;
      window.clearTimeout(headingAnimationTimer);
      setHeading('entering');
      headingAnimationTimer = window.setTimeout(() => {
        setHeading('entered');
      }, 1450);
    };
    const beginSidePhonesEnter = () => {
      if (sidePhonesPhase === 'entering' || sidePhonesPhase === 'entered') return;
      window.clearTimeout(sidePhonesAnimationTimer);
      window.clearTimeout(sidePhonesReverseTimer);
      setSidePhones('entering');
      sidePhonesAnimationTimer = window.setTimeout(() => {
        setSidePhones('entered');
      }, 720);
    };
    const beginSidePhonesReverse = (direction: SidePhonesLock) => {
      if (sidePhonesPhase !== 'entered') return;
      window.clearTimeout(sidePhonesAnimationTimer);
      window.clearTimeout(sidePhonesReverseTimer);
      sidePhonesLock = direction;
      setSidePhones('reversing');
      sidePhonesReverseTimer = window.setTimeout(() => {
        setSidePhones('idle');
      }, 620);
    };
    const beginCenterPhoneEnter = () => {
      if (centerPhonePhase !== 'idle') return;
      window.clearTimeout(centerPhoneAnimationTimer);
      setCenterPhone('entering');
      centerPhoneAnimationTimer = window.setTimeout(() => {
        setCenterPhone('entered');
      }, 860);
    };
    const requestHeading = (visible: boolean) => {
      if (visible) beginHeadingEnter();
    };
    const requestSidePhonesEnter = (visible: boolean) => {
      if (visible) beginSidePhonesEnter();
    };
    const requestSidePhonesReverse = (visible: boolean, direction: SidePhonesLock) => {
      if (visible) beginSidePhonesReverse(direction);
    };
    const requestCenterPhone = (visible: boolean) => {
      if (visible) beginCenterPhoneEnter();
    };
    const resolveAnimationState = (nextProgress: number, viewportHeight: number) => {
      const section = sectionRef.current;
      if (!section) return;

      // Separate enter/exit thresholds create a small dead zone around each trigger.
      // This keeps animations stable while the user lingers near the boundary.
      const shouldEnterHeading = nextProgress >= .06;
      const shouldEnterCenterPhone = nextProgress >= .55;

      if (shouldEnterHeading) requestHeading(true);
      if (shouldEnterCenterPhone) requestCenterPhone(true);

      const phoneStage = phoneStageRef.current;
      if (phoneStage) {
        const stageTop = phoneStage.getBoundingClientRect().top;
        const sidePhonesUpThreshold = viewportHeight * .82;
        const wasReturningFromTop = sidePhonesLock === 'top';
        const shouldConvergeSidePhones = isScrollingUp
          ? stageTop >= sidePhonesUpThreshold
          : isScrollingDown && stageTop < -viewportHeight * .85;
        const shouldEnterSidePhones = isScrollingUp
          ? stageTop >= -viewportHeight * .6 && stageTop < sidePhonesUpThreshold
          : stageTop < viewportHeight * (wasReturningFromTop ? .78 : 1.05);

        // Keep a spatial dead zone between the up/down thresholds. The lock
        // is released only after the user crosses that zone in the opposite
        // direction, preventing rapid scroll oscillation from replaying both
        // animations over and over.
        if (isScrollingUp && sidePhonesLock === 'bottom' && stageTop >= -viewportHeight * .6) {
          sidePhonesLock = null;
        }
        if (isScrollingDown && sidePhonesLock === 'top' && scrollDirectionDistance >= directionCommitDistance) {
          sidePhonesLock = null;
        }

        if (shouldConvergeSidePhones) {
          requestSidePhonesReverse(true, isScrollingUp ? 'top' : 'bottom');
        } else if (shouldEnterSidePhones && (isScrollingUp || isScrollingDown) && !sidePhonesLock) {
          requestSidePhonesEnter(true);
        }
      }
    };

    const updateProgress = () => {
      updateFrame = undefined;
      const section = sectionRef.current;
      if (!section) return;

      const bounds = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      if (scrollDelta !== 0) {
        const nextDirection: ScrollDirection = scrollDelta < 0 ? 'up' : 'down';
        if (nextDirection !== scrollDirection) {
          scrollDirection = nextDirection;
          scrollDirectionDistance = 0;
        }
        scrollDirectionDistance += Math.abs(scrollDelta);
      }
      isScrollingUp = scrollDirection === 'up' && scrollDirectionDistance >= directionCommitDistance;
      isScrollingDown = scrollDirection === 'down' && scrollDirectionDistance >= directionCommitDistance;
      lastScrollY = currentScrollY;
      const start = viewportHeight * .78;
      const distance = Math.max(1, bounds.height - viewportHeight * .55);
      const nextProgress = Math.min(1, Math.max(0, (start - bounds.top) / distance));
      resolveAnimationState(nextProgress, viewportHeight);
    };
    const scheduleProgressUpdate = () => {
      if (updateFrame !== undefined) return;
      updateFrame = window.requestAnimationFrame(updateProgress);
    };
    const handleResize = () => {
      const nextViewportWidth = window.innerWidth;
      // Expanding/collapsing mobile browser chrome is a height-only resize.
      // Scroll already resolves the entrance thresholds, so do not add layout
      // reads for every toolbar animation frame.
      if (!desktopQuery.matches && nextViewportWidth === lastViewportWidth) return;
      lastViewportWidth = nextViewportWidth;
      syncPhoneCenterShift();
      scheduleProgressUpdate();
    };

    syncPhoneCenterShift();
    updateProgress();
    window.addEventListener('scroll', scheduleProgressUpdate, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    desktopQuery.addEventListener('change', syncPhoneCenterShift);
    desktopQuery.addEventListener('change', scheduleProgressUpdate);
    return () => {
      if (updateFrame !== undefined) window.cancelAnimationFrame(updateFrame);
      window.clearTimeout(headingAnimationTimer);
      window.clearTimeout(sidePhonesAnimationTimer);
      window.clearTimeout(sidePhonesReverseTimer);
      window.clearTimeout(centerPhoneAnimationTimer);
      window.removeEventListener('scroll', scheduleProgressUpdate);
      window.removeEventListener('resize', handleResize);
      desktopQuery.removeEventListener('change', syncPhoneCenterShift);
      desktopQuery.removeEventListener('change', scheduleProgressUpdate);
    };
  }, []);

  useEffect(() => {
    const stage = phoneStageRef.current;
    const row = phoneRowRef.current;
    if (!isPinnedScroll || !stage || !row) return undefined;

    let active = true;
    let tween: { scrollTrigger?: { kill: () => void }; kill: () => void } | undefined;

    const setupPinnedScroll = async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      if (!active) return;

      gsap.registerPlugin(ScrollTrigger);
      const headerOffset = () => {
        const header = document.querySelector('header');
        return header && getComputedStyle(header).position === 'fixed'
          ? Math.round(header.getBoundingClientRect().height)
          : 0;
      };
      const horizontalTravel = () => Math.max(0, row.scrollWidth - stage.clientWidth);
      const scrollDistance = () => Math.max(
        horizontalTravel() * 1.14 + Math.max(stage.clientHeight, 1) * .58,
        Math.max(stage.clientHeight, 1) * 1.35,
      );

      gsap.set(row, { x: 0, force3D: true, backfaceVisibility: 'hidden' });
      tween = gsap.to(row, {
        x: () => -horizontalTravel(),
        ease: 'none',
        force3D: true,
        overwrite: 'auto',
        scrollTrigger: {
          trigger: stage,
          start: () => `top top+=${headerOffset()}`,
          end: () => `+=${scrollDistance()}`,
          pin: true,
          pinSpacing: true,
          scrub: .8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: 1,
        },
      });

      requestAnimationFrame(() => {
        if (active) ScrollTrigger.refresh();
      });
    };

    void setupPinnedScroll();
    return () => {
      active = false;
      tween?.scrollTrigger?.kill();
      tween?.kill();
      row.style.removeProperty('transform');
      row.style.removeProperty('will-change');
    };
  }, [isPinnedScroll, lang]);

  return (
    <CoreClipboardSection
      ref={sectionRef}
    className={`${headingPhase === 'entering' || headingPhase === 'entered' ? 'is-heading-animated' : ''}${headingPhase === 'reversing' ? ' is-heading-reversing' : ''}${sidePhonesPhase === 'entering' || sidePhonesPhase === 'entered' ? ' is-phones-entered' : ''}${sidePhonesPhase === 'reversing' ? ' is-phones-reversing' : ''}${centerPhonePhase === 'entering' || centerPhonePhase === 'entered' ? ' is-center-phone-entered' : ''}${centerPhonePhase === 'reversing' ? ' is-center-phone-reversing' : ''}${isPinnedScroll ? ' is-pinned-scroll' : ''}`}
    >
      <div className="core-clipboard-heading">
        <div className="core-app-brand">
          <span className="core-app-name">Liquid</span>
          <span className="core-app-logos" aria-hidden="true">
            <span className="core-app-icon core-app-icon-light"><img src="/assets/logo-app-light.jpg" alt="" decoding="async" /></span>
            <span className="core-app-icon core-app-icon-dark"><img src="/assets/logo-app-dark.jpg" alt="" decoding="async" /></span>
          </span>
          <span className="core-app-name">Board</span>
        </div>
        <h2>
          {renderHighlightedCoreLine(
            dict.coreClipboard.line1,
            (coreHighlightTerms[lang] ?? coreHighlightTerms.en).line1,
            'green',
          )}
          {renderHighlightedCoreLine(
            dict.coreClipboard.line2,
            (coreHighlightTerms[lang] ?? coreHighlightTerms.en).line2,
            'blue',
          )}
        </h2>
      </div>

      <div ref={phoneStageRef} className="core-phone-stage" aria-label="LiquidBoard Core Clipboard preview">
        <div ref={phoneRowRef} className="core-phone-row">
          {phones.map((phone, index) => (
            <article className={`core-phone core-phone-${phone.tone} core-phone-${index + 1}`} key={phone.label}>
              <div className="core-phone-frame">
                <span className="core-phone-island" aria-hidden="true" />
                <img src={phone.image} alt={`${phone.label} clipboard preview`} loading="lazy" decoding="async" />
                <span className="core-phone-home" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </CoreClipboardSection>
  );
};

export default CoreClipboard;

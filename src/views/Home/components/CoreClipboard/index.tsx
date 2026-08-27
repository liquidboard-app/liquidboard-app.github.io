import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '@/contexts/LanguageContext';
import { CoreClipboardSection } from './styled';

const phones = [
  { label: 'Text', image: '/assets/lb-text.webp', tone: 'sand' },
  { label: 'Image', image: '/assets/lb-photos.webp', tone: 'sky' },
  { label: 'Sticker', image: '/assets/lb-keyboard.webp', tone: 'violet' },
] as const;

type AnimationPhase = 'idle' | 'entering' | 'entered' | 'reversing';

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
    let headingAnimationTimer: number | undefined;
    let sidePhonesAnimationTimer: number | undefined;
    let centerPhoneAnimationTimer: number | undefined;
    let updateFrame: number | undefined;
    let renderedProgress = -1;
    let lastViewportWidth = window.innerWidth;
    const desktopQuery = window.matchMedia('(min-width: 1200px)');

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
      if (sidePhonesPhase !== 'idle') return;
      window.clearTimeout(sidePhonesAnimationTimer);
      setSidePhones('entering');
      sidePhonesAnimationTimer = window.setTimeout(() => {
        setSidePhones('entered');
      }, 1050);
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
    const requestSidePhones = (visible: boolean) => {
      if (visible) beginSidePhonesEnter();
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
        const shouldEnterSidePhones = stageTop < viewportHeight * .78;
        if (shouldEnterSidePhones) requestSidePhones(true);
      }
    };

    const updateProgress = () => {
      updateFrame = undefined;
      const section = sectionRef.current;
      if (!section) return;

      const bounds = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const start = viewportHeight * .78;
      const distance = Math.max(1, bounds.height - viewportHeight * .55);
      const nextProgress = Math.min(1, Math.max(0, (start - bounds.top) / distance));
      // Compact layouts do not use the vertical phone offset. Avoid a React
      // render on every scroll frame and only paint the CSS variable where it
      // is actually visible (desktop).
      if (desktopQuery.matches && Math.abs(nextProgress - renderedProgress) > .002) {
        renderedProgress = nextProgress;
        section.style.setProperty('--core-progress', renderedProgress.toFixed(3));
      }
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
      scheduleProgressUpdate();
    };

    updateProgress();
    window.addEventListener('scroll', scheduleProgressUpdate, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    desktopQuery.addEventListener('change', scheduleProgressUpdate);
    return () => {
      if (updateFrame !== undefined) window.cancelAnimationFrame(updateFrame);
      window.clearTimeout(headingAnimationTimer);
      window.clearTimeout(sidePhonesAnimationTimer);
      window.clearTimeout(centerPhoneAnimationTimer);
      window.removeEventListener('scroll', scheduleProgressUpdate);
      window.removeEventListener('resize', handleResize);
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
          {lang === 'vi' ? (
            <>
              <span>Đưa <span className="core-heading-highlight core-heading-highlight-green">Clipboard<div className="core-heading-underline" aria-hidden="true" /></span> từ ứng dụng</span>
              <span>đến <span className="core-heading-highlight core-heading-highlight-blue">Bàn Phím iOS<div className="core-heading-underline" aria-hidden="true" /></span></span>
            </>
          ) : (
            <>
              <span>{dict.coreClipboard.line1}</span>
              <span>{dict.coreClipboard.line2}</span>
            </>
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

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';
import { useTranslation } from '@/contexts/LanguageContext';
import {
  HeroSection,
  StickyContainer,
  ContentContainer,
  Line1,
  Line2Container,
  Line2Text,
  SplitLeft,
  SplitRight,
  ImageContainer,
  ScrollIndicatorWrapper,
  Chevron,
  ChevronLineLeft,
  ChevronLineRight
} from './styled';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

const Hero: React.FC = () => {
  const { t, lang } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLHeadingElement>(null);
  const line2ContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  const handleScrollDown = () => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      // Subtract 90px (approximate header height + gap) to avoid overshooting the pin
      // and prevent scrolling into the next section prematurely.
      const targetY = window.scrollY + rect.bottom - window.innerHeight - 90;
      
      gsap.to(window, {
        duration: 1.5, // Slow down the scroll (1.5 seconds)
        scrollTo: targetY,
        ease: "power2.inOut"
      });
    }
  };

  // Force ScrollTrigger to refresh and re-calculate DOM metrics when language changes
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(timer);
  }, [lang]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Smooth scrub
        pin: true, // Pin the entire Hero section while scrubbing
        invalidateOnRefresh: true, // Re-evaluate function-based tweens on resize
      }
    });

    // Set initial split gap using GSAP so it handles xPercent/yPercent cleanly
    // This entirely avoids CSS margin and transform conflicts!
    gsap.set(line1Ref.current, { xPercent: -50, yPercent: -50, y: "-0.6em" });
    gsap.set(line2ContainerRef.current, { xPercent: -50, yPercent: -50, y: "0.6em" });
    // We don't need yPercent: -50 on split-left/right anymore because they are in a flex container!

    // Phase 1: Blur and move line1 up and fade out
    tl.to(line1Ref.current, {
      y: "-2.6em",
      opacity: 0,
      filter: "blur(20px)",
      ease: "power2.inOut",
      duration: 1
    }, 0);

    // Phase 1: Fade out scroll indicator and move it down
    tl.to(scrollIndicatorRef.current, {
      y: "40px",
      opacity: 0,
      ease: "power2.inOut",
      duration: 0.8
    }, 0);

    // Phase 1: Move line2 up to center
    tl.to(line2ContainerRef.current, {
      y: "0em",
      ease: "power2.inOut",
      duration: 1
    }, 0);

    // Phase 2: Expand image
    // Expand to height: 100dvh - 130px, width will automatically adjust to keep image aspect ratio
    // This perfectly accounts for the header at the bottom so it never overlaps
    tl.to(imageContainerRef.current, {
      height: "calc(100dvh - 130px)",
      ease: "power2.inOut",
      duration: 2
    }, 1);

    // Phase 2: Fade out the space character
    tl.to('.split-space', {
      opacity: 0,
      duration: 0.5
    }, 1);

    // Phase 2: Push texts left and right, enough to hug the image edges while accounting for bounding box shift
    // We calculate the exact pixel push needed to center the GAP around the image.
    tl.to('.split-left', {
      x: () => {
        const container = document.querySelector('.split-left')?.parentElement as HTMLElement;
        const leftEl = document.querySelector('.split-left') as HTMLElement;
        if (!container || !leftEl) return 0;
        
        const C = container.offsetWidth / 2;
        const E_left = leftEl.offsetLeft + leftEl.offsetWidth - C;
        
        // Increase gap on mobile screens
        const isMobile = window.innerWidth <= 860;
        const pushRatio = isMobile ? 32 : 26;
        const pushAmount = pushRatio * window.innerHeight / 100;
        
        return -pushAmount - E_left;
      },
      ease: "power2.inOut",
      duration: 2
    }, 1);

    tl.to('.split-right', {
      x: () => {
        const container = document.querySelector('.split-right')?.parentElement as HTMLElement;
        const rightEl = document.querySelector('.split-right') as HTMLElement;
        if (!container || !rightEl) return 0;

        const C = container.offsetWidth / 2;
        const E_right = rightEl.offsetLeft - C;

        // Increase gap on mobile screens
        const isMobile = window.innerWidth <= 860;
        const pushRatio = isMobile ? 32 : 26;
        const pushAmount = pushRatio * window.innerHeight / 100;
        
        return pushAmount - E_right;
      },
      ease: "power2.inOut",
      duration: 2
    }, 1);

    // Phase 3: Pause at the end
    // Adds a dummy tween so the user has to scroll a bit more before the section unpins
    tl.to({}, { duration: 1.5 });

  }, { scope: heroRef });

  return (
    <HeroSection ref={heroRef} className="hero">
      <StickyContainer>
        <ContentContainer>
          <Line1 ref={line1Ref}>{t('hero.line1')}</Line1>

          <ImageContainer ref={imageContainerRef}>
            <img src="/assets/lb-keyboard.png" alt="lb-keyboard" />
          </ImageContainer>

          <Line2Container ref={line2ContainerRef}>
            <SplitLeft className="split-left">{t('hero.line2.left')}</SplitLeft>
            <Line2Text className="split-space"> </Line2Text>
            <SplitRight className="split-right">{t('hero.line2.right')}</SplitRight>
          </Line2Container>

          <ScrollIndicatorWrapper ref={scrollIndicatorRef} onClick={handleScrollDown}>
            <Chevron className="chevron-1">
              <ChevronLineLeft className="line-left" />
              <ChevronLineRight className="line-right" />
            </Chevron>
            <Chevron className="chevron-2">
              <ChevronLineLeft className="line-left" />
              <ChevronLineRight className="line-right" />
            </Chevron>
          </ScrollIndicatorWrapper>
        </ContentContainer>
      </StickyContainer>
    </HeroSection>
  );
};

export default Hero;

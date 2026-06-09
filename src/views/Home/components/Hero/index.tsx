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
  ChevronLineRight,
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
      let targetY = window.scrollY + rect.bottom - window.innerHeight;
      
      if (window.innerWidth > 860) {
        targetY -= 90;
      }
      
      gsap.to(window, {
        duration: 1.5,
        scrollTo: targetY,
        ease: "power2.inOut"
      });
    }
  };

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
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      }
    });

    gsap.set(line1Ref.current, { xPercent: -50, yPercent: -50, y: "-0.6em" });
    gsap.set(line2ContainerRef.current, { xPercent: -50, yPercent: -50, y: "0.6em" });

    const brandPanelEl = document.querySelector('.brand-panel') as HTMLElement | null;
    const brandTextEl = brandPanelEl
      ? (Array.from(brandPanelEl.querySelectorAll('span'))
          .find(el => (el.textContent?.trim().length ?? 0) > 0) as HTMLElement | null)
      : null;
    let initX = 0, initY = 0, initScale = 1;

    const computeLogoMetrics = () => {
      if (!brandPanelEl) return;
      gsap.set(brandPanelEl, { clearProps: 'transform' });
      
      const logoEl = brandPanelEl.querySelector('.brand__logo') as HTMLElement | null;
      const bp = brandPanelEl.getBoundingClientRect();
      const logoRect = logoEl?.getBoundingClientRect();

      const logoNatCX = logoRect ? logoRect.left + logoRect.width / 2 : bp.left + bp.width / 2;
      const logoNatCY = logoRect ? logoRect.top + logoRect.height / 2 : bp.top + bp.height / 2;

      const origX = logoNatCX - bp.left;
      const origY = logoNatCY - bp.top;

      const isMobile = window.innerWidth <= 860;

      const heroCX = window.innerWidth / 2;
      const heroCY = window.innerHeight / 2 - (isMobile ? 80 : 120);
      
      const targetLogoWidth = isMobile ? 60 : 80;
      initScale = targetLogoWidth / (logoRect?.width || 34);
      initX = heroCX - logoNatCX;
      initY = heroCY - logoNatCY;

      gsap.set(brandPanelEl, { transformOrigin: `${origX}px ${origY}px` });
    };

    if (brandPanelEl) {
      computeLogoMetrics();
      ScrollTrigger.addEventListener('refreshInit', computeLogoMetrics);
      
      if (brandTextEl) {
        gsap.set(brandTextEl, { autoAlpha: 0 });
      }
    }

    tl.to(line1Ref.current, {
      y: "-2.6em",
      opacity: 0,
      filter: "blur(20px)",
      ease: "power2.inOut",
      duration: 1
    }, 0);

    if (brandPanelEl) {
      tl.fromTo(brandPanelEl, 
        {
          x: () => initX,
          y: () => initY,
          scale: () => initScale,
          autoAlpha: 1,
        },
        {
          x: 0, y: 0, scale: 1,
          ease: 'power3.inOut',
          duration: 0.85,
        }, 
        0
      );
      if (brandTextEl) {
        tl.to(brandTextEl, { autoAlpha: 1, duration: 0.2 }, 0.8);
      }
    }

    tl.to(scrollIndicatorRef.current, {
      y: "40px",
      opacity: 0,
      ease: "power2.inOut",
      duration: 0.8
    }, 0);

    tl.to(line2ContainerRef.current, {
      y: "0em",
      ease: "power2.inOut",
      duration: 1
    }, 0);

    tl.to(imageContainerRef.current, {
      height: "calc(100dvh - 130px)",
      ease: "power2.inOut",
      duration: 2
    }, 1);

    tl.to('.split-space', {
      opacity: 0,
      duration: 0.5
    }, 1);

    tl.to('.split-left', {
      x: () => {
        const container = document.querySelector('.split-left')?.parentElement as HTMLElement;
        const leftEl = document.querySelector('.split-left') as HTMLElement;
        if (!container || !leftEl) return 0;
        
        const C = container.offsetWidth / 2;
        const E_left = leftEl.offsetLeft + leftEl.offsetWidth - C;
        
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

        const isMobile = window.innerWidth <= 860;
        const pushRatio = isMobile ? 32 : 26;
        const pushAmount = pushRatio * window.innerHeight / 100;
        
        return pushAmount - E_right;
      },
      ease: "power2.inOut",
      duration: 2
    }, 1);

    tl.to({}, { duration: 0.8 });

    const heroImg = imageContainerRef.current?.querySelector('img');
    if (heroImg) {
      gsap.to(heroImg, {
        opacity: 0,
        filter: 'blur(20px)',
        scrollTrigger: {
          trigger: heroRef.current,
          start: "bottom 75%",
          end: "bottom 15%",
          scrub: 1,
        }
      });
    }

    return () => {
      ScrollTrigger.removeEventListener('refreshInit', computeLogoMetrics);
      if (brandPanelEl) gsap.set(brandPanelEl, { clearProps: 'all' });
      if (brandTextEl) gsap.set(brandTextEl, { clearProps: 'all' });
    };

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

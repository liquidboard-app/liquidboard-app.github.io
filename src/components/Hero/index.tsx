import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useTranslation } from '@/contexts/LanguageContext';
import {
  HeroSection,
  Title,
  HeroUnit,
  Lead,
  Cta,
  ButtonPrimary,
} from './styled';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const titleUnits = gsap.utils.toArray<HTMLElement>('.hero-unit');
    const lead = heroRef.current?.querySelector<HTMLElement>('.hero__lead');
    const cta = heroRef.current?.querySelector<HTMLElement>('.hero__cta');

    gsap.set(titleUnits, {
      autoAlpha: 0,
      y: 32,
      filter: "blur(18px)"
    });
    gsap.set(lead, {
      autoAlpha: 0,
      y: 22,
      filter: "blur(14px)"
    });
    gsap.set(cta, {
      autoAlpha: 0,
      y: 26,
      filter: "blur(12px)"
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (titleUnits.length) {
      tl.to(titleUnits,
        {
          y: 0,
          filter: "blur(0px)",
          autoAlpha: 1,
          duration: 0.72,
          stagger: 0.07,
          clearProps: "visibility"
        },
        0
      );
    }

    tl.to('.hero__lead',
      {
        y: 0,
        filter: "blur(0px)",
        autoAlpha: 1,
        duration: 0.62,
        clearProps: "visibility"
      },
      0.35
    );

    tl.to('.hero__cta',
      {
        y: 0,
        autoAlpha: 1,
        filter: "blur(0px)",
        duration: 0.58,
        clearProps: "visibility"
      },
      0.6
    );

    // Keep the reverse state stable when scrolling back up.
    gsap.fromTo(['.hero-unit', '.hero__lead', '.hero__cta'],
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0
      },
      {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom center",
          scrub: true,
          invalidateOnRefresh: true
        },
        opacity: 0,
        filter: "blur(10px)",
        y: -20,
        ease: "none",
        immediateRender: false
      }
    );
  }, { scope: heroRef });

  return (
    <HeroSection className="hero" ref={heroRef}>
      <Title>
        <span className="line">
          <HeroUnit className="hero-unit">Copy & Paste</HeroUnit>
        </span>
        <span className="line">
          <HeroUnit className="hero-unit">Fast & Safe</HeroUnit>
        </span>
      </Title>

      <Lead className="hero__lead">{t('hero.lead')}</Lead>

      <Cta className="hero__cta">
        <ButtonPrimary href="#">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <span>{t('cta.download')}</span>
        </ButtonPrimary>
      </Cta>
    </HeroSection>
  );
};

export default Hero;

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useTranslation } from '@/contexts/LanguageContext';
import {
  ShowcaseSection,
  ShowcaseBody,
  ShowcaseContent,
  FeatStepContainer,
  FeatStep,
  FeatStep2,
  ShowcaseVisual,
  MockupSlot,
  MockupPos,
  MockupImg,
  MockupImg2,
  SectionTitle,
  SectionLead,
} from './styled';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Showcase: React.FC = () => {
  const { t } = useTranslation();
  const showcaseRef = useRef<HTMLDivElement>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const posRef = useRef<HTMLDivElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Phone drop animation
    const slot = slotRef.current;
    const pos = posRef.current;
    const showcase = showcaseRef.current;
    const content = contentRef.current;

    if (!slot || !pos || !showcase) return;

    const tlDrop = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        endTrigger: showcase,
        end: "top 72%",
        scrub: 0.5,
        invalidateOnRefresh: true
      }
    });

    tlDrop.fromTo(pos,
      {
        x: () => {
          const slotRect = slot.getBoundingClientRect();
          return (window.innerWidth / 2) - (slotRect.left + slotRect.width / 2);
        },
        y: () => {
          const slotTop = slot.getBoundingClientRect().top + (window.scrollY || 0);
          return 430 - slotTop;
        },
        scale: () => {
          const vw = document.documentElement.clientWidth;
          const maxCrispW = 1350 / (window.devicePixelRatio || 1);
          const W0 = Math.min(vw * 0.7, 480 * 1.15, maxCrispW);
          const slotW = slot.offsetWidth || 1;
          return W0 / slotW;
        },
        transformOrigin: "center top"
      },
      {
        x: 0,
        y: 0,
        scale: 1,
        ease: "none"
      }
    );

    const img1 = img1Ref.current;
    const img2 = img2Ref.current;
    
    if (img1 && img2) {
      tlDrop.fromTo([img1, img2],
        {
          rotateX: 50,
          transformOrigin: "center top",
          transformPerspective: 1000
        },
        {
          rotateX: 0,
          ease: "none"
        },
        0
      );
    }

    if (content) {
      gsap.set(content, { autoAlpha: 0, y: 24, filter: "blur(12px)" });
      tlDrop.to(content, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        ease: "power2.out",
        duration: 0.22,
        overwrite: "auto"
      }, 0.62);
    }

    // 2. Showcase pinned sequence
    const step1 = step1Ref.current;
    const step2 = step2Ref.current;

    if (!step1 || !step2 || !img1 || !img2) return;

    // Initialize the incoming state for the second panel.
    gsap.set(step2, { filter: "blur(10px)", opacity: 0, y: 20 });
    gsap.set(img2, { filter: "blur(10px)", opacity: 0 });

    gsap.set(step1, { opacity: 1, filter: "blur(0px)", y: 0 });
    gsap.set(img1, { opacity: 1, filter: "blur(0px)", scale: 1 });

    const switchTl = gsap.timeline({
      paused: true,
      defaults: {
        ease: "power3.inOut",
        duration: 0.42
      }
    });

    switchTl
      .to(step1, {
        opacity: 0,
        filter: "blur(12px)",
        y: -18
      }, 0)
      .to(img1, {
        opacity: 0,
        filter: "blur(12px)",
        scale: 0.985
      }, 0)
      .to(step2, {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        ease: "power3.out",
        duration: 0.46
      }, 0.08)
      .to(img2, {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        ease: "power3.out",
        duration: 0.46
      }, 0.08);

    let currentStep = 1;

    ScrollTrigger.create({
      trigger: showcase,
      start: "top top",
      end: "+=980",
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        if (self.progress >= 0.38 && currentStep === 1) {
          currentStep = 2;
          switchTl.play();
        } else if (self.progress <= 0.24 && currentStep === 2) {
          currentStep = 1;
          switchTl.reverse();
        }
      }
    });

  }, { scope: showcaseRef });

  return (
    <ShowcaseSection className="showcase" ref={showcaseRef}>
      <div className="container" style={{ position: 'relative' }}>
        <ShowcaseBody>
          <ShowcaseContent ref={contentRef}>
            <FeatStepContainer>
              <FeatStep ref={step1Ref}>
                <SectionTitle>{t('show.title')}</SectionTitle>
                <SectionLead>{t('show.lead')}</SectionLead>
              </FeatStep>
              <FeatStep2 ref={step2Ref}>
                <SectionTitle>Paste anything, anywhere.</SectionTitle>
                <SectionLead>Your clipboard is now a powerful database ready to be utilized seamlessly across all your workflows.</SectionLead>
              </FeatStep2>
            </FeatStepContainer>
          </ShowcaseContent>

          <ShowcaseVisual aria-hidden="true">
            <MockupSlot ref={slotRef}>
              <MockupPos ref={posRef}>
                <MockupImg src="/assets/lb-text.png" alt="LiquidBoard app text screenshot" ref={img1Ref} />
                <MockupImg2 src="/assets/lb-photos.PNG" alt="LiquidBoard app photos screenshot" ref={img2Ref} />
              </MockupPos>
            </MockupSlot>
          </ShowcaseVisual>
        </ShowcaseBody>
      </div>
    </ShowcaseSection>
  );
};

export default Showcase;

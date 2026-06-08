import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useTranslation } from '@/contexts/LanguageContext';
import {
  ShowcaseSection,
  FeatBlock,
  TextContent,
  SectionTitle,
  SectionLead,
  ImageContent,
  MockupImg,
} from './styled';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Showcase: React.FC = () => {
  const { t } = useTranslation();
  const showcaseRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const blocks = gsap.utils.toArray('.feat-block') as HTMLElement[];
    
    blocks.forEach((block) => {
      gsap.fromTo(block, 
        { opacity: 0, y: 40 },
        {
          opacity: 1, 
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: block,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, { scope: showcaseRef });

  return (
    <ShowcaseSection ref={showcaseRef}>
      
      <FeatBlock className="feat-block">
        <TextContent>
          <SectionTitle>{t('show.title')}</SectionTitle>
          <SectionLead>{t('show.lead')}</SectionLead>
        </TextContent>
        <ImageContent>
          <MockupImg src="/assets/lb-text.png" alt="LiquidBoard app text screenshot" />
        </ImageContent>
      </FeatBlock>

      <FeatBlock className="feat-block">
        <TextContent>
          <SectionTitle>Paste anything, anywhere.</SectionTitle>
          <SectionLead>Your clipboard is now a powerful database ready to be utilized seamlessly across all your workflows.</SectionLead>
        </TextContent>
        <ImageContent>
          <MockupImg src="/assets/lb-photos.PNG" alt="LiquidBoard app photos screenshot" />
        </ImageContent>
      </FeatBlock>

      <FeatBlock className="feat-block">
        <TextContent>
          <SectionTitle>Transform your productivity.</SectionTitle>
          <SectionLead>Unlock the true potential of your workflow with intelligent data management and intuitive shortcuts.</SectionLead>
        </TextContent>
        <ImageContent>
          <MockupImg src="/assets/lb-text.png" alt="LiquidBoard app text screenshot 3" />
        </ImageContent>
      </FeatBlock>

    </ShowcaseSection>
  );
};

export default Showcase;

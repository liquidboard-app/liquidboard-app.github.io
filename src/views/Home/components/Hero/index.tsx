import React from 'react';
import { useTranslation } from '@/contexts/LanguageContext';
import AppStoreButton from '../AppStoreButton';
import { HeroSection } from './styled';

const Hero: React.FC = () => {
  const { dict } = useTranslation();
  const heroLead = `${[dict.hero.line1, dict.hero.line2.left, dict.hero.line2.right].join(' ')}.`;

  return (
    <HeroSection>
      <div className="hero-intro">
        <div className="hero-layout">
          <h1 className="hero-brand">
            <span className="hero-brand-word">LiquidBoard</span>
            <span className="hero-brand-dot" aria-hidden="true" />
          </h1>
          <div className="hero-aside">
            <p className="hero-description-lead">{heroLead}</p>
            <AppStoreButton className="hero-download-button" animatedIcon />
          </div>
        </div>
      </div>
    </HeroSection>
  );
};

export default Hero;

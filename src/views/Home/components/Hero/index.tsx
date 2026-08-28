import React from 'react';
import { useTranslation } from '@/contexts/LanguageContext';
import AppStoreButton from '../AppStoreButton';
import { HeroSection } from './styled';

type HeroProps = {
  title?: string;
  description?: string;
  showDownload?: boolean;
};

const Hero: React.FC<HeroProps> = ({
  title = 'LiquidBoard',
  description,
  showDownload = true,
}) => {
  const { dict } = useTranslation();
  const heroLead = description ?? `${[dict.hero.line1, dict.hero.line2.left, dict.hero.line2.right].join(' ')}.`;

  return (
    <HeroSection>
      <div className="hero-intro">
        <div className="hero-layout">
          <h1 className="hero-brand" key={title}>
            <span className="hero-brand-word">{title}</span>
            <span className="hero-brand-dot" aria-hidden="true" />
          </h1>
          <div className="hero-aside">
            <p className="hero-description-lead">{heroLead}</p>
            {showDownload ? <AppStoreButton className="hero-download-button" animatedIcon /> : null}
          </div>
        </div>
      </div>
    </HeroSection>
  );
};

export default Hero;

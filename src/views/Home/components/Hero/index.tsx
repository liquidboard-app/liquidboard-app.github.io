import React from 'react';
import { useTranslation } from '@/contexts/LanguageContext';
import { getHeroHighlight } from '../../copy';
import { Hero as HeroSection } from '../../styled';
import AppStoreButton from '../AppStoreButton';

const Hero: React.FC = () => {
  const { dict, lang } = useTranslation();
  const highlightTerm = getHeroHighlight(lang);
  const highlightIndex = dict.hero.line1.toLocaleLowerCase().indexOf(highlightTerm.toLocaleLowerCase());
  const prefix = highlightIndex >= 0 ? dict.hero.line1.slice(0, highlightIndex) : '';
  const highlight = highlightIndex >= 0
    ? dict.hero.line1.slice(highlightIndex, highlightIndex + highlightTerm.length)
    : dict.hero.line1;
  const suffix = highlightIndex >= 0 ? dict.hero.line1.slice(highlightIndex + highlightTerm.length) : '';

  return (
    <HeroSection>
      <div className="hero-content">
        <h1>
          {prefix}<span className="highlight">{highlight}</span>{suffix}
          <br />
          {dict.hero.line2.left} {dict.hero.line2.right}
        </h1>
        <div className="hero-actions"><AppStoreButton /></div>
      </div>
    </HeroSection>
  );
};

export default Hero;

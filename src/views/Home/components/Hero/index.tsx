import React from 'react';
import { useTranslation } from '@/contexts/LanguageContext';
import { getHeroHighlight } from '../../copy';
import { Hero as HeroSection } from '../../styled';
import AppStoreButton from '../AppStoreButton';

const HERO_WORD_STAGGER = 54;
const HERO_WORD_DURATION = 640;

type SplitHeroText = {
  content: React.ReactNode[];
  nextIndex: number;
};

const splitHeroText = (
  text: string,
  startIndex: number,
  keyPrefix: string,
  splitCharacters: boolean,
): SplitHeroText => {
  let nextIndex = startIndex;
  const content: React.ReactNode[] = [];

  text.split(/(\s+)/).forEach((part, partIndex) => {
    if (!part) return;
    if (/^\s+$/.test(part)) {
      content.push(<React.Fragment key={`${keyPrefix}-space-${partIndex}`}>{part}</React.Fragment>);
      return;
    }

    const units = splitCharacters ? Array.from(part) : [part];
    units.forEach((unit, unitIndex) => {
      const wordIndex = nextIndex;
      nextIndex += 1;
      content.push(
        <span
          className="hero-split-word"
          key={`${keyPrefix}-${partIndex}-${unitIndex}-${unit}`}
          style={{ '--hero-word-delay': `${wordIndex * HERO_WORD_STAGGER}ms` } as React.CSSProperties}
        >
          <span>{unit}</span>
        </span>,
      );
    });
  });

  return { content, nextIndex };
};

const Hero: React.FC = () => {
  const { dict, lang } = useTranslation();
  const highlightTerm = getHeroHighlight(lang);
  const highlightIndex = dict.hero.line1.toLocaleLowerCase().indexOf(highlightTerm.toLocaleLowerCase());
  const prefix = highlightIndex >= 0 ? dict.hero.line1.slice(0, highlightIndex) : '';
  const highlight = highlightIndex >= 0
    ? dict.hero.line1.slice(highlightIndex, highlightIndex + highlightTerm.length)
    : dict.hero.line1;
  const suffix = highlightIndex >= 0 ? dict.hero.line1.slice(highlightIndex + highlightTerm.length) : '';
  const splitFirstLineByCharacter = !/\s/.test(dict.hero.line1);
  const secondLine = `${dict.hero.line2.left} ${dict.hero.line2.right}`.trim();
  const splitSecondLineByCharacter = !/\s/.test(`${dict.hero.line2.left}${dict.hero.line2.right}`);
  const prefixSplit = splitHeroText(prefix, 0, 'hero-prefix', splitFirstLineByCharacter);
  const highlightSplit = splitHeroText(highlight, prefixSplit.nextIndex, 'hero-highlight', splitFirstLineByCharacter);
  const suffixSplit = splitHeroText(suffix, highlightSplit.nextIndex, 'hero-suffix', splitFirstLineByCharacter);
  const secondLineSplit = splitHeroText(secondLine, suffixSplit.nextIndex, 'hero-line-two', splitSecondLineByCharacter);
  const splitEnd = Math.max(HERO_WORD_DURATION, (secondLineSplit.nextIndex - 1) * HERO_WORD_STAGGER + HERO_WORD_DURATION);
  const highlightDelay = splitEnd + 110;
  const buttonDelay = Math.round(splitEnd * 0.5);
  // The button stays a circle for the rise, then unfolds only after it has settled.
  const buttonLabelDelay = buttonDelay + 820;
  const motionStyle = {
    '--hero-highlight-delay': `${highlightDelay}ms`,
    '--hero-button-delay': `${buttonDelay}ms`,
    '--hero-button-label-delay': `${buttonLabelDelay}ms`,
  } as React.CSSProperties;

  return (
    <HeroSection style={motionStyle}>
      <div className="hero-content" key={lang}>
        <h1>
          {prefixSplit.content}<span className="highlight">{highlightSplit.content}</span>{suffixSplit.content}
          <br />
          {secondLineSplit.content}
        </h1>
        <div className="hero-actions"><AppStoreButton className="hero-download-button" /></div>
      </div>
    </HeroSection>
  );
};

export default Hero;

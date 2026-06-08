import React, { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { useTranslation } from '@/contexts/LanguageContext';
import {
  HeaderWrapper,
  Brand,
  Logo,
  ExpandedMenuItem,
  PillActionButton,
  ActionGroup,
} from './styled';
import LiquidGlass from './LiquidGlass';

const AnimatedText = ({ text }: { text: string }) => {
  const [displayTexts, setDisplayTexts] = useState([{ id: Date.now(), text }]);

  useEffect(() => {
    const current = displayTexts[displayTexts.length - 1];
    if (current.text !== text) {
      const newId = Date.now();
      setDisplayTexts(prev => [...prev, { id: newId, text }]);
      
      // Cleanup old texts after animation
      setTimeout(() => {
        setDisplayTexts(prev => prev.filter(t => t.id === newId));
      }, 400);
    }
  }, [text, displayTexts]);

  return (
    <span className="animated-text-wrapper">
      {displayTexts.map((item, index) => {
        const isLatest = index === displayTexts.length - 1;
        const isAnimating = displayTexts.length > 1;
        
        return (
          <span 
            key={item.id} 
            className={`animated-text ${isLatest ? 'latest' : 'old'} ${isAnimating && isLatest ? 'animating' : ''}`}
            aria-hidden={!isLatest}
          >
            {item.text}
          </span>
        );
      })}
    </span>
  );
};

const Header: React.FC = () => {
  const { lang, changeLang, t } = useTranslation();

  const handleLangToggle = () => {
    changeLang(lang === 'en' ? 'vi' : 'en');
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useGSAP(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
  }, { scope: containerRef, dependencies: [] });

  return (
    <HeaderWrapper ref={containerRef}>
      <LiquidGlass className="main-header-glass">
        <div className="header-content">
          <div className="header-left">
            <Brand to="/" aria-label="LiquidBoard home">
              <Logo className="brand__logo" />
              <span>LiquidBoard</span>
            </Brand>
          </div>

          <div className="header-center">
            <div className="main-menu">
              <ExpandedMenuItem to="/about"><AnimatedText text={t('nav.about')} /></ExpandedMenuItem>
              <ExpandedMenuItem to="/pricing"><AnimatedText text={t('nav.pricing')} /></ExpandedMenuItem>
              <ExpandedMenuItem to="/policy"><AnimatedText text={t('nav.policy')} /></ExpandedMenuItem>
              <ExpandedMenuItem to="/help"><AnimatedText text={t('nav.help')} /></ExpandedMenuItem>
            </div>
          </div>

          <div className="header-right">
            <ActionGroup>
              <PillActionButton onClick={handleLangToggle} aria-label="Toggle Language" className="lang-toggle-btn">
                <div style={{ position: 'relative', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className={`lang-text ${lang === 'en' ? 'active' : 'hidden'}`}>EN</span>
                  <span className={`lang-text ${lang === 'vi' ? 'active' : 'hidden'}`}>VI</span>
                </div>
              </PillActionButton>

              <PillActionButton as="a" href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" aria-label="Download iOS App" className="download-btn">
                <svg viewBox="0 0 384 512" fill="currentColor" style={{ width: '16px', height: '16px', marginBottom: '2px' }}>
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <span style={{ fontSize: '13px', fontWeight: 650 }}>Download iOS</span>
              </PillActionButton>
            </ActionGroup>
          </div>
        </div>
      </LiquidGlass>
    </HeaderWrapper>
  );
};

export default Header;

import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { useTranslation } from '@/contexts/LanguageContext';
import {
  HeaderWrapper,
  Brand,
  Logo,
  ExpandedMenuItem,
  PillActionButton,
  LanguageSwitch,
  LanguageToggleButton,
  LanguageDivider,
  MobileMenuOverlay,
  MobileGradientBlur,
} from './styled';
import LiquidGlass from '@/components/LiquidGlass';

const AnimatedText = ({ text }: { text: string }) => {
  const [displayTexts, setDisplayTexts] = useState([{ id: Date.now(), text }]);

  useEffect(() => {
    const current = displayTexts[displayTexts.length - 1];
    if (current.text !== text) {
      const newId = Date.now();
      setDisplayTexts(prev => [...prev, { id: newId, text }]);
      
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const renderLanguageToggle = (className?: string) => (
    <LanguageSwitch className={className} aria-hidden="true">
      <LanguageToggleButton
        type="button"
        className={lang === 'vi' ? 'is-vi' : 'is-en'}
        onClick={() => changeLang(lang === 'en' ? 'vi' : 'en')}
        aria-label={`Switch language to ${lang === 'en' ? 'Vietnamese' : 'English'}`}
        aria-pressed={lang === 'vi'}
      >
        <span className="lang-option lang-option-en" aria-hidden="true">EN</span>
        <span className="lang-option lang-option-vi" aria-hidden="true">VI</span>
        <span className="lang-thumb" aria-hidden="true" />
      </LanguageToggleButton>
    </LanguageSwitch>
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => {
      const newState = !prev;
      const lenis = (window as any).__lbLenis;
      if (newState) {
        document.body.style.overflow = 'hidden';
        if (lenis) lenis.stop();
      } else {
        document.body.style.overflow = '';
        if (lenis) lenis.start();
      }
      return newState;
    });
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }

    const actionPanel = containerRef.current?.querySelector('.action-panel') as HTMLElement;
    if (!actionPanel) return;
    let st: ScrollTrigger | null = null;

    if (isHome) {
      st = ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        end: '150px top',
        scrub: true,
        invalidateOnRefresh: true,
        animation: gsap.timeline()
          .fromTo(actionPanel,
            {
              x: () => {
                gsap.set('.download-brand-text', { clearProps: 'all' });
                gsap.set(actionPanel, { clearProps: 'transform' });
                const rect = actionPanel.getBoundingClientRect();
                const viewportCenter = window.innerWidth / 2;
                const elementCenter = rect.left + rect.width / 2;
                return viewportCenter - elementCenter;
              },
              y: () => {
                gsap.set('.download-brand-text', { clearProps: 'all' });
                gsap.set(actionPanel, { clearProps: 'transform' });
                const rect = actionPanel.getBoundingClientRect();
                const elementCenterY = rect.top + rect.height / 2;
                const isMobile = window.innerWidth <= 860;
                if (isMobile) {
                  const mobileTopCenterY = 16 + rect.height / 2;
                  return mobileTopCenterY - elementCenterY;
                }

                const logoCenterY = window.innerHeight / 2 - 160;
                const logoBottomEdge = logoCenterY + 40;
                const targetCenterY = logoBottomEdge + 40;
                return targetCenterY - elementCenterY;
              }
            },
            {
              x: 0,
              y: 0,
              ease: 'power2.inOut',
            },
            0
          )
          .fromTo(
            '.download-brand-text',
            { 
              width: () => {
                const el = document.querySelector('.download-brand-text') as HTMLElement;
                if (!el) return 200;
                gsap.set(el, { clearProps: 'all' });
                return el.offsetWidth;
              },
              opacity: 1, 
              filter: 'blur(0px)' 
            },
            { width: 0, opacity: 0, filter: 'blur(10px)', ease: 'power2.inOut' },
            0
          )
      });
    } else {
      gsap.to(actionPanel, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        onComplete: () => {
          gsap.set(actionPanel, { clearProps: 'transform' });
        }
      });
    }

    return () => {
      if (st) {
        st.kill();
      }
    };
  }, [lang, isHome]);

  return (
    <HeaderWrapper ref={containerRef}>
      <MobileGradientBlur>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </MobileGradientBlur>
      <MobileMenuOverlay className={isMobileMenuOpen ? 'open' : ''}>
        <div className="mobile-menu-links">
          <ExpandedMenuItem to="/" onClick={toggleMobileMenu}><AnimatedText text={t('nav.home')} /></ExpandedMenuItem>
          <ExpandedMenuItem to="/about" onClick={toggleMobileMenu}><AnimatedText text={t('nav.about')} /></ExpandedMenuItem>
          <ExpandedMenuItem to="/pricing" onClick={toggleMobileMenu}><AnimatedText text={t('nav.pricing')} /></ExpandedMenuItem>
          <ExpandedMenuItem to="/policy" onClick={toggleMobileMenu}><AnimatedText text={t('nav.policy')} /></ExpandedMenuItem>
          <ExpandedMenuItem to="/help" onClick={toggleMobileMenu}><AnimatedText text={t('nav.help')} /></ExpandedMenuItem>
        </div>
        {renderLanguageToggle('mobile-language-toggle')}
      </MobileMenuOverlay>

      <div className="header-panel brand-panel">
        <Brand to="/" aria-label="LiquidBoard home">
          <Logo className="brand__logo" />
          <span>LiquidBoard</span>
        </Brand>
      </div>

      <div className="header-panel action-panel">
        <PillActionButton as="a" href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" aria-label="Download iOS App" className="download-btn">
          <svg viewBox="0 0 384 512" fill="currentColor" style={{ width: '15px', height: '15px', marginBottom: '1px', flexShrink: 0 }}>
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
          </svg>
          <span style={{ fontSize: '13px', fontWeight: 650, display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
            <span className="download-prefix" style={{ whiteSpace: 'pre' }}>{t('header.download.prefix')}</span>
            {isHome && (
              <span className="download-brand-text" style={{ display: 'inline-block', overflow: 'hidden', whiteSpace: 'pre' }}>
                {t('header.download.brand')}
              </span>
            )}
            <span className="download-suffix" style={{ whiteSpace: 'pre' }}>{t('header.download.suffix')}</span>
          </span>
        </PillActionButton>
      </div>

      <div className={`header-panel menu-panel ${isMobileMenuOpen ? 'menu-open' : ''}`}>
        <LiquidGlass className="floating-glass menu-glass" padding="4px 6px">
          <div className="main-menu">
            <ExpandedMenuItem to="/"><AnimatedText text={t('nav.home')} /></ExpandedMenuItem>
            <ExpandedMenuItem to="/about"><AnimatedText text={t('nav.about')} /></ExpandedMenuItem>
            <ExpandedMenuItem to="/pricing"><AnimatedText text={t('nav.pricing')} /></ExpandedMenuItem>
            <ExpandedMenuItem to="/policy"><AnimatedText text={t('nav.policy')} /></ExpandedMenuItem>
            <ExpandedMenuItem to="/help"><AnimatedText text={t('nav.help')} /></ExpandedMenuItem>
            <LanguageDivider className="menu-language-divider" aria-hidden="true">|</LanguageDivider>
            {renderLanguageToggle('menu-language-toggle')}
          </div>
          <button className={`hamburger-btn ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle Menu">
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </button>
        </LiquidGlass>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

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
  LangDropdownContainer,
  LangDropdownButton,
  LangDropdownMenu,
  LangDropdownItem,
  MobileMenuOverlay,
  ProgressiveBlur,
  HeroBrand,
  HeroBrandLogo,
} from './styled';

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

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const LANGUAGES = [
  { code: 'en', title: 'English', native: 'English' },
  { code: 'vi', title: 'Vietnamese', native: 'Tiếng Việt' },
  { code: 'ja', title: 'Japanese', native: '日本語' },
  { code: 'es', title: 'Spanish', native: 'Español' },
  { code: 'zh-TW', title: 'Chinese (Traditional)', native: '繁體中文' },
  { code: 'pt-BR', title: 'Portuguese (Brazil)', native: 'Português' },
  { code: 'fr', title: 'French', native: 'Français' },
  { code: 'de', title: 'German', native: 'Deutsch' },
  { code: 'ru', title: 'Russian', native: 'Русский' },
  { code: 'ko', title: 'Korean', native: '한국어' },
  { code: 'hi', title: 'Hindi', native: 'हिन्दी' },
  { code: 'bn', title: 'Bengali', native: 'বাংলা' },
  { code: 'id', title: 'Indonesian', native: 'Bahasa Indonesia' },
  { code: 'it', title: 'Italian', native: 'Italiano' },
  { code: 'th', title: 'Thai', native: 'ไทย' },
  { code: 'tl', title: 'Filipino', native: 'Filipino' },
  { code: 'pl', title: 'Polish', native: 'Polski' },
];

const LanguageDropdown = ({ className }: { className?: string }) => {
  const { lang, changeLang } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];

  return (
    <LangDropdownContainer className={className} ref={menuRef}>
      <LangDropdownButton onClick={() => setIsOpen(!isOpen)}>
        <GlobeIcon />
        <span>{currentLang.code.toUpperCase()}</span>
        <ChevronDownIcon />
      </LangDropdownButton>
      <LangDropdownMenu $isOpen={isOpen} data-lenis-prevent>
        {LANGUAGES.map((l) => (
          <LangDropdownItem 
            key={l.code}
            $active={lang === l.code} 
            onClick={() => {
              changeLang(l.code);
              setIsOpen(false);
            }}
          >
            <span className="lang-title">{l.title}</span>
            <span className="lang-native">{l.native}</span>
          </LangDropdownItem>
        ))}
      </LangDropdownMenu>
    </LangDropdownContainer>
  );
};

const Header: React.FC = () => {
  const { lang, dict } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';



  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const lenis = (window as any).__lbLenis;
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = '';
      if (lenis) lenis.start();
    }
    
    return () => {
      document.body.style.overflow = '';
      if (lenis) lenis.start();
    };
  }, [isMobileMenuOpen]);

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
      <ProgressiveBlur>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </ProgressiveBlur>
      <MobileMenuOverlay className={isMobileMenuOpen ? 'open' : ''}>
        <div className="mobile-menu-links">
          <ExpandedMenuItem to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <AnimatedText text={dict.nav.home} />
          </ExpandedMenuItem>
          <ExpandedMenuItem to="/about" onClick={() => setIsMobileMenuOpen(false)}>
            <AnimatedText text={dict.nav.about} />
          </ExpandedMenuItem>
          <ExpandedMenuItem to="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
            <AnimatedText text={dict.nav.pricing} />
          </ExpandedMenuItem>
          <ExpandedMenuItem to="/policy" onClick={() => setIsMobileMenuOpen(false)}>
            <AnimatedText text={dict.nav.policy} />
          </ExpandedMenuItem>
          <ExpandedMenuItem to="/help" onClick={() => setIsMobileMenuOpen(false)}>
            <AnimatedText text={dict.nav.help} />
          </ExpandedMenuItem>
        </div>
      </MobileMenuOverlay>

      <LanguageDropdown className="mobile-language-toggle" />

      {isHome && (
        <HeroBrand className="hero-brand">
          <HeroBrandLogo className="hero-brand__logo" src="/assets/logo-app-light.jpg" alt="Hero Logo" />
        </HeroBrand>
      )}

      <div className="header-panel brand-panel">
        <Brand to="/" aria-label="LiquidBoard home">
          <Logo className="brand__logo" src="/assets/logo-app-light.jpg" alt="LiquidBoard Logo" />
          <span>LiquidBoard</span>
        </Brand>
      </div>

      <div className="header-panel action-panel">
        <PillActionButton as="a" href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" aria-label="Download iOS App" className="download-btn">
          <svg viewBox="0 0 384 512" fill="currentColor" style={{ width: '15px', height: '15px', marginBottom: '1px', flexShrink: 0 }}>
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
          </svg>
          <span style={{ fontSize: '13px', fontWeight: 650, display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
            <span className="download-prefix" style={{ whiteSpace: 'pre' }}>{dict.header.download.prefix}</span>
            {isHome && (
              <span className="download-brand-text" style={{ display: 'inline-block', overflow: 'hidden', whiteSpace: 'pre' }}>
                {dict.header.download.brand}
              </span>
            )}
            <span className="download-suffix" style={{ whiteSpace: 'pre' }}>{dict.header.download.suffix}</span>
          </span>
        </PillActionButton>
      </div>

      <div className={`header-panel menu-panel ${isMobileMenuOpen ? 'menu-open' : ''}`}>
        <div className="main-menu">
          <ExpandedMenuItem to="/"><AnimatedText text={dict.nav.home} /></ExpandedMenuItem>
          <ExpandedMenuItem to="/about"><AnimatedText text={dict.nav.about} /></ExpandedMenuItem>
          <ExpandedMenuItem to="/pricing"><AnimatedText text={dict.nav.pricing} /></ExpandedMenuItem>
          <ExpandedMenuItem to="/policy"><AnimatedText text={dict.nav.policy} /></ExpandedMenuItem>
          <ExpandedMenuItem to="/help"><AnimatedText text={dict.nav.help} /></ExpandedMenuItem>
          <LanguageDropdown className="menu-language-toggle" />
        </div>
        <button className={`hamburger-btn ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle Menu">
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

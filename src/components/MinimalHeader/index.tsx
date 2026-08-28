import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Check, Globe } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from '@/contexts/LanguageContext';
import { getAccessibilityLabels, getLanguageConfig, getMenuToggleLabels, getUpdatesLabel, supportedLanguages } from '@/locales/config';
import { sentenceCase } from '@/locales/casing';
import {
  HeaderShell,
  HeaderBrand,
  HeaderActions,
  LanguageButton,
  MenuToggleButton,
  ProgressiveBlur,
  MenuOverlay,
  MenuOverlayContent,
  MenuOverlayList,
  MenuOverlayLink,
  LanguageOverlay,
  LanguagePanel,
  LanguagePanelHeader,
  LanguageOption,
  LanguageOptions,
} from './styled';

const MinimalHeader: React.FC = () => {
  const { lang, changeLang, dict, isLanguageChanging } = useTranslation();
  const languageCode = ({ 'zh-TW': 'TW', 'zh-CN': 'CN' }[lang] ?? lang.slice(0, 2).toUpperCase());
  const orderedLanguages = [...supportedLanguages].sort((a, b) => Number(b.code === lang) - Number(a.code === lang));
  const accessibility = getAccessibilityLabels(lang);
  const menuLabels = getMenuToggleLabels(lang);
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [languageHasOpened, setLanguageHasOpened] = useState(false);
  const [pendingLanguage, setPendingLanguage] = useState<string | null>(null);
  const closeLanguageRef = useRef<HTMLButtonElement>(null);
  const activeLanguageRef = useRef<HTMLButtonElement>(null);
  const languageOptionsRef = useRef<HTMLDivElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const menuOverlayRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { to: '/', label: sentenceCase(dict.nav.home, lang), end: true },
    { to: '/about', label: sentenceCase(dict.nav.about, lang) },
    { to: '/pricing', label: sentenceCase(dict.nav.pricing, lang) },
    { to: '/updates', label: sentenceCase(getUpdatesLabel(lang), lang) },
    { to: '/policy', label: sentenceCase(dict.nav.policy, lang) },
    { to: '/help/contact', label: sentenceCase(dict.nav.help, lang) },
  ];

  const closeLanguage = useCallback(() => {
    setLanguageOpen(false);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const handleHomeNavigation = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    setMenuOpen(false);
    if (pathname !== '/' || event.button !== 0 || event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) return;
    event.preventDefault();
    window.dispatchEvent(new Event('liquidboard:replay-home'));
  }, [pathname]);

  const selectLanguage = async (code: string) => {
    if (code === lang || isLanguageChanging) return;
    setPendingLanguage(code);
    try {
      await changeLang(code);
      closeLanguage();
    } finally {
      setPendingLanguage(null);
    }
  };

  useEffect(() => {
    setMenuOpen(false);
    setLanguageOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (target && (menuOverlayRef.current?.contains(target) || menuToggleRef.current?.contains(target))) return;
      closeMenu();
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [closeMenu, menuOpen]);

  useEffect(() => {
    if (!languageOpen) return undefined;
    const focusFrame = window.requestAnimationFrame(() => closeLanguageRef.current?.focus());
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !isLanguageChanging) closeLanguage();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [closeLanguage, isLanguageChanging, languageOpen]);

  useEffect(() => {
    if (!menuOpen && !languageOpen) return undefined;
    const body = document.body;
    const root = document.documentElement;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyOverscroll = body.style.overscrollBehavior;
    const previousRootOverflow = root.style.overflow;
    const previousRootOverscroll = root.style.overscrollBehavior;

    body.style.overflow = 'hidden';
    body.style.overscrollBehavior = 'none';
    root.style.overflow = 'hidden';
    root.style.overscrollBehavior = 'none';

    return () => {
      body.style.overflow = previousBodyOverflow;
      body.style.overscrollBehavior = previousBodyOverscroll;
      root.style.overflow = previousRootOverflow;
      root.style.overscrollBehavior = previousRootOverscroll;
    };
  }, [languageOpen, menuOpen]);

  useLayoutEffect(() => {
    if (!languageOpen) return;
    const options = languageOptionsRef.current;
    const activeLanguage = activeLanguageRef.current;
    if (!options || !activeLanguage) return;

    const optionsStyle = window.getComputedStyle(options);
    const activeStyle = window.getComputedStyle(activeLanguage);
    const listTop = Number.parseFloat(optionsStyle.paddingTop) || 0;
    const itemGap = Number.parseFloat(activeStyle.marginBottom) || 0;
    const activeAsSecondItemTop = listTop + activeLanguage.offsetHeight + itemGap;
    options.scrollTop = Math.max(0, activeLanguage.offsetTop - activeAsSecondItemTop);
  }, [lang, languageOpen]);

  return (
    <>
      <HeaderShell>
        <ProgressiveBlur aria-hidden="true">
          {Array.from({ length: 8 }).map((_, index) => <div key={index} />)}
        </ProgressiveBlur>

        <HeaderBrand
          to="/"
          aria-label={accessibility.brandHome}
          onClick={handleHomeNavigation}
        >
          <span className="header-brand-logo" aria-hidden="true">
            <img src="/assets/logo-app-dark.jpg" alt="" />
          </span>
        </HeaderBrand>

        <HeaderActions>
          <LanguageButton
            type="button"
            aria-label={accessibility.changeLanguage}
            aria-expanded={languageOpen}
            aria-controls="minimal-language-panel"
            onClick={() => {
              setMenuOpen(false);
              setLanguageHasOpened(true);
              setLanguageOpen((open) => !open);
            }}
          >
            <span className="language-code">{languageCode}</span>
            <Globe className="language-globe" size={18} strokeWidth={2} aria-hidden="true" />
          </LanguageButton>
          <MenuToggleButton
            ref={menuToggleRef}
            type="button"
            className={menuOpen ? 'open' : ''}
            aria-label={menuOpen ? accessibility.closeMenu : accessibility.openMenu}
            aria-expanded={menuOpen}
            onClick={() => {
              setLanguageOpen(false);
              setMenuOpen((open) => !open);
            }}
          >
            <span className="menu-toggle-labels" aria-hidden="true">
              <span className="menu-toggle-label menu-toggle-label-menu">{menuLabels.menu}</span>
              <span className="menu-toggle-label menu-toggle-label-close">{menuLabels.close}</span>
            </span>
          </MenuToggleButton>
        </HeaderActions>
      </HeaderShell>

      <MenuOverlay ref={menuOverlayRef} $open={menuOpen} aria-hidden={!menuOpen}>
        <MenuOverlayContent>
          <MenuOverlayList>
            <div className="menu-navigation">
              {menuItems.map((item) => (
                <MenuOverlayLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={item.to === '/' ? handleHomeNavigation : closeMenu}
                >
                  {item.label}
                </MenuOverlayLink>
              ))}
            </div>
          </MenuOverlayList>
        </MenuOverlayContent>
      </MenuOverlay>

      <LanguageOverlay
        $open={languageOpen}
        $hasOpened={languageHasOpened}
        onClick={closeLanguage}
        aria-hidden={!languageOpen}
      >
        <LanguagePanel
          id="minimal-language-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="minimal-language-title"
          onClick={(event) => event.stopPropagation()}
        >
          <LanguagePanelHeader>
            <ProgressiveBlur className="language-panel-progressive-blur" aria-hidden="true">
              {Array.from({ length: 8 }).map((_, index) => <div key={index} />)}
            </ProgressiveBlur>
            <h2 id="minimal-language-title">{getLanguageConfig(lang).chooseLabel}</h2>
            <button
              ref={closeLanguageRef}
              type="button"
              aria-label={accessibility.closeLanguageSelection}
              disabled={isLanguageChanging}
              onClick={closeLanguage}
            >
              <span className="language-close-icon" aria-hidden="true">
                <i />
                <i />
              </span>
            </button>
          </LanguagePanelHeader>
          <LanguageOptions ref={languageOptionsRef}>
            {orderedLanguages.map((language) => {
              const active = lang === language.code;
              const loading = pendingLanguage === language.code && isLanguageChanging;
              return (
                <LanguageOption
                  key={language.code}
                  ref={active ? activeLanguageRef : undefined}
                  type="button"
                  $active={active}
                  disabled={active || isLanguageChanging}
                  onClick={() => { void selectLanguage(language.code); }}
                >
                  <span>
                    <strong>{language.label}</strong>
                    <small>{language.native}</small>
                  </span>
                  {loading ? <i className="spinner" /> : active ? <Check size={18} strokeWidth={3} /> : null}
                </LanguageOption>
              );
            })}
          </LanguageOptions>
        </LanguagePanel>
      </LanguageOverlay>
    </>
  );
};

export default MinimalHeader;

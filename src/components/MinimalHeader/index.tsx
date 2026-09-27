import styled from 'styled-components';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Check, Languages, Moon, Sun, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from '@/contexts/LanguageContext';
import { getAccessibilityLabels, getHeaderActionLabels, getLanguageConfig, getMenuToggleLabels, supportedLanguages } from '@/components/Translations/Global/config';
import { sentenceCase, titleCaseLatin } from '@/components/Translations/Global/casing';
import { publicAsset } from '@/utils/publicAssets';
import { HeaderShell, HeaderBrand, HeaderNav, HeaderLink, HeaderActions, HeaderButton, MenuButton, MenuOverlay } from './styled';
import { LanguageItem, LanguageList as FullLanguageList, LanguageModal, LanguageModalHeader, ProgressiveBlur } from '../LanguagePicker/styled';

const MenuIcon = styled.svg``;
const MenuLine = styled.path``;


const Logo = styled.img``;
const HeaderBrandSpan = styled.span``;
const MobileMenuControls = styled.div``;
const ThemeIcon = styled.span``;
const TooltipPopover = styled.span``;
const TooltipPopoverI = styled.i``;
const LanguageModalBlurDiv = styled.div``;
const LanguageModalTitle = styled.h2``;
const LanguageModalHeaderButton = styled.button``;
const LanguageItemsDiv = styled.div``;
const LanguageCopy = styled.span``;
const LanguageCopyStrong = styled.strong``;
const LanguageCopySmall = styled.small``;
const LanguageStatus = styled.span``;
const LanguageProgressCircle = styled.span``;
const LanguageProgressRing = styled.span``;


const MinimalHeader: React.FC = () => {
  const { lang, changeLang, dict, isLanguageChanging } = useTranslation();
  const [theme, setTheme] = useState<'light' | 'dark'>(() => (localStorage.getItem('liquidboard-theme') as 'light' | 'dark') || 'dark');
  const [languageOpen, setLanguageOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [languagePhase, setLanguagePhase] = useState<'idle' | 'progress' | 'settle' | 'check' | 'item-closing' | 'closing'>('idle');
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [languageOrderCode, setLanguageOrderCode] = useState(lang);
  const [languageProgress, setLanguageProgress] = useState(0);
  const changeStartedRef = useRef(false);
  const languageListRef = useRef<HTMLDivElement>(null);
  const changeLangRef = useRef(changeLang);
  changeLangRef.current = changeLang;
  const accessibility = getAccessibilityLabels(lang);
  const actionLabels = getHeaderActionLabels(lang);
  const menuLabels = getMenuToggleLabels(lang);
  const orderedLanguages = [...supportedLanguages].sort((a, b) => Number(b.code === languageOrderCode) - Number(a.code === languageOrderCode));
  const openLanguageModal = () => { setLanguageOrderCode(lang); setLanguageOpen(true); };
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#ffffff' : '#111111');
    localStorage.setItem('liquidboard-theme', theme);
  }, [theme]);
  useEffect(() => {
    if (!languageOpen && languagePhase !== 'closing') return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape' && languagePhase === 'idle') setLanguageOpen(false); };
    document.addEventListener('keydown', onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener('keydown', onKeyDown); };
  }, [languageOpen, languagePhase]);
  useEffect(() => {
    if (!languageOpen || languagePhase !== 'idle') return undefined;
    const frame = window.requestAnimationFrame(() => {
      const scroller = languageListRef.current;
      const firstItem = scroller?.querySelector<HTMLElement>('.language-item');
      if (!scroller || !firstItem) return;
      const listTop = scroller.getBoundingClientRect().top;
      const itemTop = firstItem.getBoundingClientRect().top;
      scroller.scrollTo({ top: Math.max(0, scroller.scrollTop + itemTop - listTop - 124), behavior: 'auto' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [languageOpen, languagePhase]);
  useEffect(() => {
    if (languagePhase !== 'progress') return undefined;
    const startedAt = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const nextProgress = Math.min(100, Math.round(((now - startedAt) / 1400) * 100));
      setLanguageProgress(nextProgress);
      if (nextProgress >= 100) setLanguagePhase('settle');
      else frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [languagePhase]);
  useEffect(() => {
    if (languagePhase !== 'settle') return undefined;
    const timer = window.setTimeout(() => setLanguagePhase('check'), 240);
    return () => window.clearTimeout(timer);
  }, [languagePhase]);
  useEffect(() => {
    if (languagePhase !== 'check') return undefined;
    const timer = window.setTimeout(() => setLanguagePhase('item-closing'), 900);
    return () => window.clearTimeout(timer);
  }, [languagePhase]);
  useEffect(() => {
    if (languagePhase !== 'item-closing') return undefined;
    const timer = window.setTimeout(() => setLanguagePhase('closing'), 360);
    return () => window.clearTimeout(timer);
  }, [languagePhase]);
  useEffect(() => {
    if (languagePhase !== 'closing' || !selectedLanguage || changeStartedRef.current) return;
    setLanguageOpen(false);
    changeStartedRef.current = true;
  }, [languagePhase, selectedLanguage]);
  const menuItems = [
    { to: '/', label: titleCaseLatin(sentenceCase(dict.nav.home, lang), lang), end: true },
    { to: '/about', label: titleCaseLatin(sentenceCase(dict.nav.about, lang), lang) },
    { to: '/pricing', label: titleCaseLatin(sentenceCase(dict.nav.pricing, lang), lang) },
    { to: '/policy', label: titleCaseLatin(sentenceCase(dict.nav.policy, lang), lang) },
    { to: '/help/faq', label: titleCaseLatin(sentenceCase(dict.nav.help, lang), lang) },
  ];
  return <>
    <HeaderShell>
      <HeaderBrand as={Link} to="/" aria-label="LiquidBoard home">
        <Logo className="logo logo-dark" src={publicAsset('/assets/logo-app-dark.jpg')} alt="LiquidBoard" />
        <Logo className="logo logo-light" src={publicAsset('/assets/logo-app-light.jpg')} alt="" />
        <HeaderBrandSpan>LiquidBoard</HeaderBrandSpan>
      </HeaderBrand>
      <HeaderNav className={menuOpen ? 'open' : ''}>
        {menuItems.map((item) => <HeaderLink key={item.to} as={NavLink} to={item.to} end={item.end} onClick={() => setMenuOpen(false)}>{item.label}</HeaderLink>)}
        <MobileMenuControls className="mobile-menu-controls">
          <HeaderButton className="menu-action-button" type="button" aria-label={actionLabels.language} aria-expanded={languageOpen} aria-controls="language-modal" onClick={() => { setMenuOpen(false); openLanguageModal(); }}><Languages size={22} strokeWidth={2} /></HeaderButton>
          <HeaderButton className="menu-action-button" type="button" aria-label={theme === 'light' ? actionLabels.light : actionLabels.dark} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}><ThemeIcon className="theme-icon">{theme === 'dark' ? <Moon size={22} /> : <Sun size={22} />}</ThemeIcon></HeaderButton>
        </MobileMenuControls>
      </HeaderNav>
     <HeaderActions>
        <HeaderButton className="language-button desktop-action" type="button" aria-label={actionLabels.language} data-tooltip={actionLabels.language} aria-expanded={languageOpen} aria-controls="language-modal" onClick={() => { if (languageOpen) setLanguageOpen(false); else openLanguageModal(); }}><Languages size={22} strokeWidth={2} /><TooltipPopover className="tooltip-popover" aria-hidden="true">{actionLabels.language}<TooltipPopoverI /></TooltipPopover></HeaderButton>
        <HeaderButton className="theme-button desktop-action" type="button" aria-label={theme === 'light' ? actionLabels.light : actionLabels.dark} data-tooltip={theme === 'light' ? actionLabels.light : actionLabels.dark} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}><ThemeIcon className="theme-icon">{theme === 'dark' ? <Moon size={22} /> : <Sun size={22} />}</ThemeIcon><TooltipPopover className="tooltip-popover" aria-hidden="true">{theme === 'light' ? actionLabels.light : actionLabels.dark}<TooltipPopoverI /></TooltipPopover></HeaderButton>
        <MenuButton className={`menu-toggle${menuOpen ? ' is-open' : ''}`} type="button" aria-label={menuOpen ? menuLabels.close : menuLabels.menu} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <MenuIcon className="menu-icon" viewBox="0 0 32 32" aria-hidden="true">
            <MenuLine className="menu-line menu-line-top" d="M2 6h28" />
            <MenuLine className="menu-line menu-line-middle" d="M2 16h28" />
            <MenuLine className="menu-line menu-line-bottom" d="M2 26h28" />
          </MenuIcon>
        </MenuButton>
      </HeaderActions>
    </HeaderShell>
    <MenuOverlay $open={menuOpen} aria-hidden="true" onClick={() => setMenuOpen(false)} />
    {typeof document !== 'undefined' && createPortal(
        <LanguageModal id="language-modal" className={`${languageOpen && languagePhase === 'idle' ? 'language-modal-opening' : ''}${languagePhase !== 'idle' ? ' language-changing' : ''}${languagePhase === 'closing' ? ' language-modal-closing' : ''}`} data-animation-phase={languagePhase} role="dialog" aria-modal="true" aria-hidden={!languageOpen} aria-labelledby="language-modal-title" aria-busy={languagePhase !== 'idle'} $open={languageOpen} onAnimationEnd={(event) => {
          if (event.target !== event.currentTarget || languagePhase !== 'closing') return;
          if (selectedLanguage) setLanguageOrderCode(selectedLanguage);
          setLanguagePhase('idle');
          setSelectedLanguage(null);
          setLanguageProgress(0);
          changeStartedRef.current = false;
        }}>
        <ProgressiveBlur className="language-modal-blur" aria-hidden="true">{Array.from({ length: 8 }).map((_, index) => <LanguageModalBlurDiv key={index} />)}</ProgressiveBlur>
        <LanguageModalHeader className="language-modal-header">
          <LanguageModalTitle id="language-modal-title">{getLanguageConfig(lang).chooseLabel}</LanguageModalTitle>
          <LanguageModalHeaderButton type="button" aria-label={accessibility.closeLanguageSelection} disabled={isLanguageChanging || languagePhase !== 'idle'} onClick={() => setLanguageOpen(false)}><X size={22} strokeWidth={2.4} /></LanguageModalHeaderButton>
        </LanguageModalHeader>
        <FullLanguageList ref={languageListRef} className="language-items" data-animation-phase={languagePhase}>
          <LanguageItemsDiv>{orderedLanguages.map((language) => {
            const active = lang === language.code;
            const isSelected = language.code === selectedLanguage;
            const selectedPhaseClass = isSelected && languagePhase === 'settle'
              ? ' phase-settle'
              : isSelected && (languagePhase === 'check' || languagePhase === 'item-closing')
                ? ' phase-check'
                : '';
            return <LanguageItem type="button" key={language.code} className={`language-item${isSelected ? ' is-selected' : ''}${selectedPhaseClass}`} $active={active} disabled={active || isLanguageChanging || languagePhase !== 'idle'} aria-current={active ? 'true' : undefined} onClick={(event) => {
              if (active || isLanguageChanging || languagePhase !== 'idle') return;
              const scroller = languageListRef.current;
              if (scroller) {
                const listRect = scroller.getBoundingClientRect();
                const itemRect = event.currentTarget.getBoundingClientRect();
                const centeredTop = scroller.scrollTop + itemRect.top - listRect.top - (scroller.clientHeight - itemRect.height) / 2;
                scroller.scrollTo({ top: centeredTop, behavior: 'smooth' });
              }
              setSelectedLanguage(language.code);
              setLanguageProgress(0);
              void changeLangRef.current(language.code);
              setLanguagePhase('progress');
            }}>
              <LanguageCopy className="language-copy"><LanguageCopyStrong>{language.label}</LanguageCopyStrong><LanguageCopySmall>{language.native}</LanguageCopySmall></LanguageCopy>
              <LanguageStatus className="language-status" aria-hidden="true">
                {isSelected ? <LanguageProgressCircle className="language-progress-circle" style={{ '--progress-angle': `${languageProgress * 3.6}deg` } as React.CSSProperties}><LanguageProgressRing className="language-progress-ring" /><Check className="language-progress-check" size={19} strokeWidth={3} /></LanguageProgressCircle> : active ? <Check size={20} strokeWidth={3} /> : null}
              </LanguageStatus>
            </LanguageItem>;
          })}</LanguageItemsDiv>
        </FullLanguageList>
      </LanguageModal>, document.body,
    )}
  </>;
};
export default MinimalHeader;

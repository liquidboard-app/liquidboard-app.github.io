import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Check, Globe2, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from '@/contexts/LanguageContext';
import { getLanguageConfig, getUpdatesLabel, supportedLanguages } from '@/locales/config';
import { sentenceCase } from '@/locales/casing';
import {
  Brand,
  HeaderWrapper,
  LanguageItem,
  LanguageList,
  LanguageModal,
  LanguageModalHeader,
  LanguageTrigger,
  ProgressiveBlur,
} from './styled';

const Header: React.FC = () => {
  const { lang, changeLang, dict, isLanguageChanging } = useTranslation();
  const [languageOpen, setLanguageOpen] = useState(false);
  const [pendingLanguage, setPendingLanguage] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeLanguageRef = useRef<HTMLButtonElement>(null);
  const languageModalRef = useRef<HTMLDivElement>(null);
  const languageTriggerRef = useRef<HTMLButtonElement>(null);
  const closeLanguageButtonRef = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();

  const closeLanguageModal = useCallback(() => {
    setLanguageOpen(false);
    languageTriggerRef.current?.focus();
  }, []);

  const menuItems = [
    { to: '/', label: sentenceCase(dict.nav.home, lang), end: true },
    { to: '/about', label: sentenceCase(dict.nav.about, lang) },
    { to: '/pricing', label: sentenceCase(dict.nav.pricing, lang) },
    { to: '/updates', label: sentenceCase(getUpdatesLabel(lang), lang) },
    { to: '/policy', label: sentenceCase(dict.nav.policy, lang) },
    { to: '/help/contact', label: sentenceCase(dict.nav.help, lang) },
  ];

  useEffect(() => {
    setMenuOpen(false);
    setLanguageOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen || languageOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [languageOpen, menuOpen]);

  useEffect(() => {
    if (!languageOpen) return undefined;
    const focusFrame = window.requestAnimationFrame(() => closeLanguageButtonRef.current?.focus());
    const keepFocusInModal = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !isLanguageChanging) {
        closeLanguageModal();
        return;
      }
      if (event.key !== 'Tab') return;

      const modal = languageModalRef.current;
      if (!modal) return;
      const focusable = Array.from(modal.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )).filter((element) => element.getClientRects().length > 0);
      if (!focusable.length) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', keepFocusInModal);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener('keydown', keepFocusInModal);
    };
  }, [closeLanguageModal, isLanguageChanging, languageOpen]);

  useLayoutEffect(() => {
    if (!languageOpen) return;
    activeLanguageRef.current?.scrollIntoView({ block: 'center', behavior: 'auto' });
  }, [languageOpen]);

  const selectLanguage = async (code: string) => {
    if (code === lang || isLanguageChanging) return;
    setPendingLanguage(code);
    try {
      await changeLang(code);
      closeLanguageModal();
    } finally {
      setPendingLanguage(null);
    }
  };

  const languageModal = (
    <LanguageModal
      id="language-modal"
      ref={languageModalRef}
      role="dialog"
      aria-modal="true"
      aria-hidden={!languageOpen}
      aria-labelledby="language-modal-title"
      $open={languageOpen}
    >
      <ProgressiveBlur className="language-modal-blur" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, index) => <div key={index} />)}
      </ProgressiveBlur>
      <LanguageModalHeader>
        <h2 id="language-modal-title">{getLanguageConfig(lang).chooseLabel}</h2>
        <button
          type="button"
          ref={closeLanguageButtonRef}
          aria-label="Close language selection"
          disabled={isLanguageChanging}
          onClick={closeLanguageModal}
        >
          <X size={22} strokeWidth={2.4} />
        </button>
      </LanguageModalHeader>
      <LanguageList>
        <div>
          {supportedLanguages.map((language) => {
            const active = lang === language.code;
            const loading = pendingLanguage === language.code && isLanguageChanging;
            return (
              <LanguageItem
                type="button"
                key={language.code}
                ref={active ? activeLanguageRef : undefined}
                $active={active}
                disabled={active || isLanguageChanging}
                data-loading={loading}
                aria-current={active ? 'true' : undefined}
                onClick={() => { void selectLanguage(language.code); }}
              >
                <span className="language-copy">
                  <strong>{language.label}</strong>
                  <small>{language.native}</small>
                </span>
                <span className="language-status" aria-hidden="true">
                  {loading ? <i className="item-spinner" /> : active ? <Check size={20} strokeWidth={3} /> : null}
                </span>
              </LanguageItem>
            );
          })}
        </div>
      </LanguageList>
    </LanguageModal>
  );

  return (
    <HeaderWrapper>
      <ProgressiveBlur aria-hidden="true">
        {Array.from({ length: 8 }).map((_, index) => <div key={index} />)}
      </ProgressiveBlur>

      <Brand to="/" aria-label="LiquidBoard home">
        <img src="/assets/logo-app-dark.jpg" alt="" />
        <span>LiquidBoard</span>
      </Brand>

      <nav aria-label="Primary navigation">
        <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
          {menuItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className="menu-link" onClick={() => setMenuOpen(false)}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <span className="language-divider" aria-hidden="true" />
        <LanguageTrigger
          type="button"
          ref={languageTriggerRef}
          aria-label="Change language"
          aria-expanded={languageOpen}
          aria-controls="language-modal"
          onClick={() => {
            setMenuOpen(false);
            setLanguageOpen((open) => !open);
          }}
        >
          <Globe2 size={20} strokeWidth={2.4} />
        </LanguageTrigger>
        <button
          type="button"
          className={`mobile-menu-trigger ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => {
            setLanguageOpen(false);
            setMenuOpen((open) => !open);
          }}
        >
          <span />
          <span />
        </button>
      </nav>

      {typeof document !== 'undefined' && createPortal(languageModal, document.body)}
    </HeaderWrapper>
  );
};

export default Header;

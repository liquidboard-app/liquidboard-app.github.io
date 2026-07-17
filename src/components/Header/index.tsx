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

const DESKTOP_INDICATOR_HEIGHT = 46;

const Header: React.FC = () => {
  const { lang, changeLang, dict, isLanguageChanging } = useTranslation();
  const [languageOpen, setLanguageOpen] = useState(false);
  const [pendingLanguage, setPendingLanguage] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeLanguageRef = useRef<HTMLButtonElement>(null);
  const languageModalRef = useRef<HTMLDivElement>(null);
  const languageTriggerRef = useRef<HTMLButtonElement>(null);
  const closeLanguageButtonRef = useRef<HTMLButtonElement>(null);
  const desktopMenuRef = useRef<HTMLDivElement>(null);
  const desktopIndicatorRef = useRef<HTMLSpanElement>(null);
  const desktopIndicatorAnimationRef = useRef<Animation | null>(null);
  const desktopIndicatorVisibleRef = useRef(false);
  const desktopHoveredItemRef = useRef<HTMLAnchorElement | null>(null);
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

  const getDesktopIndicatorBounds = useCallback((item: HTMLAnchorElement) => {
    const menu = desktopMenuRef.current;
    if (!menu) return null;

    const menuRect = menu.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const horizontalBleed = 10;

    return {
      left: itemRect.left - menuRect.left - horizontalBleed,
      top: (menuRect.height - DESKTOP_INDICATOR_HEIGHT) / 2,
      width: itemRect.width + horizontalBleed * 2,
      height: DESKTOP_INDICATOR_HEIGHT,
    };
  }, []);

  const showDesktopIndicator = useCallback((
    item: HTMLAnchorElement,
    pointer?: { clientX: number; clientY: number },
  ) => {
    if (!window.matchMedia('(min-width: 1081px)').matches) return;

    const menu = desktopMenuRef.current;
    const indicator = desktopIndicatorRef.current;
    const target = getDesktopIndicatorBounds(item);
    if (!menu || !indicator || !target) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const menuRect = menu.getBoundingClientRect();
    const indicatorRect = indicator.getBoundingClientRect();
    const wasVisible = desktopIndicatorVisibleRef.current;
    const dotSize = 8;
    const start = wasVisible
      ? {
          left: indicatorRect.left - menuRect.left,
          top: indicatorRect.top - menuRect.top,
          width: indicatorRect.width,
          height: indicatorRect.height,
        }
      : {
          left: (pointer?.clientX ?? menuRect.left + target.left + target.width / 2) - menuRect.left - dotSize / 2,
          top: (pointer?.clientY ?? menuRect.top + target.top + DESKTOP_INDICATOR_HEIGHT / 2) - menuRect.top - dotSize / 2,
          width: dotSize,
          height: dotSize,
        };

    desktopIndicatorAnimationRef.current?.cancel();
    desktopHoveredItemRef.current = item;
    desktopIndicatorVisibleRef.current = true;
    indicator.style.width = `${target.width}px`;
    indicator.style.transform = `translate3d(${target.left}px, ${target.top}px, 0) scale(1, 1)`;
    indicator.style.opacity = '1';

    if (reducedMotion) return;

    const startCenter = start.left + start.width / 2;
    const targetCenter = target.left + target.width / 2;
    const distance = Math.abs(targetCenter - startCenter);
    const startScale = target.width > 0 ? start.width / target.width : 1;
    const startScaleY = start.height / DESKTOP_INDICATOR_HEIGHT;
    const duration = wasVisible ? Math.min(620, 520 + distance * .25) : 460;
    const easing = 'cubic-bezier(.25, .8, .25, 1)';
    const startOpacity = wasVisible ? 1 : .35;

    desktopIndicatorAnimationRef.current = indicator.animate([
      {
        transform: `translate3d(${start.left}px, ${start.top}px, 0) scale(${startScale}, ${startScaleY})`,
        opacity: startOpacity,
      },
      {
        transform: `translate3d(${target.left}px, ${target.top}px, 0) scale(1, 1)`,
        opacity: 1,
      },
    ], {
      duration,
      easing,
    });

  }, [getDesktopIndicatorBounds]);

  const hideDesktopIndicator = useCallback((exitPoint?: { clientX: number; clientY: number }) => {
    const menu = desktopMenuRef.current;
    const indicator = desktopIndicatorRef.current;
    if (!menu || !indicator || !desktopIndicatorVisibleRef.current) return;

    const menuRect = menu.getBoundingClientRect();
    const indicatorRect = indicator.getBoundingClientRect();
    const left = indicatorRect.left - menuRect.left;
    const top = indicatorRect.top - menuRect.top;
    const width = indicatorRect.width;
    const height = indicatorRect.height;
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const pointerX = exitPoint ? exitPoint.clientX - menuRect.left : centerX;
    const pointerY = exitPoint ? exitPoint.clientY - menuRect.top : centerY;
    const deltaX = pointerX - centerX;
    const deltaY = pointerY - centerY;
    const vectorLength = Math.hypot(deltaX, deltaY) || 1;
    const travel = exitPoint ? 18 : 0;
    const dotSize = 7;
    const endCenterX = centerX + (deltaX / vectorLength) * travel;
    const endCenterY = centerY + (deltaY / vectorLength) * travel;
    const endLeft = endCenterX - dotSize / 2;
    const endTop = endCenterY - dotSize / 2;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    desktopIndicatorAnimationRef.current?.cancel();
    desktopIndicatorVisibleRef.current = false;
    desktopHoveredItemRef.current = null;
    indicator.style.width = `${Math.max(width, .01)}px`;
    indicator.style.transform = `translate3d(${endLeft}px, ${endTop}px, 0) scale(${dotSize / Math.max(width, .01)}, ${dotSize / DESKTOP_INDICATOR_HEIGHT})`;
    indicator.style.opacity = '0';

    if (reducedMotion) return;

    desktopIndicatorAnimationRef.current = indicator.animate([
      {
        transform: `translate3d(${left}px, ${top}px, 0) scale(1, ${height / DESKTOP_INDICATOR_HEIGHT})`,
        opacity: 1,
      },
      {
        transform: `translate3d(${endLeft}px, ${endTop}px, 0) scale(${dotSize / Math.max(width, .01)}, ${dotSize / DESKTOP_INDICATOR_HEIGHT})`,
        opacity: 0,
      },
    ], {
      duration: 360,
      easing: 'cubic-bezier(.25, .8, .25, 1)',
    });

  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setLanguageOpen(false);
    hideDesktopIndicator();
  }, [hideDesktopIndicator, pathname]);

  useEffect(() => {
    const handleResize = () => {
      const indicator = desktopIndicatorRef.current;
      const hoveredItem = desktopHoveredItemRef.current;
      if (!indicator || !hoveredItem || !desktopIndicatorVisibleRef.current) return;

      if (!window.matchMedia('(min-width: 1081px)').matches) {
        hideDesktopIndicator();
        return;
      }

      const target = getDesktopIndicatorBounds(hoveredItem);
      if (!target) return;
      desktopIndicatorAnimationRef.current?.cancel();
      indicator.style.width = `${target.width}px`;
      indicator.style.transform = `translate3d(${target.left}px, ${target.top}px, 0) scale(1, 1)`;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      desktopIndicatorAnimationRef.current?.cancel();
    };
  }, [getDesktopIndicatorBounds, hideDesktopIndicator]);

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
        <div
          ref={desktopMenuRef}
          className={`menu-links ${menuOpen ? 'open' : ''}`}
          onMouseLeave={(event) => hideDesktopIndicator({
            clientX: event.clientX,
            clientY: event.clientY,
          })}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              hideDesktopIndicator();
            }
          }}
        >
          <span ref={desktopIndicatorRef} className="desktop-menu-indicator" aria-hidden="true" />
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className="menu-link"
              onMouseEnter={(event) => showDesktopIndicator(event.currentTarget, {
                clientX: event.clientX,
                clientY: event.clientY,
              })}
              onFocus={(event) => showDesktopIndicator(event.currentTarget)}
              onClick={() => setMenuOpen(false)}
            >
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
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
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

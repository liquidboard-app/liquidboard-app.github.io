import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const itemSpinner = keyframes`
  to { transform: rotate(360deg); }
`;

const languageModalClose = keyframes`
  0% { opacity: 1; visibility: visible; }
  100% { opacity: 0; visibility: hidden; }
`;

const languageModalContentClose = keyframes`
  0% { filter: blur(0); }
  100% { filter: blur(14px); }
`;

const languageModalContentOpen = keyframes`
  from { opacity: 0; filter: blur(14px); }
  to { opacity: 1; filter: blur(0); }
`;

const languageSelectedItemClose = keyframes`
  from { opacity: 1; filter: blur(0); transform: scale(1); }
  to { opacity: 0; filter: blur(14px); transform: scale(.98); }
`;

const languageProgressRingOut = keyframes`
  to { opacity: 0; filter: blur(8px); transform: scale(.55); }
`;

const languageProgressCheckIn = keyframes`
  from { opacity: 0; filter: blur(9px); transform: scale(.45); }
  to { opacity: 1; filter: blur(0); transform: scale(1); }
`;

const logoExitUp = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  58%, 100% { transform: translate3d(0, -100%, 0); }
`;

const logoEnterUp = keyframes`
  0% { transform: translate3d(0, 100%, 0); }
  58% { transform: translate3d(0, 0, 0); }
  72% { transform: translate3d(0, -6%, 0); }
  86% { transform: translate3d(0, 2.5%, 0); }
  100% { transform: translate3d(0, 0, 0); }
`;

export const HeaderWrapper = styled.header`
  /* The header belongs to the page flow visually: it scrolls away with the hero. */
  position: absolute;
  inset: 0 0 auto;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 88px;
  padding: 0 clamp(20px, 3.5dvw, 56px);
  color: #262120;

  nav,
  .menu-links {
    display: flex;
    align-items: center;
  }

  nav { position: relative; z-index: 104; gap: 0; }
  .menu-links {
    position: relative;
    min-height: 46px;
    gap: clamp(12px, 2dvw, 30px);
  }
  .language-divider { width: 2px; height: 14px; margin-left: 16px; margin-right: 9px; border-radius: 999px; background: rgba(52, 42, 37, .42); }

  .desktop-menu-indicator {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 0;
    height: 46px;
    border-radius: 999px;
    background: rgba(44, 39, 36, .1);
    opacity: 0;
    pointer-events: none;
    transform: translate3d(0, 0, 0) scale(0, 0);
    transform-origin: left top;
    will-change: transform, opacity;
  }

  .menu-link {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 13px 0;
    color: rgba(38, 33, 32, .72);
    font-size: 18px;
    font-weight: 810;
    letter-spacing: -.025em;
    white-space: nowrap;
    transition: color .2s ease;
  }

  .menu-link:hover,
  .menu-link.active { color: #262120; }

  .mobile-menu-trigger { display: none; }

  @media (max-width: 1080px) {
    height: 72px;
    padding: 0 16px;
    nav { gap: 0; }
    .language-divider { display: none; }
    .menu-links {
      position: fixed;
      inset: 0;
      z-index: 1;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      gap: 8px;
      padding: 100px 20px 40px;
      overflow: hidden;
      background: rgba(255, 255, 255, .76);
      backdrop-filter: blur(32px) saturate(135%);
      -webkit-backdrop-filter: blur(32px) saturate(135%);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transform: translateY(-14px);
      transition: opacity .25s ease, visibility .25s ease, transform .3s ease;
    }
    @media (pointer: coarse) {
      .menu-links {
        backdrop-filter: blur(20px) saturate(125%);
        -webkit-backdrop-filter: blur(20px) saturate(125%);
      }
    }
    .desktop-menu-indicator { display: none; }
    .menu-links.open { opacity: 1; visibility: visible; pointer-events: auto; transform: translateY(0); }
    .menu-link { padding: 10px 22px; border-radius: 999px; font-size: clamp(24px, 7dvw, 34px); line-height: 1.2; }
    .menu-link.active { background: rgba(44, 39, 36, .1); color: #2c2724; }
    .mobile-menu-trigger {
      position: relative;
      z-index: 104;
      display: grid;
      width: 40px;
      height: 40px;
      padding: 0;
      place-items: center;
      border: 0;
      background: transparent;
      margin-left: 5px;
    }
    .mobile-menu-trigger span { position: absolute; width: 19px; height: 2px; border-radius: 999px; background: #2c2724; transition: transform .25s ease, margin .25s ease; }
    .mobile-menu-trigger span:first-child { margin-top: -6px; }
    .mobile-menu-trigger span:last-child { margin-top: 6px; }
    .mobile-menu-trigger.open span:first-child { margin-top: 0; transform: rotate(45deg); }
    .mobile-menu-trigger.open span:last-child { margin-top: 0; transform: rotate(-45deg); }
  }
`;

export const Brand = styled(Link)`
  position: relative;
  z-index: 104;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: inherit;
  font-size: 23px;
  font-weight: 840;
  letter-spacing: -.045em;

  .brand-logo {
    position: relative;
    display: block;
    width: 38px;
    height: 38px;
    flex: 0 0 auto;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 5px 16px rgba(45, 32, 26, .14);
  }
  .brand-logo img {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    transform-origin: center;
  }
  .brand-logo-dark { transform: translate3d(0, 0, 0); }
  .brand-logo-light { transform: translate3d(0, 100%, 0); }
  .brand-logo.has-swapped.is-light .brand-logo-dark,
  .brand-logo.has-swapped:not(.is-light) .brand-logo-light {
    animation: ${logoExitUp} .88s cubic-bezier(.22, 1, .36, 1) both;
  }
  .brand-logo.has-swapped.is-light .brand-logo-light,
  .brand-logo.has-swapped:not(.is-light) .brand-logo-dark {
    animation: ${logoEnterUp} .88s cubic-bezier(.22, 1, .36, 1) both;
  }

  @media (max-width: 600px) {
    gap: 8px;
    font-size: 18px;
    .brand-logo { width: 31px; height: 31px; border-radius: 8px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .brand-logo img { animation: none !important; }
    .brand-logo-dark,
    .brand-logo.has-swapped.is-light .brand-logo-dark,
    .brand-logo.has-swapped:not(.is-light) .brand-logo-dark { opacity: 1; transform: none; }
    .brand-logo-light,
    .brand-logo.has-swapped.is-light .brand-logo-light,
    .brand-logo.has-swapped:not(.is-light) .brand-logo-light { opacity: 0; transform: none; }
  }
`;

export const LanguageTrigger = styled.button`
  position: relative;
  z-index: 104;
  display: grid;
  width: 34px;
  height: 40px;
  padding: 0;
  place-items: center;
  border: 0;
  border-radius: 15px;
  background: transparent;
  color: #2c2724;
  box-shadow: none;
  transition: transform .2s ease, opacity .2s ease;
  &:hover, &[aria-expanded='true'] { opacity: .62; transform: translateY(-2px); }
  @media (max-width: 600px) { width: 32px; height: 40px; border-radius: 13px; }
`;

export const LanguageModal = styled.div<{ $open: boolean }>`
  --language-modal-bg: rgba(18, 18, 20, .94);
  --language-modal-text: #f5f5f5;
  --language-modal-item: rgba(255, 255, 255, .07);
  --language-modal-item-hover: rgba(255, 255, 255, .1);
  --language-modal-secondary: #aaa;
  --language-modal-check: #22c55e;
  --language-modal-progress: #fff;
  :root[data-theme='light'] & {
    --language-modal-bg: rgba(255, 255, 255, .94);
    --language-modal-text: #2c2724;
    --language-modal-item: rgba(89, 58, 42, .09);
    --language-modal-item-hover: rgba(89, 58, 42, .08);
    --language-modal-secondary: #625b57;
    --language-modal-check: #22c55e;
    --language-modal-progress: #111;
  }
  position: fixed;
  inset: 0;
  z-index: 4000;
  display: block;
  background: var(--language-modal-bg);
  backdrop-filter: blur(34px) saturate(135%);
  -webkit-backdrop-filter: blur(34px) saturate(135%);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transition: opacity .26s ease ${({ $open }) => ($open ? '0s' : '.14s')}, visibility 0s linear ${({ $open }) => ($open ? '0s' : '.5s')}, backdrop-filter .42s ease, -webkit-backdrop-filter .42s ease;

  .language-modal-blur { position: fixed; inset: 0 0 auto; z-index: 2; height: 120px; background: rgba(0, 0, 0, .001); }
  &.language-changing .language-modal-header { opacity: 0; filter: blur(9px); pointer-events: none; transition: opacity .24s ease, filter .24s ease; }
  &.language-changing .language-items { pointer-events: none; }
  &.language-changing .language-items .language-item:not(.is-selected) { opacity: 0; filter: blur(9px); transition: opacity .22s ease, filter .22s ease; }
  &.language-modal-opening > :not(.language-modal-blur) { animation: ${languageModalContentOpen} .42s cubic-bezier(.22, 1, .36, 1) both; }
  &[data-animation-phase='item-closing'] .language-item.is-selected { animation: ${languageSelectedItemClose} .34s ease both; }
  &[data-animation-phase='closing'] .language-item.is-selected { opacity: 0; filter: blur(14px); transform: scale(.98); }
  &.language-modal-closing { pointer-events: none; backdrop-filter: none; -webkit-backdrop-filter: none; transition: none; animation: ${languageModalClose} .48s ease both; }
  &.language-modal-closing > :not(.language-modal-blur) { animation: ${languageModalContentClose} .48s ease both; }

  @media (max-width: 1080px) and (pointer: coarse) {
    backdrop-filter: blur(20px) saturate(125%);
    -webkit-backdrop-filter: blur(20px) saturate(125%);
  }
`;

export const LanguageModalHeader = styled.div`
  position: fixed;
  inset: 0 0 auto;
  z-index: 3;
  display: flex;
  height: 88px;
  align-items: center;
  justify-content: center;
  padding: 0 clamp(20px, 3.5dvw, 56px);
  pointer-events: none;

  h2 {
    margin: 0;
    color: var(--language-modal-text);
    font-size: clamp(18px, 1.45dvw, 22px);
    font-weight: 700;
    letter-spacing: -.035em;
    text-align: center;
  }

  button {
    position: fixed;
    top: 21px;
    right: clamp(20px, 3.5dvw, 56px);
    display: grid;
    width: 46px;
    height: 46px;
    padding: 0;
    place-items: center;
    border: 0;
    border-radius: 50%;
    background: var(--language-modal-item);
    color: var(--language-modal-text);
    pointer-events: auto;
    transition: background .2s ease, transform .2s ease, opacity .2s ease;
  }
  button:hover:not(:disabled) { background: var(--language-modal-item-hover); transform: scale(1.04); }
  button:disabled { cursor: wait; opacity: .45; }

  @media (max-width: 1080px) {
    height: 72px;
    padding: 0 16px;
    button { top: 13px; right: 16px; }
  }
`;

export const LanguageList = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  scrollbar-color: var(--language-modal-secondary) transparent;

  > div {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 8px;
    width: min(480px, calc(100% - 32px));
    margin: 0 auto;
    padding: calc((100dvh - 72px) / 2 + 24px) 0;
  }

  @media (max-width: 600px) {
    > div { padding-block: calc((100dvh - 68px) / 2 + 24px); }
  }

  &::-webkit-scrollbar { width: 8px; }
  &::-webkit-scrollbar-thumb { border-radius: 999px; background: var(--language-modal-secondary); }
`;

export const LanguageItem = styled.button<{ $active: boolean }>`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 34px;
  align-items: center;
  gap: 18px;
  width: 100%;
  min-height: 72px;
  margin: 0;
  padding: 12px 18px;
  border: 0;
  border-radius: 16px;
  background: ${({ $active }) => ($active ? 'var(--language-modal-item)' : 'transparent')};
  color: var(--language-modal-text);
  text-align: left;
  transition: background .2s ease, opacity .22s ease, filter .22s ease, left .52s cubic-bezier(.2,.8,.2,1), top .52s cubic-bezier(.2,.8,.2,1), width .52s cubic-bezier(.2,.8,.2,1), transform .52s cubic-bezier(.2,.8,.2,1);

  &:hover:not(:disabled) { background: var(--language-modal-item-hover); }
  &:disabled { cursor: default; }
  &:disabled:not([aria-current='true']) { opacity: .55; }
  &.is-selected:disabled { opacity: 1; filter: none; }
  &[data-loading='true'] { cursor: wait; opacity: 1; }

  .language-copy { display: flex; min-width: 0; flex-direction: column; align-items: flex-start; gap: 5px; }
  strong { color: var(--language-modal-text); font-size: clamp(18px, 1.55dvw, 22px); font-weight: 700; letter-spacing: -.035em; }
  small { color: var(--language-modal-secondary); font-size: clamp(12px, 1dvw, 14px); font-weight: 500; }
  .language-status { display: grid; width: 34px; height: 34px; place-items: center; color: var(--language-modal-text); }
  .language-progress-circle { position: relative; display: grid; width: 34px; height: 34px; flex: 0 0 34px; place-items: center; }
  .language-progress-ring { position: absolute; inset: 0; border-radius: 50%; background: conic-gradient(var(--language-modal-progress) var(--progress-angle, 0deg), color-mix(in srgb, var(--language-modal-text) 16%, transparent) 0); -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3.5px)); mask: radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3.5px)); }
  .language-progress-check { position: relative; z-index: 1; color: #1478ee; opacity: 0; filter: blur(8px); transform: scale(.5); transition: opacity .34s ease, filter .34s ease, transform .34s cubic-bezier(.2,.8,.2,1); }
  &.phase-settle .language-progress-ring { background: var(--language-modal-progress); animation: ${languageProgressRingOut} .24s ease forwards; }
  &.phase-check .language-progress-ring { opacity: 0; filter: blur(8px); transform: scale(.55); }
  &.phase-check .language-progress-check { color: var(--language-modal-check); opacity: 1; filter: blur(0); transform: scale(1); animation: ${languageProgressCheckIn} .42s cubic-bezier(.2,.8,.2,1) both; }
  .item-spinner { width: 19px; height: 19px; border: 2.5px solid color-mix(in srgb, var(--language-modal-text) 20%, transparent); border-top-color: var(--language-modal-text); border-radius: 50%; animation: ${itemSpinner} .7s linear infinite; }

  @media (max-width: 600px) { min-height: 68px; padding: 10px 14px; border-radius: 14px; }
`;

export const ProgressiveBlur = styled.div`
  position: absolute;
  inset: 0 0 auto;
  z-index: -1;
  height: 132px;
  overflow: hidden;
  pointer-events: none;
  background: linear-gradient(to bottom, rgba(255, 255, 255, .82), rgba(255, 255, 255, 0));
  > div { position: absolute; inset: 0; }
  > div:nth-child(1) { backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); mask-image: linear-gradient(to bottom, #000 0%, transparent 32%); -webkit-mask-image: linear-gradient(to bottom, #000 0%, transparent 32%); }
  > div:nth-child(2) { backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); mask-image: linear-gradient(to bottom, #000 5%, transparent 44%); -webkit-mask-image: linear-gradient(to bottom, #000 5%, transparent 44%); }
  > div:nth-child(3) { backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); mask-image: linear-gradient(to bottom, #000 12%, transparent 56%); -webkit-mask-image: linear-gradient(to bottom, #000 12%, transparent 56%); }
  > div:nth-child(4) { backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); mask-image: linear-gradient(to bottom, #000 22%, transparent 68%); -webkit-mask-image: linear-gradient(to bottom, #000 22%, transparent 68%); }
  > div:nth-child(5) { backdrop-filter: blur(3.5px); -webkit-backdrop-filter: blur(3.5px); mask-image: linear-gradient(to bottom, #000 34%, transparent 78%); -webkit-mask-image: linear-gradient(to bottom, #000 34%, transparent 78%); }
  > div:nth-child(6) { backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px); mask-image: linear-gradient(to bottom, #000 46%, transparent 87%); -webkit-mask-image: linear-gradient(to bottom, #000 46%, transparent 87%); }
  > div:nth-child(7) { backdrop-filter: blur(1px); -webkit-backdrop-filter: blur(1px); mask-image: linear-gradient(to bottom, #000 58%, transparent 96%); -webkit-mask-image: linear-gradient(to bottom, #000 58%, transparent 96%); }
  > div:nth-child(8) { backdrop-filter: blur(.5px); -webkit-backdrop-filter: blur(.5px); mask-image: linear-gradient(to bottom, #000 70%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, #000 70%, transparent 100%); }

  @media (max-width: 1080px) and (pointer: coarse) {
    > div { display: none; }
    > div:nth-child(3) {
      display: block;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      mask-image: linear-gradient(to bottom, #000 8%, transparent 88%);
      -webkit-mask-image: linear-gradient(to bottom, #000 8%, transparent 88%);
    }
  }
`;

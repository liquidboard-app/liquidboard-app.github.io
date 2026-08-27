import styled, { keyframes } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

const spinner = keyframes`to { transform: rotate(360deg); }`;
const languageOverlayVisible = keyframes`from, to { visibility: visible; }`;
const languageOverlayHidden = keyframes`
  0%, 99% { visibility: visible; }
  100% { visibility: hidden; }
`;

export const HeaderShell = styled.header`
  position: fixed;
  inset: 0 0 auto;
  z-index: 200;
  display: flex;
  height: 75px;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--page-inline-padding);
  color: #151515;

  @media (min-width: 761px) and (max-width: 1024px) {
    height: 72px;
    padding-inline: clamp(24px, 4vw, 40px);
  }
`;

export const HeaderBrand = styled(Link)`
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  width: auto;
  height: auto;
  color: #151515;
  cursor: pointer !important;

  .header-brand-logo {
    display: block;
    width: 38px;
    height: 38px;
    flex: 0 0 auto;
    overflow: hidden;
    border-radius: 9.5px;
  }
  .header-brand-logo img { display: block; width: 100%; height: 100%; object-fit: cover; }

  @media (max-width: 760px) {
    .header-brand-logo { width: 31px; height: 31px; border-radius: 9.5px; }
  }

  @media (min-width: 761px) and (max-width: 1024px) {
    .header-brand-logo { width: 35px; height: 35px; }
  }
`;

export const HeaderNav = styled.nav`
  position: absolute;
  top: 0;
  left: 50%;
  display: flex;
    height: 64px;
  align-items: center;
  gap: 0;
  transform: translateX(-50%);

  @media (max-width: 900px) {
    position: fixed;
    inset: 64px 12px auto;
    display: flex;
    height: auto;
    max-height: calc(100dvh - 76px);
    flex-direction: column;
    align-items: stretch;
    gap: 2px;
    padding: 10px;
    overflow: auto;
    border: 1px solid rgba(21, 21, 21, .09);
    border-radius: 16px;
    background: rgba(255, 255, 255, .78);
    box-shadow: 0 20px 60px rgba(21, 21, 21, .12);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(-8px);
    transition: opacity .2s ease, visibility .2s ease, transform .22s ease;
    &.open { opacity: 1; visibility: visible; pointer-events: auto; transform: translateY(0); }
  }

`;

export const HeaderLink = styled(NavLink)`
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 100%;
  padding-inline: clamp(9px, 1.25vw, 19px);
  cursor: pointer !important;
  font-family: 'Google Sans Flex', sans-serif;
  color: rgba(21, 21, 21, .58);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  white-space: nowrap;
  transition: color .2s ease;

  &:hover,
  &.active { color: #151515; }

  @media (max-width: 900px) {
    height: 42px;
    padding: 0 12px;
    border-radius: 9px;
    font-size: 13px;
    &:hover, &.active { background: rgba(21, 21, 21, .06); }
  }
`;

export const HeaderActions = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;

  .header-download-button {
    display: inline-flex;
    width: 144px;
    min-height: 46px;
    align-items: center;
    justify-content: flex-start;
    gap: 0;
    padding: 0 22px;
    position: relative;
    border-radius: 999px;
    background: #151515;
    color: #fff;
    font-size: 14px;
    font-weight: 650;
    line-height: 1;
    text-transform: uppercase;
    white-space: nowrap;
    user-select: none;
    transition: background .2s ease, box-shadow .18s ease;

    &:hover,
    &:focus-visible { background: #101fe8; }

    &::after {
      width: 6px;
      height: 6px;
      flex: 0 0 auto;
      position: absolute;
      top: 50%;
      right: 22px;
      border-radius: 50%;
      background: currentColor;
      content: '';
      transform: translateY(-50%) scale(1);
      transform-origin: center;
      transition: transform .2s ease, opacity .2s ease;
    }

    &:hover::after,
    &:focus-visible::after { opacity: 0; transform: translate(8px, -50%) scale(0); }

    > svg {
      width: 0;
      height: 0;
      flex: 0 0 auto;
      fill: currentColor;
      opacity: 0;
      transform: translate(-10px, -2px);
      transition: width .24s ease, height .24s ease, margin-right .24s ease, opacity .2s ease, transform .24s ease;
    }
    &:hover > svg,
    &:focus-visible > svg {
      width: 14px;
      height: 19px;
      margin-right: 10px;
      opacity: 1;
      transform: translate(0, -2px);
    }
    .download-label { display: inline-flex; align-items: center; padding: 0; line-height: 1; }
  }

  @media (max-width: 760px) {
    gap: 5px;

    .header-download-button {
      width: 112px;
      min-height: 38px;
      gap: 0;
      padding: 0 13px;
      font-size: 12px;
    }
    .header-download-button > svg { width: 0; height: 0; }
    .header-download-button:hover > svg,
    .header-download-button:focus-visible > svg { width: 13px; height: 18px; margin-right: 8px; }
  }
`;

export const LanguageButton = styled.button`
  display: inline-flex;
  width: 46px;
  min-height: 46px;
  position: relative;
  align-items: center;
  justify-content: center;
  gap: 0;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: #e7e9f2;
  color: #151515;
  font-family: 'Google Sans Flex', sans-serif;
  font-size: 14px;
  font-weight: 650;
  line-height: 1;
  text-transform: uppercase;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  transition: background .2s ease, color .2s ease;

  &:hover,
  &[aria-expanded='true'] { background: #dde0e9; }

  .language-code {
    display: inline-flex;
    align-items: center;
    padding: 0;
    line-height: 1;
    filter: blur(0);
    transition: opacity .46s ease .16s, filter .46s ease .16s, transform .68s cubic-bezier(.22, 1, .36, 1) .16s;
  }
  .language-globe {
    width: 18px;
    height: 18px;
    flex: 0 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    fill: none;
    opacity: 0;
    filter: blur(7px);
    transform: translate(-50%, 30px) rotate(15deg);
    transition: opacity .46s ease .16s, filter .46s ease .16s, transform .68s cubic-bezier(.22, 1, .36, 1) .16s;
  }
  &:hover .language-code,
  &[aria-expanded='true'] .language-code { opacity: 0; filter: blur(7px); transform: translateY(-30px) rotate(-15deg); }
  &:hover .language-globe,
  &:focus-visible .language-globe,
  &[aria-expanded='true'] .language-globe {
    opacity: 1;
    filter: blur(0);
    transform: translate(-50%, -50%) rotate(0deg);
  }

  @media (max-width: 1024px) {
    .language-code {
      opacity: 1;
      filter: none;
      transition: opacity .26s ease, filter .26s ease;
      transform: none;
    }
    .language-globe {
      transform: translate(-50%, -50%);
      transition: opacity .26s ease, filter .26s ease;
    }
    &:hover .language-code,
    &[aria-expanded='true'] .language-code { opacity: 1; filter: none; transform: none; }
    &:hover .language-globe,
    &:focus-visible .language-globe,
    &[aria-expanded='true'] .language-globe { opacity: 0; filter: none; transform: translate(-50%, -50%); }
  }

  @media (max-width: 760px) {
    width: 38px;
    min-height: 38px;
    font-size: 12px;

    .language-globe { width: 16px; height: 16px; }
  }
`;

export const MenuToggleButton = styled.button`
  display: inline-flex;
  width: auto;
  min-width: 112px;
  height: 46px;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  border: 0;
  border-radius: 999px;
  background: #e7e9f2;
  color: #08090d;
  font-family: 'Google Sans Flex', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: .02em;
  text-transform: uppercase;
  user-select: none;
  overflow: hidden;
  transition: background .2s ease, transform .2s ease;

  &:hover,
  &.open { background: #dde0e9; }

  .menu-toggle-labels {
    position: relative;
    display: block;
    width: 80px;
    height: 18px;
    flex: 0 0 80px;
    overflow: visible;
  }
  .menu-toggle-label {
    position: absolute;
    inset: 0;
    display: block;
    height: 18px;
    line-height: 18px;
    transition: opacity .46s ease, filter .46s ease, transform .68s cubic-bezier(.22, 1, .36, 1);
  }
  .menu-toggle-label-menu { filter: blur(0); transform: translateY(0) rotate(0deg); }
  .menu-toggle-label-close { opacity: 0; filter: blur(7px); transform: translateY(30px) rotate(15deg); }
  &.open .menu-toggle-label-menu { opacity: 0; filter: blur(7px); transform: translateY(-30px) rotate(-15deg); }
  &.open .menu-toggle-label-close { opacity: 1; filter: blur(0); transform: translateY(0) rotate(0deg); }

  @media (max-width: 760px) {
    min-width: 90px;
    height: 38px;
    padding: 0 13px;
    font-size: 12px;
    .menu-toggle-labels { width: 64px; height: 16px; flex-basis: 64px; }
    .menu-toggle-label { height: 16px; line-height: 16px; }
  }
`;

export const MenuOverlay = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 75px;
  right: var(--page-inline-padding);
  z-index: 210;
  width: min(400px, calc(100vw - (var(--page-inline-padding) * 2)));
  max-height: calc(100dvh - 95px);
  box-sizing: border-box;
  padding: 8px;
  overflow-y: auto;
  border-radius: 22px;
  background: #e7e9f2;
  color: #151515;
  box-shadow: none;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  filter: blur(${({ $open }) => ($open ? '0' : '9px')});
  transform: perspective(1100px) translateY(${({ $open }) => ($open ? '0' : '30px')}) rotateX(${({ $open }) => ($open ? '0deg' : '-15deg')}) rotateZ(${({ $open }) => ($open ? '0deg' : '1.25deg')}) scale(${({ $open }) => ($open ? '1' : '.98')});
  transform-origin: top left;
  transition: opacity .46s ease, visibility .46s ease, filter .46s ease, transform .68s cubic-bezier(.22, 1, .36, 1);

  @media (min-width: 761px) and (max-width: 1024px) {
    top: 72px;
    right: clamp(24px, 4vw, 40px);
    width: min(380px, calc(100vw - clamp(48px, 8vw, 80px)));
  }

  @media (max-width: 760px) {
    top: 75px;
    right: 16px;
    width: calc(100vw - 32px);
    max-height: calc(100dvh - 83px);
    padding: 7px;
    border-radius: 19px;
  }
`;

export const MenuOverlayTopbar = styled.div`
  display: none;
`;

export const MenuOverlayBrand = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #fff;
  cursor: pointer !important;
  font-family: 'Google Sans Flex', sans-serif;
  font-size: clamp(22px, 3.8vw, 52px);
  font-weight: 700;
  letter-spacing: -.05em;
  line-height: 1;
  white-space: nowrap;
`;

export const MenuOverlayClose = styled.button`
  display: grid;
  width: 48px;
  height: 48px;
  padding: 0;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: #fff;
  color: #08090d;
  transition: transform .2s ease, background .2s ease;

  i { position: absolute; width: 8px; height: 8px; border-radius: 50%; background: currentColor; }
  i:first-child { transform: translateY(-5px); }
  i:last-child { transform: translateY(5px); }
  &:hover { background: #e7e9f2; transform: rotate(90deg); }
`;

export const MenuOverlayContent = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const MenuOverlayList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0;

  .menu-navigation {
    display: grid;
    overflow: hidden;
    padding: 10px 0;
    border-radius: 20px;
    background: #fff;
  }

  @media (max-width: 760px) {
    .menu-navigation { padding: 8px 0; border-radius: 17px; }
  }
`;

export const MenuOverlayLink = styled(NavLink)`
  display: flex;
  min-height: 64px;
  align-items: center;
  padding: 0 28px;
  background: transparent;
  color: #090a0e;
  font-family: 'Google Sans Flex', sans-serif;
  font-size: clamp(24px, 2.2vw, 32px);
  font-weight: 500;
  letter-spacing: -.045em;
  line-height: 1;
  text-transform: uppercase;
  transition: background .2s ease, color .2s ease;

  &::after { width: 0; height: 0; margin-left: auto; border-radius: 50%; background: currentColor; content: ''; transition: width .2s ease, height .2s ease; }
  &.active::after { width: 10px; height: 10px; }
  &:hover { background: #f4f5f9; color: #151515; }

  @media (max-width: 760px) {
    min-height: 58px;
    padding: 0 22px;
    font-size: 25px;
  }
`;

export const ProgressiveBlur = styled.div<{ $visible?: boolean }>`
  position: absolute;
  inset: 0 0 auto;
  z-index: -1;
  height: 118px;
  opacity: ${({ $visible = true }) => ($visible ? 1 : 0)};
  overflow: hidden;
  pointer-events: none;
  background: linear-gradient(to bottom, rgba(255, 255, 255, .88), rgba(255, 255, 255, 0));
  transition: opacity .24s ease;

  > div { position: absolute; inset: 0; }
  > div:nth-child(1) { backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); mask-image: linear-gradient(to bottom, #000, transparent 32%); -webkit-mask-image: linear-gradient(to bottom, #000, transparent 32%); }
  > div:nth-child(2) { backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); mask-image: linear-gradient(to bottom, #000 5%, transparent 44%); -webkit-mask-image: linear-gradient(to bottom, #000 5%, transparent 44%); }
  > div:nth-child(3) { backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); mask-image: linear-gradient(to bottom, #000 12%, transparent 56%); -webkit-mask-image: linear-gradient(to bottom, #000 12%, transparent 56%); }
  > div:nth-child(4) { backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); mask-image: linear-gradient(to bottom, #000 22%, transparent 68%); -webkit-mask-image: linear-gradient(to bottom, #000 22%, transparent 68%); }
  > div:nth-child(5) { backdrop-filter: blur(3.5px); -webkit-backdrop-filter: blur(3.5px); mask-image: linear-gradient(to bottom, #000 34%, transparent 78%); -webkit-mask-image: linear-gradient(to bottom, #000 34%, transparent 78%); }
  > div:nth-child(6) { backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px); mask-image: linear-gradient(to bottom, #000 46%, transparent 87%); -webkit-mask-image: linear-gradient(to bottom, #000 46%, transparent 87%); }
  > div:nth-child(7) { backdrop-filter: blur(1px); -webkit-backdrop-filter: blur(1px); mask-image: linear-gradient(to bottom, #000 58%, transparent 96%); -webkit-mask-image: linear-gradient(to bottom, #000 58%, transparent 96%); }
  > div:nth-child(8) { backdrop-filter: blur(.5px); -webkit-backdrop-filter: blur(.5px); mask-image: linear-gradient(to bottom, #000 70%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, #000 70%, transparent 100%); }
`;

export const LanguageOverlay = styled.div<{ $open: boolean; $hasOpened: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: block;
  overflow: hidden;
  overscroll-behavior: none;
  background: rgba(255, 255, 255, .72);
  backdrop-filter: blur(34px) saturate(135%);
  -webkit-backdrop-filter: blur(34px) saturate(135%);
  opacity: 1;
  visibility: ${({ $hasOpened }) => ($hasOpened ? 'visible' : 'hidden')};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  animation-name: ${({ $open, $hasOpened }) => (!$hasOpened ? 'none' : $open ? languageOverlayVisible : languageOverlayHidden)};
  animation-duration: ${({ $open }) => ($open ? '0s' : '.34s')};
  animation-timing-function: linear;
  animation-fill-mode: both;

  > [role='dialog'] {
    filter: blur(${({ $open }) => ($open ? '0' : '24px')});
    transition: filter .34s cubic-bezier(.4, 0, 1, 1);
    will-change: filter;
  }
`;

export const LanguagePanel = styled.div`
  position: absolute;
  inset: 0;
  z-index: 3;
  overflow: hidden;
`;

export const LanguagePanelHeader = styled.div`
  position: absolute;
  inset: 0 0 auto;
  z-index: 3;
  display: flex;
  height: 75px;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--page-inline-padding);
  isolation: isolate;
  pointer-events: none;

  > .language-panel-progressive-blur { z-index: -1; }

  h2 {
    position: absolute;
    left: 50%;
    width: auto;
    margin: 0;
    color: #2c2724;
    font-size: clamp(19px, 1.7dvw, 24px);
    font-weight: 810;
    letter-spacing: -.035em;
    text-align: center;
    text-transform: capitalize;
    transform: translateX(-50%);
    white-space: nowrap;
  }

  button {
    --language-close-background: #e7e9f2;
    position: absolute;
    top: 50%;
    right: var(--page-inline-padding);
    display: inline-flex;
    width: 46px;
    min-width: 46px;
    height: 46px;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    outline: none;
    border-radius: 999px;
    background: var(--language-close-background);
    color: #08090d;
    font-family: 'Google Sans Flex', sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: .02em;
    line-height: 1;
    text-transform: uppercase;
    transform: translateY(-50%);
    user-select: none;
    white-space: nowrap;
    pointer-events: auto;
    -webkit-tap-highlight-color: transparent;
    transition: background .2s ease, opacity .2s ease;
  }
  .language-close-icon {
    position: relative;
    display: block;
    width: 18px;
    height: 18px;
  }
  .language-close-icon i {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 18px;
    height: 2.5px;
    border-radius: 999px;
    background: #08090d;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  .language-close-icon i:last-child {
    z-index: 1;
    box-shadow: 0 0 0 1px var(--language-close-background);
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  button:hover:not(:disabled) { --language-close-background: #dde0e9; }
  button:disabled { cursor: wait; opacity: .45; }

  @media (min-width: 761px) and (max-width: 1024px) {
    height: 72px;
    padding-inline: clamp(24px, 4vw, 40px);
    button { right: clamp(24px, 4vw, 40px); }
  }

  @media (max-width: 760px) {
    button {
      right: var(--page-inline-padding);
      width: 38px;
      min-width: 38px;
      height: 38px;
      padding: 0;
      font-size: 12px;
    }
  }
`;

export const LanguageOption = styled.button<{ $active: boolean }>`
  display: flex;
  width: min(680px, 100%);
  align-items: center;
  justify-content: space-between;
  min-height: 86px;
  margin: 0 auto 6px;
  border: 0;
  border-radius: 18px;
  padding: 14px 20px;
  background: ${({ $active }) => ($active ? 'rgba(89, 58, 42, .09)' : 'transparent')};
  color: #302825;
  text-align: left;
  transition: background .2s ease, transform .2s ease, opacity .2s ease;
  &:hover:not(:disabled) { background: rgba(89, 58, 42, .08); }
  &:disabled { cursor: default; }
  > span { display: flex; min-width: 0; flex-direction: column; align-items: flex-start; gap: 5px; }
  strong { color: #302825; font-size: clamp(20px, 2.1dvw, 28px); font-weight: ${({ $active }) => ($active ? 820 : 740)}; letter-spacing: -.035em; }
  small { color: ${({ $active }) => ($active ? '#4f4945' : '#625b57')}; font-size: clamp(13px, 1.2dvw, 16px); font-weight: 630; }
  .spinner { width: 19px; height: 19px; border: 2.5px solid rgba(48, 40, 37, .2); border-top-color: #302825; border-radius: 50%; animation: ${spinner} .7s linear infinite; }

  @media (max-width: 760px) {
    &:hover:not(:disabled) { background: transparent; transform: none; }
  }
  @media (max-width: 600px) { min-height: 78px; padding: 12px 16px; border-radius: 16px; }
`;

export const LanguageOptions = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  min-height: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 108px 16px 80px;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior-y: contain;
  touch-action: pan-y;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: rgba(75, 53, 43, .28) transparent;

  &::-webkit-scrollbar { width: 8px; }
  &::-webkit-scrollbar-thumb { border-radius: 999px; background: rgba(75, 53, 43, .24); }
`;

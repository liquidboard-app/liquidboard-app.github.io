import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const itemSpinner = keyframes`
  to { transform: rotate(360deg); }
`;

export const HeaderWrapper = styled.header`
  position: fixed;
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
    font-size: 17px;
    font-weight: 760;
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
      background: rgba(255, 239, 222, .76);
      backdrop-filter: blur(32px) saturate(135%);
      -webkit-backdrop-filter: blur(32px) saturate(135%);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transform: translateY(-14px);
      transition: opacity .25s ease, visibility .25s ease, transform .3s ease;
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
  font-weight: 790;
  letter-spacing: -.045em;

  > img { width: 38px; height: 38px; border-radius: 11px; object-fit: cover; box-shadow: 0 5px 16px rgba(45, 32, 26, .14); }

  @media (max-width: 600px) {
    gap: 8px;
    font-size: 18px;
    > img { width: 31px; height: 31px; border-radius: 9px; }
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
  position: fixed;
  inset: 0;
  z-index: 4000;
  display: block;
  background: rgba(255, 239, 222, .72);
  backdrop-filter: blur(34px) saturate(135%);
  -webkit-backdrop-filter: blur(34px) saturate(135%);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transform: translateY(${({ $open }) => ($open ? '0' : '-12px')});
  transition: opacity .28s ease, visibility .28s ease, transform .36s cubic-bezier(.22, 1, .36, 1);

  > .language-modal-blur {
    position: fixed;
    inset: 0 0 auto;
    z-index: 2;
    height: 148px;
    background: linear-gradient(to bottom, rgba(255, 239, 222, .94), rgba(255, 239, 222, 0));
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
    color: #2c2724;
    font-size: clamp(19px, 1.7dvw, 24px);
    font-weight: 810;
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
    background: rgba(53, 43, 38, .08);
    color: #2c2724;
    pointer-events: auto;
    transition: background .2s ease, transform .2s ease, opacity .2s ease;
  }
  button:hover:not(:disabled) { background: rgba(53, 43, 38, .14); transform: rotate(5deg) scale(1.04); }
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
  scrollbar-color: rgba(75, 53, 43, .28) transparent;

  > div {
    width: min(680px, calc(100% - 32px));
    margin: 0 auto;
    padding: 126px 0 80px;
  }

  &::-webkit-scrollbar { width: 8px; }
  &::-webkit-scrollbar-thumb { border-radius: 999px; background: rgba(75, 53, 43, .24); }
`;

export const LanguageItem = styled.button<{ $active: boolean }>`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 34px;
  align-items: center;
  gap: 18px;
  width: 100%;
  min-height: 86px;
  margin: 0 0 6px;
  padding: 14px 20px;
  border: 0;
  border-radius: 18px;
  background: ${({ $active }) => ($active ? 'rgba(89, 58, 42, .09)' : 'transparent')};
  color: #302825;
  text-align: left;
  transition: background .2s ease, transform .2s ease, opacity .2s ease;

  &:hover:not(:disabled) { background: rgba(89, 58, 42, .08); transform: translateX(3px); }
  &:disabled { cursor: default; }
  &:disabled:not([aria-current='true']) { opacity: .55; }
  &[data-loading='true'] { cursor: wait; opacity: 1; }

  .language-copy { display: flex; min-width: 0; flex-direction: column; align-items: flex-start; gap: 5px; }
  strong { color: #302825; font-size: clamp(20px, 2.1dvw, 28px); font-weight: ${({ $active }) => ($active ? 820 : 740)}; letter-spacing: -.035em; }
  small { color: ${({ $active }) => ($active ? '#4f4945' : '#625b57')}; font-size: clamp(13px, 1.2dvw, 16px); font-weight: 630; }
  .language-status { display: grid; width: 34px; height: 34px; place-items: center; color: #302825; }
  .item-spinner { width: 19px; height: 19px; border: 2.5px solid rgba(48, 40, 37, .2); border-top-color: #302825; border-radius: 50%; animation: ${itemSpinner} .7s linear infinite; }

  @media (max-width: 600px) { min-height: 78px; padding: 12px 16px; border-radius: 16px; }
`;

export const ProgressiveBlur = styled.div`
  position: absolute;
  inset: 0 0 auto;
  z-index: -1;
  height: 132px;
  overflow: hidden;
  pointer-events: none;
  background: linear-gradient(to bottom, rgba(255, 239, 222, .82), rgba(255, 239, 222, 0));
  > div { position: absolute; inset: 0; }
  > div:nth-child(1) { backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); mask-image: linear-gradient(to bottom, #000 0%, transparent 32%); -webkit-mask-image: linear-gradient(to bottom, #000 0%, transparent 32%); }
  > div:nth-child(2) { backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); mask-image: linear-gradient(to bottom, #000 5%, transparent 44%); -webkit-mask-image: linear-gradient(to bottom, #000 5%, transparent 44%); }
  > div:nth-child(3) { backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); mask-image: linear-gradient(to bottom, #000 12%, transparent 56%); -webkit-mask-image: linear-gradient(to bottom, #000 12%, transparent 56%); }
  > div:nth-child(4) { backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); mask-image: linear-gradient(to bottom, #000 22%, transparent 68%); -webkit-mask-image: linear-gradient(to bottom, #000 22%, transparent 68%); }
  > div:nth-child(5) { backdrop-filter: blur(3.5px); -webkit-backdrop-filter: blur(3.5px); mask-image: linear-gradient(to bottom, #000 34%, transparent 78%); -webkit-mask-image: linear-gradient(to bottom, #000 34%, transparent 78%); }
  > div:nth-child(6) { backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px); mask-image: linear-gradient(to bottom, #000 46%, transparent 87%); -webkit-mask-image: linear-gradient(to bottom, #000 46%, transparent 87%); }
  > div:nth-child(7) { backdrop-filter: blur(1px); -webkit-backdrop-filter: blur(1px); mask-image: linear-gradient(to bottom, #000 58%, transparent 96%); -webkit-mask-image: linear-gradient(to bottom, #000 58%, transparent 96%); }
  > div:nth-child(8) { backdrop-filter: blur(.5px); -webkit-backdrop-filter: blur(.5px); mask-image: linear-gradient(to bottom, #000 70%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, #000 70%, transparent 100%); }
`;

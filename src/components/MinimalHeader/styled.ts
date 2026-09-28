import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderShell = styled.header`
  position: fixed; inset: 0 0 auto; z-index: 200; height: 72px; display: flex; align-items: center; gap: 24px; padding: 0 clamp(18px, 4vw, 56px); color: var(--text); background-color: var(--bg); transition: none;
  @media (max-width: 600px) { gap: 8px; padding-inline: 14px; }
  @media (max-width: 380px) { padding-inline: 12px; }
`;
export const HeaderBrand = styled.a`
  position: relative; z-index: 2; display: inline-flex; align-items: center; gap: 12px; min-width: 205px; color: var(--text); font-size: 24px; font-weight: 850; letter-spacing: -.05em;
  .logo { width: 30px; height: 30px; border-radius: 8px; object-fit: cover; }
  .logo-dark { display: none; }
  [data-theme='light'] & .logo-dark { display: block; }
  [data-theme='light'] & .logo-light { display: none; }
  @media (max-width: 1080px) { min-width: auto; gap: 11px; font-size: 22px; .logo { width: 30px; height: 30px; border-radius: 8px; } }
  @media (max-width: 600px) { gap: 9px; font-size: 20px; .logo { width: 30px; height: 30px; border-radius: 8px; } }
  @media (max-width: 380px) { font-size: 19px; .logo { width: 28px; height: 28px; } }
`;
export const HeaderNav = styled.nav`
  position: absolute; left: 50%; z-index: 3; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; gap: clamp(16px, 2vw, 28px);
  .mobile-menu-controls { display: none; }
  @media (max-width: 1080px) { position: fixed; z-index: 1; top: 72px; right: 0; bottom: auto; left: 0; max-height: calc(100dvh - 72px); transform: translateY(-10px); clip-path: inset(0 0 100% 0); display: flex; flex-direction: column; align-items: center; gap: 18px; overflow-y: auto; padding: 28px clamp(28px, 6vw, 44px) 20px; border: 0; border-radius: 0; background: var(--bg); box-shadow: none; visibility: hidden; pointer-events: none; transition: clip-path .32s cubic-bezier(.2,.8,.2,1), transform .32s cubic-bezier(.2,.8,.2,1), visibility 0s linear .32s; &.open { transform: translateY(0); clip-path: inset(0); visibility: visible; pointer-events: auto; transition-delay: 0s; } }
  @media (max-width: 1080px) {
    > a { opacity: 0; filter: blur(8px); transform: translateY(-8px); transition: opacity .22s ease, filter .22s ease, transform .22s ease; }
    &.open > a { opacity: 1; filter: blur(0); transform: translateY(0); }
    &.open > a:nth-of-type(1) { transition-delay: .03s; }
    &.open > a:nth-of-type(2) { transition-delay: .06s; }
    &.open > a:nth-of-type(3) { transition-delay: .09s; }
    &.open > a:nth-of-type(4) { transition-delay: .12s; }
    .mobile-menu-controls { opacity: 0; filter: blur(8px); transform: translateY(-8px); transition: opacity .22s ease, filter .22s ease, transform .22s ease; }
    &.open .mobile-menu-controls { opacity: 1; filter: blur(0); transform: translateY(0); transition-delay: .16s; }
    .mobile-menu-controls { display: grid; width: 100%; grid-template-columns: repeat(2, 54px); justify-content: center; gap: 14px; margin-top: 0; padding-top: 20px; padding-bottom: max(12px, env(safe-area-inset-bottom)); border-top: 0; }
    .menu-action-button { width: 54px; min-width: 54px; height: 54px; justify-content: center; padding: 0; border: 1px solid var(--header-border); border-radius: 50%; background: transparent; }
    .menu-action-button > svg, .menu-action-button .theme-icon { flex: 0 0 auto; }
  }
`;
export const MenuOverlay = styled.div<{ $open: boolean }>`
  position: fixed; inset: 72px 0 0; z-index: 150; background: rgba(0, 0, 0, .48);
  opacity: ${({ $open }) => $open ? 1 : 0}; visibility: ${({ $open }) => $open ? 'visible' : 'hidden'}; pointer-events: ${({ $open }) => $open ? 'auto' : 'none'};
  transition: opacity .24s ease, visibility 0s linear ${({ $open }) => $open ? '0s' : '.24s'};
  @media (min-width: 1081px) { display: none; }
`;
export const HeaderLink = styled(NavLink)`
  color: var(--muted-text); font-size: clamp(15px, 1.05vw, 17px); font-weight: 650; transition: color .2s ease; &:hover, &.active { color: var(--text); } @media (max-width: 1080px) { width: auto; padding: 0; font-size: clamp(22px, 3vw, 26px); text-align: center; }
  @media (max-width: 600px) { width: 100%; }
`;
export const HeaderActions = styled.div`
  position: relative; z-index: 2; display: flex; align-items: center; gap: 8px; margin-left: auto;
  @media (max-width: 1080px) { .desktop-action { display: none; } .download-button { min-width: 100px; height: 34px; padding: 0 9px; font-size: 12px; white-space: nowrap; } }
  @media (max-width: 600px) { gap: 4px; .download-button { min-width: 92px; height: 32px; padding: 0 7px; font-size: 11px; } }
  @media (max-width: 380px) { .download-button { min-width: 88px; height: 30px; padding: 0 6px; font-size: 10.5px; } }
`;
export const HeaderButton = styled.button`
  --tooltip-bg: #fff;
  --tooltip-color: #111;
  :root[data-theme='dark'] & { --tooltip-bg: #fff; --tooltip-color: #111; }
  :root[data-theme='light'] & { --tooltip-bg: #000; --tooltip-color: #fff; }
  position: relative; display: inline-flex; align-items: center; justify-content: center; min-width: 40px; height: 40px; padding: 0 11px; border: 1px solid var(--header-border); border-radius: 999px; background: transparent; color: var(--text); font-size: 16px; font-weight: 750; transition: opacity .2s ease;
  &:hover { opacity: .78; }
  &[data-tooltip]:hover, &[data-tooltip]:focus-visible { opacity: 1; }
  &.download-button { min-width: 128px; height: 42px; gap: 7px; padding: 0 14px; border-color: #1478ee; background: #1478ee; color: #fff; font-size: 14px; }
  &.download-button svg { width: 21px; height: 21px; flex: 0 0 auto; fill: currentColor; }
  &.language-button, &.theme-button { display: grid; place-items: center; align-self: center; min-width: 46px; height: 46px; border: 0; background: transparent; padding: 0; line-height: 0; }
  &.language-button svg, &.theme-button svg { display: block; }
  @media (max-width: 1080px) { &.desktop-action { display: none !important; } }
  .theme-icon { display: grid; place-items: center; }
  &.language-button:hover, &.theme-button:hover { background: transparent; }
  .tooltip-popover { position: absolute; top: calc(100% + 13px); left: 50%; z-index: 220; isolation: isolate; padding: 12px 16px; border-radius: 11px; background: var(--tooltip-bg); box-shadow: 0 8px 24px rgba(0,0,0,.2); color: var(--tooltip-color); font-size: 14px; font-weight: 500; line-height: 1.2; white-space: nowrap; opacity: 0; visibility: hidden; filter: blur(6px); transform: translate(-50%, -3px); pointer-events: none; transition: opacity .28s ease, filter .28s ease, transform .28s ease, visibility 0s linear .28s; }
  .tooltip-popover i { position: absolute; top: -2px; left: 50%; z-index: -1; width: 10px; height: 10px; border-radius: 2px; background: var(--tooltip-bg); transform: translateX(-50%) rotate(45deg); }
  &[data-tooltip]:hover .tooltip-popover, &[data-tooltip]:focus-visible .tooltip-popover { opacity: 1; visibility: visible; filter: blur(0); transform: translate(-50%, 0); transition-delay: 0s; }
`;
export const MenuButton = styled(HeaderButton)`
  --menu-button-bg: rgba(255, 255, 255, .07);
  --menu-button-hover-bg: rgba(255, 255, 255, .1);
  :root[data-theme='light'] & {
    --menu-button-bg: rgba(89, 58, 42, .09);
    --menu-button-hover-bg: rgba(89, 58, 42, .08);
  }
  display: none;
  border: 0;
  font-size: 16px;
  @media (max-width: 1080px) {
    display: grid;
    min-width: 46px;
    height: 46px;
    place-items: center;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: transparent;
    &::before { position: absolute; inset: 3px; border-radius: 50%; background: var(--menu-button-bg); content: ''; transition: background .2s ease; }
    &:hover::before { background: var(--menu-button-hover-bg); }
    .menu-icon { position: relative; z-index: 1; width: 21px; height: 21px; overflow: visible; }
    .menu-line { fill: none; stroke: currentColor; stroke-width: 3; stroke-linecap: round; transform-box: fill-box; transform-origin: center; transition: transform .36s cubic-bezier(.68,-.2,.32,1.2), opacity .2s ease; }
    .menu-line-top { transform: translateY(0) rotate(0); }
    .menu-line-middle { transform: scaleX(1); opacity: 1; }
    .menu-line-bottom { transform: translateY(0) rotate(0); }
    &.is-open .menu-line-top { transform: translateY(10px) rotate(45deg); }
    &.is-open .menu-line-middle { transform: scaleX(0); opacity: 0; }
    &.is-open .menu-line-bottom { transform: translateY(-10px) rotate(-45deg); }
  }
  @media (max-width: 600px) {
    .menu-icon { width: 18px; height: 18px; }
  }
`;
export const LanguagePopover = styled.div<{ $open: boolean }>`
  position: fixed; z-index: 210; top: 72px; right: clamp(18px, 4vw, 56px); width: 220px; padding: 8px; border: 1px solid var(--header-border); border-radius: 18px; background: var(--surface); box-shadow: var(--shadow-card); opacity: ${({ $open }) => $open ? 1 : 0}; visibility: ${({ $open }) => $open ? 'visible' : 'hidden'}; transform: translateY(${({ $open }) => $open ? '0' : '-8px'}); transition: .2s ease; pointer-events: ${({ $open }) => $open ? 'auto' : 'none'};
`;
export const LanguageList = styled.div` display: grid; gap: 2px; max-height: 330px; overflow: auto; `;
export const LanguageOption = styled.button<{ $active: boolean }>`
  display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 9px 10px; border: 0; border-radius: 10px; background: ${({ $active }) => $active ? 'var(--header-border)' : 'transparent'}; color: var(--text); text-align: left; &:hover { background: var(--header-border); } small { color: var(--muted-text); }
`;

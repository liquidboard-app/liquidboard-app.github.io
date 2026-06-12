import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100dvh;
  max-width: 1440px;
  margin: 0 auto;
  z-index: 100;
  pointer-events: none;

  > * {
    pointer-events: auto;
  }

  .header-panel {
    position: absolute;
  }

  .brand-panel {
    top: 17px;
    left: 20px;
  }

  .action-panel {
    top: 17px;
    right: 20px;
  }

  .menu-panel {
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    bottom: auto;
  }

  .floating-glass .glass,
  .floating-glass .glass > div {
    width: 100% !important;
  }

  .floating-glass .glass {
    border: 1px solid rgba(255, 255, 255, 0.15) !important;
    background: rgba(10, 10, 10, 0.35) !important;
    border-radius: 999px !important;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2) !important;
  }

  .main-menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3px;
  }

  .menu-language-toggle {
    margin-left: 0;
  }

  .menu-language-divider {
    margin: 0 8px 0 10px;
  }

  .header-right {
    display: flex;
    justify-content: flex-end;
    position: relative;
  }

  .hamburger-btn {
    display: none;
    background: transparent;
    border: none;
    cursor: pointer;
    width: 28px; 
    height: 28px;
    position: relative;
    padding: 0;
    align-items: center;
    justify-content: center;
  }

  .hamburger-line {
    position: absolute;
    width: 20px;
    height: 1.5px;
    background: #fff;
    left: 4px; 
    
    transition: top 0.3s ease 0.3s, transform 0.3s ease 0s;
  }

  .hamburger-line:first-child {
    top: 10px;
  }

  .hamburger-line:last-child {
    top: 16px;
  }
  
  .hamburger-btn.open .hamburger-line {
    
    transition: top 0.3s ease 0s, transform 0.3s ease 0.3s;
  }

  .hamburger-btn.open .hamburger-line:first-child {
    top: 13px;
    transform: rotate(45deg);
  }

  .hamburger-btn.open .hamburger-line:last-child {
    top: 13px;
    transform: rotate(-45deg);
  }

  .menu-panel {
    z-index: 100; 
  }

  @media (max-width: 860px) {
    .brand-panel {
      top: 16px;
      left: 10px;
    }

    .action-panel {
      top: 16px;
      right: 10px;
    }

    .menu-panel {
      bottom: 16px;
      right: 10px;
      left: auto;
      top: auto;
      transform: none;
    }

    .menu-glass > div {
      padding: 6px !important; 
    }

    .main-menu {
      display: none;
    }

    .hamburger-btn {
      display: flex;
    }

  }
`;

export const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  justify-self: start;
  font-weight: 650;
  letter-spacing: -0.01em;
  font-size: 18px;
  text-decoration: none;
  color: var(--text);
  outline: none;

  @media (max-width: 860px) {
    gap: 8px;
    font-size: 15px;
  }
`;

export const Logo = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: block;
  background-image: var(--logo);
  background-size: cover;
  background-position: center;
  outline: none;

  @media (max-width: 860px) {
    width: 28px;
    height: 28px;
    border-radius: 6px;
  }
`;

export const ExpandedMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 4px;
`;

export const ExpandedMenuItem = styled(NavLink)`
  height: 30px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: #fff;
    background: transparent;
  }

  &.active {
    color: #fff;
    background: rgba(255, 255, 255, 0.15);
  }

  .animated-text-wrapper {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .animated-text {
    transition: opacity 0.4s ease, filter 0.4s ease, transform 0.4s ease;
  }

  .animated-text.old {
    position: absolute;
    inset: 0;
    opacity: 0;
    filter: blur(4px);
    transform: scale(0.85);
    pointer-events: none;
  }

  .animated-text.latest.animating {
    animation: textBlurIn 0.4s ease forwards;
  }

  @keyframes textBlurIn {
    0% {
      opacity: 0;
      filter: blur(4px);
      transform: scale(0.85);
    }
    100% {
      opacity: 1;
      filter: blur(0px);
      transform: scale(1);
    }
  }
`;

export const ExpandedMenuButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  font-weight: 500;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  white-space: nowrap;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
  }

  &.active {
    color: #fff;
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PillActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  width: auto;
  min-width: 34px;
  height: 34px;
  padding: 0 14px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  
  &.lang-toggle-btn {
    width: 34px;
    padding: 0;
  }

  &.download-btn {
    background: #ffffff;
    color: #000000;
    border: none;
    font-weight: 700;

    &:hover {
      background: rgba(255, 255, 255, 0.85);
    }
  }

  @media (max-width: 860px) {
    height: 28px;
    padding: 0 10px;
    font-size: 12px;
    gap: 5px;

    &.lang-toggle-btn {
      width: 28px;
      min-width: 28px;
    }

    svg {
      width: 13px !important;
      height: 13px !important;
    }

    span {
      font-size: 12px !important;
    }
  }

  .lang-text {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 650;
    transition: opacity 0.4s ease, filter 0.4s ease, transform 0.4s ease;
  }

  .lang-text.hidden {
    opacity: 0;
    filter: blur(4px);
    transform: scale(0.85);
    pointer-events: none;
  }

  .lang-text.active {
    opacity: 1;
    filter: blur(0px);
    transform: scale(1);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const LanguageSwitch = styled.div`
  display: inline-flex;
  align-items: center;
  height: 30px;
  min-width: 72px;
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  transform: translateY(0.5px);

  @media (max-width: 860px) {
    height: 34px;
    min-width: 76px;
    transform: none;
  }
`;

export const LanguageDivider = styled.span`
  color: rgba(255, 255, 255, 0.28);
  font-size: 15px;
  font-weight: 500;
  line-height: 0.9;
`;

export const LanguageToggleButton = styled.button`
  --thumb-offset: 2px;
  --thumb-width: calc(50% + 1px);
  position: relative;
  width: 72px;
  height: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  border: none;
  background: rgba(255, 255, 255, 0.08);
  padding: 0;
  border-radius: 999px;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s ease;
  overflow: hidden;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }

  .lang-option {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.04em;
    line-height: 1;
    z-index: 1;
    transition: color 0.22s ease, opacity 0.22s ease;
  }

  .lang-option-en {
    grid-column: 1;
    transform: translateX(2px);
  }

  .lang-option-vi {
    grid-column: 2;
    transform: translateX(-2px);
  }

  .lang-thumb {
    position: absolute;
    top: var(--thumb-offset);
    left: var(--thumb-offset);
    width: var(--thumb-width);
    height: 26px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.22);
    transition: left 0.24s ease;
  }

  &.is-en .lang-option-en,
  &.is-vi .lang-option-vi {
    color: #0b0b0b;
    opacity: 1;
  }

  &.is-en .lang-option-vi,
  &.is-vi .lang-option-en {
    color: rgba(255, 255, 255, 0.7);
    opacity: 0.92;
  }

  &.is-vi .lang-thumb {
    left: calc(100% - var(--thumb-width) - var(--thumb-offset));
  }

  @media (max-width: 860px) {
    --thumb-width: calc(50% + 1px);
    width: 76px;
    height: 34px;

    .lang-option {
      font-size: 14px;
    }

    .lang-thumb {
      width: var(--thumb-width);
      height: 30px;
    }

    &.is-vi .lang-thumb {
      left: calc(100% - var(--thumb-width) - var(--thumb-offset));
    }
  }
`;

export const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const MenuPanelWrapper = styled.div`
  position: absolute;
  top: 8px; 
  right: 24px;
  display: flex;
  justify-content: flex-end;
  z-index: 10;

  .menu-glass {
    position: absolute;
    top: 0;
    right: 0;
  }

  .menu-glass.hidden {
    pointer-events: none;
    visibility: hidden;
    transform: translateY(-150%);
  }

  .menu-glass.visible {
    pointer-events: auto;
    visibility: visible;
  }

  .glass-panel .glass {
    border: 1px solid rgba(255, 255, 255, 0.12) !important;
    box-shadow: none !important;
    gap: 0 !important;
  }
`;

export const MobileGradientBlur = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120px;
    z-index: -1;
    pointer-events: none;

    > div {
      position: absolute;
      inset: 0;
    }

    > div:nth-child(1) {
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 0) 25%);
      mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 0) 25%);
    }
    > div:nth-child(2) {
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%);
      mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%);
    }
    > div:nth-child(3) {
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);
      -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%);
      mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%);
    }
    > div:nth-child(4) {
      backdrop-filter: blur(1.5px);
      -webkit-backdrop-filter: blur(1.5px);
      -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%);
      mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%);
    }
    > div:nth-child(5) {
      backdrop-filter: blur(0.8px);
      -webkit-backdrop-filter: blur(0.8px);
      -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%);
      mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%);
    }
    > div:nth-child(6) {
      backdrop-filter: blur(0.4px);
      -webkit-backdrop-filter: blur(0.4px);
      -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%);
      mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%);
    }
    > div:nth-child(7) {
      backdrop-filter: blur(0.2px);
      -webkit-backdrop-filter: blur(0.2px);
      -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%);
      mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%);
    }
    > div:nth-child(8) {
      backdrop-filter: blur(0.1px);
      -webkit-backdrop-filter: blur(0.1px);
      -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%);
      mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%);
    }

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, rgba(10,10,10,0.25) 0%, rgba(10,10,10,0) 100%);
    }
  }
`;

export const MobileMenuOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 99;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  pointer-events: none;

  &.open {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .mobile-menu-links {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    transform: translateY(20px);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &.open .mobile-menu-links {
    transform: translateY(0);
  }

  ${ExpandedMenuItem} {
    font-size: 20px;
    padding: 10px 18px;
    background: transparent;
    border: none;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    
    &:hover, &.active {
      background: rgba(255, 255, 255, 0.15);
      padding-top: 12px;
      padding-bottom: 12px;
    }
  }

  .mobile-language-toggle {
    position: absolute;
    left: 16px;
    bottom: 16px;
    height: 32px;
    padding: 0;
  }
`;

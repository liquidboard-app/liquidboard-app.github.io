import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  position: fixed;
  inset: 0;
  z-index: 100;
  pointer-events: none;

  > * {
    pointer-events: auto;
  }

  .header-panel {
    position: fixed;
  }

  .brand-panel {
    top: 24px;
    left: 24px;
  }

  .action-panel {
    top: 24px;
    right: 24px;
  }

  .menu-panel {
    left: 24px;
    bottom: 24px;
  }

  .lang-panel {
    bottom: 24px;
    right: 24px;
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
    align-items: center;
    gap: 4px;
  }

  .header-right {
    display: flex;
    justify-content: flex-end;
    position: relative;
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
      left: 10px;
      display: none;
    }

    .lang-panel {
      bottom: 16px;
      right: 10px;
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

  @media (max-width: 860px) {
    gap: 8px;
    font-size: 15px;
  }
`;

export const Logo = styled.span`
  width: 34px;
  height: 34px;
  border-radius: 8px;
  display: block;
  background-image: var(--logo);
  background-size: cover;
  background-position: center;
  box-shadow: var(--shadow-card);

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
  height: 34px;
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

  /* Force exact 34x34 circle for language button */
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

export const LangButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 20px;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: color 0.2s ease;
  position: relative;

  &:hover {
    color: #fff;
  }

  .lang-text {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 650;
    letter-spacing: 0.04em;
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

  @media (max-width: 860px) {
    width: 28px;
    height: 28px;
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
  top: 8px; /* Drop down slightly below the header */
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

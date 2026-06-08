import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  width: calc(100% - 48px);
  max-width: 980px;
  pointer-events: none;

  > * {
    pointer-events: auto;
  }

  .main-header-glass,
  .main-header-glass .glass,
  .main-header-glass .glass > div {
    width: 100% !important;
  }

  .main-header-glass .glass {
    border: 1px solid rgba(255, 255, 255, 0.15) !important;
    background: rgba(10, 10, 10, 0.35) !important; /* Tint đen để làm dịu các nền sáng chói ở dưới */
    border-radius: 100px !important;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2) !important;
  }

  /* To make the contents align with the main container while the glass stretches */
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }

  .header-left {
    flex: 1;
    display: flex;
    justify-content: flex-start;
  }

  .header-center {
    flex: 1;
    display: flex;
    justify-content: center;

    .main-menu {
      display: flex;
      gap: 4px;
      align-items: center;
    }
  }

  .header-right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    position: relative; /* Anchor for popovers */
  }

  @media (max-width: 860px) {
    width: calc(100% - 20px);
    bottom: 16px;
    
    .main-header-glass .glass {
      padding: 10px 14px !important;
    }

    .header-center {
      display: none; /* Hide menu on mobile for now */
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
  border-radius: 7px;
  display: block;
  background-image: var(--logo);
  background-size: cover;
  background-position: center;
  box-shadow: var(--shadow-card);

  @media (max-width: 860px) {
    width: 26px;
    height: 26px;
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
  padding: 8px 16px;
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
  gap: 8px;
  width: auto;
  min-width: 40px;
  height: 40px;
  padding: 0 16px;
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

  /* Force exact 40x40 circle for language button */
  &.lang-toggle-btn {
    width: 40px;
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
    height: 32px;
    padding: 0 12px;
    font-size: 12px;
    gap: 6px;
    
    &.lang-toggle-btn {
      width: 32px;
      min-width: 32px;
    }
    
    svg {
      width: 14px !important;
      height: 14px !important;
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

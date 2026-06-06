import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  position: relative;
  z-index: 100;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 14px 20px;
  @media (max-width: 860px) {
    grid-template-columns: 1fr auto;
  }
`;

export const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  justify-self: start;
  font-weight: 650;
  letter-spacing: -0.01em;
  font-size: 17px;
  transition: transform 0.25s ease;

  &:hover .brand__logo {
    transform: translateY(-1px);
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
  transition: transform 0.25s ease;
`;

export const Menu = styled.nav`
  justify-self: center;
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 860px) {
    display: none;
  }
`;

export const MenuItem = styled(NavLink)`
  padding: 7px 15px;
  border-radius: 999px;
  font-size: 14px;
  color: var(--muted);
  background: transparent;
  box-shadow: none;
  transition: color 0.2s ease, background 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: var(--text);
  }

  &.active {
    color: var(--text);
    background: var(--surface);
    box-shadow: 0 2px 8px -3px rgba(0, 0, 0, 0.25);
  }
`;

export const Actions = styled.div`
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Popwrap = styled.div`
  position: relative;
`;

export const IconButton = styled.button`
  width: 40px;
  height: 40px;
  display: inline-grid;
  place-items: center;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--ghost-bg);
  color: var(--text);
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0) scale(0.96);
  }
  
  svg {
    width: 19px;
    height: 19px;
  }
`;

export const Popover = styled.div<{ $open: boolean }>`
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  min-width: 188px;
  padding: 8px;
  border-radius: 16px;
  background: var(--popover-bg);
  backdrop-filter: saturate(180%) blur(26px);
  -webkit-backdrop-filter: saturate(180%) blur(26px);
  border: 1px solid var(--popover-border);
  box-shadow: 0 24px 60px -20px rgba(0, 0, 0, 0.45);
  opacity: ${props => props.$open ? 1 : 0};
  transform: ${props => props.$open ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.96)'};
  transform-origin: top right;
  pointer-events: ${props => props.$open ? 'auto' : 'none'};
  transition: opacity 0.18s ease, transform 0.18s ease;
  z-index: 120;
`;

export const PopoverLabel = styled.div`
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--muted);
  padding: 6px 12px 4px;
`;

export const PopoverItem = styled.button<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 9px 12px;
  border: none;
  background: ${props => props.$selected ? 'var(--ghost-bg)' : 'transparent'};
  border-radius: 10px;
  color: var(--text);
  font-size: 14px;
  text-align: left;
  transition: background 0.15s ease;

  &:hover {
    background: var(--ghost-bg);
  }

  .check {
    margin-left: auto;
    opacity: ${props => props.$selected ? 1 : 0};
  }
`;

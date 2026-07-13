import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const PageShell = styled.main`
  min-height: 100dvh;
  padding: 150px 10px 140px;
  background: #ffefde;
  color: #2b2523;
  @media (max-width: 700px) { padding: 112px 10px 130px; }
`;

export const PageInner = styled.div<{ $wide?: boolean }>`
  width: 100%;
  max-width: ${({ $wide }) => $wide ? '1280px' : '767px'};
  margin: 0 auto;
`;

export const PageHeading = styled.header<{ $compact?: boolean; $tight?: boolean; $fullDescription?: boolean }>`
  margin-bottom: ${({ $tight }) => $tight ? '32px' : '52px'};
  text-align: center;
  h1 { margin: 0; font-size: ${({ $compact }) => $compact ? 'clamp(38px, 5dvw, 64px)' : 'clamp(48px, 7dvw, 88px)'}; line-height: 1.06; font-weight: 820; letter-spacing: -.018em; }
  p { max-width: ${({ $fullDescription }) => $fullDescription ? 'none' : '750px'}; margin: 20px auto 0; color: #665249; font-size: clamp(17px, 1.35dvw, 20px); line-height: 1.58; font-weight: 540; letter-spacing: -.012em; }
  @media (max-width: 700px) { margin-bottom: ${({ $tight }) => $tight ? '24px' : '36px'}; h1 { font-size: ${({ $compact }) => $compact ? 'clamp(34px, 10dvw, 48px)' : 'clamp(42px, 14dvw, 64px)'}; letter-spacing: -.012em; } p { font-size: 16px; line-height: 1.55; } }
`;

export const GlassCard = styled.article`
  border: 1px solid rgba(79, 53, 41, .09);
  border-radius: 24px;
  background: rgba(247, 226, 204, .66);
  box-shadow: 0 20px 55px rgba(80, 51, 35, .09);
  backdrop-filter: blur(20px) saturate(130%);
  -webkit-backdrop-filter: blur(20px) saturate(130%);
`;

export const Tabs = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 38px;
  @media (max-width: 600px) { gap: 6px; }
`;

export const Tab = styled(NavLink)`
  padding: 10px 17px;
  border: 1px solid rgba(70, 48, 38, .1);
  border-radius: 999px;
  background: transparent;
  color: #785e52;
  font-size: 17px;
  font-weight: 740;
  transition: transform .18s ease, background .18s ease, border-color .18s ease, color .18s ease;
  &:hover { border-color: rgba(70, 48, 38, .28); color: #2c2623; transform: translateY(-2px); }
  &.active { border-color: #2c2724; background: #2c2724; color: #fff3e4; }
  @media (max-width: 600px) { padding: 9px 13px; font-size: 15px; }
`;

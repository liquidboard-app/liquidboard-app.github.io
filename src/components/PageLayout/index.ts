import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const PageShell = styled.main<{ $afterHero?: boolean }>`
  min-height: 100dvh;
  padding: ${({ $afterHero }) => $afterHero ? '64px 10px 140px' : '142px 10px 140px'};
  background: var(--bg);
  color: var(--text);
  @media (max-width: 700px) { padding: ${({ $afterHero }) => $afterHero ? '28px 10px 110px' : '106px 10px 130px'}; }
`;

export const PageInner = styled.div<{ $wide?: boolean }>`
  width: 100%;
  max-width: ${({ $wide }) => $wide ? '1280px' : '767px'};
  margin: 0 auto;
`;

export const PageHeading = styled.header<{ $compact?: boolean; $tight?: boolean; $fullDescription?: boolean }>`
  margin-bottom: ${({ $tight }) => $tight ? '32px' : '52px'};
  text-align: center;
  h1 { margin: 0; font-size: clamp(44px, 3.8vw, 68px); line-height: 1.08; font-weight: 800; letter-spacing: normal; }
  p { max-width: ${({ $fullDescription }) => $fullDescription ? 'none' : '750px'}; margin: 20px auto 0; color: var(--muted-text); font-size: clamp(17px, 1.35dvw, 20px); line-height: 1.58; font-weight: 540; letter-spacing: -.012em; }
  @media (max-width: 700px) { margin-bottom: ${({ $tight }) => $tight ? '24px' : '36px'}; h1 { font-size: clamp(40px, 9.4vw, 54px); } p { font-size: 16px; line-height: 1.55; } }
`;

export const GlassCard = styled.article`
  border: 1px solid var(--border);
  border-radius: 24px;
  background: var(--surface);
  color: var(--text);
  box-shadow: var(--shadow-card);
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
  border: 1px solid var(--border);
  border-radius: 999px;
  background: transparent;
  color: var(--text);
  font-size: 17px;
  font-weight: 790;
  transition: transform .18s ease, background .18s ease, border-color .18s ease, color .18s ease;
  &:hover { border-color: var(--border-strong); color: var(--text); transform: translateY(-2px); }
  &.active { border-color: var(--text); background: var(--text); color: var(--bg); }
  @media (max-width: 600px) { padding: 9px 13px; font-size: 15px; }
`;

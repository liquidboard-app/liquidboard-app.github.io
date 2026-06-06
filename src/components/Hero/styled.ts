import styled from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 32px 24px 0;
  overflow: visible;
`;

export const Title = styled.h1`
  font-size: clamp(34px, 5.8vw, 80px);
  line-height: 1.04;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  font-weight: 900;
  margin: 0;

  .line {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.32em;
  }
`;

export const HeroUnit = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.16em;
  white-space: nowrap;
  will-change: transform, filter, opacity;
  opacity: 0;
  filter: blur(18px);
`;

export const Lead = styled.p`
  margin: 18px auto 0;
  max-width: 46ch;
  font-size: clamp(15px, 1.4vw, 19px);
  line-height: 1.55;
  color: var(--muted);
  opacity: 0;
  filter: blur(14px);
  will-change: transform, opacity, filter;
`;

export const Cta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 14px;
  opacity: 0;
  filter: blur(12px);
  will-change: transform, opacity, filter;
`;

export const ButtonPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 22px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 550;
  border: 1px solid transparent;
  transition: transform 0.2s ease, opacity 0.2s ease;
  background: var(--pill-bg);
  color: var(--pill-text);

  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0) scale(0.98);
  }
`;

// Hero styled components
import styled, { keyframes } from 'styled-components';

const moveDown = keyframes`
  0% { transform: translateY(-40px); opacity: 0; }
  25% { transform: translateY(5px); opacity: 1; }
  50% { transform: translateY(5px); opacity: 1; }
  75% { transform: translateY(40px); opacity: 0; }
  100% { transform: translateY(40px); opacity: 0; }
`;

const rotateLeft = keyframes`
  0% { transform: rotate(90deg); }
  25% { transform: rotate(55deg); }
  50% { transform: rotate(55deg); }
  75% { transform: rotate(90deg); }
  100% { transform: rotate(90deg); }
`;

const rotateRight = keyframes`
  0% { transform: rotate(-90deg); }
  25% { transform: rotate(-55deg); }
  50% { transform: rotate(-55deg); }
  75% { transform: rotate(-90deg); }
  100% { transform: rotate(-90deg); }
`;

export const ScrollIndicatorWrapper = styled.div`
  position: absolute;
  top: 50%;
  margin-top: clamp(60px, 10vw, 130px);
  left: 50%;
  transform: translateX(-50%);
  width: 52px;
  height: 52px;
  background-color: #1a1a1a;
  border-radius: 10% 10% / 80% 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  will-change: transform, opacity;
  z-index: 10;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #2e2e2e;
  }

  @media (max-width: 860px) {
    transform: translateX(-50%) scale(0.65);
    margin-top: 40px;
  }
`;

export const Chevron = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  gap: 4px;
  animation: ${moveDown} 4s infinite cubic-bezier(0.6, 0.05, 0.4, 0.95) both;

  &.chevron-2 {
    animation-delay: 2s;
    .line-left { animation-delay: 2s; }
    .line-right { animation-delay: 2s; }
  }
`;

export const ChevronLineLeft = styled.div`
  width: 14px;
  height: 3px;
  background: #fff;
  border-radius: 0;
  transform-origin: right center;
  animation: ${rotateLeft} 4s infinite cubic-bezier(0.6, 0.05, 0.4, 0.95) both;
`;

export const ChevronLineRight = styled.div`
  width: 14px;
  height: 3px;
  background: #fff;
  border-radius: 0;
  transform-origin: left center;
  animation: ${rotateRight} 4s infinite cubic-bezier(0.6, 0.05, 0.4, 0.95) both;
`;

export const HeroSection = styled.section`
  height: 206dvh;
  position: relative;
  background: transparent;
`;

export const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* 70px = 46px panel + 24px gap — same top and bottom so content truly centers */
  padding: 70px 0;
  box-sizing: border-box;

  @media (max-width: 860px) {
    padding: 60px 0;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 980px;
  height: 100%;
  position: relative;
  container-type: inline-size;
`;

export const Line1 = styled.h1`
  font-size: clamp(20px, 5.55cqw, 80px);
  line-height: 1.04;
  letter-spacing: 0.01em;
  font-weight: 700;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  text-align: center;
  will-change: transform, opacity, filter;
  color: var(--text);
`;

export const Line2Container = styled.div`
  font-size: clamp(20px, 5.55cqw, 80px);
  position: absolute;
  top: 50%;
  left: 50%;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: top, transform;
`;

export const Line2Text = styled.span`
  font-size: clamp(20px, 5.55cqw, 80px);
  line-height: 1.04;
  letter-spacing: 0.01em;
  font-weight: 700;
  white-space: pre;
  color: var(--text);
  will-change: transform;
`;

export const SplitLeft = styled(Line2Text)`
  position: relative;
`;

export const SplitRight = styled(Line2Text)`
  position: relative;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 0px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: height;
  
  img {
    height: 100%;
    width: auto;
    object-fit: contain;
    display: block;
  }
`;

/* ─── Hero Brand (animates to header position on scroll) ─── */
export const HeroBrand = styled.div`
  position: absolute;
  /* CSS anchor point — GSAP takes over transform from here */
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  gap: 12px;
  will-change: transform, opacity;
  z-index: 10;
  pointer-events: none;
  white-space: nowrap;
`;

export const HeroBrandLogo = styled.span`
  width: 52px;
  height: 52px;
  border-radius: 12px;
  display: block;
  flex-shrink: 0;
  background-image: var(--logo);
  background-size: cover;
  background-position: center;
  box-shadow: var(--shadow-card);
`;

export const HeroBrandText = styled.span`
  font-size: 26px;
  font-weight: 650;
  letter-spacing: -0.02em;
  color: var(--text);
`;

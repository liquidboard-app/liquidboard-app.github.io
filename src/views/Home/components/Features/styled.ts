import styled from 'styled-components';

const mobilePanelHeight = 'calc(100dvh - 120px)';

export const FeaturesSection = styled.section`
  position: relative;
  margin-top: -452px;
  padding: 0 0 28px;
  background: transparent;
  z-index: 2;

  @media (max-width: 900px) {
    margin-top: -208px;
  }
`;

export const FeaturesPin = styled.div`
  height: 100dvh;
  padding: 30px 0;
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
  overflow: hidden;

  @media (max-width: 900px) {
    padding: 0;
  }
`;

export const FeaturesInner = styled.div`
  width: 100%;
  max-width: 1100px !important;
  margin: 0 auto;
  padding: 0 24px;
  flex: 1;
  display: grid;
  grid-template-columns: minmax(0, 6fr) minmax(280px, 4fr);
  gap: clamp(18px, 2.4vw, 34px);
  align-items: stretch;

  @media (max-width: 900px) {
    display: block;
    position: relative;
    padding: 0 24px;
  }
`;

export const CopyColumn = styled.div`
  min-width: 0;
  display: flex;
  align-items: center;
  height: 100%;
  padding-right: clamp(18px, 3vw, 56px);

  @media (max-width: 900px) {
    position: absolute;
    inset: 0;
    align-items: flex-start;
    padding: 50px 20px 0 20px;
    z-index: 1;
  }
`;

export const CopyLines = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const FeatureLine = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center; /* centers the inner text block vertically */
  overflow: hidden;
  will-change: opacity, filter, transform;
`;

export const FeatureLineInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  font-size: clamp(16px, 2.2vw, 32px);
  line-height: 1.35;
  letter-spacing: 0;
  font-weight: 540;
  word-break: normal;
  overflow-wrap: break-word;
  white-space: normal;

  @media (max-width: 900px) {
    font-size: clamp(18px, 4.5vw, 28px);
    line-height: 1.3;
    gap: 10px;
    align-items: center;
    text-align: center;
  }
`;

export const FeatureBadge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 16px;
  border-radius: 100px;
  background-color: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.02em;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`;

export const FeatureChar = styled.span`
  --char-progress: 0;
  display: inline;
  color: color-mix(in srgb, var(--text) calc(var(--char-progress) * 100%), rgba(243, 243, 245, 0.2));
  white-space: pre-wrap;
  line-height: inherit;
  will-change: color;
`;

export const VisualColumn = styled.div`
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  align-self: stretch;

  @media (max-width: 900px) {
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
  }
`;

export const VisualFrame = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    height: 100%;
    width: 100%;
    max-width: 100%;
  }
`;

export const VisualLayer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  filter: blur(18px);
  will-change: opacity, filter, transform;
  pointer-events: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    backface-visibility: hidden;
    transform: translateZ(0);
  }
`;

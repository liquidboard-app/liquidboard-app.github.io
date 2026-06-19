import styled from 'styled-components';

export const ActionSection = styled.section`
  position: relative;
  margin-top: 0;
  padding: 0 0 28px;
  background: transparent;
  z-index: 1;

  @media (max-width: 900px) {
    padding-bottom: 12px;
  }
`;

export const ActionPin = styled.div`
  height: calc(100dvh - 56px);
  padding: 30px 0;
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
  overflow: hidden;

  @media (max-width: 900px) {
    padding: 0;
    overflow: visible;
  }
`;

export const ActionInner = styled.div`
  width: 100%;
  max-width: 1000px !important;
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
    padding: 35px 20px 0 20px;
    z-index: 1;
  }
`;

export const CopyLines = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const ActionLine = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  will-change: opacity, filter, transform;

  @media (max-width: 900px) {
    align-items: flex-start;
  }
`;

export const ActionLineInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  font-size: clamp(15px, 1.8vw, 24px);
  line-height: 1.4;
  letter-spacing: 0;
  font-weight: 540;
  word-break: break-word;
  overflow-wrap: anywhere;
  white-space: normal;

  @media (max-width: 900px) {
    font-size: clamp(15px, 3.8vw, 20px);
    line-height: 1.35;
    gap: 10px;
    align-items: center;
    text-align: center;
  }
`;

export const ActionBadge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 4px;
  color: #fff;
  font-size: clamp(20px, 3.2vw, 40px);
  font-weight: 650;
  letter-spacing: -0.01em;
  text-transform: capitalize;

  @media (max-width: 900px) {
    font-size: 22px;
  }
`;

export const ActionChar = styled.span`
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
    inset: -90px 0 90px 0;
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
    height: calc(100dvh - 130px);
    width: auto;
    max-width: none;
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

    @media (max-width: 900px) {
      width: auto;
      max-width: none;
    }
  }
`;

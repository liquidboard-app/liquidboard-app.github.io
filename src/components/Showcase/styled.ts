import styled from 'styled-components';

export const ShowcaseSection = styled.section`
  position: relative;
  min-height: calc(100vh - 40px);
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg);
`;

export const ShowcaseBody = styled.div`
  width: min(1100px, 100%);
  margin: 0 auto;
  padding: 36px 32px;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: minmax(220px, 0.78fr) minmax(0, 1.22fr);
    column-gap: 40px;
    align-items: center;
    align-content: center;
  }
`;

export const ShowcaseContent = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  filter: blur(12px);
  transform: translateY(24px);
  will-change: transform, opacity, filter;
  @media (min-width: 900px) {
    grid-column: 2;
    grid-row: 1;
    align-self: center;
    margin-top: -144px;
  }
`;

export const FeatStepContainer = styled.div`
  position: relative;
  display: grid;
  align-items: center;
`;

export const FeatStep = styled.div`
  grid-area: 1 / 1;
`;

export const FeatStep2 = styled(FeatStep)`
  opacity: 0;
  transform: translateY(20px);
`;

export const ShowcaseVisual = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;

  @media (min-width: 900px) {
    grid-column: 1;
    grid-row: 1;
    align-self: center;
    margin-top: 0;
  }
`;

export const MockupSlot = styled.div`
  position: relative;
  width: min(100%, calc((100vh - 48px) * 1350 / 2760));
  aspect-ratio: 1350 / 2760;
  z-index: 5;
  pointer-events: none;
  margin: 0 auto;
`;

export const MockupPos = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  will-change: transform;
`;

export const MockupImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 20px;
  box-shadow: 0 48px 96px -24px rgba(0, 0, 0, 0.55);
  will-change: transform;
`;

export const MockupImg2 = styled(MockupImg)`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(30px, 5vw, 58px);
  line-height: 1.02;
  letter-spacing: -0.025em;
  font-weight: 700;
  margin: 0 0 18px;
  max-width: 18ch;
`;

export const SectionLead = styled.p`
  font-size: 18px;
  line-height: 1.55;
  color: var(--muted);
  max-width: 32ch;
`;

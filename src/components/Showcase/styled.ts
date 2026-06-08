import styled from 'styled-components';

export const ShowcaseSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 120px;
  padding: 100px 20px;
  background: var(--bg);
`;

export const FeatBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 48px;
  width: min(1100px, 100%);
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
`;

export const ImageContent = styled.div`
  width: min(100%, 400px);
`;

export const MockupImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 48px 96px -24px rgba(0, 0, 0, 0.55);
`;

export const SectionTitle = styled.h2`
  font-size: clamp(30px, 5vw, 58px);
  line-height: 1.02;
  letter-spacing: -0.025em;
  font-weight: 700;
  margin: 0 0 18px;
`;

export const SectionLead = styled.p`
  font-size: 18px;
  line-height: 1.55;
  color: var(--muted);
  max-width: 40ch;
  margin: 0;
`;

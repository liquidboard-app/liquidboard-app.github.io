import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 750px;
  margin: 0 auto;
  padding: 160px 24px 240px;
  min-height: 80vh;

  h1 {
    font-size: clamp(38px, 6vw, 72px);
    letter-spacing: -0.03em;
    line-height: 1.02;
    margin: 0 0 24px;
  }
  p {
    font-size: 18px;
    line-height: 1.7;
    color: var(--muted);
  }
`;

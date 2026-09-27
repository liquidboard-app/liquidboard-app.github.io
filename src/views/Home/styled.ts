import styled from 'styled-components';

export const HomePage = styled.main`
  position: relative;
  min-height: 100dvh;
  overflow-x: clip;
  background: var(--bg);
  color: var(--text);

  .download-panel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    max-width: 1180px;
    margin: 0 auto;
    padding: 80px var(--page-gutter) 110px;
    color: var(--text);
    font-size: clamp(24px, 4vw, 52px);
    font-weight: 800;
    letter-spacing: -.06em;
  }
  .download-panel p { margin: 0; }
  .download-panel a {
    display: inline-flex;
    min-height: 52px;
    align-items: center;
    padding: 0 24px;
    border-radius: 999px;
    background: #1478ee;
    color: white;
    font-size: 15px;
    letter-spacing: 0;
  }
  @media (max-width: 700px) {
    .download-panel { flex-direction: column; align-items: flex-start; }
  }
`;

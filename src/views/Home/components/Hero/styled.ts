import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  min-height: 0;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 109px 20px 0;
  text-align: center;

  @media (max-width: 700px) { padding: 101px 15px 0; }
`;

export const HeroHeading = styled.h1`
  max-width: 980px;
  margin: 0;
  font-size: clamp(44px, 3.8vw, 68px);
  font-weight: 800;
  letter-spacing: normal;
  line-height: 1.08;

  @media (max-width: 1199px) { font-size: clamp(33px, 2.8vw, 37px); }
  @media (max-width: 700px) { font-size: clamp(29px, 6.6vw, 39px); line-height: 1.12; }
`;

export const HeroLineBreak = styled.br``;
export const HeroAccent = styled.span`color: inherit;`;

export const HeroDescription = styled.p`
  max-width: 667px;
  margin: 21px 0 0;
  color: var(--muted-text);
  font-size: clamp(16px, 1.2vw, 19px);
  font-weight: 500;
  letter-spacing: -.02em;
  line-height: 1.5;
  @media (max-width: 1199px) { font-size: 16px; }
  @media (max-width: 700px) { max-width: 340px; margin-top: 19px; font-size: 15px; line-height: 1.42; }
`;

export const DownloadGroup = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 22px;
  overflow: visible;
  @media (max-width: 700px) { margin-top: 19px; }
`;

export const RequirementNote = styled.small`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: max-content;
  min-height: 42px;
  margin: -18px 0 0;
  padding: 23px 14px 7px;
  border-radius: 14px 14px 18px 18px;
  background: #2a2a2a;
  color: var(--text);
  font-size: 12px;
  font-weight: 450;
  letter-spacing: 0;
  line-height: 1.4;
  box-shadow: 0 8px 20px rgba(0, 0, 0, .08);
  :root[data-theme='light'] & { background: #fff; }
`;

export const RequirementPrefix = styled.span`color: var(--text); font-weight: 700;`;
export const VersionLabel = styled.span`display: inline-flex; align-items: center; gap: 6px; white-space: nowrap;`;
export const VersionIcon = styled.span`display: block; width: 18px; height: 18px; flex: 0 0 18px; overflow: hidden; border-radius: 23%;`;
export const VersionLogo = styled.img`display: block; width: 100%; height: 100%; object-fit: cover;`;
export const VersionText = styled.span``;
export const VersionNumber = styled.strong`color: var(--text); font-weight: 700;`;
export const VersionSuffix = styled.span`color: var(--text); font-weight: 700;`;

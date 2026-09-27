import styled from 'styled-components';

export const DownloadButton = styled.a`
  --download-button-height: 58px;
  --download-button-padding: 28px;
  --download-button-radius: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer !important;
  gap: 12px;
  min-height: var(--download-button-height);
  padding: 0 var(--download-button-padding);
  border-radius: var(--download-button-radius);
  background: #292422;
  color: #fff;
  font-size: 18px;
  font-weight: 830;
  letter-spacing: -.025em;
  box-shadow: 0 22px 32px -21px rgba(58, 40, 32, .76);
  transition: box-shadow .18s ease;

  svg { width: 20px; height: 25px; fill: currentColor; }

  &.hero-download-button {
    position: relative;
    z-index: 2;
    margin-top: 0;
    padding-inline: 36px;
    border-radius: 999px;
    background: #1478ee;
    color: #fff;
    box-shadow: none;
  }

  @media (max-width: 700px) { &.hero-download-button { padding-inline: 26px; } }

  @media (max-width: 600px) {
    --download-button-height: 52px;
    --download-button-padding: 19px;
    --download-button-radius: 18px;
    font-size: 15px;
  }
`;

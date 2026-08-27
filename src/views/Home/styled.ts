import styled from 'styled-components';

const button = `
  --download-button-height: 58px;
  --download-button-half-height: 29px;
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
  font-size: 18px;
  font-weight: 780;
  letter-spacing: -0.025em;
  transition: box-shadow .18s ease;
  @media (max-width: 600px) { --download-button-height: 52px; --download-button-half-height: 26px; --download-button-padding: 19px; --download-button-radius: 18px; font-size: 15px; }
`;

export const LandingPage = styled.main`
  min-height: 100dvh;
  overflow-x: clip;
  overflow-y: visible;
  padding: 0;
  background: #fff;
  color: #262120;
`;

export const DownloadButton = styled.a`
  ${button}
  background: #292422;
  color: #fff;
  box-shadow: 0 22px 32px -21px rgba(58, 40, 32, .76);
  svg { width: 20px; height: 25px; fill: currentColor; }
`;

export const SectionDownload = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 170px;
  .download-reveal-control,
  .social-reveal-item {
    opacity: 0;
    filter: blur(12px);
    transform: translate3d(0, 28px, 0) scale(.97);
    transition: opacity .34s ease, filter .48s ease, transform .58s cubic-bezier(.22, 1, .36, 1);
    will-change: transform, opacity, filter;
  }
  &.download-reveal.is-visible .download-reveal-control {
    opacity: 1;
    filter: blur(0);
    transform: translate3d(0, 0, 0) scale(1);
  }
  &.download-reveal.is-visible .social-reveal-item {
    opacity: 1;
    filter: blur(0);
    transform: translate3d(0, 0, 0) scale(1);
    transition-delay: var(--social-reveal-delay);
  }
  .socials { display: flex; align-items: center; gap: 15px; margin: 100px 0 165px; color: #9f7869; }
  .social-reveal-item { display: grid; }
  .socials a { display: grid; width: 44px; height: 44px; place-items: center; border-radius: 13px; background: #e7e9f2; color: #151515; transition: color .2s ease, transform .2s ease, background .2s ease; }
  .socials a:hover { color: #151515; background: #dde0e9; transform: translateY(-4px); }
  .socials svg { width: 21px; height: 21px; fill: currentColor; }
  @media (max-width: 700px) { margin-top: 110px; .socials { margin: 70px 0 110px; } }
  @media (prefers-reduced-motion: reduce) {
    .download-reveal-control,
    .social-reveal-item { opacity: 1; filter: none; transform: none; transition: none; will-change: auto; }
  }
`;

export const Footer = styled.footer`
  position: relative;
  display: flex;
  min-height: clamp(190px, 24dvw, 340px);
  align-items: flex-end;
  justify-content: center;
  padding: 0 10px;
  overflow: clip;
  pointer-events: none;
  color: rgba(96, 96, 96, .42);
  &::after { position: absolute; z-index: 1; inset: 0; background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 28%, rgba(255, 255, 255, .55) 70%, #fff 100%); content: ''; pointer-events: none; }
  span { position: absolute; right: 0; bottom: 10px; left: 0; width: 100%; font-size: clamp(54px, 15dvw, 240px); line-height: .9; font-weight: 810; letter-spacing: .01em; text-align: center; white-space: nowrap; }
  &.footer-wordmark span {
    opacity: 0;
    filter: blur(14px);
    transform: translateY(108%);
    transition: opacity .5s ease, filter .68s ease, transform .9s cubic-bezier(.22, 1, .36, 1);
    will-change: transform, opacity, filter;
  }
  &.footer-wordmark.is-visible span { opacity: 1; filter: blur(0); transform: translateY(20%); }
  @media (prefers-reduced-motion: reduce) {
    &.footer-wordmark span { opacity: 1; filter: none; transform: translateY(20%); transition: none; will-change: auto; }
  }
`;

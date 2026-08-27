import styled, { keyframes } from 'styled-components';

const reveal = keyframes`
  from { opacity: 0; filter: blur(14px); transform: rotate(10deg); }
  to { opacity: 1; filter: blur(0); transform: translateY(0) rotate(0deg); }
`;

const heroBrandWordReveal = keyframes`
  0%, 24% { clip-path: inset(-.04em 100% -.14em 0); filter: blur(12px); opacity: 0; transform: translateX(-.025em); }
  78%, 100% { clip-path: inset(-.04em 0 -.14em 0); filter: blur(0); opacity: 1; transform: translateX(0); }
`;

const heroBrandDotReveal = keyframes`
  0%, 8% {
    left: -.06em;
    width: .135em;
    height: .135em;
    border-radius: 50%;
  }
  24% {
    left: -.06em;
    width: .07em;
    height: 1.12em;
    border-radius: 999px;
  }
  76% {
    left: calc(100% + .055em);
    width: .07em;
    height: 1.12em;
    border-radius: 999px;
  }
  92%, 100% {
    left: calc(100% + .035em);
    width: .135em;
    height: .135em;
    border-radius: 50%;
  }
`;

export const HeroSection = styled.section`
  width: 100%;
  background: #fff;
  color: #151515;

  .hero-intro {
    display: grid;
    width: 100%;
    max-width: var(--page-max-width);
    height: 50dvh;
    min-height: 0;
    margin-inline: auto;
    padding: calc(75px + clamp(8px, 2dvh, 24px)) var(--page-gutter) clamp(32px, 5dvh, 60px);
  }
  .hero-layout {
    display: grid;
    width: 100%;
    height: 100%;
    min-height: 0;
    grid-template-columns: minmax(0, 1fr) minmax(360px, .7fr);
    align-items: center;
    gap: clamp(42px, 8vw, 144px);
  }
  .hero-brand {
    position: relative;
    display: inline-block;
    width: max-content;
    align-self: center;
    justify-self: start;
    margin: 0;
    color: #151515;
    font-family: 'Google Sans Flex', sans-serif;
    font-size: clamp(64px, 8vw, 124px);
    font-weight: 740;
    letter-spacing: -.04em;
    line-height: 1.12;
    white-space: nowrap;
  }
  .hero-brand-word {
    display: inline-block;
    animation: ${heroBrandWordReveal} 2s .08s cubic-bezier(.22, 1, .36, 1) both;
    will-change: clip-path, filter, transform;
  }
  .hero-brand-dot {
    position: absolute;
    bottom: .22em;
    left: -.06em;
    display: block;
    width: .07em;
    height: 1.12em;
    border-radius: 999px;
    background: currentColor;
    animation: ${heroBrandDotReveal} 2s .08s cubic-bezier(.22, 1, .36, 1) both;
    will-change: left, width, height, border-radius;
  }
  .hero-aside {
    display: flex;
    width: min(100%, 580px);
    flex-direction: column;
    align-items: flex-end;
    justify-self: end;
    gap: clamp(12px, 1.2vw, 18px);
    padding-bottom: 4px;
  }
  .hero-description-lead {
    width: 100%;
    max-width: 580px;
    margin: 0;
    color: #151515;
    font-size: clamp(18px, 1.55vw, 24px);
    font-weight: 520;
    line-height: 1.16;
    letter-spacing: -.04em;
    text-align: right;
    text-wrap: balance;
    transform-origin: left bottom;
    animation: ${reveal} .75s .2s cubic-bezier(.22, 1, .36, 1) both;
  }
  .hero-download-button {
    display: inline-flex;
    min-height: 62px;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 0 30px;
    border-radius: 999px;
    background: #151515;
    color: #fff;
    font-family: 'Google Sans Flex', sans-serif;
    font-size: 16px;
    font-weight: 650;
    line-height: 1;
    transition: background .2s ease;
  }
  .hero-download-button:hover,
  .hero-download-button:focus-visible { background: #151515; }
  .download-icon-stack {
    position: relative;
    display: inline-block;
    width: 17px;
    height: 22px;
    flex: 0 0 17px;
    overflow: visible;
  }
  .download-icon-stack span {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    transition: opacity .42s ease, filter .42s ease, transform .62s cubic-bezier(.22, 1, .36, 1);
  }
  .download-icon-stack svg { display: block; width: 17px; height: 22px; }
  .hero-download-button .download-icon-apple svg { fill: currentColor; transform: translateY(-1.5px); }
  .download-icon-arrow { opacity: 0; filter: blur(7px); transform: translateY(48px); }
  .hero-download-button .download-icon-arrow svg { fill: none; }
  .hero-download-button:hover .download-icon-apple,
  .hero-download-button:focus-visible .download-icon-apple { opacity: 0; filter: blur(7px); transform: translateY(-48px); }
  .hero-download-button:hover .download-icon-arrow,
  .hero-download-button:focus-visible .download-icon-arrow { opacity: 1; filter: blur(0); transform: translateY(0); }

  @media (min-width: 768px) and (max-width: 1199px) {
    .hero-intro {
      height: auto;
      min-height: 390px;
      padding-top: 122px;
      padding-bottom: 0;
    }

    .hero-layout { display: flex; height: auto; flex-direction: column; align-items: center; gap: 24px; }
    .hero-brand { align-self: center; justify-self: auto; font-size: clamp(62px, 7.4vw, 86px); text-align: center; }
    .hero-aside { width: min(100%, 640px); align-items: center; justify-self: auto; gap: 22px; padding-bottom: 0; }
    .hero-description-lead { max-width: 640px; font-size: clamp(17px, 2vw, 21px); text-align: center; }
    .hero-download-button { min-height: 54px; padding-inline: 26px; }
  }

  @media (min-width: 1200px) {
    .download-icon-stack span {
      transition:
        opacity .46s ease .16s,
        filter .46s ease .16s,
        transform .82s cubic-bezier(.22, 1, .36, 1) .16s;
    }
  }

  @media (max-width: 767px) {
    .hero-intro {
      height: auto;
      min-height: auto;
      padding-top: 110px;
      padding-bottom: 24px;
    }

    .hero-layout { display: flex; height: auto; min-height: 0; flex-direction: column; align-items: center; gap: 24px; }
    .hero-brand {
      justify-self: auto;
      font-size: clamp(48px, 14vw, 64px);
      text-align: center;
      /* The animated dot sits outside the word's box. Offset half of its
         final visual width so the complete LiquidBoard. mark is centered. */
      transform: translateX(-.085em);
    }
    .hero-aside { width: 100%; align-items: center; gap: 20px; }
    .hero-description-lead { font-size: clamp(18px, 4.5vw, 22px); line-height: 1.2; text-align: center; }
    .hero-download-button { min-height: 52px; padding: 0 22px; font-size: 14px; }
  }

  @media (max-width: 1199px) {
    .hero-brand-word,
    .hero-brand-dot { will-change: auto; }
    .download-icon-arrow { opacity: 0; filter: none; transform: none; }
    .hero-download-button:hover .download-icon-apple,
    .hero-download-button:focus-visible .download-icon-apple { opacity: 1; filter: none; transform: none; }
    .hero-download-button:hover .download-icon-arrow,
    .hero-download-button:focus-visible .download-icon-arrow { opacity: 0; filter: none; transform: none; }
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-description-lead { animation: none; }
    .hero-brand-word { animation: none; }
    .hero-brand-dot {
      left: calc(100% + .035em);
      width: .135em;
      height: .135em;
      border-radius: 50%;
      animation: none;
    }
  }
`;

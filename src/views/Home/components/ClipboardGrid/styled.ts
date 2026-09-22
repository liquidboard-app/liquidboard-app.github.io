import styled, { keyframes } from 'styled-components';

const copyOverlayIn = keyframes`
  from { opacity: 0; -webkit-backdrop-filter: blur(0); backdrop-filter: blur(0); }
  to { opacity: 1; -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); }
`;

const copyOverlayOut = keyframes`
  from { opacity: 1; -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); }
  to { opacity: 0; -webkit-backdrop-filter: blur(0); backdrop-filter: blur(0); }
`;

const copyOverlayInCompact = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const copyOverlayOutCompact = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const copyCheckIn = keyframes`
  from { opacity: 0; transform: scale(.58); }
  to { opacity: 1; transform: scale(1); }
`;

const copyCheckOut = keyframes`
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(.8); }
`;

const linkPreviewSpin = keyframes`
  to { transform: rotate(360deg); }
`;

export const ClipboardGridSection = styled.section`
  overflow: clip;
  background: #fff;
  color: #151515;
  .hero-grid {
    --grid-surface-size: calc(min(32px, (min(100vw, var(--page-max-width)) - (var(--page-gutter) * 2)) / 40) * .78);
    min-height: clamp(720px, 70vw, 920px);
    pointer-events: none;
  }
  .hero-grid::after {
    position: absolute;
    z-index: 2;
    right: 0;
    bottom: 0;
    left: 0;
    height: 2px;
    background: #fff;
    content: '';
    pointer-events: none;
  }
  .clipboard-container {
    width: 100%;
    height: clamp(720px, 70vw, 920px);
    margin-inline: auto;
    padding: clamp(36px, 5vw, 64px) 0;
    box-sizing: border-box;
  }
  .clipboard-canvas {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    gap: clamp(18px, 2vw, 28px);
    overflow: hidden;
  }
  .clipboard-marquee-row { width: 100%; overflow: hidden; }
  .clipboard-marquee-track {
    display: flex;
    width: max-content;
    flex: none;
    will-change: transform;
  }
  .clipboard-marquee-group {
    display: flex;
    gap: clamp(18px, 2vw, 34px);
    flex: none;
    padding-right: clamp(18px, 2vw, 34px);
  }
  .clipboard-item-wrap {
    width: var(--clipboard-item-size, clamp(190px, 19vw, 232px));
    height: var(--clipboard-item-size, clamp(190px, 19vw, 232px));
    aspect-ratio: 1;
    flex: 0 0 var(--clipboard-item-size, clamp(190px, 19vw, 232px));
    min-width: 0;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .clipboard-item {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    min-width: 0;
    min-height: 0;
    box-sizing: border-box;
    -webkit-appearance: none;
    appearance: none;
    padding: 0;
    overflow: hidden;
    border: 0;
    outline: 0;
    margin: 0;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    color: inherit;
    font: inherit;
    text-align: inherit;
    user-select: none;
    touch-action: manipulation;
    cursor: copy;
    pointer-events: auto;
    backface-visibility: hidden;
  }
  .clipboard-item:focus-visible { outline: 3px solid rgba(29, 159, 98, .72); outline-offset: 4px; }
  @media (hover: none), (pointer: coarse) {
    .clipboard-item:focus,
    .clipboard-item:focus-visible { outline: 0; }
  }
  .clipboard-copy-confirmation {
    position: absolute;
    z-index: 3;
    inset: 0;
    display: grid;
    place-items: center;
    background: rgba(255, 255, 255, .42);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    animation: ${copyOverlayIn} .26s ease-out both;
    pointer-events: none;
  }
  .clipboard-copy-confirmation.is-leaving { animation: ${copyOverlayOut} .3s ease-in both; }
  .clipboard-copy-icon {
    display: grid;
    width: clamp(42px, 3.6vw, 58px);
    height: clamp(42px, 3.6vw, 58px);
    place-items: center;
    border-radius: 50%;
    background: #1d9f62;
    color: #fff;
    box-shadow: 0 10px 24px rgba(11, 99, 58, .32);
    animation: ${copyCheckIn} .3s cubic-bezier(.22, 1, .36, 1) .12s both;
  }
  .clipboard-copy-confirmation.is-leaving .clipboard-copy-icon { animation: ${copyCheckOut} .2s ease-in both; }
  .clipboard-copy-icon svg { stroke: #fff; }
  @media (max-width: 1199px), (pointer: coarse) {
    .clipboard-copy-confirmation {
      display: grid;
      background: rgba(255, 255, 255, .58);
      -webkit-backdrop-filter: none;
      backdrop-filter: none;
      animation: ${copyOverlayInCompact} .2s ease-out both;
    }
    .clipboard-copy-confirmation.is-leaving { animation: ${copyOverlayOutCompact} .24s ease-in both; }
    .clipboard-copy-icon {
      width: clamp(34px, 9vw, 48px);
      height: clamp(34px, 9vw, 48px);
      box-shadow: 0 8px 18px rgba(11, 99, 58, .28);
    }
    .clipboard-copy-icon svg { width: 55%; height: 55%; }
  }
  .clipboard-item h3,
  .clipboard-item p { margin: 0; }
  .clipboard-item-text {
    min-height: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    padding: clamp(12px, 1vw, 14px);
    overflow: hidden;
    border-radius: clamp(14px, 1.5vw, 22px);
    border: 1px solid rgba(21, 21, 21, .12);
    background: #fff;
    text-align: left;
  }
  .clipboard-item-text h3 {
    display: -webkit-box;
    overflow: hidden;
    color: #151515;
    font-size: clamp(13px, 1vw, 17px);
    font-weight: 620;
    letter-spacing: -.045em;
    line-height: 1.22;
    flex: 0 0 auto;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: normal;
  }
  .clipboard-item-text p {
    max-width: none;
    margin-top: 7px;
    color: rgba(21, 21, 21, .6);
    font-size: clamp(13px, .95vw, 16px);
    line-height: 1.18;
    display: -webkit-box;
    overflow: hidden;
    white-space: pre-line;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 8;
  }
  .clipboard-item-link {
    display: flex;
    flex-direction: column;
    border-radius: clamp(14px, 1.5vw, 22px);
    border: 1px solid rgba(21, 21, 21, .12);
    background: #fff;
  }
  .clipboard-link-preview {
    position: relative;
    display: grid;
    min-height: 0;
    flex: 1 1 auto;
    place-items: center;
    overflow: hidden;
    background: #ededed;
  }
  .clipboard-link-preview img {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 0;
    object-fit: cover;
    opacity: 0;
    transition: opacity .2s ease;
  }
  .clipboard-link-preview.is-loaded img { opacity: 1; }
  .clipboard-link-loader {
    position: absolute;
    z-index: 1;
    width: clamp(24px, 2.4vw, 34px);
    height: clamp(24px, 2.4vw, 34px);
    border: 2px solid rgba(21, 21, 21, .14);
    border-top-color: rgba(21, 21, 21, .52);
    border-radius: 50%;
    animation: ${linkPreviewSpin} .8s linear infinite;
  }
  .clipboard-link-placeholder {
    display: grid;
    min-height: 0;
    flex: 1 1 auto;
    place-items: center;
    background: #ededed;
    color: #6a6a6a;
  }
  .clipboard-link-placeholder svg { width: clamp(26px, 2.2vw, 36px); height: clamp(26px, 2.2vw, 36px); }
  .clipboard-item-link div { display: grid; gap: 2px; padding: 9px 11px 10px; background: #fff; }
  .clipboard-item-link strong { color: #151515; font-size: clamp(13px, 1.05vw, 17px); font-weight: 620; letter-spacing: -.03em; }
  .clipboard-item-link span { color: rgba(21, 21, 21, .52); font-size: clamp(11px, .8vw, 13px); }
  .clipboard-item-color {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: clamp(12px, 1.25vw, 18px);
    border-radius: clamp(14px, 1.5vw, 22px);
    background: var(--item-color);
    color: #fff;
    text-align: center;
  }
  .clipboard-item-color span { font-size: clamp(13px, 1.05vw, 17px); font-weight: 600; letter-spacing: -.03em; }
  .clipboard-item-color strong { font-size: clamp(16px, 1.25vw, 20px); font-weight: 560; letter-spacing: -.04em; white-space: nowrap; }
  .clipboard-item-color.clipboard-item-light { color: #151515; }
  .clipboard-item-image {
    border-radius: clamp(14px, 1.5vw, 22px);
    background: #e9e9e9;
  }
  .clipboard-item-image img,
  .clipboard-item-sticker img { display: block; width: 100%; height: 100%; object-fit: cover; }
  .clipboard-item-sticker {
    display: flex;
    align-items: center;
    justify-content: center;
    --sticker-cut-padding: 7px;
    --sticker-cut-radius: clamp(24px, 2.8vw, 42px);
    padding: var(--sticker-cut-padding);
    border-radius: var(--sticker-cut-radius);
    background: transparent;
  }
  .clipboard-item-sticker img {
    width: 100%;
    height: 100%;
    border-radius: calc(var(--sticker-cut-radius) - var(--sticker-cut-padding));
    object-fit: contain;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    .hero-grid { min-height: clamp(700px, 80vw, 900px); }
    .clipboard-container { height: clamp(700px, 80vw, 900px); }
    .clipboard-item-text { padding: 16px; }
  }

  @media (max-width: 767px) {
    .hero-grid {
      --grid-surface-size: calc(100vw / 40);
      min-height: clamp(540px, 150vw, 680px);
    }
    .clipboard-container {
      height: clamp(540px, 150vw, 680px);
      padding: 30px 0;
    }
    .clipboard-canvas {
      gap: 16px;
    }
    .clipboard-marquee-group { gap: 16px; padding-right: 16px; }
    .clipboard-item-wrap {
      --clipboard-item-size: clamp(148px, 40vw, 188px);
    }
    .clipboard-item-text {
      min-height: 0;
      justify-content: flex-start;
      padding: 7.5px 11.5px;
    }
    .clipboard-item-text h3 { font-size: clamp(10px, 2.8vw, 12px); }
    .clipboard-item-text p { margin-top: 5px; font-size: clamp(9px, 2.7vw, 12px); line-height: 1.18; }
    .clipboard-item-color { padding: 8px; }
    .clipboard-item-color span { font-size: clamp(10px, 3vw, 13px); }
    .clipboard-item-color strong { font-size: clamp(12px, 3.5vw, 16px); }
    .clipboard-item-link div { padding: 6px 7px 7px; }
    .clipboard-item-link strong { font-size: clamp(10px, 3vw, 13px); }
    .clipboard-item-link span { font-size: clamp(8px, 2.4vw, 10px); }
    .clipboard-item-sticker { --sticker-cut-padding: 4px; --sticker-cut-radius: 24px; }
    .clipboard-item-text p { -webkit-line-clamp: 6; }
  }

`;

import styled, { keyframes } from 'styled-components';

const clipboardEnter = keyframes`
  from { opacity: 0; filter: blur(12px); transform: translate(var(--item-x), calc(var(--item-y) + 22px)) rotate(var(--item-rotate)) scale(.94); }
  to { opacity: 1; filter: blur(0); transform: translate(var(--item-x), var(--item-y)) rotate(var(--item-rotate)) scale(1); }
`;

const clipboardExit = keyframes`
  from { opacity: 1; filter: blur(0); transform: translate(var(--item-x), var(--item-y)) rotate(var(--item-rotate)) scale(1); }
  to { opacity: 0; filter: blur(12px); transform: translate(var(--item-x), calc(var(--item-y) - 10px)) rotate(var(--item-rotate)) scale(.84); }
`;

// Blur on several independently moving cards forces a large repaint on iOS.
// The compact variant keeps the same rise/scale choreography and lets opacity
// provide the soft edge while every frame remains compositor-only.
const clipboardEnterCompact = keyframes`
  from { opacity: 0; transform: translate3d(var(--item-x), calc(var(--item-y) + 22px), 0) rotate(var(--item-rotate)) scale(.94); }
  to { opacity: 1; transform: translate3d(var(--item-x), var(--item-y), 0) rotate(var(--item-rotate)) scale(1); }
`;

const clipboardExitCompact = keyframes`
  from { opacity: 1; transform: translate3d(var(--item-x), var(--item-y), 0) rotate(var(--item-rotate)) scale(1); }
  to { opacity: 0; transform: translate3d(var(--item-x), calc(var(--item-y) - 10px), 0) rotate(var(--item-rotate)) scale(.84); }
`;

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

export const ClipboardGridSection = styled.section`
  overflow: clip;
  background: #fff;
  color: #151515;
  .hero-grid {
    /* Keep the 40-unit random layout inside the padded clipboard canvas. */
    --grid-size: min(
      32px,
      calc((min(100vw, var(--page-max-width)) - (var(--page-gutter) * 2)) / 40)
    );
    --grid-surface-size: calc(var(--grid-size) * .78);
    min-height: clamp(420px, 50vw, 640px);
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
    /* Match the canvas width to the 40-unit positioning system. Without this cap,
       a wide desktop canvas has unused space after the final grid unit. */
    width: min(100%, calc((var(--grid-size) * 40) + (var(--page-gutter) * 2)));
    height: clamp(420px, 50vw, 640px);
    margin-inline: auto;
    padding-inline: var(--page-gutter);
    box-sizing: border-box;
  }
  .clipboard-canvas { position: relative; width: 100%; height: 100%; overflow: hidden; }
  .clipboard-item {
    position: absolute;
    top: 0;
    left: 0;
    width: var(--item-width);
    height: var(--item-height);
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
    transform: translate(var(--item-x), var(--item-y)) rotate(var(--item-rotate));
    animation: ${clipboardEnter} .86s cubic-bezier(.22, 1, .36, 1) both;
    box-shadow: 0 18px 34px rgba(21, 21, 21, .12);
    backface-visibility: hidden;
  }
  .clipboard-item:nth-child(2) { animation-delay: .06s; }
  .clipboard-item:nth-child(3) { animation-delay: .12s; }
  .clipboard-item:nth-child(4) { animation-delay: .18s; }
  .clipboard-item:nth-child(5) { animation-delay: .24s; }
  .clipboard-item:nth-child(6) { animation-delay: .30s; }
  .clipboard-item:nth-child(7) { animation-delay: .36s; }
  .clipboard-item:nth-child(8) { animation-delay: .42s; }
  .clipboard-item:nth-child(9) { animation-delay: .48s; }
  .clipboard-item:nth-child(10) { animation-delay: .54s; }
  .clipboard-canvas.is-leaving .clipboard-item { animation: ${clipboardExit} .76s cubic-bezier(.55, 0, 1, .45) both; }
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
    padding: clamp(14px, 1.1vw, 18px);
    overflow: hidden;
    border-radius: clamp(14px, 1.5vw, 22px);
    background: #fff;
  }
  .clipboard-item-text h3 {
    overflow: hidden;
    color: #151515;
    font-size: clamp(15px, 1.25vw, 21px);
    font-weight: 620;
    letter-spacing: -.045em;
    line-height: 1.22;
    flex: 0 0 auto;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .clipboard-item-text p {
    max-width: none;
    margin-top: 7px;
    color: rgba(21, 21, 21, .6);
    font-size: clamp(13px, .95vw, 16px);
    line-height: 1.35;
    display: -webkit-box;
    overflow: hidden;
    white-space: pre-line;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--text-line-clamp, 1);
  }
  .clipboard-item-link {
    display: flex;
    flex-direction: column;
    border-radius: clamp(14px, 1.5vw, 22px);
    background: #fff;
  }
  .clipboard-item-link img { display: block; width: 100%; min-height: 0; flex: 1 1 auto; object-fit: cover; }
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
    --sticker-cut-padding: 7px;
    --sticker-cut-radius: clamp(24px, 2.8vw, 42px);
    padding: var(--sticker-cut-padding);
    border-radius: var(--sticker-cut-radius);
    background: #fff;
    box-shadow: 0 15px 30px rgba(21, 21, 21, .15);
  }
  .clipboard-item-sticker img { border-radius: calc(var(--sticker-cut-radius) - var(--sticker-cut-padding)); }

  @media (min-width: 768px) and (max-width: 1199px) {
    .hero-grid { min-height: clamp(540px, 58vw, 680px); --grid-surface-size: calc(var(--grid-size) * .92); }
    .clipboard-container { height: clamp(540px, 58vw, 680px); }
    .clipboard-item-text { padding: 16px; }
  }

  @media (max-width: 767px) {
    --clipboard-mobile-gutter: max(8px, calc(var(--page-gutter) - 8px));
    .hero-grid {
      --grid-size: calc((100vw - (var(--clipboard-mobile-gutter) * 2)) / 40);
      --grid-surface-size: var(--grid-size);
    }
    .clipboard-container {
      height: clamp(400px, 112vw, 540px);
      padding-inline: var(--clipboard-mobile-gutter);
    }
    .clipboard-item {
      animation-name: ${clipboardEnterCompact};
      will-change: transform, opacity;
    }
    .clipboard-canvas.is-leaving .clipboard-item { animation-name: ${clipboardExitCompact}; }
    .clipboard-item-text {
      min-height: 0;
      justify-content: center;
      padding: 7.5px 11.5px;
    }
    .clipboard-item-text h3 { font-size: clamp(11px, 3.2vw, 14px); }
    .clipboard-item-text p { margin-top: 5px; font-size: clamp(9px, 2.7vw, 12px); line-height: 1.25; }
    .clipboard-item-color { padding: 8px; }
    .clipboard-item-color span { font-size: clamp(10px, 3vw, 13px); }
    .clipboard-item-color strong { font-size: clamp(12px, 3.5vw, 16px); }
    .clipboard-item-link div { padding: 6px 7px 7px; }
    .clipboard-item-link strong { font-size: clamp(10px, 3vw, 13px); }
    .clipboard-item-link span { font-size: clamp(8px, 2.4vw, 10px); }
    .clipboard-item-sticker { --sticker-cut-padding: 4px; --sticker-cut-radius: 24px; }
  }

`;

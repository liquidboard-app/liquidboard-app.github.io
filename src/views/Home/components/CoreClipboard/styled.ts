import styled, { keyframes } from 'styled-components';

const coreHeadingTextReveal = keyframes`
  from { transform: translateY(112%); opacity: 0; filter: blur(7px); }
  to { transform: translateY(0); opacity: 1; filter: blur(0); }
`;

// Mobile Safari can keep a blurred raster surface for a split grapheme even
// after the regular keyframe reaches blur(0). Keep the compact entrance crisp
// while retaining the same lift and stagger motion.
const coreHeadingTextRevealCompact = keyframes`
  from { transform: translateY(112%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const coreHeadingUnderline = keyframes`
  0%, 12% { transform: scaleX(0); transform-origin: left center; }
  100% { transform: scaleX(1); transform-origin: left center; }
`;

const coreHeadingUnderlineReverse = keyframes`
  from { transform: scaleX(1); transform-origin: right center; }
  to { transform: scaleX(0); transform-origin: right center; }
`;

const coreBrandSeparate = keyframes`
  from { gap: 0; }
  to { gap: 20px; }
`;

const coreBrandJoin = keyframes`
  from { gap: 20px; }
  to { gap: 0; }
`;

const coreBrandGridReveal = keyframes`
  from { width: 0; height: 0; margin: 0; padding: 0; opacity: 0; clip-path: inset(50% round 4px); transform: scale(.18); }
  to { width: calc((var(--core-logo-size) * 2) - 8px); height: var(--core-logo-size); margin: -8px -12px; padding: 8px 12px; opacity: 1; clip-path: inset(0 round 4px); transform: scale(1); }
`;

const coreBrandGridHide = keyframes`
  from { width: calc((var(--core-logo-size) * 2) - 8px); height: var(--core-logo-size); margin: -8px -12px; padding: 8px 12px; opacity: 1; clip-path: inset(0 round 4px); transform: scale(1); }
  to { width: 0; height: 0; margin: 0; padding: 0; opacity: 0; clip-path: inset(50% round 4px); transform: scale(.18); }
`;

const coreLightLogoReveal = keyframes`
  from { opacity: 0; filter: blur(12px) brightness(1.08); transform: rotate(-7deg) translateY(12px) scale(.68); }
  to { opacity: 1; filter: blur(0) brightness(1.08); transform: rotate(-7deg) scale(1); }
`;

const coreDarkLogoReveal = keyframes`
  from { opacity: 0; filter: blur(12px) brightness(1.08); transform: rotate(7deg) translateY(16px) scale(.68); }
  to { opacity: 1; filter: blur(0) brightness(1.08); transform: rotate(7deg) scale(1); }
`;

const coreLightLogoHide = keyframes`
  from { opacity: 1; filter: blur(0) brightness(1.08); transform: rotate(-7deg) scale(1); }
  to { opacity: 0; filter: blur(12px) brightness(1.08); transform: rotate(-7deg) translateY(12px) scale(.68); }
`;

const coreDarkLogoHide = keyframes`
  from { opacity: 1; filter: blur(0) brightness(1.08); transform: rotate(7deg) scale(1); }
  to { opacity: 0; filter: blur(12px) brightness(1.08); transform: rotate(7deg) translateY(16px) scale(.68); }
`;

export const CoreClipboardSection = styled.section`
  position: relative;
  min-height: auto;
  overflow: visible;
  background: #fff;
  color: #151515;

  .core-clipboard-heading {
    position: relative;
    z-index: 1;
    display: flex;
    width: min(100%, 1280px);
    margin: 0 auto;
    padding: clamp(38px, 5vw, 76px) var(--page-gutter) clamp(18px, 1.6vw, 28px);
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .core-app-brand {
    display: flex;
    margin-bottom: 22px;
    align-items: center;
    gap: 0;
  }
  .core-app-logos {
    --core-logo-size: clamp(24px, 2.2vw, 32px);
    --core-brand-grid-size: 25px;
    display: flex;
    width: 0;
    height: 0;
    align-items: center;
    flex: 0 0 auto;
    gap: 0;
    box-sizing: content-box;
    margin: 0;
    padding: 0;
    opacity: 0;
    border-radius: 4px;
    clip-path: inset(50% round 4px);
    background-color: #fff;
    background-image:
      linear-gradient(to right, rgba(38, 33, 32, .12) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(38, 33, 32, .12) 1px, transparent 1px);
    background-position: -1px -1px;
    background-size: var(--core-brand-grid-size) var(--core-brand-grid-size);
    transform: scale(.18);
    transform-origin: center;
    will-change: width, height, margin, padding, transform, opacity;
  }
  .core-app-icon {
    display: grid;
    width: var(--core-logo-size);
    height: var(--core-logo-size);
    flex: 0 0 var(--core-logo-size);
    padding: 0;
    place-items: center;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 30%;
    box-shadow: 0 14px 30px rgba(21, 21, 21, .16), 0 2px 6px rgba(21, 21, 21, .07);
  }
  .core-app-icon-light {
    position: relative;
    z-index: 2;
    opacity: 0;
    filter: blur(12px) brightness(1.08);
    box-shadow: 0 14px 30px rgba(21, 21, 21, .22), 0 2px 6px rgba(21, 21, 21, .1);
    transform: rotate(-7deg);
  }
  .core-app-logos .core-app-icon-dark {
    position: relative;
    z-index: 1;
    margin-left: -8px;
    opacity: 0;
    filter: blur(12px) brightness(1.08);
    transform: rotate(7deg);
  }
  .core-app-icon img { display: block; width: 100%; height: 100%; border-radius: 27%; object-fit: cover; }
  &.is-heading-animated .core-app-brand { animation: ${coreBrandSeparate} .52s cubic-bezier(.16, 1, .3, 1) .24s forwards; }
  &.is-heading-animated .core-app-logos { animation: ${coreBrandGridReveal} .52s cubic-bezier(.16, 1, .3, 1) .24s forwards; }
  &.is-heading-animated .core-app-icon-dark { animation: ${coreDarkLogoReveal} .42s cubic-bezier(.16, 1, .3, 1) .72s forwards; }
  &.is-heading-animated .core-app-icon-light { animation: ${coreLightLogoReveal} .42s cubic-bezier(.16, 1, .3, 1) .9s forwards; }
  /* Keep the forward end-state during reverse delays so nothing snaps away. */
  &.is-heading-reversing .core-app-icon-light { animation: ${coreLightLogoHide} .42s cubic-bezier(.4, 0, 1, 1) both; }
  &.is-heading-reversing .core-app-icon-dark { animation: ${coreDarkLogoHide} .42s cubic-bezier(.4, 0, 1, 1) .18s both; }
  &.is-heading-reversing .core-app-logos { animation: ${coreBrandGridHide} .52s cubic-bezier(.4, 0, 1, 1) .56s both; }
  &.is-heading-reversing .core-app-brand { animation: ${coreBrandJoin} .52s cubic-bezier(.4, 0, 1, 1) .56s both; }
  .core-app-name {
    margin: 0;
    color: #151515;
    font-size: clamp(20px, 1.9vw, 28px);
    font-weight: 730;
    letter-spacing: -.04em;
  }
  h2 {
    max-width: 100%;
    margin: 0;
    color: #151515;
    font-family: inherit;
    font-size: clamp(38px, 4.6vw, 76px);
    font-weight: 790;
    letter-spacing: -.055em;
    line-height: 1.28;
    text-wrap: balance;
  }
  h2 > span { display: block; white-space: nowrap; }
  h2:lang(hi), h2:lang(bn), h2:lang(th) { letter-spacing: normal; }
  .core-heading-word {
    display: inline-block;
    clip-path: inset(-.3em -.25em);
    vertical-align: bottom;
  }
  .core-heading-grapheme {
    display: inline-block;
    transform: translateY(112%);
    opacity: 0;
    filter: blur(7px);
  }
  &.is-heading-animated .core-heading-grapheme {
    animation-name: ${coreHeadingTextReveal};
    animation-duration: var(--core-text-duration);
    animation-timing-function: cubic-bezier(.215, .61, .355, 1);
    animation-fill-mode: forwards;
  }
  @media (max-width: 1199px) {
    &.is-heading-animated .core-heading-grapheme {
      animation-name: ${coreHeadingTextRevealCompact};
    }
  }
  .core-heading-highlight {
    position: relative;
    display: inline-block;
    isolation: isolate;
  }
  .core-heading-underline {
    position: absolute;
    z-index: -1;
    right: -.02em;
    bottom: .18em;
    left: -.02em;
    height: .22em;
    border-radius: .035em;
    opacity: .9;
    transform: scaleX(0);
  }
  &.is-heading-animated .core-heading-underline { animation: ${coreHeadingUnderline} 1.15s cubic-bezier(.65, 0, .35, 1) var(--core-underline-delay) forwards; }
  &.is-heading-reversing .core-heading-underline { animation: ${coreHeadingUnderlineReverse} .46s cubic-bezier(.4, 0, 1, 1) forwards; }
  .core-heading-highlight-green .core-heading-underline { background: #36c978; }
  .core-heading-highlight-blue .core-heading-underline { background: #4b8dff; }
  &.is-heading-animated .core-heading-highlight-blue .core-heading-underline { animation-delay: calc(var(--core-underline-delay) + .28s); }

  @media (max-width: 767px) {
    .core-clipboard-heading { padding-top: 42px; padding-bottom: clamp(36px, 6vw, 44px); }
    .core-app-brand { margin-bottom: 16px; }
    .core-app-logos { --core-brand-grid-size: calc((100vw - (var(--page-gutter) * 2)) / 40); will-change: auto; }
    h2 { font-size: clamp(17px, 5.6vw, 30px); line-height: 1.34; }
  }

  @media (prefers-reduced-motion: reduce) {
    .core-app-brand { gap: 20px; animation: none !important; }
    .core-app-logos {
      width: calc((var(--core-logo-size) * 2) - 8px);
      height: var(--core-logo-size);
      margin: -8px -12px;
      padding: 8px 12px;
      opacity: 1;
      transform: none;
      animation: none !important;
    }
    .core-app-icon { opacity: 1; filter: brightness(1.08); animation: none !important; }
    .core-app-name,
    .core-heading-underline { animation: none !important; }
    .core-heading-grapheme { animation: none !important; transform: none; opacity: 1; filter: none; }
    .core-heading-underline { transform: scaleX(1); }
  }

  .core-clipboard-list {
    display: flex;
    width: min(calc(100% - (var(--page-gutter) * 2)), 991px);
    margin: 0 auto;
    padding-top: clamp(36px, 7vw, 96px);
    padding-bottom: clamp(64px, 10vw, 144px);
    flex-direction: column;
    gap: clamp(32px, 5vw, 72px);
  }
  .core-clipboard-item {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    padding: clamp(18px, 3vw, 32px);
    background: linear-gradient(90deg, #f2f2f2 0 50%, #000 50% 100%);
    border-radius: 0;
  }
  .core-clipboard-item-2 {
    background: linear-gradient(90deg, #000 0 50%, #f2f2f2 50% 100%);
  }
  .core-clipboard-item-3 {
    background: linear-gradient(90deg, #f2f2f2 0 50%, #000 50% 100%);
  }
  .core-clipboard-item-images {
    display: grid;
    width: 100%;
    margin: clamp(24px, 3vw, 40px) auto 0;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: start;
    gap: clamp(32px, 6vw, 72px);
  }
  .core-clipboard-media {
    display: flex;
    min-width: 0;
    overflow: visible;
    align-items: flex-start;
    justify-content: center;
    background: transparent;
    opacity: 0;
    filter: blur(18px);
    transform: translateY(22px);
    transition: opacity .64s ease, filter .64s ease, transform .64s cubic-bezier(.22, 1, .36, 1);
    will-change: opacity, filter, transform;
  }
  .core-preview-icons {
    display: grid;
    width: 100%;
    box-sizing: border-box;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: start;
    gap: clamp(32px, 6vw, 72px);
    padding-top: clamp(8px, 1.4vw, 16px);
    opacity: 0;
    pointer-events: none;
    transition: opacity .64s ease;
  }
  .core-clipboard-item.is-item-revealed .core-preview-icons {
    opacity: 1;
  }
  .core-preview-icons .core-preview-icon {
    position: static;
    width: 24px;
    height: 24px;
  }
  .core-preview-badge {
    display: inline-flex;
    min-height: 40px;
    box-sizing: border-box;
    align-items: center;
    justify-self: center;
    gap: 8px;
    padding: 7px 14px;
    border-radius: 999px;
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
    white-space: nowrap;
  }
  .core-preview-badge-app {
    background: #000;
    color: #fff;
  }
  .core-preview-badge-keyboard {
    background: #fff;
    color: #000;
  }
  .core-clipboard-item-2 .core-preview-badge-app {
    background: #fff;
    color: #000;
  }
  .core-clipboard-item-2 .core-preview-badge-keyboard {
    background: #000;
    color: #fff;
  }
  .core-clipboard-media:nth-child(2) {
    transition-delay: 130ms;
  }
  .core-clipboard-item.is-item-revealed .core-clipboard-media {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
  .core-clipboard-media img {
    display: block;
    width: min(100%, 260px);
    height: auto;
    aspect-ratio: 900 / 1840;
    object-fit: contain;
    transform-origin: center;
    transition: transform .7s cubic-bezier(.22, 1, .36, 1);
  }

  @media (min-width: 1200px) {
    padding-block: 0;
    .core-clipboard-heading { padding-top: clamp(100px, 9vw, 160px); }
    .core-clipboard-item { padding: clamp(36px, 4vw, 56px); }
    .core-clipboard-media img { width: min(100%, 280px); }
  }

  @media (min-width: 1200px) and (prefers-reduced-motion: no-preference) {
    .core-clipboard-media:hover img {
      transform: scale(1.02);
    }
  }

  @media (max-width: 767px) {
    .core-clipboard-list { gap: 28px; padding-top: 36px; padding-bottom: 64px; }
    .core-clipboard-item { padding: clamp(28px, 8vw, 40px) 12px; }
    .core-clipboard-item-images { width: 100%; gap: 8px; }
    .core-preview-icons { gap: 8px; }
    .core-clipboard-item-images { margin-top: 24px; }
    .core-preview-icons .core-preview-icon {
      width: 20px;
      height: 20px;
    }
    .core-preview-badge { min-height: 36px; padding: 6px 10px; font-size: 12px; }
    .core-clipboard-media img { width: min(100%, 140px); }
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    .core-clipboard-media img { width: min(100%, 220px); }
  }

  @media (prefers-reduced-motion: reduce) {
    .core-clipboard-media,
    .core-clipboard-item.is-item-revealed .core-clipboard-media {
      opacity: 1;
      filter: none;
      transform: none;
      transition: none;
    }
  }
`;

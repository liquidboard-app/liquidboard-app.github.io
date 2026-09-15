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

const corePhoneSpreadFromCenterLeft = keyframes`
  from { transform: translateX(var(--core-phone-center-shift)) scale(.92); }
  to { transform: translateX(0) scale(1); }
`;

const corePhoneSpreadFromCenterRight = keyframes`
  from { transform: translateX(calc(var(--core-phone-center-shift) * -1)) scale(.92); }
  to { transform: translateX(0) scale(1); }
`;

const corePhoneConvergeToCenterLeft = keyframes`
  from { transform: translateX(0) scale(1); }
  to { transform: translateX(var(--core-phone-center-shift)) scale(.92); }
`;

const corePhoneConvergeToCenterRight = keyframes`
  from { transform: translateX(0) scale(1); }
  to { transform: translateX(calc(var(--core-phone-center-shift) * -1)) scale(.92); }
`;

const corePhoneEnterFromBottom = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(0); }
`;

const corePhoneExitToBottom = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(110px); }
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
  --core-phone-center-shift: 0px;
  position: relative;
  min-height: 132dvh;
  overflow: clip;
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
    font-weight: 680;
    letter-spacing: -.04em;
  }
  h2 {
    max-width: 100%;
    margin: 0;
    color: #151515;
    font-family: 'Google Sans Flex', sans-serif;
    font-size: clamp(38px, 4.6vw, 76px);
    font-weight: 740;
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

  .core-phone-stage {
    position: relative;
    width: 100%;
    min-height: min(58vw, 820px);
  }
  .core-phone-row {
    display: grid;
    width: min(calc(100% - (var(--page-gutter) * 2)), 1140px);
    min-height: inherit;
    margin-inline: auto;
    gap: clamp(12px, 1.5vw, 28px);
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-items: end;
    justify-items: center;
  }
  .core-phone {
    width: min(25vw, 340px);
    transform: translate3d(0, 0, 0);
    transition: transform .14s cubic-bezier(.22, 1, .36, 1);
    will-change: transform;
  }
  .core-phone-1,
  .core-phone-3 { transform: translate3d(0, 0, 0); }
  .core-phone-frame {
    position: relative;
    aspect-ratio: .49;
    padding: 0;
    overflow: visible;
    border: 0;
    border-radius: clamp(34px, 3.2vw, 54px);
    background: transparent;
    box-shadow: none;
  }
  .core-phone-frame img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: clamp(27px, 2.6vw, 43px);
    backface-visibility: hidden;
    transform: translateZ(0);
  }
  .core-phone-island {
    position: absolute;
    z-index: 2;
    top: clamp(12px, 1.15vw, 20px);
    left: 50%;
    width: 31%;
    height: clamp(18px, 1.75vw, 28px);
    border-radius: 999px;
    background: #080808;
    transform: translateX(-50%);
  }
  .core-phone-home {
    position: absolute;
    z-index: 2;
    bottom: clamp(10px, .9vw, 16px);
    left: 50%;
    width: 31%;
    height: 4px;
    border-radius: 999px;
    background: rgba(255, 255, 255, .92);
    transform: translateX(-50%);
  }
  @media (min-width: 1200px) {
    padding-block: clamp(160px, 14vw, 240px);
    .core-clipboard-heading { padding-bottom: clamp(40px, 2.2vw, 50px); }
    .core-phone-row {
      align-items: start;
      grid-template-columns: repeat(3, minmax(0, min(20vw, 280px)));
      justify-content: center;
      gap: clamp(4px, .5vw, 8px);
      padding-top: 60px;
    }
    .core-phone { width: min(20vw, 280px); }
    .core-phone-stage { min-height: min(58vw, 820px); }
    .core-phone-1 { transform: translate3d(0, 0, 0); }
    .core-phone-2 { transform: translate3d(0, 0, 0); }
    .core-phone-3 { transform: translate3d(0, 0, 0); }
    .core-phone-1,
    .core-phone-3 { position: relative; z-index: 1; }
    .core-phone-2 { position: relative; z-index: 2; }
    .core-phone-1 .core-phone-frame { transform: translateX(var(--core-phone-center-shift)) scale(.92); }
    .core-phone-2 .core-phone-frame { opacity: 1; transform: translateY(0); }
    .core-phone-3 .core-phone-frame { transform: translateX(calc(var(--core-phone-center-shift) * -1)) scale(.92); }
    &.is-phones-entered .core-phone-1 .core-phone-frame { animation: ${corePhoneSpreadFromCenterLeft} .72s cubic-bezier(.33, 1, .68, 1) forwards; }
    &.is-center-phone-entered .core-phone-2 .core-phone-frame { animation: ${corePhoneEnterFromBottom} .86s cubic-bezier(.16, 1, .3, 1) forwards; }
    &.is-phones-entered .core-phone-3 .core-phone-frame { animation: ${corePhoneSpreadFromCenterRight} .72s cubic-bezier(.33, 1, .68, 1) forwards; }
    &.is-phones-reversing .core-phone-1 .core-phone-frame { animation: ${corePhoneConvergeToCenterLeft} .62s cubic-bezier(.33, 1, .68, 1) forwards; }
    &.is-center-phone-reversing .core-phone-2 .core-phone-frame { animation: ${corePhoneExitToBottom} .62s cubic-bezier(.4, 0, 1, 1) forwards; }
    &.is-phones-reversing .core-phone-3 .core-phone-frame { animation: ${corePhoneConvergeToCenterRight} .62s cubic-bezier(.33, 1, .68, 1) forwards; }
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    min-height: auto;
    .core-phone-stage {
      height: calc(100dvh - 72px);
      height: calc(100svh - 72px);
      min-height: 0;
      overflow: clip;
      touch-action: pan-y;
      contain: layout paint;
    }
    .core-phone-row {
      --core-scroll-phone-width: min(62vw, calc(49dvh - 59px));
      --core-scroll-phone-width: min(62vw, calc(49svh - 59px));
      position: relative;
      width: 100%;
      height: 100%;
      min-height: 0;
      margin: 0;
      backface-visibility: hidden;
      contain: layout paint;
    }
    .core-phone { position: absolute; top: 50%; left: 50%; width: var(--core-scroll-phone-width); transition: none; contain: paint; will-change: transform, opacity; }
    .core-phone-frame { translate: 0; contain: paint; }
  }

  @media (max-width: 767px) {
    min-height: auto;
    padding-bottom: 0;
    .core-clipboard-heading { padding-top: 42px; padding-bottom: clamp(36px, 6vw, 44px); }
    .core-app-brand { margin-bottom: 16px; }
    .core-app-logos { --core-brand-grid-size: calc((100vw - (var(--page-gutter) * 2)) / 40); will-change: auto; }
    h2 { font-size: clamp(17px, 5.6vw, 30px); line-height: 1.34; }
    .core-phone-stage {
      height: calc(100dvh - 75px);
      height: calc(100svh - 75px);
      min-height: 0;
      overflow: clip;
      touch-action: pan-y;
      contain: layout paint;
    }
    .core-phone-row {
      --core-scroll-phone-width: min(84vw, calc(49dvh - 60px));
      --core-scroll-phone-width: min(84vw, calc(49svh - 60px));
      position: relative;
      width: 100%;
      height: 100%;
      min-height: 0;
      margin: 0;
      backface-visibility: hidden;
      contain: layout paint;
    }
    .core-phone { position: absolute; top: 50%; left: 50%; width: var(--core-scroll-phone-width); transition: none; contain: paint; will-change: transform, opacity; }
    .core-phone-frame { translate: 0; contain: paint; }
  }

  @media (prefers-reduced-motion: reduce) {
    .core-phone,
    .core-phone-1,
    .core-phone-3 { transform: none; transition: none; }
    .core-phone-frame { opacity: 1 !important; transform: none !important; animation: none !important; }
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

  @media (max-width: 1199px) and (prefers-reduced-motion: reduce) {
    .core-phone-stage { height: auto; overflow-x: auto; contain: none; scroll-snap-type: x mandatory; }
    .core-phone-row { display: flex; width: max-content; height: auto; padding-inline: calc((100vw - var(--core-scroll-phone-width)) / 2); gap: 48px; transform: none !important; }
    .core-phone { position: static; width: var(--core-scroll-phone-width); flex: 0 0 var(--core-scroll-phone-width); opacity: 1 !important; filter: none !important; scroll-snap-align: center; }
  }
`;

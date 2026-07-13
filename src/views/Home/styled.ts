import styled, { keyframes } from 'styled-components';

const typing = keyframes`0%,100%{transform:scaleX(1)}35%{transform:scaleX(.82) translateX(-4px)}70%{transform:scaleX(1.08) translateX(3px)}`;
const mailFly = keyframes`0%,100%{transform:translate(0,0) rotate(0)}40%{transform:translate(10px,-9px) rotate(8deg)}70%{transform:translate(-3px,2px) rotate(-3deg)}`;
const contactPulse = keyframes`0%,100%{transform:scale(1)}45%{transform:scale(1.16)}65%{transform:scale(.96)}`;
const colorPick = keyframes`0%,100%{transform:rotate(0) translateY(0);color:#2b2523}35%{transform:rotate(-16deg) translateY(-5px);color:#d45d83}70%{transform:rotate(9deg) translateY(2px);color:#6f70d9}`;
const aiSpark = keyframes`0%,100%{transform:rotate(0) scale(1);filter:none}50%{transform:rotate(18deg) scale(1.17);filter:drop-shadow(0 0 9px #c66cff)}`;
const qrPulse = keyframes`0%,100%{transform:scale(1)}40%{transform:scale(1.08)}70%{transform:scale(.97)}`;
const qrScan = keyframes`0%{opacity:0;transform:translateY(-20px)}20%,80%{opacity:1}100%{opacity:0;transform:translateY(22px)}`;
const heartBeat = keyframes`0%,100%{transform:scale(1)}25%{transform:scale(1.22)}42%{transform:scale(.98)}62%{transform:scale(1.15)}`;
const memePop = keyframes`0%,100%{transform:translateY(0) rotate(0)}35%{transform:translateY(-9px) rotate(-7deg)}65%{transform:translateY(2px) rotate(6deg)}`;
const stickerPeel = keyframes`0%,100%{transform:rotate(0) skew(0)}45%{transform:rotate(-12deg) skew(-5deg) scale(1.08)}75%{transform:rotate(5deg)}`;
const pinDrop = keyframes`0%,100%{transform:translateY(0) rotate(0)}38%{transform:translateY(-8px) rotate(-12deg)}68%{transform:translateY(3px) rotate(6deg)}`;
const groupShift = keyframes`0%,100%{transform:translateX(0)}30%{transform:translateX(-8px)}65%{transform:translateX(8px)}`;
const searchSweep = keyframes`0%,100%{transform:translate(0,0) scale(1)}45%{transform:translate(7px,-5px) scale(1.12)}75%{transform:translate(-3px,2px) scale(.98)}`;
const sortSwap = keyframes`0%,100%{transform:translateY(0)}38%{transform:translateY(-7px)}68%{transform:translateY(5px)}`;
const exportDrop = keyframes`0%,100%{transform:translateY(0)}40%{transform:translateY(9px)}60%{transform:translateY(-4px)}`;
const clipboardPulse = keyframes`0%,100%{transform:scale(1) rotate(0)}42%{transform:scale(1.13) rotate(-5deg)}72%{transform:scale(.98) rotate(3deg)}`;
const expireFade = keyframes`0%,100%{transform:rotate(0);opacity:1}45%{transform:rotate(-14deg) scale(.88);opacity:.36}70%{transform:rotate(7deg);opacity:.8}`;
const cloudFloat = keyframes`0%,100%{transform:translateY(0) scale(1)}45%{transform:translateY(-9px) scale(1.07)}70%{transform:translateY(2px)}`;
// Mobile plays each motion once, then rests for three seconds before the next loop.
const typingCycle = keyframes`0%,25%,100%{transform:scaleX(1)}8.75%{transform:scaleX(.82) translateX(-4px)}17.5%{transform:scaleX(1.08) translateX(3px)}`;
const mailFlyCycle = keyframes`0%,25%,100%{transform:translate(0,0) rotate(0)}10%{transform:translate(10px,-9px) rotate(8deg)}17.5%{transform:translate(-3px,2px) rotate(-3deg)}`;
const contactPulseCycle = keyframes`0%,25%,100%{transform:scale(1)}11.25%{transform:scale(1.16)}16.25%{transform:scale(.96)}`;
const colorPickCycle = keyframes`0%,25%,100%{transform:rotate(0) translateY(0);color:#2b2523}8.75%{transform:rotate(-16deg) translateY(-5px);color:#d45d83}17.5%{transform:rotate(9deg) translateY(2px);color:#6f70d9}`;
const aiSparkCycle = keyframes`0%,25%,100%{transform:rotate(0) scale(1);filter:none}12.5%{transform:rotate(18deg) scale(1.17);filter:drop-shadow(0 0 9px #c66cff)}`;
const qrPulseCycle = keyframes`0%,25%,100%{transform:scale(1)}10%{transform:scale(1.08)}17.5%{transform:scale(.97)}`;
const qrScanCycle = keyframes`0%{opacity:0;transform:translateY(-20px)}5%,20%{opacity:1}25%,100%{opacity:0;transform:translateY(22px)}`;
const heartBeatCycle = keyframes`0%,25%,100%{transform:scale(1)}6.25%{transform:scale(1.22)}10.5%{transform:scale(.98)}15.5%{transform:scale(1.15)}`;
const memePopCycle = keyframes`0%,25%,100%{transform:translateY(0) rotate(0)}8.75%{transform:translateY(-9px) rotate(-7deg)}16.25%{transform:translateY(2px) rotate(6deg)}`;
const stickerPeelCycle = keyframes`0%,25%,100%{transform:rotate(0) skew(0)}11.25%{transform:rotate(-12deg) skew(-5deg) scale(1.08)}18.75%{transform:rotate(5deg)}`;
const clipboardPulseCycle = keyframes`0%,25%,100%{transform:scale(1) rotate(0)}10.5%{transform:scale(1.13) rotate(-5deg)}18%{transform:scale(.98) rotate(3deg)}`;
const pinDropCycle = keyframes`0%,25%,100%{transform:translateY(0) rotate(0)}9.5%{transform:translateY(-8px) rotate(-12deg)}17%{transform:translateY(3px) rotate(6deg)}`;
const groupShiftCycle = keyframes`0%,25%,100%{transform:translateX(0)}7.5%{transform:translateX(-8px)}16.25%{transform:translateX(8px)}`;
const searchSweepCycle = keyframes`0%,25%,100%{transform:translate(0,0) scale(1)}11.25%{transform:translate(7px,-5px) scale(1.12)}18.75%{transform:translate(-3px,2px) scale(.98)}`;
const sortSwapCycle = keyframes`0%,25%,100%{transform:translateY(0)}9.5%{transform:translateY(-7px)}17%{transform:translateY(5px)}`;
const exportDropCycle = keyframes`0%,25%,100%{transform:translateY(0)}10%{transform:translateY(9px)}15%{transform:translateY(-4px)}`;
const expireFadeCycle = keyframes`0%,25%,100%{transform:rotate(0);opacity:1}11.25%{transform:rotate(-14deg) scale(.88);opacity:.36}17.5%{transform:rotate(7deg);opacity:.8}`;
const cloudFloatCycle = keyframes`0%,25%,100%{transform:translateY(0) scale(1)}11.25%{transform:translateY(-9px) scale(1.07)}17.5%{transform:translateY(2px)}`;
const featureTitleIcon = keyframes`0%,100%{transform:translate(0,0) rotate(0) scale(1)}32%{transform:translateY(-5px) rotate(-10deg) scale(1.13)}64%{transform:translateY(2px) rotate(7deg) scale(.98)}82%{transform:translateY(-1px) rotate(-3deg) scale(1.04)}`;
const featureTitleIconCycle = keyframes`0%,21.5%,100%{transform:translate(0,0) rotate(0) scale(1)}6.9%{transform:translateY(-5px) rotate(-10deg) scale(1.13)}13.8%{transform:translateY(2px) rotate(7deg) scale(.98)}17.7%{transform:translateY(-1px) rotate(-3deg) scale(1.04)}`;
const highlightSweep = keyframes`from{transform:scaleX(0)}to{transform:scaleX(1)}`;

const button = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 58px;
  padding: 0 28px;
  border-radius: 22px;
  font-size: 18px;
  font-weight: 780;
  letter-spacing: -0.025em;
  transition: transform .18s ease, box-shadow .18s ease;
  &:hover { transform: translateY(-3px); }
  @media (max-width: 600px) { min-height: 52px; padding: 0 19px; font-size: 15px; border-radius: 18px; }
`;

export const LandingPage = styled.main`
  min-height: 100dvh;
  overflow-x: clip;
  overflow-y: visible;
  padding: 0;
  background: #ffefde;
  color: #262120;
`;

export const Hero = styled.section`
  display: grid;
  min-height: 100dvh;
  padding: 24px;
  place-items: center;
  text-align: center;

  .hero-content { display: flex; width: 100%; flex-direction: column; align-items: center; justify-content: center; }
  h1 { max-width: 1320px; margin: 0; font-size: clamp(48px, 7dvw, 112px); line-height: 1.06; font-weight: 820; letter-spacing: -.018em; text-wrap: balance; }
  h1 .highlight { position: relative; display: inline-block; z-index: 0; }
  h1 .highlight::after { position: absolute; z-index: -1; bottom: 2%; left: 0; width: calc(100% + .06em); height: 27%; border-radius: 3px; background: #ffa0ae; content: ''; transform: scaleX(0); transform-origin: left center; animation: ${highlightSweep} .72s cubic-bezier(.22, 1, .36, 1) .16s forwards; }
  .hero-actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 18px; margin-top: 58px; }

  @media (max-width: 700px) {
    min-height: 100dvh;
    padding: 16px 10px;
    h1 { font-size: clamp(34px, 10.5dvw, 53px); line-height: 1.1; letter-spacing: -.008em; }
    .hero-actions { gap: 10px; margin-top: 32px; }
  }

  @media (prefers-reduced-motion: reduce) {
    h1 .highlight::after { transform: scaleX(1); animation: none; }
  }
`;

export const DownloadButton = styled.a`
  ${button}
  background: #292422;
  color: #fff2e1;
  box-shadow: 0 22px 32px -21px rgba(58, 40, 32, .76);
  svg { width: 20px; height: 25px; fill: currentColor; }
`;

export const LegacyContent = styled.section`
  width: 100%;
  margin: 30px 0 170px;
  overflow: clip;

  .feature-pin {
    position: relative;
    display: flex;
    height: calc(100dvh - 88px);
    min-height: 0;
    align-items: flex-end;
    overflow: clip;
    perspective: 1300px;
    perspective-origin: center top;
  }

  .feature-track {
    display: flex;
    gap: 15px;
    width: max-content;
    padding: 0 15px 15px 25dvw;
    will-change: transform;
  }

  @media (max-width: 1199px) {
    margin: 0 0 110px;
    overflow: visible;

    .feature-pin { display: block; height: auto; min-height: 0; overflow: visible; }
    .feature-track {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
      width: min(767px, calc(100dvw - 20px));
      margin: 0 auto;
      padding: 0;
      transform: none !important;
      will-change: auto;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    width: min(1220px, calc(100% - 20px));
    margin-right: auto;
    margin-left: auto;
    overflow: visible;

    .feature-pin { display: block; min-height: 0; overflow: visible; }
    .feature-track {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 15px;
      width: 100%;
      padding: 0;
      transform: none !important;
      will-change: auto;
    }
    .feature-track > article { width: auto; min-width: 0; flex-basis: auto; }
  }

  @media (max-width: 1199px) and (prefers-reduced-motion: reduce) {
    .feature-track { grid-template-columns: 1fr; }
  }
`;

export const LegacyContentItem = styled.article`
  --feature-card-padding: clamp(28px, 3dvw, 44px);
  /* Keep the visual's left/right breathing room and the copy's outer edge equal. */
  --feature-balanced-padding: clamp(72px, 6dvw, 92px);
  --feature-visual-enter-x: 0px;
  --feature-visual-enter-y: 0px;
  --feature-visual-enter-y-inverse: 0px;

  display: flex;
  flex: 0 0 clamp(800px, 78dvw, 1280px);
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  border: 0;
  border-radius: 34px;
  background: #f8e4cf;
  box-shadow: none;
  transition: background-color .3s ease;
  transform-style: preserve-3d;
  backface-visibility: hidden;

  &:hover { background: #f4deca; }
  &.reverse-layout { flex-direction: row-reverse; }
  .content-copy { min-width: 0; flex: 1 1 0; align-self: center; padding: var(--feature-card-padding) var(--feature-balanced-padding) var(--feature-card-padding) 0; }
  .title-row { display: flex; align-items: center; gap: 13px; margin-bottom: 17px; }
  .title-row > svg { width: 30px; min-width: 30px; height: 30px; margin: 0; color: #2b2523; transform-origin: center; }
  &:hover .title-row > svg { color: #2b2523; animation: ${featureTitleIcon} .82s cubic-bezier(.22, 1, .36, 1); }
  h2 { margin: 0; font-size: clamp(27px, 2.5dvw, 38px); line-height: 1.12; font-weight: 810; letter-spacing: -.018em; overflow-wrap: anywhere; }
  p { margin: 0; color: #665249; font-size: clamp(17px, 1.35dvw, 20px); line-height: 1.58; font-weight: 540; letter-spacing: -.012em; }
  .content-visual { display: grid; flex: 0 0 auto; height: calc(100dvh - 118px); min-height: 0; align-self: center; padding: 24px var(--feature-balanced-padding); place-items: center; overflow: hidden; border: 0; background: transparent; }
  img { display: block; width: auto; min-width: 0; max-width: 100%; height: 100%; min-height: 0; max-height: 100%; object-fit: contain; border-radius: 20px; }
  &.reverse-layout .content-copy { padding-right: 0; padding-left: var(--feature-balanced-padding); }
  &.feature-reveal-ready .content-visual {
    transform: translate3d(var(--feature-visual-enter-x), var(--feature-visual-enter-y), 0);
    transition: transform 1.08s cubic-bezier(.22, 1, .36, 1) .14s;
    will-change: transform;
  }
  &.feature-reveal-ready img {
    opacity: 0;
    filter: blur(16px);
    transform: scale(.94);
    transition: opacity .46s ease, filter .7s ease, transform .78s cubic-bezier(.22, 1, .36, 1);
    will-change: opacity, filter, transform;
  }
  &.feature-reveal-ready .split-word {
    display: inline-block;
    opacity: 0;
    filter: blur(3px);
    transform: translateY(22px);
    transition: opacity .4s ease, filter .5s ease, transform .62s cubic-bezier(.22, 1, .36, 1);
    will-change: opacity, filter, transform;
  }
  &.feature-reveal-ready .title-row > svg {
    opacity: 0;
    transform: translateY(18px);
    transition: opacity .4s ease, transform .62s cubic-bezier(.22, 1, .36, 1);
  }
  &.feature-reveal-ready.is-visible .content-visual { transform: translate3d(0, 0, 0); }
  &.feature-reveal-ready.is-visible img { opacity: 1; filter: blur(0); transform: scale(1); transition-delay: .12s; }
  &.feature-reveal-ready.is-visible .split-word {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
    transition-delay: calc(.56s + var(--split-index) * 10ms);
  }
  &.feature-reveal-ready.is-visible .title-row > svg { opacity: 1; transform: translateY(0); transition-delay: .50s; }
  &.feature-reveal-ready.is-visible .title-row > svg { animation: ${featureTitleIcon} .82s cubic-bezier(.22, 1, .36, 1) .52s both; }
  &.is-icon-animated .title-row > svg { color: #2b2523; animation: ${featureTitleIconCycle} 3.82s cubic-bezier(.22, 1, .36, 1) .52s infinite both; }

  &.vertical-feature.is-visible img { transition-delay: .06s; }
  &.vertical-feature.is-visible .split-word { transition-delay: calc(.34s + var(--split-index) * 8ms); }
  &.vertical-feature.is-visible .title-row > svg { transition-delay: .28s; }

  &.feature-reveal-ready.is-preparing .content-visual,
  &.feature-reveal-ready.is-preparing img,
  &.feature-reveal-ready.is-preparing .split-word,
  &.feature-reveal-ready.is-preparing .title-row > svg { transition: none !important; }

  @media (max-width: 1199px) {
    --feature-card-padding: 18px;

    width: 100%;
    flex-basis: auto;
    flex-direction: column;
    min-height: 0;
    border-radius: 25px;
    &.reverse-layout { flex-direction: column; }
    &:hover { background: #f8e4cf; }
    .content-copy { order: -1; display: flex; width: 100%; flex: 0 0 auto; flex-direction: column; align-self: auto; align-items: flex-start; padding: 36px var(--feature-card-padding) 24px; text-align: left; }
    .content-visual { width: 100%; max-width: none; height: auto; flex: 0 0 auto; padding: 12px 12px 36px; place-items: center; }
    img { width: min(86%, 400px); height: auto; max-height: none; }
    &.reverse-layout .content-copy { padding: 36px var(--feature-card-padding) 24px; }
    &.reverse-layout .content-visual { padding: 12px 12px 36px; }
    &.feature-reveal-ready .content-visual { transform: translate3d(var(--feature-visual-enter-x), var(--feature-visual-enter-y-inverse), 0); }
    .title-row { justify-content: flex-start; gap: 10px; margin-bottom: 10px; }
    .title-row > svg { width: 26px; min-width: 26px; height: 26px; }
    h2 { font-size: clamp(24px, 6.8dvw, 30px); line-height: 1.08; }
    p { font-size: 15px; line-height: 1.5; }
    &.feature-reveal-ready .content-visual { transition-duration: .8s; }
    &.feature-reveal-ready.is-visible img { transition-delay: 0s; }
    &.feature-reveal-ready.is-visible .split-word { transition-delay: calc(.18s + var(--split-index) * 7ms); }
    &.feature-reveal-ready.is-visible .title-row > svg { transition-delay: .14s; }
  }

  @media (prefers-reduced-motion: reduce) {
    &.feature-reveal-ready .content-visual,
    &.feature-reveal-ready img,
    &.feature-reveal-ready .split-word,
    &.feature-reveal-ready .title-row > svg { opacity: 1; filter: none; transform: none; transition: none; }
  }
`;

export const FeatureStack = styled.section`
  position: absolute;
  z-index: 2;
  inset: 0;
  display: flex;
  width: 100%;
  padding: 0 20px;
  align-items: flex-end;
  justify-content: center;
  pointer-events: none;

  .feature-stack-pin {
    isolation: isolate;
    width: clamp(800px, 78dvw, 1280px);
    height: calc(100dvh - 103px);
    overflow: visible;
  }
  .feature-stack-track { position: relative; isolation: isolate; width: 100%; height: 100%; }
  .feature-stack-track > article { position: absolute; top: 0; right: 0; bottom: 15px; left: 0; width: 100%; height: auto; flex-basis: auto; flex-direction: row-reverse; backface-visibility: hidden; }

  @media (max-width: 1199px) {
    position: static;
    display: block;
    padding: 16px 10px 0;
    pointer-events: auto;
    .feature-stack-pin { display: grid; height: auto; overflow: visible; }
    .feature-stack-track { display: grid; gap: 16px; width: min(767px, calc(100dvw - 20px)); height: auto; }
    .feature-stack-track > article { position: static; width: 100%; height: auto; flex-direction: column; }
  }

  @media (prefers-reduced-motion: reduce) {
    position: static;
    display: block;
    pointer-events: auto;
    .feature-stack-pin { display: grid; height: auto; overflow: visible; }
    .feature-stack-track { display: grid; gap: 15px; width: min(1280px, calc(100dvw - 40px)); height: auto; }
    .feature-stack-track > article { position: static; width: 100%; height: auto; flex-direction: row-reverse; }
  }

  @media (max-width: 1199px) and (prefers-reduced-motion: reduce) {
    .feature-stack-track { width: min(767px, calc(100dvw - 20px)); }
    .feature-stack-track > article { flex-direction: column; }
  }
`;

export const FeatureGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: min(1280px, calc(100% - 20px));
  margin: 0 auto;
  gap: 86px 20px;
  .grid-title { grid-column: 1 / -1; margin: 0 0 8px; font-size: clamp(46px, 6.65dvw, 87px); line-height: 1; font-weight: 820; letter-spacing: -.018em; text-align: center; }
  @media (max-width: 760px) { grid-template-columns: repeat(3, minmax(0, 1fr)); width: min(600px, calc(100% - 20px)); gap: 40px 10px; .grid-title { margin-bottom: 2px; font-size: clamp(30px, 9dvw, 40px); line-height: 1.04; } }
`;

export const FeatureItem = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #2b2523;
  text-align: center;
  cursor: default;

  .icon-wrap { position: relative; display: grid; width: 92px; height: 92px; margin-bottom: 25px; place-items: center; overflow: hidden; border-radius: 30px; background: rgba(237, 211, 190, .56); transition: background .25s ease, box-shadow .25s ease, transform .25s ease; }
  svg { stroke-linecap: round; stroke-linejoin: round; transform-origin: center; }
  h3 { max-width: 280px; margin: 0; font-size: clamp(21px, 2dvw, 32px); line-height: 1.18; letter-spacing: -.018em; font-weight: 800; }
  &:hover .icon-wrap { background: rgba(237, 211, 190, .74); box-shadow: 0 18px 35px rgba(88, 54, 38, .1); transform: translateY(-5px); }
  &[data-motion='typing']:hover svg { animation: ${typing} .78s ease-in-out; }
  &[data-motion='mail']:hover svg { animation: ${mailFly} .85s ease-in-out; }
  &[data-motion='contact']:hover svg { animation: ${contactPulse} .75s ease-in-out; }
  &[data-motion='color']:hover svg { animation: ${colorPick} .9s ease-in-out; }
  &[data-motion='color'] .icon-wrap::after { position: absolute; right: 12px; bottom: 12px; width: 11px; height: 11px; border: 3px solid #ffefde; border-radius: 50%; background: linear-gradient(135deg, #ff8aa5 0 33%, #f5b95f 33% 66%, #7476df 66%); content: ''; transition: transform .3s ease; }
  &[data-motion='color']:hover .icon-wrap::after { transform: scale(1.35) rotate(120deg); }
  &[data-motion='ai']:hover svg { animation: ${aiSpark} .9s ease-in-out; }
  &[data-motion='qr']:hover svg { animation: ${qrPulse} .8s ease-in-out; }
  &[data-motion='qr'] .icon-wrap::after { position: absolute; width: 54px; height: 2px; border-radius: 99px; background: #c36c95; content: ''; opacity: 0; }
  &[data-motion='qr']:hover .icon-wrap::after { animation: ${qrScan} .9s ease-in-out; }
  &[data-motion='favorite']:hover svg { animation: ${heartBeat} .85s ease-in-out; fill: rgba(195,108,149,.22); }
  &[data-motion='meme']:hover svg { animation: ${memePop} .82s ease-in-out; }
  &[data-motion='sticker']:hover svg { animation: ${stickerPeel} .85s ease-in-out; }
  &[data-motion='copy']:hover svg,
  &[data-motion='clone']:hover svg,
  &[data-motion='system-pasteboard']:hover svg { animation: ${clipboardPulse} .86s ease-in-out; }
  &[data-motion='pin']:hover svg { animation: ${pinDrop} .82s ease-in-out; }
  &[data-motion='filter']:hover svg { animation: ${sortSwap} .78s ease-in-out; }
  &[data-motion='groups']:hover svg { animation: ${groupShift} .8s ease-in-out; }
  &[data-motion='search']:hover svg { animation: ${searchSweep} .82s ease-in-out; }
  &[data-motion='sort']:hover svg { animation: ${sortSwap} .78s ease-in-out; }
  &[data-motion='export']:hover svg { animation: ${exportDrop} .75s ease-in-out; }
  &[data-motion='import']:hover svg { animation: ${exportDrop} .75s ease-in-out reverse; }
  &[data-motion='expire']:hover svg { animation: ${expireFade} .9s ease-in-out; }
  &[data-motion='cloud']:hover svg { animation: ${cloudFloat} .95s ease-in-out; }
  @media (prefers-reduced-motion: no-preference) {
    &[data-animating='true'][data-motion='typing'] svg { animation: ${typingCycle} 4s ease-in-out; }
    &[data-animating='true'][data-motion='mail'] svg { animation: ${mailFlyCycle} 4s ease-in-out; }
    &[data-animating='true'][data-motion='contact'] svg { animation: ${contactPulseCycle} 4s ease-in-out; }
    &[data-animating='true'][data-motion='color'] svg { animation: ${colorPickCycle} 4s ease-in-out; }
    &[data-animating='true'][data-motion='ai'] svg { animation: ${aiSparkCycle} 4s ease-in-out; }
    &[data-animating='true'][data-motion='qr'] svg { animation: ${qrPulseCycle} 4s ease-in-out; }
    &[data-animating='true'][data-motion='qr'] .icon-wrap::after { animation: ${qrScanCycle} 4s ease-in-out; }
    &[data-animating='true'][data-motion='favorite'] svg { animation: ${heartBeatCycle} 4s ease-in-out; }
    &[data-animating='true'][data-motion='meme'] svg { animation: ${memePopCycle} 4s ease-in-out; }
    &[data-animating='true'][data-motion='sticker'] svg { animation: ${stickerPeelCycle} 4s ease-in-out; }
    &[data-animating='true'][data-motion='copy'] svg,
    &[data-animating='true'][data-motion='clone'] svg,
    &[data-animating='true'][data-motion='system-pasteboard'] svg { animation: ${clipboardPulseCycle} 4s ease-in-out; }
    &[data-animating='true'][data-motion='pin'] svg { animation: ${pinDropCycle} 4s ease-in-out; }
    &[data-animating='true'][data-motion='filter'] svg { animation: ${sortSwapCycle} 4s ease-in-out; }
    &[data-animating='true'][data-motion='groups'] svg { animation: ${groupShiftCycle} 4s ease-in-out; }
    &[data-animating='true'][data-motion='search'] svg { animation: ${searchSweepCycle} 4s ease-in-out; }
    &[data-animating='true'][data-motion='sort'] svg { animation: ${sortSwapCycle} 4s ease-in-out; }
    &[data-animating='true'][data-motion='export'] svg { animation: ${exportDropCycle} 4s ease-in-out; }
    &[data-animating='true'][data-motion='import'] svg { animation: ${exportDropCycle} 4s ease-in-out reverse; }
    &[data-animating='true'][data-motion='expire'] svg { animation: ${expireFadeCycle} 4s ease-in-out; }
    &[data-animating='true'][data-motion='cloud'] svg { animation: ${cloudFloatCycle} 4s ease-in-out; }
  }
  @media (max-width: 760px) { .icon-wrap { width: 58px; height: 58px; margin-bottom: 12px; border-radius: 19px; } svg { width: 34px; height: 34px; } h3 { max-width: 120px; font-size: clamp(13px, 3.7dvw, 16px); line-height: 1.2; letter-spacing: -.025em; } }
  @media (prefers-reduced-motion: reduce) { &:hover svg { animation: none !important; } }
`;

export const SectionDownload = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 170px;
  .socials { display: flex; align-items: center; gap: 15px; margin: 100px 0 165px; color: #9f7869; }
  .socials > a { display: grid; width: 44px; height: 44px; place-items: center; border-radius: 13px; background: rgba(239, 219, 198, .56); color: #8f6c5d; transition: color .2s ease, transform .2s ease, background .2s ease; }
  .socials > a:hover { color: #2b2523; background: rgba(230, 202, 177, .86); transform: translateY(-4px); }
  .socials svg { width: 21px; height: 21px; fill: currentColor; }
  @media (max-width: 700px) { margin-top: 110px; .socials { margin: 70px 0 110px; } }
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
  color: rgba(184, 134, 110, .42);
  &::after { position: absolute; z-index: 1; inset: 0; background: linear-gradient(to bottom, rgba(255, 239, 222, 0) 28%, rgba(255, 239, 222, .55) 70%, #ffefde 100%); content: ''; pointer-events: none; }
  span { position: absolute; right: 0; bottom: 10px; left: 0; width: 100%; font-size: clamp(54px, 15dvw, 240px); line-height: .9; font-weight: 810; letter-spacing: .01em; text-align: center; white-space: nowrap; transform: translateY(20%); }
`;

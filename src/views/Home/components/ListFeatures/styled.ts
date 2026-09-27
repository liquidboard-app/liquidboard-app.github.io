import styled from 'styled-components';

export const ListFeaturesSection = styled.section`
  padding: 158px var(--page-gutter) 160px;
  background: var(--bg);
  color: var(--text);

  .features-intro { display: flex; flex-direction: column; align-items: center; margin: 0 auto 52px; padding: 0 20px; text-align: center; }
  .features-intro h2 { max-width: 980px; margin: 0; font-size: clamp(44px, 3.8vw, 68px); font-weight: 800; letter-spacing: normal; line-height: 1.08; }
  .features-intro p { max-width: 667px; margin: 18px 0 0; color: var(--muted-text); font-size: clamp(16px, 1.2vw, 19px); font-weight: 500; letter-spacing: -.02em; line-height: 1.5; }
  .feature-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: min(1200px, 100%);
    min-height: 600px;
    margin: 0 auto;
    overflow: hidden;
    border: 0;
    border-radius: 36px;
    background: var(--surface);
    box-shadow: 0 24px 80px rgba(0, 0, 0, .1);
  }
  .feature-copy { display: flex; flex-direction: column; justify-content: center; padding: clamp(30px, 5vw, 68px) clamp(24px, 3.5vw, 48px); background: var(--surface); }
  :root[data-theme='light'] & .feature-copy { background: #fff; }
  h2 { max-width: 520px; margin: 0 0 36px; font-size: clamp(27px, 3.2vw, 42px); font-weight: 800; letter-spacing: -.06em; line-height: 1.08; }
  .feature-title { display: flex; flex-direction: column; align-items: flex-start; gap: 18px; margin-bottom: 10px; }
  .feature-symbol-badge { display: grid; width: 60px; height: 36px; flex: 0 0 auto; place-items: center; border-radius: 999px; }
  .feature-symbol-blue { background: #1478ee; }
  .feature-symbol-green { background: #22c55e; }
  .feature-symbol-badge img { display: block; object-fit: contain; }
  .feature-symbol-blue img { width: 16px; height: 24px; filter: brightness(0) invert(1); }
  .feature-symbol-green img { width: 27px; height: 17px; filter: brightness(0) invert(1); }
  .feature-copy h2 { margin: 0; font-size: clamp(22px, 2.6vw, 34px); font-weight: 700; }
  .feature-description { max-width: 500px; margin: 0; color: var(--muted-text); font-size: clamp(15px, 1.2vw, 18px); font-weight: 500; line-height: 1.55; }
  .feature-group { display: grid; grid-template-columns: 34px 1fr; gap: 12px; padding: 22px 0; }
  .feature-group + .feature-group { border-top: 1px solid var(--header-border); }
  .group-index { padding-top: 3px; color: #1478ee; font-size: 12px; font-weight: 800; letter-spacing: .08em; }
  h3 { margin: 0 0 13px; font-size: clamp(20px, 2vw, 25px); font-weight: 750; letter-spacing: -.045em; }
  ul { display: grid; gap: 10px; margin: 0; padding: 0; list-style: none; }
  li { position: relative; padding-left: 18px; color: var(--muted-text); font-size: 14px; line-height: 1.5; }
  li::before { position: absolute; top: .55em; left: 0; width: 7px; height: 7px; border-radius: 2px; background: #1478ee; content: ''; transform: rotate(45deg); }

  .feature-art { position: relative; display: grid; height: 600px; min-height: 600px; overflow: hidden; place-items: center; background: #071019; }
  .feature-art .feature-background { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; }
  .story-controls { position: absolute; z-index: 4; right: 18px; bottom: 18px; left: 18px; display: flex; align-items: center; justify-content: space-between; }
  .story-mode-indicator, .story-play-toggle { position: relative; display: grid; width: 44px; height: 44px; flex: 0 0 44px; place-items: center; overflow: hidden; border: 0; border-radius: 50%; background: rgba(12, 18, 28, .28); color: #fff; box-shadow: 0 4px 18px rgba(0,0,0,.16); backdrop-filter: blur(18px) saturate(145%); -webkit-backdrop-filter: blur(18px) saturate(145%); }
  .story-mode-indicator { isolation: isolate; }
  .mode-icon { position: absolute; display: grid; width: 100%; height: 100%; place-items: center; opacity: 0; filter: blur(8px); transform: scale(.88); transition: opacity .5s ease, filter .65s ease, transform .65s cubic-bezier(.22,1,.36,1); }
  .mode-icon.is-active { opacity: 1; filter: blur(0); transform: scale(1); }
  .mode-icon img { display: block; object-fit: contain; filter: brightness(0) invert(1); opacity: .9; }
  .mode-lanyard { width: 13px; height: 18px; transform: translateY(-.5px); }
  .mode-keyboard { width: 19px; height: auto; transform: translateY(-.5px); }
  .play-icon { position: absolute; display: grid; width: 100%; height: 100%; place-items: center; opacity: 0; filter: blur(9px); transform: scale(.84); transition: opacity .6s ease, filter .75s ease, transform .75s cubic-bezier(.22,1,.36,1); }
  .play-icon.is-active { opacity: 1; filter: blur(0); transform: scale(1); }
  .play-icon svg, .play-icon img { width: 19px; height: 19px; fill: currentColor; stroke-width: 2; }
  .play-icon:first-child img { width: 15px; height: 15px; transform: translateX(1px); }
  .play-icon:last-child svg { transform: none; }
  .story-play-toggle, .story-mode-indicator { padding: 0; cursor: pointer; transition: background .2s ease, transform .2s ease; }
  .story-play-toggle:hover, .story-mode-indicator:hover { background: rgba(255,255,255,.22); transform: scale(1.06); }
  .story-play-toggle:focus-visible, .story-mode-indicator:focus-visible { outline: 2px solid #fff; outline-offset: 3px; }
  .story-progress { position: absolute; z-index: 4; top: 18px; right: 20px; left: 20px; display: grid; grid-template-columns: 1fr 1fr; gap: 7px; }
  .story-progress > span { height: 4px; overflow: hidden; border-radius: 999px; background: rgba(255, 255, 255, .38); }
  .story-progress i { display: block; height: 100%; border-radius: inherit; background: #fff; transition: width .05s linear; }
  .feature-art .feature-app-image { position: absolute; top: 50%; left: 50%; z-index: 1; display: block; width: auto; max-width: 94%; height: 90%; max-height: 530px; object-fit: contain; object-position: center; opacity: 0; filter: blur(16px); transform: translate(-50%, -50%) translateY(8px) scale(1.025); transition: opacity 1.1s cubic-bezier(.22, 1, .36, 1), filter 1.25s cubic-bezier(.22, 1, .36, 1), transform 1.25s cubic-bezier(.22, 1, .36, 1); pointer-events: none; }
  .feature-art .feature-app-image.is-active { z-index: 2; opacity: 1; filter: blur(0); transform: translate(-50%, -50%) translateY(8px) scale(1); }
  .feature-art .feature-app-dark, .feature-art .feature-keyboard-dark { display: block; }
  .feature-art .feature-app-light, .feature-art .feature-keyboard-light { display: none; }
  :root[data-theme='light'] & .feature-art .feature-app-dark,
  :root[data-theme='light'] & .feature-art .feature-keyboard-dark { display: none; }
  :root[data-theme='light'] & .feature-art .feature-app-light,
  :root[data-theme='light'] & .feature-art .feature-keyboard-light { display: block; }

  @media (max-width: 1024px), (max-width: 1366px) and (pointer: coarse) {
    .feature-card { grid-template-columns: 1fr; width: min(767px, 100%); }
  }

  @media (max-width: 760px) {
    padding: 110px var(--page-gutter) 104px;
    .features-intro { margin-bottom: 32px; padding-inline: 15px; }
    .features-intro h2 { font-size: clamp(29px, 6.6vw, 39px); line-height: 1.12; }
    .features-intro p { max-width: 340px; margin-top: 16px; font-size: 15px; line-height: 1.42; }
    .feature-card { grid-template-columns: 1fr; border-radius: 28px; }
    .feature-copy { padding: 32px 22px; }
    .feature-title { gap: 16px; }
    .feature-symbol-badge { width: 56px; height: 32px; border-radius: 999px; }
    .feature-symbol-blue img { width: 15px; height: 22px; }
    .feature-symbol-green img { width: 25px; height: 16px; }
    h2 { margin-bottom: 22px; }
    .feature-group { padding: 18px 0; }
    .feature-art { height: 650px; min-height: 650px; }
    .feature-art .feature-app-image { max-width: 100%; height: 100%; max-height: 560px; }
    .story-controls { right: 12px; bottom: 12px; left: 12px; }
    .story-progress { top: 14px; right: 14px; left: 14px; gap: 5px; }
    .story-mode-indicator, .story-play-toggle { width: 40px; height: 40px; flex-basis: 40px; }
  }
  @media (prefers-reduced-motion: reduce) {
    .story-progress i { transition: none; }
    .feature-art .feature-app-image { transition: none; }
  }
`;

export const FeatureDetail = styled.section`
  & + & { margin-top: 42px; padding-top: 34px; border-top: 1px solid var(--header-border); }
  &.secondary .feature-title { margin-bottom: 10px; }
  &.secondary .feature-title h3 { margin: 0; font-size: clamp(22px, 2.6vw, 34px); font-weight: 700; letter-spacing: -.06em; line-height: 1.08; }
`;

// Named view elements keep markup and class-based variants attached to this section.
export const FeaturesIntro = styled.header``;
export const FeatureCard = styled.div``;
export const FeatureArt = styled.div``;
export const FeatureBackground = styled.img``;
export const StoryProgress = styled.div``;
export const ProgressSegment = styled.span``;
export const ProgressFill = styled.i``;
export const StoryControls = styled.div``;
export const StoryModeIndicator = styled.button``;
export const ModeIcon = styled.span``;
export const LanyardIcon = styled.img``;
export const KeyboardIcon = styled.img``;
export const StoryPlayToggle = styled.button``;
export const PlayIcon = styled.span``;
export const FeatureScreen = styled.img``;
export const FeatureCopy = styled.div``;
export const FeatureTitle = styled.div``;
export const FeatureSymbolBadge = styled.span``;
export const FeatureHeading = styled.h2``;
export const FeatureDescription = styled.p``;
export const FeatureSubheading = styled.h3``;
export const FeatureIntroHeading = styled.h2``;
export const FeatureIntroDescription = styled.p``;
export const FeatureBadgeIcon = styled.img``;
export const StoryPlayImage = styled.img``;

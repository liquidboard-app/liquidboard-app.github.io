import styled from 'styled-components';

export const ActionClipboardSection = styled.section`
  --action-clipboard-island-width: 190px;
  padding: clamp(160px, 17vw, 248px) 0;
  overflow: clip;
  background: #fff;
  color: #151515;

  .container { padding-inline: var(--page-gutter); }

  .action-clipboard-heading {
    max-width: 720px;
    margin: 0 auto clamp(36px, 5vw, 64px);
    text-align: center;
  }
  .action-clipboard-heading h2 {
    margin: 0;
    font-size: clamp(36px, 5vw, 72px);
    font-weight: 800;
    letter-spacing: -.055em;
    line-height: .98;
  }
  .action-clipboard-heading p {
    margin: clamp(12px, 1.5vw, 18px) 0 0;
    color: rgba(21, 21, 21, .58);
    font-size: clamp(16px, 1.7vw, 22px);
    line-height: 1.4;
  }

  .action-clipboard-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    overflow: hidden;
    border: 1px solid rgba(21, 21, 21, .14);
    border-radius: clamp(28px, 4vw, 48px);
    background: #fff;
  }

  .action-clipboard-panel {
    display: flex;
    min-width: 0;
    min-height: clamp(260px, 31vw, 446px);
    padding: clamp(14px, 1.6vw, 22px);
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid rgba(21, 21, 21, .14);
    background: #fff;
  }
  .action-clipboard-panel:nth-child(odd) { border-right: 1px solid rgba(21, 21, 21, .14); }

  .action-clipboard-panel-bar-shell {
    --action-clipboard-island-height: clamp(34px, 3.8vw, 44px);
    --action-clipboard-island-inline-padding: 7px;
    --action-clipboard-island-start-padding: 10px;
    position: relative;
    z-index: 3;
    width: var(--action-clipboard-island-width);
    max-width: 100%;
    min-height: var(--action-clipboard-island-height);
    flex: 0 0 auto;
    transition: width .72s cubic-bezier(.22, .8, .28, 1), min-height .72s cubic-bezier(.22, .8, .28, 1);
  }
  .action-clipboard-panel-bar-shell--share-expanded,
  .action-clipboard-panel-bar-shell--export-expanded {
    --action-clipboard-island-inline-padding: clamp(9px, 1vw, 12px);
    --action-clipboard-island-start-padding: clamp(12px, 1.3vw, 15px);
    --action-clipboard-share-expanded-padding: clamp(14px, 1.6vw, 20px);
    width: min(100%, clamp(292px, 34.5vw, 402px));
    min-height: clamp(82px, 7.2vw, 96px);
  }
  .action-clipboard-panel-bar-motion {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: visible;
    border-radius: calc(var(--action-clipboard-island-height) / 2);
    transform-origin: center;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    will-change: transform;
    transition: border-radius .72s cubic-bezier(.22, .8, .28, 1);
  }
  .action-clipboard-panel-bar {
    display: flex;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    max-width: none;
    min-height: 100%;
    align-items: center;
    justify-content: flex-start;
    padding: 0 var(--action-clipboard-island-inline-padding) 0 var(--action-clipboard-island-start-padding);
    border-radius: calc(var(--action-clipboard-island-height) / 2);
    box-sizing: border-box;
    background: #151515;
    box-shadow: 0 9px 18px rgba(21, 21, 21, .13);
    color: #fff;
    transition: border-radius .72s cubic-bezier(.22, .8, .28, 1);
  }
  .action-clipboard-panel-bar-foreground {
    position: absolute;
    inset: 0;
    z-index: 2;
    overflow: hidden;
    border-radius: calc(var(--action-clipboard-island-height) / 2);
    pointer-events: none;
    transition: border-radius .72s cubic-bezier(.22, .8, .28, 1);
  }
  .action-clipboard-panel-bar-motion--share-expanded,
  .action-clipboard-panel-bar-motion--share-expanded .action-clipboard-panel-bar,
  .action-clipboard-panel-bar-foreground--share-expanded,
  .action-clipboard-panel-bar-motion--export-expanded,
  .action-clipboard-panel-bar-motion--export-expanded .action-clipboard-panel-bar,
  .action-clipboard-panel-bar-foreground--export-expanded {
    border-radius: clamp(22px, 2.4vw, 28px);
  }
  .action-clipboard-panel-bar-foreground > .action-clipboard-panel-folder-wrap {
    position: absolute;
    top: calc(var(--action-clipboard-island-height) / 2);
    left: var(--action-clipboard-island-start-padding);
    transform: translateY(-50%);
  }
  @keyframes action-clipboard-island-fly {
    0%, 100% { transform: translate3d(0, 0, 0) scaleX(1); }
    14% { transform: translate3d(0, calc(var(--action-clipboard-shake-offset) * -1), 0) scaleX(calc(1 + var(--action-clipboard-shake-scale))); }
    28% { transform: translate3d(0, var(--action-clipboard-shake-offset), 0) scaleX(calc(1 - var(--action-clipboard-shake-scale) * .45)); }
    42% { transform: translate3d(0, calc(var(--action-clipboard-shake-offset) * -.75), 0) scaleX(calc(1 + var(--action-clipboard-shake-scale) * .8)); }
    56% { transform: translate3d(0, calc(var(--action-clipboard-shake-offset) * .65), 0) scaleX(calc(1 - var(--action-clipboard-shake-scale) * .3)); }
    70% { transform: translate3d(0, 0, 0) scaleX(calc(1 + var(--action-clipboard-shake-scale) * .4)); }
  }
  @keyframes action-clipboard-island-return {
    0%, 100% { transform: translate3d(0, 0, 0) scaleX(1); }
    14% { transform: translate3d(0, calc(var(--action-clipboard-shake-offset) * -1), 0) scaleX(calc(1 + var(--action-clipboard-shake-scale))); }
    28% { transform: translate3d(0, var(--action-clipboard-shake-offset), 0) scaleX(calc(1 - var(--action-clipboard-shake-scale) * .45)); }
    42% { transform: translate3d(0, calc(var(--action-clipboard-shake-offset) * -.75), 0) scaleX(calc(1 + var(--action-clipboard-shake-scale) * .8)); }
    56% { transform: translate3d(0, calc(var(--action-clipboard-shake-offset) * .65), 0) scaleX(calc(1 - var(--action-clipboard-shake-scale) * .3)); }
    70% { transform: translate3d(0, 0, 0) scaleX(calc(1 + var(--action-clipboard-shake-scale) * .4)); }
  }
  @keyframes action-clipboard-item-collect {
    0% { opacity: 0; filter: blur(8px); transform: translateY(28px) scale(.92); }
    14%, 100% { opacity: 1; filter: blur(0); transform: translateY(0) scale(1); }
  }
  @keyframes action-clipboard-check-pop {
    0%, 4% { opacity: 0; transform: scale(.45); }
    8% { opacity: 1; transform: scale(1.12); }
    11%, 100% { opacity: 1; transform: scale(1); }
  }
  @keyframes action-clipboard-item-fly {
    0% { opacity: 1; filter: blur(0); transform: translate(0, 0) scale(1); }
    100% { opacity: 0; filter: blur(8px); transform: translate(var(--action-clipboard-fly-x), var(--action-clipboard-fly-y)) scale(.16); }
  }
  @keyframes action-clipboard-item-return {
    0% { opacity: 0; filter: blur(8px); transform: translate(var(--action-clipboard-fly-x), var(--action-clipboard-fly-y)) scale(.16); }
    16% { opacity: 1; filter: blur(3px); }
    100% { opacity: 1; filter: blur(0); transform: translate(0, 0) scale(1); }
  }
  @keyframes action-clipboard-icloud-item-return {
    0% { opacity: 1; filter: blur(7px); transform: translate(var(--action-clipboard-fly-x), var(--action-clipboard-fly-y)) scale(.16); }
    18% { opacity: 1; filter: blur(3px); }
    100% { opacity: 1; filter: blur(0); transform: translate(0, 0) scale(1); }
  }
  @keyframes action-clipboard-pin-shift {
    0% { transform: translate3d(var(--action-clipboard-pin-from-x), 0, 0); }
    100% { transform: translate3d(var(--action-clipboard-pin-to-x), 0, 0); }
  }
  .action-clipboard-panel-bar-motion--flying {
    animation: action-clipboard-island-fly var(--action-clipboard-shake-duration) cubic-bezier(.22, .8, .28, 1) both;
  }
  .action-clipboard-panel-bar-motion--returning {
    animation: action-clipboard-island-return var(--action-clipboard-shake-duration) cubic-bezier(.22, .8, .28, 1) both;
  }
  .action-clipboard-panel-bar-motion--pin-shaking-even {
    animation: action-clipboard-island-fly var(--action-clipboard-shake-duration) cubic-bezier(.22, .8, .28, 1) both;
  }
  .action-clipboard-panel-bar-motion--pin-shaking-odd {
    animation: action-clipboard-island-return var(--action-clipboard-shake-duration) cubic-bezier(.22, .8, .28, 1) both;
  }
  .action-clipboard-panel-bar-motion--share-shaking-even {
    animation: action-clipboard-island-fly var(--action-clipboard-shake-duration) cubic-bezier(.22, .8, .28, 1) both;
  }
  .action-clipboard-panel-bar-motion--share-shaking-odd {
    animation: action-clipboard-island-return var(--action-clipboard-shake-duration) cubic-bezier(.22, .8, .28, 1) both;
  }
  .action-clipboard-panel-bar-motion--export-shaking-even {
    animation: action-clipboard-island-fly var(--action-clipboard-shake-duration) cubic-bezier(.22, .8, .28, 1) both;
  }
  .action-clipboard-panel-bar-motion--export-shaking-odd {
    animation: action-clipboard-island-return var(--action-clipboard-shake-duration) cubic-bezier(.22, .8, .28, 1) both;
  }
  .action-clipboard-panel-bar-motion--clipboard-shaking-even {
    animation: action-clipboard-island-fly var(--action-clipboard-shake-duration) cubic-bezier(.22, .8, .28, 1) both;
  }
  .action-clipboard-panel-bar-motion--clipboard-shaking-odd {
    animation: action-clipboard-island-return var(--action-clipboard-shake-duration) cubic-bezier(.22, .8, .28, 1) both;
  }
  .action-clipboard-panel-bar-motion--icloud-shaking-even {
    animation: action-clipboard-island-fly var(--action-clipboard-shake-duration) cubic-bezier(.22, .8, .28, 1) both;
  }
  .action-clipboard-panel-bar-motion--icloud-shaking-odd {
    animation: action-clipboard-island-return var(--action-clipboard-shake-duration) cubic-bezier(.22, .8, .28, 1) both;
  }
  .action-clipboard-progress { transition: color .28s ease; }
  .action-clipboard-progress.action-clipboard-progress--active { color: #fff; }
  .action-clipboard-panel-bar-foreground > .action-clipboard-progress {
    position: absolute;
    top: calc(var(--action-clipboard-island-height) / 2);
    right: var(--action-clipboard-island-inline-padding);
    z-index: 4;
    transform: translateY(-50%);
  }
  .action-clipboard-panel-bar-foreground--share-expanded > .action-clipboard-panel-folder-wrap,
  .action-clipboard-panel-bar-foreground--share-expanded > .action-clipboard-progress,
  .action-clipboard-panel-bar-foreground--export-expanded > .action-clipboard-panel-folder-wrap,
  .action-clipboard-panel-bar-foreground--export-expanded > .action-clipboard-progress {
    top: calc(var(--action-clipboard-island-height) / 2);
  }
  .action-clipboard-panel-folder-wrap,
  .action-clipboard-progress {
    display: grid;
    width: clamp(24px, 2.4vw, 31px);
    aspect-ratio: 1;
    place-items: center;
  }
  .action-clipboard-panel-folder-wrap { border: 0; }
  .action-clipboard-panel-folder,
  .action-clipboard-panel-pin,
  .action-clipboard-panel-share,
  .action-clipboard-panel-voice,
  .action-clipboard-panel-scan,
  .action-clipboard-panel-scan-view,
  .action-clipboard-panel-clipboard,
  .action-clipboard-panel-icloud,
  .action-clipboard-panel-export { width: clamp(18px, 1.9vw, 24px); height: clamp(18px, 1.9vw, 24px); }
  .action-clipboard-panel-export { width: clamp(16px, 1.55vw, 20px); height: clamp(16px, 1.55vw, 20px); }
  .action-clipboard-voice-audio {
    position: absolute;
    top: calc(var(--action-clipboard-island-height) / 2);
    right: var(--action-clipboard-island-inline-padding);
    display: grid;
    width: clamp(24px, 2.4vw, 31px);
    aspect-ratio: 1;
    place-items: center;
    transform: translateY(-50%);
    color: #737373;
  }
  .action-clipboard-voice-waveform {
    display: flex;
    width: clamp(18px, 1.9vw, 24px);
    height: clamp(18px, 1.9vw, 24px);
    align-items: center;
    justify-content: space-between;
  }
  .action-clipboard-voice-waveform i {
    display: block;
    width: 2px;
    flex: 0 0 2px;
    border-radius: 999px;
    background: currentColor;
    transform-origin: center;
  }
  .action-clipboard-scan-view {
    position: absolute;
    top: calc(var(--action-clipboard-island-height) / 2);
    right: var(--action-clipboard-island-inline-padding);
    display: grid;
    width: clamp(24px, 2.4vw, 31px);
    aspect-ratio: 1;
    place-items: center;
    color: #737373;
    transform: translateY(-50%);
  }
  .action-clipboard-scan-view svg { display: block; }
  .action-clipboard-clipboard-chevron {
    position: absolute;
    top: 0;
    right: calc(var(--action-clipboard-island-inline-padding) + clamp(3px, .45vw, 6px));
    bottom: 0;
    display: grid;
    width: clamp(17px, 1.7vw, 22px);
    height: auto;
    place-items: center;
    color: #737373;
    transition: color .3s ease;
  }
  .action-clipboard-clipboard-chevron-track {
    position: absolute;
    inset: 0;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    line-height: 0;
    -webkit-mask-image: linear-gradient(to top, transparent 0%, #000 30%, #000 68%, transparent 100%);
    mask-image: linear-gradient(to top, transparent 0%, #000 30%, #000 68%, transparent 100%);
  }
  .action-clipboard-clipboard-chevron-stack {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 0;
    transform: translateY(0);
    animation: action-clipboard-clipboard-arrows-up 1.05s linear infinite;
    animation-play-state: paused;
  }
  .action-clipboard-clipboard-chevron-arrow {
    display: block;
    width: 100%;
    height: clamp(10px, 1vw, 13px);
    flex: 0 0 clamp(10px, 1vw, 13px);
  }
  @keyframes action-clipboard-clipboard-arrows-up {
    from { transform: translateY(0); }
    to { transform: translateY(calc(clamp(10px, 1vw, 13px) * -1)); }
  }
  .action-clipboard-panel-bar-foreground--clipboard-active .action-clipboard-clipboard-chevron-stack { animation-play-state: running; }
  .action-clipboard-panel-bar-foreground--clipboard-active .action-clipboard-clipboard-chevron { color: #fff; }
  .action-clipboard-icloud-progress {
    position: absolute;
    top: calc(var(--action-clipboard-island-height) / 2);
    right: var(--action-clipboard-island-inline-padding);
    display: grid;
    width: clamp(24px, 2.4vw, 31px);
    aspect-ratio: 1;
    place-items: center;
    transform: translateY(-50%);
    transition: opacity .24s ease, transform .3s cubic-bezier(.22, 1, .36, 1);
  }
  .action-clipboard-icloud-refresh-wrap {
    position: absolute;
    top: calc(var(--action-clipboard-island-height) / 2);
    right: var(--action-clipboard-island-inline-padding);
    display: grid;
    width: clamp(24px, 2.4vw, 31px);
    aspect-ratio: 1;
    place-items: center;
    color: #737373;
    opacity: 0;
    transform: translateY(-50%) scale(.65);
    transition: opacity .24s ease, color .24s ease, transform .32s cubic-bezier(.22, 1, .36, 1);
  }
  .action-clipboard-icloud-refresh-wrap svg { width: clamp(16px, 1.65vw, 21px); height: clamp(16px, 1.65vw, 21px); }
  .action-clipboard-panel-bar-foreground--icloud-syncing .action-clipboard-icloud-progress {
    opacity: 0;
    transform: translateY(-50%) scale(.6);
  }
  .action-clipboard-panel-bar-foreground--icloud-syncing .action-clipboard-icloud-refresh-wrap {
    opacity: 1;
    color: #fff;
    transform: translateY(-50%) scale(1);
  }
  .action-clipboard-panel-bar-foreground--icloud-syncing .action-clipboard-icloud-refresh-wrap svg {
    animation: action-clipboard-icloud-refresh-spin 1.15s linear infinite;
  }
  @keyframes action-clipboard-icloud-refresh-spin {
    to { transform: rotate(-360deg); }
  }
  @media (prefers-reduced-motion: no-preference) {
    .action-clipboard-panel--voice .action-clipboard-mockup { visibility: hidden; }
  }
  .action-clipboard-panel-pin {
    color: #f97316;
    fill: none;
    stroke: url(#action-clipboard-pin-gradient);
  }
  .action-clipboard-panel-pin path { stroke: url(#action-clipboard-pin-gradient); }
  .action-clipboard-panel-pin path:last-child { fill: url(#action-clipboard-pin-gradient); }
  .action-clipboard-progress {
    position: relative;
    border: 1px solid rgba(21, 21, 21, .1);
    color: #a3a3a3;
    font-size: clamp(15px, 1.8vw, 18px);
    font-weight: 650;
    line-height: 1;
  }
  .action-clipboard-progress-stack {
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 100%;
    height: var(--action-clipboard-island-height);
    overflow: visible;
    transform: translateY(-50%);
  }
  .action-clipboard-progress-reel {
    display: flex;
    width: 100%;
    height: 600%;
    flex-direction: column;
    transform: translate3d(0, calc(var(--action-clipboard-progress-index) * -16.6667%), 0);
    transition: transform var(--action-clipboard-progress-duration, .32s) cubic-bezier(.22, .8, .28, 1);
    backface-visibility: hidden;
    will-change: transform;
  }
  .action-clipboard-progress-value {
    position: relative;
    width: 100%;
    flex: 0 0 16.6667%;
    display: grid;
    place-items: center;
  }
  .action-clipboard-share-socials {
    position: absolute;
    right: var(--action-clipboard-share-expanded-padding, clamp(12px, 1.4vw, 18px));
    bottom: clamp(8px, 1vw, 12px);
    left: var(--action-clipboard-share-expanded-padding, clamp(12px, 1.4vw, 18px));
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(7px, .9vw, 12px);
    opacity: 0;
    filter: blur(8px);
    transform: translateY(8px);
    transition: opacity .34s ease, filter .42s ease, transform .46s cubic-bezier(.22, 1, .36, 1);
  }
  .action-clipboard-panel-bar-foreground--share-expanded .action-clipboard-share-socials {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
    transition-delay: .24s;
  }
  .action-clipboard-share-socials > span {
    display: grid;
    width: clamp(24px, 2.5vw, 34px);
    aspect-ratio: 1;
    flex: 0 0 auto;
    place-items: center;
    border: 1px solid rgba(255, 255, 255, .18);
    border-radius: 50%;
    background: #fff;
    color: #151515;
  }
  .action-clipboard-share-socials svg {
    width: 48%;
    height: 48%;
  }
  .action-clipboard-share-socials .action-clipboard-share-social-mark,
  .action-clipboard-share-socials .action-clipboard-share-social-mark path {
    fill: currentColor;
    stroke: none;
  }
  .action-clipboard-share-socials > span:nth-child(4) .action-clipboard-share-social-mark { transform: scale(1.15); }

  .action-clipboard-export-formats {
    position: absolute;
    right: clamp(9px, 1vw, 12px);
    bottom: clamp(8px, 1vw, 12px);
    left: clamp(9px, 1vw, 12px);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(7px, .9vw, 12px);
    opacity: 0;
    filter: blur(8px);
    transform: translateY(8px);
    transition: opacity .34s ease, filter .42s ease, transform .46s cubic-bezier(.22, 1, .36, 1);
  }
  .action-clipboard-panel-bar-foreground--export-expanded .action-clipboard-export-formats {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
    transition-delay: .24s;
  }
  .action-clipboard-panel-bar-foreground--export-expanded > .action-clipboard-progress .action-clipboard-progress-stack {
    overflow: hidden;
  }
  .action-clipboard-export-formats > span {
    display: flex;
    width: clamp(94px, 10.5vw, 144px);
    height: clamp(25px, 2.5vw, 34px);
    flex: 1 1 0;
    min-width: 0;
    align-items: center;
    justify-content: center;
    gap: clamp(6px, .7vw, 9px);
    border: 1px solid rgba(21, 21, 21, .08);
    border-radius: 999px;
    background: #fff;
    box-shadow: 0 4px 10px rgba(21, 21, 21, .12);
    color: #151515;
    opacity: 0;
    filter: blur(8px);
    transform: translateY(8px) scale(.86);
    transition: opacity .28s ease, filter .36s ease, transform .42s cubic-bezier(.22, 1, .36, 1);
  }
  .action-clipboard-export-formats > span.action-clipboard-export-format--visible {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0) scale(1);
  }
  .action-clipboard-export-formats svg {
    width: clamp(14px, 1.45vw, 19px);
    height: clamp(14px, 1.45vw, 19px);
    flex: 0 0 auto;
  }
  .action-clipboard-export-formats strong {
    font-size: clamp(10px, 1vw, 13px);
    font-weight: 720;
    letter-spacing: .02em;
    line-height: 1;
  }

  .action-clipboard-panel-content {
    display: grid;
    width: min(48%, 172px);
    max-width: 100%;
    height: auto;
    flex: 0 0 auto;
    min-height: 0;
    aspect-ratio: 1;
    margin-block: auto;
    place-items: center;
  }

  .action-clipboard-mockup {
    position: relative;
    display: flex;
    width: 100%;
    max-width: 100%;
    height: auto;
    padding: clamp(17px, 2.1vw, 28px);
    overflow: hidden;
    box-sizing: border-box;
    flex-direction: column;
    align-items: flex-start;
    gap: clamp(8px, 1vw, 12px);
    aspect-ratio: 1 / 1;
    border: 1px solid rgba(21, 21, 21, .08);
    border-radius: clamp(16px, 1.8vw, 24px);
    background: #f4f4f4;
    box-shadow: 0 16px 30px rgba(21, 21, 21, .1);
  }
  .action-clipboard-mockup-check {
    position: absolute;
    z-index: 2;
    top: clamp(5px, .8vw, 9px);
    right: clamp(5px, .8vw, 9px);
    display: grid;
    width: clamp(14px, 1.5vw, 20px);
    aspect-ratio: 1;
    place-items: center;
    border-radius: 50%;
    background: #3478f6;
    color: #fff;
    opacity: 0;
    transform: scale(.45);
    box-shadow: 0 3px 8px rgba(52, 120, 246, .24);
  }
  .action-clipboard-mockup-check svg { width: 65%; height: 65%; }
  .action-clipboard-voice-check {
    background: #22c55e;
    box-shadow: 0 3px 8px rgba(34, 197, 94, .28);
  }
  .action-clipboard-scan-check {
    background: #22c55e;
    box-shadow: 0 3px 8px rgba(34, 197, 94, .28);
  }
  .action-clipboard-mockup-pin {
    --action-clipboard-pin-badge-height: clamp(14px, 1.5vw, 20px);
    --action-clipboard-pin-badge-content-size: clamp(9px, .85vw, 12px);
    position: absolute;
    z-index: 2;
    top: clamp(5px, .8vw, 9px);
    right: clamp(5px, .8vw, 9px);
    display: inline-flex;
    width: calc(var(--action-clipboard-pin-badge-height) * 1.75);
    height: var(--action-clipboard-pin-badge-height);
    align-items: center;
    justify-content: center;
    padding: 0;
    box-sizing: border-box;
    border-radius: calc(var(--action-clipboard-pin-badge-height) / 2);
    background: #f97316;
    color: #fff;
    font-size: var(--action-clipboard-pin-badge-content-size);
    font-weight: 800;
    line-height: 1;
    opacity: 0;
    transform: scale(.45);
    transition: opacity .16s ease, transform .22s cubic-bezier(.22, 1, .36, 1);
    box-shadow: 0 3px 8px rgba(249, 115, 22, .28);
  }
  .action-clipboard-mockup-pin--visible { opacity: 1; transform: scale(1); }
  .action-clipboard-mockup-pin:not(.action-clipboard-mockup-pin--visible) {
    transition-delay: .24s;
  }
  .action-clipboard-mockup-pin-content {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .action-clipboard-mockup-pin-icon {
    width: var(--action-clipboard-pin-badge-content-size);
    height: var(--action-clipboard-pin-badge-content-size);
    flex: 0 0 auto;
    color: #fff;
    fill: #fff;
    stroke: #fff;
    stroke-width: 2.8;
  }
  .action-clipboard-mockup-pin-number {
    display: block;
    width: 0;
    max-width: 0;
    margin-left: 0;
    overflow: hidden;
    opacity: 0;
    transform: translateX(-4px);
    transition:
      width .24s cubic-bezier(.22, 1, .36, 1),
      max-width .24s cubic-bezier(.22, 1, .36, 1),
      margin-left .24s cubic-bezier(.22, 1, .36, 1),
      opacity .16s ease,
      transform .24s cubic-bezier(.22, 1, .36, 1);
  }
  .action-clipboard-mockup-pin--visible .action-clipboard-mockup-pin-number {
    width: 1ch;
    max-width: 1ch;
    margin-left: 3px;
    opacity: 1;
    transform: translateX(0);
    transition-delay: .24s;
  }
  .action-clipboard-mockup--text { padding: clamp(12px, 1.5vw, 20px); }
  .action-clipboard-mockup--text { background: #f4f4f4; }
  .action-clipboard-mockup--link { --action-clipboard-link-content-padding: clamp(10px, .8vw, 14px); padding: 0; gap: 0; }

  .action-clipboard-text-title,
  .action-clipboard-text-lines i,
  .action-clipboard-link-title,
  .action-clipboard-link-url,
  .action-clipboard-color-title,
  .action-clipboard-color-name { display: block; border-radius: 999px; }
  .action-clipboard-text-title { width: 66%; height: clamp(8px, .8vw, 12px); margin-bottom: 7%; background: #cfcfcf; }
  .action-clipboard-text-lines { display: grid; width: 100%; gap: 13%; }
  .action-clipboard-text-lines i { width: 100%; height: clamp(5px, .6vw, 8px); background: #e0e0e0; }
  .action-clipboard-text-lines i:nth-child(2) { width: 82%; }
  .action-clipboard-text-lines i:nth-child(3) { width: 91%; }
  .action-clipboard-text-lines i:nth-child(4) { width: 70%; }
  .action-clipboard-text-lines i:nth-child(5) { width: 58%; }
  .action-clipboard-text-lines i:nth-child(6) { width: 76%; }

  .action-clipboard-link-image,
  .action-clipboard-image-placeholder {
    position: relative;
    display: grid;
    width: 100%;
    height: 51%;
    place-items: center;
    overflow: hidden;
    border-radius: clamp(11px, 1.3vw, 16px);
    background: #ebebeb;
  }
  .action-clipboard-link-image { width: calc(100% + 2px); height: 70%; flex: 0 0 70%; margin: 0 0 0 -1px; border-radius: clamp(16px, 1.8vw, 24px) clamp(16px, 1.8vw, 24px) 0 0; background: #ebebeb; }
  .action-clipboard-link-image-icon { display: block; width: 100%; height: 100%; }
  .action-clipboard-link-meta {
    display: flex;
    width: 100%;
    min-height: 0;
    flex: 1 1 auto;
    flex-direction: column;
    align-items: flex-start;
    gap: clamp(8px, .75vw, 12px);
    padding: var(--action-clipboard-link-content-padding) clamp(12px, 1.25vw, 18px) var(--action-clipboard-link-content-padding);
    box-sizing: border-box;
  }
  .action-clipboard-link-title { width: 66%; height: clamp(8px, .8vw, 12px); flex: 0 0 auto; background: #cfcfcf; }
  .action-clipboard-link-url { width: 45%; height: 6%; flex: 0 0 auto; background: #e0e0e0; }

  .action-clipboard-mockup--color { align-items: center; justify-content: center; background: #f4f4f4; }
  .action-clipboard-color-title { width: 44%; height: clamp(5px, .6vw, 8px); background: #e0e0e0; }
  .action-clipboard-color-name { width: 66%; height: clamp(8px, .8vw, 12px); background: #cfcfcf; }
  .action-clipboard-mockup--image { padding: 0; background: #ebebeb; }
  .action-clipboard-mockup--image .action-clipboard-image-placeholder {
    position: relative;
    display: grid;
    width: 100%;
    height: 100%;
    margin: 0;
    place-items: center;
    border-radius: inherit;
    background: #ebebeb;
  }
  .action-clipboard-mockup--image .action-clipboard-image-icon {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    /* Keep the icon inside its square while filling the lower-right edge. */
    transform: scale(1.36);
  }
  .action-clipboard-mockup--image .action-clipboard-image-placeholder i {
    position: absolute;
    display: block;
    border-radius: 999px;
    background: #a9a9a9;
  }
  .action-clipboard-mockup--image .action-clipboard-image-placeholder i:first-child {
    top: 24%;
    left: 24%;
    width: 18%;
    aspect-ratio: 1;
    transform: none;
  }
  .action-clipboard-mockup--image .action-clipboard-image-placeholder i:last-child {
    right: 24px;
    bottom: 0;
    left: auto;
    width: 100%;
    height: 48%;
    border-radius: 0 0 clamp(20px, 2.4vw, 30px) 0;
    clip-path: polygon(0 100%, 78% 21%, 80% 19%, 82% 17%, 84% 15%, 86% 14%, 88% 14%, 90% 15%, 92% 17%, 94% 19%, 100% 56%, 100% 100%);
    background: #a9a9a9;
  }

  .action-clipboard-mockup--sticker {
    display: grid;
    place-items: center;
    background: #f4f4f4;
  }
  .action-clipboard-sticker-shape {
    display: block;
    width: 100%;
    height: 100%;
  }

  .action-clipboard-panel-content--group {
    width: 100%;
    height: auto;
    aspect-ratio: auto;
  }
  .action-clipboard-panel-content--scan {
    width: min(100%, 190px);
    height: clamp(164px, 19vw, 220px);
    aspect-ratio: auto;
  }
  .action-clipboard-scan-stage {
    position: relative;
    display: grid;
    width: 100%;
    height: 100%;
    place-items: center;
  }
  .action-clipboard-scan-phone {
    position: relative;
    width: clamp(74px, 8.8vw, 104px);
    height: clamp(128px, 15.2vw, 174px);
    overflow: hidden;
    border: 3px solid #151515;
    border-radius: clamp(16px, 2vw, 23px);
    background: #151515;
    box-shadow: 0 14px 24px rgba(21, 21, 21, .2);
  }
  .action-clipboard-scan-screen {
    position: absolute;
    inset: 4px;
    border-radius: clamp(12px, 1.6vw, 18px);
    background: linear-gradient(145deg, #505050 0%, #2a2a2a 48%, #171717 100%);
  }
  .action-clipboard-scan-speaker {
    position: absolute;
    top: 7px;
    left: 50%;
    width: 28%;
    height: 3px;
    border-radius: 999px;
    background: rgba(255, 255, 255, .36);
    transform: translateX(-50%);
  }
  .action-clipboard-scan-search {
    position: absolute;
    top: 50%;
    left: 50%;
    display: grid;
    width: clamp(29px, 3.6vw, 43px);
    aspect-ratio: 1;
    margin: calc(clamp(29px, 3.6vw, 43px) / -2);
    place-items: center;
    border-radius: 34%;
    background: #e4e4e4;
    box-shadow: 0 6px 12px rgba(0, 0, 0, .22);
    color: #6b7280;
  }
  .action-clipboard-scan-search-icon { width: 66%; height: 66%; }
  .action-clipboard-scan-text-stage {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    pointer-events: none;
  }
  .action-clipboard-scan-text-stage > .action-clipboard-mockup {
    width: clamp(56px, 8vw, 96px);
    height: auto;
    flex: 0 0 auto;
    padding: clamp(4px, 1vw, 10px);
    gap: clamp(3px, .8vw, 8px);
    border-radius: clamp(8px, 1.3vw, 16px);
    box-shadow: none;
  }
  .action-clipboard-scan-text-stage .action-clipboard-text-title {
    height: clamp(4px, .8vw, 8px);
    margin-bottom: 5%;
  }
  .action-clipboard-scan-text-stage .action-clipboard-text-lines { gap: clamp(2px, .5vw, 5px); }
  .action-clipboard-scan-text-stage .action-clipboard-text-lines i { height: clamp(2px, .45vw, 4px); }
  .action-clipboard-scan-text-stage .action-clipboard-text-lines i:nth-child(2) { width: 82%; }
  .action-clipboard-scan-text-stage .action-clipboard-text-lines i:nth-child(3) { width: 91%; }
  .action-clipboard-scan-text-stage .action-clipboard-text-lines i:nth-child(4) { width: 70%; }
  .action-clipboard-scan-text-stage .action-clipboard-text-lines i:nth-child(5) { width: 58%; }
  .action-clipboard-scan-text-stage .action-clipboard-text-lines i:nth-child(6) { width: 76%; }
  @media (prefers-reduced-motion: no-preference) {
    .action-clipboard-panel--scan .action-clipboard-mockup { visibility: hidden; }
  }
  .action-clipboard-panel-content--clipboard {
    width: 100%;
    height: clamp(72px, 9vw, 110px);
    aspect-ratio: auto;
  }
  .action-clipboard-clipboard-stage {
    --action-clipboard-group-item-size: clamp(56px, 8vw, 96px);
    --action-clipboard-group-item-gap: clamp(5px, 1vw, 10px);
    position: relative;
    display: grid;
    width: 100%;
    height: 100%;
    place-items: center;
  }
  .action-clipboard-clipboard-set {
    display: flex;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: var(--action-clipboard-group-item-gap);
    pointer-events: none;
  }
  .action-clipboard-clipboard-social-card,
  .action-clipboard-clipboard-items > .action-clipboard-mockup {
    position: relative;
    width: clamp(56px, 8vw, 96px);
    height: clamp(56px, 8vw, 96px);
    min-width: 0;
    min-height: 0;
    flex: 0 0 clamp(56px, 8vw, 96px);
    box-sizing: border-box;
    border: 1px solid rgba(21, 21, 21, .08);
    border-radius: clamp(8px, 1.3vw, 16px);
    box-shadow: 0 8px 18px rgba(21, 21, 21, .08);
  }
  .action-clipboard-clipboard-social-card {
    display: grid;
    place-items: center;
    background: #f4f4f4;
    color: #151515;
  }
  .action-clipboard-clipboard-social-mark {
    width: 30%;
    height: 30%;
  }
  .action-clipboard-clipboard-social-mark path { fill: currentColor; stroke: none; }
  .action-clipboard-clipboard-status {
    position: absolute;
    top: clamp(5px, .8vw, 9px);
    right: clamp(5px, .8vw, 9px);
    display: grid;
    width: clamp(16px, 1.7vw, 22px);
    aspect-ratio: 1;
    place-items: center;
    overflow: hidden;
    border-radius: 50%;
    background: #3478f6;
    color: #fff;
    opacity: 0;
    transform: scale(.45);
    transition: opacity .2s ease, transform .28s cubic-bezier(.22, 1, .36, 1), background-color .24s ease;
  }
  .action-clipboard-clipboard-status--copy,
  .action-clipboard-clipboard-status--check { opacity: 1; transform: scale(1); }
  .action-clipboard-clipboard-status--check { background: #22c55e; }
  .action-clipboard-clipboard-status > span {
    position: absolute;
    display: grid;
    inset: 0;
    place-items: center;
    transition: opacity .18s ease, transform .24s cubic-bezier(.22, 1, .36, 1);
  }
  .action-clipboard-clipboard-status > span svg { width: 65%; height: 65%; }
  .action-clipboard-panel--clipboard .action-clipboard-clipboard-copy-icon svg { width: 50%; height: 50%; fill: currentColor; }
  .action-clipboard-clipboard-copy-icon { opacity: 0; transform: scale(.5); }
  .action-clipboard-clipboard-status--copy .action-clipboard-clipboard-copy-icon { opacity: 1; transform: scale(1); }
  .action-clipboard-clipboard-check-icon { opacity: 0; transform: scale(.5); }
  .action-clipboard-clipboard-status--check .action-clipboard-clipboard-copy-icon { opacity: 0; transform: scale(.5); }
  .action-clipboard-clipboard-status--check .action-clipboard-clipboard-check-icon { opacity: 1; transform: scale(1.08); }
  .action-clipboard-clipboard-set:not(.action-clipboard-clipboard-set--visible) { visibility: hidden; }
  .action-clipboard-clipboard-stage--social .action-clipboard-clipboard-socials,
  .action-clipboard-clipboard-stage--social-returning .action-clipboard-clipboard-socials,
  .action-clipboard-clipboard-stage--content .action-clipboard-clipboard-items,
  .action-clipboard-clipboard-stage--content-returning .action-clipboard-clipboard-items { visibility: visible; }
  .action-clipboard-clipboard-stage--social .action-clipboard-clipboard-social-card,
  .action-clipboard-clipboard-stage--content .action-clipboard-clipboard-items > .action-clipboard-mockup {
    --action-clipboard-fly-y: clamp(-175px, -12vw, -63px);
    --action-clipboard-fly-delay: 0s;
    animation: action-clipboard-item-return 620ms cubic-bezier(.12, .8, .25, 1) var(--action-clipboard-fly-delay) both;
  }
  .action-clipboard-clipboard-stage--social-returning .action-clipboard-clipboard-social-card,
  .action-clipboard-clipboard-stage--content-returning .action-clipboard-clipboard-items > .action-clipboard-mockup {
    --action-clipboard-fly-y: clamp(-175px, -12vw, -63px);
    --action-clipboard-fly-delay: 0s;
    animation: action-clipboard-item-fly 600ms cubic-bezier(.22, .8, .28, 1) var(--action-clipboard-fly-delay) both;
    pointer-events: none;
  }
  .action-clipboard-clipboard-social-card:nth-child(1),
  .action-clipboard-clipboard-items > .action-clipboard-mockup:nth-child(1) { --action-clipboard-fly-x: calc((var(--action-clipboard-group-item-size) + var(--action-clipboard-group-item-gap)) * 2); --action-clipboard-fly-delay: .16s; --action-clipboard-return-delay: 0s; }
  .action-clipboard-clipboard-social-card:nth-child(2),
  .action-clipboard-clipboard-items > .action-clipboard-mockup:nth-child(2) { --action-clipboard-fly-x: calc(var(--action-clipboard-group-item-size) + var(--action-clipboard-group-item-gap)); --action-clipboard-fly-delay: .08s; --action-clipboard-return-delay: .1s; }
  .action-clipboard-clipboard-social-card:nth-child(3),
  .action-clipboard-clipboard-items > .action-clipboard-mockup:nth-child(3) { --action-clipboard-fly-x: 0px; --action-clipboard-fly-delay: .2s; --action-clipboard-return-delay: .2s; }
  .action-clipboard-clipboard-social-card:nth-child(4),
  .action-clipboard-clipboard-items > .action-clipboard-mockup:nth-child(4) { --action-clipboard-fly-x: calc((var(--action-clipboard-group-item-size) + var(--action-clipboard-group-item-gap)) * -1); --action-clipboard-fly-delay: 0s; --action-clipboard-return-delay: .3s; }
  .action-clipboard-clipboard-social-card:nth-child(5),
  .action-clipboard-clipboard-items > .action-clipboard-mockup:nth-child(5) { --action-clipboard-fly-x: calc((var(--action-clipboard-group-item-size) + var(--action-clipboard-group-item-gap)) * -2); --action-clipboard-fly-delay: .12s; --action-clipboard-return-delay: .4s; }
  .action-clipboard-clipboard-stage--social-returning .action-clipboard-clipboard-social-card,
  .action-clipboard-clipboard-stage--content-returning .action-clipboard-clipboard-items > .action-clipboard-mockup {
    animation-delay: var(--action-clipboard-return-delay);
  }
  .action-clipboard-clipboard-items > .action-clipboard-mockup {
    padding: clamp(4px, 1vw, 10px);
    gap: clamp(3px, .8vw, 8px);
    border-radius: clamp(8px, 1.3vw, 16px);
    box-shadow: none;
  }
  .action-clipboard-clipboard-items > .action-clipboard-mockup--link { --action-clipboard-link-content-padding: clamp(1px, .2vw, 2px); display: flex; gap: 0; padding: 0; }
  .action-clipboard-clipboard-items > .action-clipboard-mockup--image { padding: 0; }
  .action-clipboard-clipboard-items > .action-clipboard-mockup--text { padding: clamp(4px, 1vw, 10px); }
  .action-clipboard-clipboard-items .action-clipboard-text-title { height: clamp(4px, .8vw, 8px); margin-bottom: 5%; }
  .action-clipboard-clipboard-items .action-clipboard-text-lines { gap: clamp(2px, .5vw, 5px); }
  .action-clipboard-clipboard-items .action-clipboard-text-lines i { height: clamp(2px, .45vw, 4px); }
  .action-clipboard-clipboard-items .action-clipboard-link-image { height: 65%; flex: 0 0 65%; margin: 0 0 0 -1px; border-radius: clamp(8px, 1.2vw, 14px) clamp(8px, 1.2vw, 14px) 0 0; }
  .action-clipboard-clipboard-items .action-clipboard-link-meta { align-items: flex-start; justify-content: center; gap: clamp(3px, .45vw, 5px); padding: var(--action-clipboard-link-content-padding) clamp(5px, .8vw, 8px) var(--action-clipboard-link-content-padding); }
  .action-clipboard-clipboard-items .action-clipboard-link-title { width: 76%; height: clamp(3px, .6vw, 6px); margin: 0; }
  .action-clipboard-clipboard-items .action-clipboard-link-url { width: 58%; height: clamp(2px, .45vw, 4px); margin: 0; }
  .action-clipboard-clipboard-social-badge {
    position: absolute;
    z-index: 2;
    top: clamp(5px, .8vw, 9px);
    right: clamp(5px, .8vw, 9px);
    display: grid;
    width: clamp(16px, 1.7vw, 22px);
    aspect-ratio: 1;
    place-items: center;
    border-radius: 50%;
    background: #151515;
    color: #fff;
    box-shadow: 0 3px 8px rgba(21, 21, 21, .22);
  }
  .action-clipboard-clipboard-social-badge svg { width: 62%; height: 62%; }
  .action-clipboard-clipboard-social-badge path { fill: currentColor; stroke: none; }
  .action-clipboard-panel-title {
    width: 100%;
    margin-top: clamp(12px, 1.5vw, 20px);
    text-align: center;
    font-size: clamp(20px, 2.2vw, 32px);
    font-weight: 800;
    line-height: 1;
  }
  .action-clipboard-panel-description {
    width: 100%;
    box-sizing: border-box;
    margin-top: clamp(7px, .8vw, 11px);
    color: rgba(21, 21, 21, .58);
    text-align: center;
    font-size: clamp(12px, 1.1vw, 16px);
    line-height: 1.35;
  }
  @media (min-width: 1200px) {
    .action-clipboard-panel:nth-last-child(2):nth-child(odd),
    .action-clipboard-panel:last-child { border-bottom: 0; }
  }
  @media (max-width: 1199px) {
    padding-block: clamp(256px, 30vw, 360px);
  }
  .action-clipboard-group-mockups {
    --action-clipboard-group-item-size: clamp(56px, 8vw, 96px);
    --action-clipboard-group-item-gap: clamp(5px, 1vw, 10px);
    --action-clipboard-pin-step: calc(var(--action-clipboard-group-item-size) + var(--action-clipboard-group-item-gap));
    --action-clipboard-fly-y: clamp(-175px, -12vw, -63px);
    display: flex;
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 100%;
    gap: var(--action-clipboard-group-item-gap);
    justify-content: center;
    overflow: visible;
    padding: 2px;
    box-sizing: border-box;
    scrollbar-width: none;
  }
  .action-clipboard-group-mockups::-webkit-scrollbar { display: none; }
  .action-clipboard-group-mockups--collecting > .action-clipboard-mockup {
    --action-clipboard-item-delay: 0s;
    --action-clipboard-fly-x: 0px;
    --action-clipboard-fly-y: clamp(-175px, -12vw, -63px);
    --action-clipboard-fly-delay: 0s;
    --action-clipboard-return-delay: 0s;
    animation: action-clipboard-item-collect 1800ms cubic-bezier(.22, .8, .28, 1) var(--action-clipboard-item-delay) both;
  }
  .action-clipboard-group-mockups--repeat > .action-clipboard-mockup {
    animation: none;
    opacity: 1;
    filter: blur(0);
    transform: translate(0, 0) scale(1);
  }
  .action-clipboard-group-mockups--collecting > .action-clipboard-mockup .action-clipboard-mockup-check {
    animation: action-clipboard-check-pop 1800ms cubic-bezier(.22, .8, .28, 1) var(--action-clipboard-check-delay) both;
  }
  .action-clipboard-group-mockups--collecting > .action-clipboard-mockup .action-clipboard-mockup-check {
    --action-clipboard-check-delay: .9s;
  }
  .action-clipboard-group-mockups--collecting > .action-clipboard-mockup:nth-child(2) { --action-clipboard-item-delay: .28s; }
  .action-clipboard-group-mockups--collecting > .action-clipboard-mockup:nth-child(3) { --action-clipboard-item-delay: .56s; }
  .action-clipboard-group-mockups--collecting > .action-clipboard-mockup:nth-child(4) { --action-clipboard-item-delay: .84s; }
  .action-clipboard-group-mockups--collecting > .action-clipboard-mockup:nth-child(5) { --action-clipboard-item-delay: 1.12s; }
  .action-clipboard-group-mockups--collecting > .action-clipboard-mockup:nth-child(1) { --action-clipboard-fly-x: calc((var(--action-clipboard-group-item-size) + var(--action-clipboard-group-item-gap)) * 2); --action-clipboard-fly-delay: .16s; }
  .action-clipboard-group-mockups--collecting > .action-clipboard-mockup:nth-child(2) { --action-clipboard-fly-x: calc(var(--action-clipboard-group-item-size) + var(--action-clipboard-group-item-gap)); --action-clipboard-fly-delay: .08s; }
  .action-clipboard-group-mockups--collecting > .action-clipboard-mockup:nth-child(3) { --action-clipboard-fly-x: 0px; --action-clipboard-fly-delay: .2s; }
  .action-clipboard-group-mockups--collecting > .action-clipboard-mockup:nth-child(4) { --action-clipboard-fly-x: calc((var(--action-clipboard-group-item-size) + var(--action-clipboard-group-item-gap)) * -1); --action-clipboard-fly-delay: 0s; }
  .action-clipboard-group-mockups--collecting > .action-clipboard-mockup:nth-child(5) { --action-clipboard-fly-x: calc((var(--action-clipboard-group-item-size) + var(--action-clipboard-group-item-gap)) * -2); --action-clipboard-fly-delay: .12s; }
  .action-clipboard-group-mockups--collecting > .action-clipboard-mockup:nth-child(1) { --action-clipboard-return-delay: 0s; }
  .action-clipboard-group-mockups--collecting > .action-clipboard-mockup:nth-child(2) { --action-clipboard-return-delay: .1s; }
  .action-clipboard-group-mockups--collecting > .action-clipboard-mockup:nth-child(3) { --action-clipboard-return-delay: .2s; }
  .action-clipboard-group-mockups--collecting > .action-clipboard-mockup:nth-child(4) { --action-clipboard-return-delay: .3s; }
  .action-clipboard-group-mockups--collecting > .action-clipboard-mockup:nth-child(5) { --action-clipboard-return-delay: .4s; }
  .action-clipboard-group-mockups--collecting > .action-clipboard-mockup:nth-child(2) .action-clipboard-mockup-check { --action-clipboard-check-delay: 1.02s; }
  .action-clipboard-group-mockups--collecting > .action-clipboard-mockup:nth-child(3) .action-clipboard-mockup-check { --action-clipboard-check-delay: 1.14s; }
  .action-clipboard-group-mockups--collecting > .action-clipboard-mockup:nth-child(4) .action-clipboard-mockup-check { --action-clipboard-check-delay: 1.26s; }
  .action-clipboard-group-mockups--collecting > .action-clipboard-mockup:nth-child(5) .action-clipboard-mockup-check { --action-clipboard-check-delay: 1.38s; }
  .action-clipboard-group-mockups--repeat > .action-clipboard-mockup .action-clipboard-mockup-check { --action-clipboard-check-delay: .55s; }
  .action-clipboard-group-mockups--repeat > .action-clipboard-mockup:nth-child(2) .action-clipboard-mockup-check { --action-clipboard-check-delay: .67s; }
  .action-clipboard-group-mockups--repeat > .action-clipboard-mockup:nth-child(3) .action-clipboard-mockup-check { --action-clipboard-check-delay: .79s; }
  .action-clipboard-group-mockups--repeat > .action-clipboard-mockup:nth-child(4) .action-clipboard-mockup-check { --action-clipboard-check-delay: .91s; }
  .action-clipboard-group-mockups--repeat > .action-clipboard-mockup:nth-child(5) .action-clipboard-mockup-check { --action-clipboard-check-delay: 1.03s; }
  .action-clipboard-group-mockups--flying > .action-clipboard-mockup {
    animation: action-clipboard-item-fly 420ms cubic-bezier(.22, .8, .28, 1) var(--action-clipboard-fly-delay) both;
    pointer-events: none;
  }
  .action-clipboard-group-mockups--returning > .action-clipboard-mockup {
    animation: action-clipboard-item-return 400ms cubic-bezier(.12, .8, .25, 1) var(--action-clipboard-return-delay) both;
    pointer-events: none;
  }
  .action-clipboard-group-mockups--returning > .action-clipboard-mockup .action-clipboard-mockup-check {
    animation: none;
    opacity: 0;
    transform: scale(.45);
  }
  .action-clipboard-group-mockups--flying > .action-clipboard-mockup .action-clipboard-mockup-check {
    animation: none;
    opacity: 1;
    transform: scale(1);
  }
  .action-clipboard-group-mockups--share-selecting > .action-clipboard-mockup {
    opacity: 1;
    filter: blur(0);
    transform: translate(0, 0) scale(1);
  }
  .action-clipboard-share-check {
    transition: opacity .18s ease, transform .28s cubic-bezier(.22, 1, .36, 1);
  }
  .action-clipboard-share-check--visible {
    opacity: 1;
    transform: scale(1.08);
  }
  .action-clipboard-group-mockups--share-flying > .action-clipboard-mockup,
  .action-clipboard-group-mockups--share-returning > .action-clipboard-mockup {
    --action-clipboard-fly-y: clamp(-175px, -12vw, -63px);
    --action-clipboard-fly-x: 0px;
    --action-clipboard-fly-delay: 0s;
    --action-clipboard-return-delay: 0s;
    pointer-events: none;
  }
  .action-clipboard-group-mockups--share-flying > .action-clipboard-mockup {
    animation: action-clipboard-item-fly 720ms cubic-bezier(.22, .8, .28, 1) var(--action-clipboard-fly-delay) both;
  }
  .action-clipboard-group-mockups--share-returning > .action-clipboard-mockup {
    animation: action-clipboard-item-return var(--action-clipboard-share-return-duration) cubic-bezier(.12, .8, .25, 1) var(--action-clipboard-return-delay) both;
  }
  .action-clipboard-group-mockups--share-flying > .action-clipboard-mockup:nth-child(1),
  .action-clipboard-group-mockups--share-returning > .action-clipboard-mockup:nth-child(1) {
    --action-clipboard-fly-x: calc((var(--action-clipboard-group-item-size) + var(--action-clipboard-group-item-gap)) * 2);
    --action-clipboard-fly-delay: .16s;
    --action-clipboard-return-delay: 0s;
  }
  .action-clipboard-group-mockups--share-flying > .action-clipboard-mockup:nth-child(2),
  .action-clipboard-group-mockups--share-returning > .action-clipboard-mockup:nth-child(2) {
    --action-clipboard-fly-x: calc(var(--action-clipboard-group-item-size) + var(--action-clipboard-group-item-gap));
    --action-clipboard-fly-delay: .08s;
    --action-clipboard-return-delay: var(--action-clipboard-share-return-step);
  }
  .action-clipboard-group-mockups--share-flying > .action-clipboard-mockup:nth-child(3),
  .action-clipboard-group-mockups--share-returning > .action-clipboard-mockup:nth-child(3) {
    --action-clipboard-fly-x: 0px;
    --action-clipboard-fly-delay: .2s;
    --action-clipboard-return-delay: calc(var(--action-clipboard-share-return-step) * 2);
  }
  .action-clipboard-group-mockups--share-flying > .action-clipboard-mockup:nth-child(4),
  .action-clipboard-group-mockups--share-returning > .action-clipboard-mockup:nth-child(4) {
    --action-clipboard-fly-x: calc((var(--action-clipboard-group-item-size) + var(--action-clipboard-group-item-gap)) * -1);
    --action-clipboard-fly-delay: 0s;
    --action-clipboard-return-delay: calc(var(--action-clipboard-share-return-step) * 3);
  }
  .action-clipboard-group-mockups--share-flying > .action-clipboard-mockup:nth-child(5),
  .action-clipboard-group-mockups--share-returning > .action-clipboard-mockup:nth-child(5) {
    --action-clipboard-fly-x: calc((var(--action-clipboard-group-item-size) + var(--action-clipboard-group-item-gap)) * -2);
    --action-clipboard-fly-delay: .12s;
    --action-clipboard-return-delay: calc(var(--action-clipboard-share-return-step) * 4);
  }
  .action-clipboard-group-mockups--export-selecting > .action-clipboard-mockup {
    opacity: 1;
    filter: blur(0);
    transform: translate(0, 0) scale(1);
  }
  .action-clipboard-export-check {
    transition: opacity .18s ease, transform .28s cubic-bezier(.22, 1, .36, 1);
  }
  .action-clipboard-export-check--visible {
    opacity: 1;
    transform: scale(1.08);
  }
  .action-clipboard-group-mockups--export-flying > .action-clipboard-mockup,
  .action-clipboard-group-mockups--export-returning > .action-clipboard-mockup {
    --action-clipboard-fly-y: clamp(-175px, -12vw, -63px);
    --action-clipboard-fly-x: 0px;
    --action-clipboard-fly-delay: 0s;
    --action-clipboard-return-delay: 0s;
    pointer-events: none;
  }
  .action-clipboard-group-mockups--export-flying > .action-clipboard-mockup {
    animation: action-clipboard-item-fly 420ms cubic-bezier(.22, .8, .28, 1) var(--action-clipboard-fly-delay) both;
  }
  .action-clipboard-group-mockups--export-returning > .action-clipboard-mockup {
    animation: action-clipboard-item-return 400ms cubic-bezier(.12, .8, .25, 1) var(--action-clipboard-return-delay) both;
  }
  .action-clipboard-group-mockups--export-flying > .action-clipboard-mockup:nth-child(1),
  .action-clipboard-group-mockups--export-returning > .action-clipboard-mockup:nth-child(1) {
    --action-clipboard-fly-x: calc(var(--action-clipboard-group-item-size) + var(--action-clipboard-group-item-gap));
    --action-clipboard-fly-delay: .08s;
    --action-clipboard-return-delay: 0s;
  }
  .action-clipboard-group-mockups--export-flying > .action-clipboard-mockup:nth-child(2),
  .action-clipboard-group-mockups--export-returning > .action-clipboard-mockup:nth-child(2) {
    --action-clipboard-fly-x: 0px;
    --action-clipboard-fly-delay: .2s;
    --action-clipboard-return-delay: .1s;
  }
  .action-clipboard-group-mockups--export-flying > .action-clipboard-mockup:nth-child(3),
  .action-clipboard-group-mockups--export-returning > .action-clipboard-mockup:nth-child(3) {
    --action-clipboard-fly-x: calc((var(--action-clipboard-group-item-size) + var(--action-clipboard-group-item-gap)) * -1);
    --action-clipboard-fly-delay: .12s;
    --action-clipboard-return-delay: .2s;
  }
  .action-clipboard-icloud-mockups--idle > .action-clipboard-mockup {
    opacity: 0;
    filter: blur(8px);
    transform: translate(var(--action-clipboard-fly-x), var(--action-clipboard-fly-y)) scale(.16);
  }
  .action-clipboard-icloud-mockups--hidden { visibility: hidden; }
  .action-clipboard-icloud-mockups--hidden > .action-clipboard-mockup {
    animation: none;
    opacity: 0;
    filter: blur(8px);
    transform: translate(var(--action-clipboard-fly-x), var(--action-clipboard-fly-y)) scale(.16);
  }
  .action-clipboard-icloud-mockups--collecting > .action-clipboard-mockup {
    --action-clipboard-item-delay: 0s;
    animation: action-clipboard-item-collect 900ms cubic-bezier(.22, .8, .28, 1) var(--action-clipboard-item-delay) both;
  }
  .action-clipboard-icloud-mockups--collecting > .action-clipboard-mockup:nth-child(2) { --action-clipboard-item-delay: .18s; }
  .action-clipboard-icloud-mockups--collecting > .action-clipboard-mockup:nth-child(3) { --action-clipboard-item-delay: .36s; }
  .action-clipboard-icloud-mockups--collecting > .action-clipboard-mockup:nth-child(4) { --action-clipboard-item-delay: .54s; }
  .action-clipboard-icloud-mockups--collecting > .action-clipboard-mockup:nth-child(5) { --action-clipboard-item-delay: .72s; }
  .action-clipboard-icloud-mockups--repeat:where(.action-clipboard-icloud-mockups--idle, .action-clipboard-icloud-mockups--collecting) > .action-clipboard-mockup {
    animation: none;
    opacity: 1;
    filter: blur(0);
    transform: translate(0, 0) scale(1);
  }
  .action-clipboard-icloud-mockups--flying > .action-clipboard-mockup,
  .action-clipboard-icloud-mockups--returning > .action-clipboard-mockup {
    --action-clipboard-fly-y: clamp(-175px, -12vw, -63px);
    --action-clipboard-fly-delay: 0s;
    --action-clipboard-return-delay: 0s;
    pointer-events: none;
  }
  .action-clipboard-icloud-mockups--flying > .action-clipboard-mockup {
    animation: action-clipboard-item-fly 560ms cubic-bezier(.22, .8, .28, 1) var(--action-clipboard-fly-delay) both;
  }
  .action-clipboard-icloud-mockups--returning > .action-clipboard-mockup {
    animation: action-clipboard-icloud-item-return 520ms cubic-bezier(.12, .8, .25, 1) var(--action-clipboard-return-delay) both;
  }
  .action-clipboard-icloud-mockups--flying > .action-clipboard-mockup:nth-child(1),
  .action-clipboard-icloud-mockups--returning > .action-clipboard-mockup:nth-child(1) {
    --action-clipboard-fly-x: calc((var(--action-clipboard-group-item-size) + var(--action-clipboard-group-item-gap)) * 2);
    --action-clipboard-fly-delay: .16s;
    --action-clipboard-return-delay: 0s;
  }
  .action-clipboard-icloud-mockups--flying > .action-clipboard-mockup:nth-child(2),
  .action-clipboard-icloud-mockups--returning > .action-clipboard-mockup:nth-child(2) {
    --action-clipboard-fly-x: calc(var(--action-clipboard-group-item-size) + var(--action-clipboard-group-item-gap));
    --action-clipboard-fly-delay: .08s;
    --action-clipboard-return-delay: .1s;
  }
  .action-clipboard-icloud-mockups--flying > .action-clipboard-mockup:nth-child(3),
  .action-clipboard-icloud-mockups--returning > .action-clipboard-mockup:nth-child(3) {
    --action-clipboard-fly-x: 0px;
    --action-clipboard-fly-delay: .2s;
    --action-clipboard-return-delay: .2s;
  }
  .action-clipboard-icloud-mockups--flying > .action-clipboard-mockup:nth-child(4),
  .action-clipboard-icloud-mockups--returning > .action-clipboard-mockup:nth-child(4) {
    --action-clipboard-fly-x: calc((var(--action-clipboard-group-item-size) + var(--action-clipboard-group-item-gap)) * -1);
    --action-clipboard-fly-delay: 0s;
    --action-clipboard-return-delay: .3s;
  }
  .action-clipboard-icloud-mockups--flying > .action-clipboard-mockup:nth-child(5),
  .action-clipboard-icloud-mockups--returning > .action-clipboard-mockup:nth-child(5) {
    --action-clipboard-fly-x: calc((var(--action-clipboard-group-item-size) + var(--action-clipboard-group-item-gap)) * -2);
    --action-clipboard-fly-delay: .12s;
    --action-clipboard-return-delay: .4s;
  }
  .action-clipboard-icloud-check {
    transition: opacity .18s ease, transform .28s cubic-bezier(.22, 1, .36, 1);
  }
  .action-clipboard-icloud-check--visible {
    opacity: 1;
    transform: scale(1.08);
  }
  .action-clipboard-share-socials > span {
    opacity: 0;
    filter: blur(8px);
    transform: translateY(8px) scale(.76);
    transition: opacity .28s ease, filter .36s ease, transform .42s cubic-bezier(.22, 1, .36, 1);
  }
  .action-clipboard-share-socials > span.action-clipboard-share-social--visible {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0) scale(1);
  }
  .action-clipboard-share-socials > span:nth-child(4).action-clipboard-share-social--visible .action-clipboard-share-social-mark {
    transform: scale(1.15);
  }
  .action-clipboard-group-mockups--pin-pinning-one > .action-clipboard-mockup,
  .action-clipboard-group-mockups--pin-pinning-one-shifting > .action-clipboard-mockup,
  .action-clipboard-group-mockups--pin-pinning-two-shifting > .action-clipboard-mockup,
  .action-clipboard-group-mockups--pin-returning-two > .action-clipboard-mockup,
  .action-clipboard-group-mockups--pin-returning-two-shifting > .action-clipboard-mockup,
  .action-clipboard-group-mockups--pin-returning-one > .action-clipboard-mockup,
  .action-clipboard-group-mockups--pin-returning-one-shifting > .action-clipboard-mockup {
    pointer-events: none;
  }
  .action-clipboard-group-mockups--pin-pinning-one-shifting > .action-clipboard-mockup,
  .action-clipboard-group-mockups--pin-pinning-two-shifting > .action-clipboard-mockup,
  .action-clipboard-group-mockups--pin-returning-two-shifting > .action-clipboard-mockup,
  .action-clipboard-group-mockups--pin-returning-one-shifting > .action-clipboard-mockup {
    animation: action-clipboard-pin-shift 400ms cubic-bezier(.24, .8, .28, 1) both;
  }
  .action-clipboard-group-mockups--pin-returning-two-shifting > .action-clipboard-mockup,
  .action-clipboard-group-mockups--pin-returning-one-shifting > .action-clipboard-mockup {
    animation-timing-function: cubic-bezier(.12, .8, .25, 1);
  }
  .action-clipboard-group-mockups--pin-returning-two-shifting > .action-clipboard-mockup {
    animation-duration: 400ms;
  }

  .action-clipboard-group-mockups--pin-pinning-one > .action-clipboard-mockup,
  .action-clipboard-group-mockups--pin-pinning-one-shifting > .action-clipboard-mockup,
  .action-clipboard-group-mockups--pin-returning-one > .action-clipboard-mockup {
    --action-clipboard-pin-from-x: 0px;
    --action-clipboard-pin-to-x: 0px;
  }
  .action-clipboard-group-mockups--pin-pinning-one > .action-clipboard-mockup:nth-child(1),
  .action-clipboard-group-mockups--pin-pinning-one > .action-clipboard-mockup:nth-child(2),
  .action-clipboard-group-mockups--pin-pinning-one-shifting > .action-clipboard-mockup:nth-child(1),
  .action-clipboard-group-mockups--pin-pinning-one-shifting > .action-clipboard-mockup:nth-child(2) {
    --action-clipboard-pin-to-x: var(--action-clipboard-pin-step);
  }
  .action-clipboard-group-mockups--pin-pinning-one > .action-clipboard-mockup:nth-child(3),
  .action-clipboard-group-mockups--pin-pinning-one-shifting > .action-clipboard-mockup:nth-child(3) {
    --action-clipboard-pin-to-x: calc(var(--action-clipboard-pin-step) * -2);
  }

  .action-clipboard-group-mockups--pin-pinning-two > .action-clipboard-mockup,
  .action-clipboard-group-mockups--pin-returning-two > .action-clipboard-mockup {
    --action-clipboard-pin-hold-x: 0px;
    animation: none;
    transform: translate3d(var(--action-clipboard-pin-hold-x), 0, 0);
  }
  .action-clipboard-group-mockups--pin-pinning-two > .action-clipboard-mockup:nth-child(1),
  .action-clipboard-group-mockups--pin-pinning-two > .action-clipboard-mockup:nth-child(2) {
    --action-clipboard-pin-hold-x: var(--action-clipboard-pin-step);
  }
  .action-clipboard-group-mockups--pin-returning-two > .action-clipboard-mockup:nth-child(1),
  .action-clipboard-group-mockups--pin-returning-two > .action-clipboard-mockup:nth-child(2) {
    --action-clipboard-pin-hold-x: calc(var(--action-clipboard-pin-step) * 2);
  }
  .action-clipboard-group-mockups--pin-pinning-two > .action-clipboard-mockup:nth-child(3) {
    --action-clipboard-pin-hold-x: calc(var(--action-clipboard-pin-step) * -2);
  }
  .action-clipboard-group-mockups--pin-returning-two > .action-clipboard-mockup:nth-child(3) {
    --action-clipboard-pin-hold-x: calc(var(--action-clipboard-pin-step) * -2);
  }
  .action-clipboard-group-mockups--pin-returning-two > .action-clipboard-mockup:nth-child(4) {
    --action-clipboard-pin-hold-x: var(--action-clipboard-pin-step);
  }
  .action-clipboard-group-mockups--pin-returning-two > .action-clipboard-mockup:nth-child(5) {
    --action-clipboard-pin-hold-x: calc(var(--action-clipboard-pin-step) * -3);
  }
  .action-clipboard-group-mockups--pin-returning-one > .action-clipboard-mockup {
    --action-clipboard-pin-hold-x: 0px;
    animation: none;
    transform: translate3d(var(--action-clipboard-pin-hold-x), 0, 0);
  }
  .action-clipboard-group-mockups--pin-returning-one > .action-clipboard-mockup:nth-child(1),
  .action-clipboard-group-mockups--pin-returning-one > .action-clipboard-mockup:nth-child(2) {
    --action-clipboard-pin-hold-x: var(--action-clipboard-pin-step);
  }
  .action-clipboard-group-mockups--pin-returning-one > .action-clipboard-mockup:nth-child(3) {
    --action-clipboard-pin-hold-x: calc(var(--action-clipboard-pin-step) * -2);
  }

  .action-clipboard-group-mockups--pin-pinning-two-shifting > .action-clipboard-mockup,
  .action-clipboard-group-mockups--pin-returning-two-shifting > .action-clipboard-mockup,
  .action-clipboard-group-mockups--pin-returning-one-shifting > .action-clipboard-mockup {
    --action-clipboard-pin-from-x: 0px;
    --action-clipboard-pin-to-x: 0px;
  }
  .action-clipboard-group-mockups--pin-pinning-two-shifting > .action-clipboard-mockup:nth-child(1),
  .action-clipboard-group-mockups--pin-pinning-two-shifting > .action-clipboard-mockup:nth-child(2) {
    --action-clipboard-pin-from-x: var(--action-clipboard-pin-step);
    --action-clipboard-pin-to-x: calc(var(--action-clipboard-pin-step) * 2);
  }
  .action-clipboard-group-mockups--pin-pinning-two-shifting > .action-clipboard-mockup:nth-child(3) {
    --action-clipboard-pin-from-x: calc(var(--action-clipboard-pin-step) * -2);
    --action-clipboard-pin-to-x: calc(var(--action-clipboard-pin-step) * -2);
  }
  .action-clipboard-group-mockups--pin-pinning-two-shifting > .action-clipboard-mockup:nth-child(4) {
    --action-clipboard-pin-to-x: var(--action-clipboard-pin-step);
  }
  .action-clipboard-group-mockups--pin-pinning-two-shifting > .action-clipboard-mockup:nth-child(5) {
    --action-clipboard-pin-to-x: calc(var(--action-clipboard-pin-step) * -3);
  }

  .action-clipboard-group-mockups--pin-returning-two-shifting > .action-clipboard-mockup:nth-child(1),
  .action-clipboard-group-mockups--pin-returning-two-shifting > .action-clipboard-mockup:nth-child(2) {
    --action-clipboard-pin-from-x: calc(var(--action-clipboard-pin-step) * 2);
    --action-clipboard-pin-to-x: var(--action-clipboard-pin-step);
  }
  .action-clipboard-group-mockups--pin-returning-two-shifting > .action-clipboard-mockup:nth-child(3) {
    --action-clipboard-pin-from-x: calc(var(--action-clipboard-pin-step) * -2);
    --action-clipboard-pin-to-x: calc(var(--action-clipboard-pin-step) * -2);
  }
  .action-clipboard-group-mockups--pin-returning-two-shifting > .action-clipboard-mockup:nth-child(4) {
    --action-clipboard-pin-from-x: var(--action-clipboard-pin-step);
    --action-clipboard-pin-to-x: 0px;
  }
  .action-clipboard-group-mockups--pin-returning-two-shifting > .action-clipboard-mockup:nth-child(5) {
    --action-clipboard-pin-from-x: calc(var(--action-clipboard-pin-step) * -3);
    --action-clipboard-pin-to-x: 0px;
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(.45, 0, .55, 1);
  }

  .action-clipboard-group-mockups--pin-returning-one-shifting > .action-clipboard-mockup:nth-child(1),
  .action-clipboard-group-mockups--pin-returning-one-shifting > .action-clipboard-mockup:nth-child(2) {
    --action-clipboard-pin-from-x: var(--action-clipboard-pin-step);
    --action-clipboard-pin-to-x: 0px;
  }
  .action-clipboard-group-mockups--pin-returning-one-shifting > .action-clipboard-mockup:nth-child(3) {
    --action-clipboard-pin-from-x: calc(var(--action-clipboard-pin-step) * -2);
    --action-clipboard-pin-to-x: 0px;
  }
  .action-clipboard-group-mockups > .action-clipboard-mockup {
    width: var(--action-clipboard-group-item-size);
    height: var(--action-clipboard-group-item-size);
    min-width: 0;
    min-height: 0;
    flex: 0 0 var(--action-clipboard-group-item-size);
    aspect-ratio: 1 / 1;
    padding: clamp(4px, 1vw, 10px);
    gap: clamp(3px, .8vw, 8px);
    border-radius: clamp(8px, 1.3vw, 16px);
    box-shadow: none;
  }
  .action-clipboard-group-mockups > .action-clipboard-mockup--link {
    /* Leave balanced room for the compact title and URL rows. */
    --action-clipboard-link-content-padding: clamp(1px, .2vw, 2px);
    display: flex;
    gap: 0;
    padding: 0;
  }
  .action-clipboard-group-mockups > .action-clipboard-mockup--image { padding: 0; }
  .action-clipboard-group-mockups > .action-clipboard-mockup--text { padding: clamp(4px, 1vw, 10px); }
  .action-clipboard-group-mockups .action-clipboard-text-title {
    height: clamp(4px, .8vw, 8px);
    margin-bottom: 5%;
  }
  .action-clipboard-group-mockups .action-clipboard-text-lines { gap: clamp(2px, .5vw, 5px); }
  .action-clipboard-group-mockups .action-clipboard-text-lines i { height: clamp(2px, .45vw, 4px); }
  .action-clipboard-group-mockups .action-clipboard-link-image {
    height: 65%;
    flex: 0 0 65%;
    margin: 0 0 0 -1px;
    border-radius: clamp(8px, 1.2vw, 14px) clamp(8px, 1.2vw, 14px) 0 0;
  }
  .action-clipboard-group-mockups .action-clipboard-link-meta {
    align-items: flex-start;
    justify-content: center;
    gap: clamp(3px, .45vw, 5px);
    padding: var(--action-clipboard-link-content-padding) clamp(5px, .8vw, 8px) var(--action-clipboard-link-content-padding);
  }
  .action-clipboard-group-mockups .action-clipboard-link-title {
    width: 76%;
    height: clamp(3px, .6vw, 6px);
    margin: 0;
  }
  .action-clipboard-group-mockups .action-clipboard-link-url {
    width: 58%;
    height: clamp(2px, .45vw, 4px);
    margin: 0;
  }
  .action-clipboard-group-mockups .action-clipboard-color-title { height: clamp(3px, .6vw, 6px); }
  .action-clipboard-group-mockups .action-clipboard-color-name { height: clamp(5px, .8vw, 8px); }
  @media (prefers-reduced-motion: reduce) {
    .action-clipboard-panel-bar-motion--flying,
    .action-clipboard-panel-bar-motion--returning,
    .action-clipboard-panel-bar-motion--pin-shaking-even,
    .action-clipboard-panel-bar-motion--pin-shaking-odd,
    .action-clipboard-panel-bar-motion--share-shaking-even,
    .action-clipboard-panel-bar-motion--share-shaking-odd,
    .action-clipboard-panel-bar-motion--export-shaking-even,
    .action-clipboard-panel-bar-motion--export-shaking-odd,
    .action-clipboard-panel-bar-motion--clipboard-shaking-even,
    .action-clipboard-panel-bar-motion--clipboard-shaking-odd,
    .action-clipboard-panel-bar-motion--icloud-shaking-even,
    .action-clipboard-panel-bar-motion--icloud-shaking-odd,
    .action-clipboard-group-mockups--collecting > .action-clipboard-mockup,
    .action-clipboard-group-mockups--collecting > .action-clipboard-mockup .action-clipboard-mockup-check,
    .action-clipboard-group-mockups--share-flying > .action-clipboard-mockup,
    .action-clipboard-group-mockups--share-returning > .action-clipboard-mockup,
    .action-clipboard-group-mockups--export-flying > .action-clipboard-mockup,
    .action-clipboard-group-mockups--export-returning > .action-clipboard-mockup,
    .action-clipboard-clipboard-stage--social .action-clipboard-clipboard-social-card,
    .action-clipboard-clipboard-stage--social-returning .action-clipboard-clipboard-social-card,
    .action-clipboard-clipboard-stage--content .action-clipboard-clipboard-items > .action-clipboard-mockup,
    .action-clipboard-clipboard-stage--content-returning .action-clipboard-clipboard-items > .action-clipboard-mockup,
    .action-clipboard-icloud-mockups--collecting > .action-clipboard-mockup,
    .action-clipboard-icloud-mockups--flying > .action-clipboard-mockup,
    .action-clipboard-icloud-mockups--returning > .action-clipboard-mockup {
      animation: none;
    }
    .action-clipboard-group-mockups--collecting > .action-clipboard-mockup {
      opacity: 1;
      filter: none;
      transform: none;
    }
    .action-clipboard-group-mockups--collecting > .action-clipboard-mockup .action-clipboard-mockup-check {
      opacity: 1;
      transform: none;
    }
    .action-clipboard-clipboard-stage--social .action-clipboard-clipboard-social-card,
    .action-clipboard-clipboard-stage--social-returning .action-clipboard-clipboard-social-card,
    .action-clipboard-clipboard-stage--content .action-clipboard-clipboard-items > .action-clipboard-mockup,
    .action-clipboard-clipboard-stage--content-returning .action-clipboard-clipboard-items > .action-clipboard-mockup,
    .action-clipboard-icloud-mockups--collecting > .action-clipboard-mockup,
    .action-clipboard-icloud-mockups--flying > .action-clipboard-mockup,
    .action-clipboard-icloud-mockups--returning > .action-clipboard-mockup {
      opacity: 1;
      filter: none;
      transform: none;
    }
    .action-clipboard-panel-bar-shell,
    .action-clipboard-panel-bar-foreground,
    .action-clipboard-progress-reel,
    .action-clipboard-clipboard-chevron-track,
    .action-clipboard-share-socials,
    .action-clipboard-share-socials > span,
    .action-clipboard-export-formats,
    .action-clipboard-export-formats > span { transition: none; }
    .action-clipboard-clipboard-chevron-track,
    .action-clipboard-clipboard-chevron-stack {
      animation: none;
      transform: none;
    }
    .action-clipboard-mockup-pin,
    .action-clipboard-mockup-pin-number {
      transition: none;
      transition-delay: 0s;
    }
    .action-clipboard-group-mockups--pin-pinning-one > .action-clipboard-mockup,
    .action-clipboard-group-mockups--pin-pinning-two > .action-clipboard-mockup,
    .action-clipboard-group-mockups--pin-pinning-two-shifting > .action-clipboard-mockup,
    .action-clipboard-group-mockups--pin-returning-two > .action-clipboard-mockup,
    .action-clipboard-group-mockups--pin-returning-two-shifting > .action-clipboard-mockup,
    .action-clipboard-group-mockups--pin-returning-one > .action-clipboard-mockup,
    .action-clipboard-group-mockups--pin-returning-one-shifting > .action-clipboard-mockup {
      animation: none;
    }
    .action-clipboard-group-mockups--pin-pinning-one > .action-clipboard-mockup,
    .action-clipboard-group-mockups--pin-pinning-two > .action-clipboard-mockup,
    .action-clipboard-group-mockups--pin-pinning-two-shifting > .action-clipboard-mockup,
    .action-clipboard-group-mockups--pin-returning-two > .action-clipboard-mockup,
    .action-clipboard-group-mockups--pin-returning-two-shifting > .action-clipboard-mockup,
    .action-clipboard-group-mockups--pin-returning-one > .action-clipboard-mockup,
    .action-clipboard-group-mockups--pin-returning-one-shifting > .action-clipboard-mockup {
      transform: translate3d(var(--action-clipboard-pin-to-x), 0, 0);
    }
    .action-clipboard-group-mockups--pin-pinning-two > .action-clipboard-mockup,
    .action-clipboard-group-mockups--pin-returning-two > .action-clipboard-mockup,
    .action-clipboard-group-mockups--pin-returning-one > .action-clipboard-mockup {
      transform: translate3d(var(--action-clipboard-pin-hold-x), 0, 0);
    }
  }

  @media (max-width: 1199px) {
    .action-clipboard-grid { grid-template-columns: minmax(0, 1fr); }
    .action-clipboard-panel { border-right: 0; }
    /* The desktop odd-panel rule is more specific than the generic reset
       above. Once the grid is one column, remove every vertical panel edge
       and leave the wrapper as the only left/right border. */
    .action-clipboard-grid > .action-clipboard-panel { border-inline: 0; }
    .action-clipboard-panel:last-child { border-bottom: 0; }
    .action-clipboard-panel {
      padding-block: clamp(28px, 3.2vw, 36px);
      min-height: calc(clamp(260px, 31vw, 446px) + 2 * (clamp(28px, 3.2vw, 36px) - clamp(14px, 1.6vw, 22px)));
    }
    /* The scan preview has its own deliberately tall stage. Give the other
       previews the same breathing room so their content does not collapse on
       a single-column tablet layout. */
    .action-clipboard-panel:not(.action-clipboard-panel--scan) {
      min-height: calc(clamp(260px, 31vw, 446px) + 2 * (clamp(28px, 3.2vw, 36px) - clamp(14px, 1.6vw, 22px)) + 44px);
    }
    .action-clipboard-panel:not(.action-clipboard-panel--scan) .action-clipboard-panel-content--group {
      min-height: clamp(148px, 22vw, 220px);
    }
    .action-clipboard-group-mockups,
    .action-clipboard-clipboard-stage {
      --action-clipboard-group-item-size: clamp(68px, 9vw, 104px);
    }
  }

  @media (max-width: 700px) {
    --action-clipboard-island-width: clamp(168px, 48vw, 180px);
    padding: clamp(96px, 20vw, 144px) 0;
    .container { padding-inline: 16px; }
    .action-clipboard-panel {
      min-height: calc(clamp(185px, 48vw, 280px) + 2 * (clamp(28px, 4vw, 36px) - 12px));
      padding: clamp(28px, 4vw, 36px) 12px;
    }
    .action-clipboard-panel:not(.action-clipboard-panel--scan) {
      min-height: clamp(350px, 88vw, 410px);
    }
    .action-clipboard-panel { border-right: 0; }
    .action-clipboard-panel-content { width: min(100%, 150px); }
    .action-clipboard-panel-content--group {
      width: 100%;
      min-height: clamp(126px, 34vw, 150px);
    }
    .action-clipboard-group-mockups,
    .action-clipboard-clipboard-stage {
      --action-clipboard-group-item-size: clamp(60px, 15vw, 68px);
      --action-clipboard-group-item-gap: clamp(5px, 1.4vw, 8px);
    }
    .action-clipboard-group-mockups { justify-content: center; }
  }

  @media (min-width: 701px) and (max-width: 1024px) {
    .action-clipboard-panel-content { width: min(60%, 180px); }
    .action-clipboard-panel-content--group { width: 100%; }
  }
`;

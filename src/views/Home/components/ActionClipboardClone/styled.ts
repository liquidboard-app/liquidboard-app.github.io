import styled from 'styled-components';

export const ActionClipboardCloneSection = styled.section`
  --action-clone-island-width: 190px;
  padding: clamp(112px, 13vw, 184px) 0;
  overflow: clip;
  background: #fff;
  color: #151515;

  .container { padding-inline: var(--page-gutter); }

  .action-clone-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    overflow: hidden;
    border: 1px solid rgba(21, 21, 21, .14);
    border-radius: clamp(28px, 4vw, 48px);
    background: #fff;
  }

  .action-clone-panel {
    display: flex;
    min-width: 0;
    min-height: clamp(260px, 31vw, 446px);
    padding: clamp(14px, 1.6vw, 22px);
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid rgba(21, 21, 21, .14);
    background: #fff;
  }
  .action-clone-panel:nth-child(odd) { border-right: 1px solid rgba(21, 21, 21, .14); }

  .action-clone-panel-bar-shell {
    --action-clone-island-height: clamp(34px, 3.8vw, 44px);
    --action-clone-island-inline-padding: 7px;
    --action-clone-island-start-padding: 10px;
    position: relative;
    z-index: 3;
    width: var(--action-clone-island-width);
    max-width: 100%;
    min-height: var(--action-clone-island-height);
    flex: 0 0 auto;
    transition: width .72s cubic-bezier(.22, .8, .28, 1), min-height .72s cubic-bezier(.22, .8, .28, 1);
  }
  .action-clone-panel-bar-shell--share-expanded,
  .action-clone-panel-bar-shell--export-expanded {
    --action-clone-island-inline-padding: clamp(9px, 1vw, 12px);
    --action-clone-island-start-padding: clamp(12px, 1.3vw, 15px);
    --action-clone-share-expanded-padding: clamp(14px, 1.6vw, 20px);
    width: min(100%, clamp(292px, 34.5vw, 402px));
    min-height: clamp(82px, 7.2vw, 96px);
  }
  .action-clone-panel-bar-motion {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: visible;
    border-radius: calc(var(--action-clone-island-height) / 2);
    transform-origin: center;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    will-change: transform;
    transition: border-radius .72s cubic-bezier(.22, .8, .28, 1);
  }
  .action-clone-panel-bar {
    display: flex;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    max-width: none;
    min-height: 100%;
    align-items: center;
    justify-content: flex-start;
    padding: 0 var(--action-clone-island-inline-padding) 0 var(--action-clone-island-start-padding);
    border-radius: calc(var(--action-clone-island-height) / 2);
    box-sizing: border-box;
    background: #151515;
    box-shadow: 0 9px 18px rgba(21, 21, 21, .13);
    color: #fff;
    transition: border-radius .72s cubic-bezier(.22, .8, .28, 1);
  }
  .action-clone-panel-bar-foreground {
    position: absolute;
    inset: 0;
    z-index: 2;
    overflow: hidden;
    border-radius: calc(var(--action-clone-island-height) / 2);
    pointer-events: none;
    transition: border-radius .72s cubic-bezier(.22, .8, .28, 1);
  }
  .action-clone-panel-bar-motion--share-expanded,
  .action-clone-panel-bar-motion--share-expanded .action-clone-panel-bar,
  .action-clone-panel-bar-foreground--share-expanded,
  .action-clone-panel-bar-motion--export-expanded,
  .action-clone-panel-bar-motion--export-expanded .action-clone-panel-bar,
  .action-clone-panel-bar-foreground--export-expanded {
    border-radius: clamp(22px, 2.4vw, 28px);
  }
  .action-clone-panel-bar-foreground > .action-clone-panel-folder-wrap {
    position: absolute;
    top: calc(var(--action-clone-island-height) / 2);
    left: var(--action-clone-island-start-padding);
    transform: translateY(-50%);
  }
  @keyframes action-clone-island-fly {
    0%, 100% { transform: translate3d(0, 0, 0) scaleX(1); }
    14% { transform: translate3d(0, calc(var(--action-clone-shake-offset) * -1), 0) scaleX(calc(1 + var(--action-clone-shake-scale))); }
    28% { transform: translate3d(0, var(--action-clone-shake-offset), 0) scaleX(calc(1 - var(--action-clone-shake-scale) * .45)); }
    42% { transform: translate3d(0, calc(var(--action-clone-shake-offset) * -.75), 0) scaleX(calc(1 + var(--action-clone-shake-scale) * .8)); }
    56% { transform: translate3d(0, calc(var(--action-clone-shake-offset) * .65), 0) scaleX(calc(1 - var(--action-clone-shake-scale) * .3)); }
    70% { transform: translate3d(0, 0, 0) scaleX(calc(1 + var(--action-clone-shake-scale) * .4)); }
  }
  @keyframes action-clone-island-return {
    0%, 100% { transform: translate3d(0, 0, 0) scaleX(1); }
    14% { transform: translate3d(0, calc(var(--action-clone-shake-offset) * -1), 0) scaleX(calc(1 + var(--action-clone-shake-scale))); }
    28% { transform: translate3d(0, var(--action-clone-shake-offset), 0) scaleX(calc(1 - var(--action-clone-shake-scale) * .45)); }
    42% { transform: translate3d(0, calc(var(--action-clone-shake-offset) * -.75), 0) scaleX(calc(1 + var(--action-clone-shake-scale) * .8)); }
    56% { transform: translate3d(0, calc(var(--action-clone-shake-offset) * .65), 0) scaleX(calc(1 - var(--action-clone-shake-scale) * .3)); }
    70% { transform: translate3d(0, 0, 0) scaleX(calc(1 + var(--action-clone-shake-scale) * .4)); }
  }
  @keyframes action-clone-item-collect {
    0% { opacity: 0; filter: blur(8px); transform: translateY(28px) scale(.92); }
    14%, 100% { opacity: 1; filter: blur(0); transform: translateY(0) scale(1); }
  }
  @keyframes action-clone-check-pop {
    0%, 4% { opacity: 0; transform: scale(.45); }
    8% { opacity: 1; transform: scale(1.12); }
    11%, 100% { opacity: 1; transform: scale(1); }
  }
  @keyframes action-clone-item-fly {
    0% { opacity: 1; filter: blur(0); transform: translate(0, 0) scale(1); }
    100% { opacity: 0; filter: blur(8px); transform: translate(var(--action-clone-fly-x), var(--action-clone-fly-y)) scale(.16); }
  }
  @keyframes action-clone-item-return {
    0% { opacity: 0; filter: blur(8px); transform: translate(var(--action-clone-fly-x), var(--action-clone-fly-y)) scale(.16); }
    16% { opacity: 1; filter: blur(3px); }
    100% { opacity: 1; filter: blur(0); transform: translate(0, 0) scale(1); }
  }
  @keyframes action-clone-pin-shift {
    0% { transform: translate3d(var(--action-clone-pin-from-x), 0, 0); }
    100% { transform: translate3d(var(--action-clone-pin-to-x), 0, 0); }
  }
  .action-clone-panel-bar-motion--flying {
    animation: action-clone-island-fly var(--action-clone-shake-duration) cubic-bezier(.22, .8, .28, 1) both;
  }
  .action-clone-panel-bar-motion--returning {
    animation: action-clone-island-return var(--action-clone-shake-duration) cubic-bezier(.22, .8, .28, 1) both;
  }
  .action-clone-panel-bar-motion--pin-shaking-even {
    animation: action-clone-island-fly var(--action-clone-shake-duration) cubic-bezier(.22, .8, .28, 1) both;
  }
  .action-clone-panel-bar-motion--pin-shaking-odd {
    animation: action-clone-island-return var(--action-clone-shake-duration) cubic-bezier(.22, .8, .28, 1) both;
  }
  .action-clone-panel-bar-motion--share-shaking-even {
    animation: action-clone-island-fly var(--action-clone-shake-duration) cubic-bezier(.22, .8, .28, 1) both;
  }
  .action-clone-panel-bar-motion--share-shaking-odd {
    animation: action-clone-island-return var(--action-clone-shake-duration) cubic-bezier(.22, .8, .28, 1) both;
  }
  .action-clone-panel-bar-motion--export-shaking-even {
    animation: action-clone-island-fly var(--action-clone-shake-duration) cubic-bezier(.22, .8, .28, 1) both;
  }
  .action-clone-panel-bar-motion--export-shaking-odd {
    animation: action-clone-island-return var(--action-clone-shake-duration) cubic-bezier(.22, .8, .28, 1) both;
  }
  .action-clone-progress { transition: color .28s ease; }
  .action-clone-progress.action-clone-progress--active { color: #fff; }
  .action-clone-panel-bar-foreground > .action-clone-progress {
    position: absolute;
    top: calc(var(--action-clone-island-height) / 2);
    right: var(--action-clone-island-inline-padding);
    z-index: 4;
    transform: translateY(-50%);
  }
  .action-clone-panel-bar-foreground--share-expanded > .action-clone-panel-folder-wrap,
  .action-clone-panel-bar-foreground--share-expanded > .action-clone-progress,
  .action-clone-panel-bar-foreground--export-expanded > .action-clone-panel-folder-wrap,
  .action-clone-panel-bar-foreground--export-expanded > .action-clone-progress {
    top: calc(var(--action-clone-island-height) / 2);
  }
  .action-clone-panel-folder-wrap,
  .action-clone-progress {
    display: grid;
    width: clamp(24px, 2.4vw, 31px);
    aspect-ratio: 1;
    place-items: center;
  }
  .action-clone-panel-folder-wrap { border: 0; }
  .action-clone-panel-folder,
  .action-clone-panel-pin,
  .action-clone-panel-share,
  .action-clone-panel-export { width: clamp(18px, 1.9vw, 24px); height: clamp(18px, 1.9vw, 24px); }
  .action-clone-panel-export { width: clamp(16px, 1.55vw, 20px); height: clamp(16px, 1.55vw, 20px); }
  .action-clone-panel-pin {
    color: #f97316;
    fill: none;
    stroke: url(#action-clone-pin-gradient);
  }
  .action-clone-panel-pin path { stroke: url(#action-clone-pin-gradient); }
  .action-clone-panel-pin path:last-child { fill: url(#action-clone-pin-gradient); }
  .action-clone-progress {
    position: relative;
    border: 1px solid rgba(21, 21, 21, .1);
    color: #a3a3a3;
    font-size: clamp(15px, 1.8vw, 18px);
    font-weight: 650;
    line-height: 1;
  }
  .action-clone-progress-stack {
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 100%;
    height: var(--action-clone-island-height);
    overflow: visible;
    transform: translateY(-50%);
  }
  .action-clone-progress-reel {
    display: flex;
    width: 100%;
    height: 600%;
    flex-direction: column;
    transform: translate3d(0, calc(var(--action-clone-progress-index) * -16.6667%), 0);
    transition: transform var(--action-clone-progress-duration, .32s) cubic-bezier(.22, .8, .28, 1);
    backface-visibility: hidden;
    will-change: transform;
  }
  .action-clone-progress-value {
    position: relative;
    width: 100%;
    flex: 0 0 16.6667%;
    display: grid;
    place-items: center;
  }
  .action-clone-share-socials {
    position: absolute;
    right: var(--action-clone-share-expanded-padding, clamp(12px, 1.4vw, 18px));
    bottom: clamp(8px, 1vw, 12px);
    left: var(--action-clone-share-expanded-padding, clamp(12px, 1.4vw, 18px));
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(7px, .9vw, 12px);
    opacity: 0;
    filter: blur(8px);
    transform: translateY(8px);
    transition: opacity .34s ease, filter .42s ease, transform .46s cubic-bezier(.22, 1, .36, 1);
  }
  .action-clone-panel-bar-foreground--share-expanded .action-clone-share-socials {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
    transition-delay: .24s;
  }
  .action-clone-share-socials > span {
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
  .action-clone-share-socials svg {
    width: 48%;
    height: 48%;
  }
  .action-clone-share-socials .action-clone-share-social-mark,
  .action-clone-share-socials .action-clone-share-social-mark path {
    fill: currentColor;
    stroke: none;
  }
  .action-clone-share-socials > span:nth-child(4) .action-clone-share-social-mark { transform: scale(1.15); }

  .action-clone-export-formats {
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
  .action-clone-panel-bar-foreground--export-expanded .action-clone-export-formats {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
    transition-delay: .24s;
  }
  .action-clone-panel-bar-foreground--export-expanded > .action-clone-progress .action-clone-progress-stack {
    overflow: hidden;
  }
  .action-clone-export-formats > span {
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
  .action-clone-export-formats > span.action-clone-export-format--visible {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0) scale(1);
  }
  .action-clone-export-formats svg {
    width: clamp(14px, 1.45vw, 19px);
    height: clamp(14px, 1.45vw, 19px);
    flex: 0 0 auto;
  }
  .action-clone-export-formats strong {
    font-size: clamp(10px, 1vw, 13px);
    font-weight: 720;
    letter-spacing: .02em;
    line-height: 1;
  }

  .action-clone-panel-content {
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

  .action-clone-mockup {
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
  .action-clone-mockup-check {
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
  .action-clone-mockup-check svg { width: 65%; height: 65%; }
  .action-clone-mockup-pin {
    --action-clone-pin-badge-height: clamp(14px, 1.5vw, 20px);
    --action-clone-pin-badge-content-size: clamp(9px, .85vw, 12px);
    position: absolute;
    z-index: 2;
    top: clamp(5px, .8vw, 9px);
    right: clamp(5px, .8vw, 9px);
    display: inline-flex;
    width: calc(var(--action-clone-pin-badge-height) * 1.75);
    height: var(--action-clone-pin-badge-height);
    align-items: center;
    justify-content: center;
    padding: 0;
    box-sizing: border-box;
    border-radius: calc(var(--action-clone-pin-badge-height) / 2);
    background: #f97316;
    color: #fff;
    font-size: var(--action-clone-pin-badge-content-size);
    font-weight: 800;
    line-height: 1;
    opacity: 0;
    transform: scale(.45);
    transition: opacity .16s ease, transform .22s cubic-bezier(.22, 1, .36, 1);
    box-shadow: 0 3px 8px rgba(249, 115, 22, .28);
  }
  .action-clone-mockup-pin--visible { opacity: 1; transform: scale(1); }
  .action-clone-mockup-pin:not(.action-clone-mockup-pin--visible) {
    transition-delay: .24s;
  }
  .action-clone-mockup-pin-content {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .action-clone-mockup-pin-icon {
    width: var(--action-clone-pin-badge-content-size);
    height: var(--action-clone-pin-badge-content-size);
    flex: 0 0 auto;
    color: #fff;
    fill: #fff;
    stroke: #fff;
    stroke-width: 2.8;
  }
  .action-clone-mockup-pin-number {
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
  .action-clone-mockup-pin--visible .action-clone-mockup-pin-number {
    width: 1ch;
    max-width: 1ch;
    margin-left: 3px;
    opacity: 1;
    transform: translateX(0);
    transition-delay: .24s;
  }
  .action-clone-mockup--text { padding: clamp(12px, 1.5vw, 20px); }
  .action-clone-mockup--text { background: #f4f4f4; }
  .action-clone-mockup--link { --action-clone-link-content-padding: clamp(10px, .8vw, 14px); padding: 0; gap: 0; }

  .action-clone-text-title,
  .action-clone-text-lines i,
  .action-clone-link-title,
  .action-clone-link-url,
  .action-clone-color-title,
  .action-clone-color-name { display: block; border-radius: 999px; }
  .action-clone-text-title { width: 66%; height: clamp(8px, .8vw, 12px); margin-bottom: 7%; background: #cfcfcf; }
  .action-clone-text-lines { display: grid; width: 100%; gap: 13%; }
  .action-clone-text-lines i { width: 100%; height: clamp(5px, .6vw, 8px); background: #e0e0e0; }
  .action-clone-text-lines i:nth-child(2) { width: 82%; }
  .action-clone-text-lines i:nth-child(3) { width: 91%; }
  .action-clone-text-lines i:nth-child(4) { width: 70%; }
  .action-clone-text-lines i:nth-child(5) { width: 58%; }
  .action-clone-text-lines i:nth-child(6) { width: 76%; }

  .action-clone-link-image,
  .action-clone-image-placeholder {
    position: relative;
    display: grid;
    width: 100%;
    height: 51%;
    place-items: center;
    overflow: hidden;
    border-radius: clamp(11px, 1.3vw, 16px);
    background: #ebebeb;
  }
  .action-clone-link-image { width: calc(100% + 2px); height: 70%; flex: 0 0 70%; margin: 0 0 0 -1px; border-radius: clamp(16px, 1.8vw, 24px) clamp(16px, 1.8vw, 24px) 0 0; background: #ebebeb; }
  .action-clone-link-image-icon { display: block; width: 100%; height: 100%; }
  .action-clone-link-meta {
    display: flex;
    width: 100%;
    min-height: 0;
    flex: 1 1 auto;
    flex-direction: column;
    align-items: flex-start;
    gap: clamp(8px, .75vw, 12px);
    padding: var(--action-clone-link-content-padding) clamp(12px, 1.25vw, 18px) var(--action-clone-link-content-padding);
    box-sizing: border-box;
  }
  .action-clone-link-title { width: 66%; height: clamp(8px, .8vw, 12px); flex: 0 0 auto; background: #cfcfcf; }
  .action-clone-link-url { width: 45%; height: 6%; flex: 0 0 auto; background: #e0e0e0; }

  .action-clone-mockup--color { align-items: center; justify-content: center; background: #f4f4f4; }
  .action-clone-color-title { width: 44%; height: clamp(5px, .6vw, 8px); background: #e0e0e0; }
  .action-clone-color-name { width: 66%; height: clamp(8px, .8vw, 12px); background: #cfcfcf; }
  .action-clone-mockup--image { padding: 0; background: #ebebeb; }
  .action-clone-mockup--image .action-clone-image-placeholder {
    position: relative;
    display: grid;
    width: 100%;
    height: 100%;
    margin: 0;
    place-items: center;
    border-radius: inherit;
    background: #ebebeb;
  }
  .action-clone-mockup--image .action-clone-image-icon {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    /* Keep the icon inside its square while filling the lower-right edge. */
    transform: scale(1.36);
  }
  .action-clone-mockup--image .action-clone-image-placeholder i {
    position: absolute;
    display: block;
    border-radius: 999px;
    background: #a9a9a9;
  }
  .action-clone-mockup--image .action-clone-image-placeholder i:first-child {
    top: 24%;
    left: 24%;
    width: 18%;
    aspect-ratio: 1;
    transform: none;
  }
  .action-clone-mockup--image .action-clone-image-placeholder i:last-child {
    right: 24px;
    bottom: 0;
    left: auto;
    width: 100%;
    height: 48%;
    border-radius: 0 0 clamp(20px, 2.4vw, 30px) 0;
    clip-path: polygon(0 100%, 78% 21%, 80% 19%, 82% 17%, 84% 15%, 86% 14%, 88% 14%, 90% 15%, 92% 17%, 94% 19%, 100% 56%, 100% 100%);
    background: #a9a9a9;
  }

  .action-clone-mockup--sticker {
    display: grid;
    place-items: center;
    background: #f4f4f4;
  }
  .action-clone-sticker-shape {
    display: block;
    width: 100%;
    height: 100%;
  }

  .action-clone-panel-content--group {
    width: 100%;
    height: auto;
    aspect-ratio: auto;
  }
  .action-clone-panel-title {
    width: 100%;
    margin-top: clamp(12px, 1.5vw, 20px);
    text-align: center;
    font-size: clamp(20px, 2.2vw, 32px);
    font-weight: 800;
    line-height: 1;
  }
  .action-clone-panel-description {
    width: 100%;
    box-sizing: border-box;
    margin-top: clamp(7px, .8vw, 11px);
    color: rgba(21, 21, 21, .58);
    text-align: center;
    font-size: clamp(12px, 1.1vw, 16px);
    line-height: 1.35;
  }
  @media (min-width: 1200px) {
    .action-clone-panel:nth-child(3),
    .action-clone-panel:nth-child(4) { border-bottom: 0; }
  }
  @media (max-width: 1199px) {
    padding-block: clamp(224px, 26vw, 320px);
  }
  .action-clone-group-mockups {
    --action-clone-group-item-size: clamp(56px, 8vw, 96px);
    --action-clone-group-item-gap: clamp(5px, 1vw, 10px);
    --action-clone-pin-step: calc(var(--action-clone-group-item-size) + var(--action-clone-group-item-gap));
    --action-clone-fly-y: clamp(-175px, -12vw, -63px);
    display: flex;
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 100%;
    gap: var(--action-clone-group-item-gap);
    justify-content: center;
    overflow: visible;
    padding: 2px;
    box-sizing: border-box;
    scrollbar-width: none;
  }
  .action-clone-group-mockups::-webkit-scrollbar { display: none; }
  .action-clone-group-mockups--collecting > .action-clone-mockup {
    --action-clone-item-delay: 0s;
    --action-clone-fly-x: 0px;
    --action-clone-fly-y: clamp(-175px, -12vw, -63px);
    --action-clone-fly-delay: 0s;
    --action-clone-return-delay: 0s;
    animation: action-clone-item-collect 1800ms cubic-bezier(.22, .8, .28, 1) var(--action-clone-item-delay) both;
  }
  .action-clone-group-mockups--repeat > .action-clone-mockup {
    animation: none;
    opacity: 1;
    filter: blur(0);
    transform: translate(0, 0) scale(1);
  }
  .action-clone-group-mockups--collecting > .action-clone-mockup .action-clone-mockup-check {
    animation: action-clone-check-pop 1800ms cubic-bezier(.22, .8, .28, 1) var(--action-clone-check-delay) both;
  }
  .action-clone-group-mockups--collecting > .action-clone-mockup .action-clone-mockup-check {
    --action-clone-check-delay: .9s;
  }
  .action-clone-group-mockups--collecting > .action-clone-mockup:nth-child(2) { --action-clone-item-delay: .28s; }
  .action-clone-group-mockups--collecting > .action-clone-mockup:nth-child(3) { --action-clone-item-delay: .56s; }
  .action-clone-group-mockups--collecting > .action-clone-mockup:nth-child(4) { --action-clone-item-delay: .84s; }
  .action-clone-group-mockups--collecting > .action-clone-mockup:nth-child(5) { --action-clone-item-delay: 1.12s; }
  .action-clone-group-mockups--collecting > .action-clone-mockup:nth-child(1) { --action-clone-fly-x: calc((var(--action-clone-group-item-size) + var(--action-clone-group-item-gap)) * 2); --action-clone-fly-delay: .16s; }
  .action-clone-group-mockups--collecting > .action-clone-mockup:nth-child(2) { --action-clone-fly-x: calc(var(--action-clone-group-item-size) + var(--action-clone-group-item-gap)); --action-clone-fly-delay: .08s; }
  .action-clone-group-mockups--collecting > .action-clone-mockup:nth-child(3) { --action-clone-fly-x: 0px; --action-clone-fly-delay: .2s; }
  .action-clone-group-mockups--collecting > .action-clone-mockup:nth-child(4) { --action-clone-fly-x: calc((var(--action-clone-group-item-size) + var(--action-clone-group-item-gap)) * -1); --action-clone-fly-delay: 0s; }
  .action-clone-group-mockups--collecting > .action-clone-mockup:nth-child(5) { --action-clone-fly-x: calc((var(--action-clone-group-item-size) + var(--action-clone-group-item-gap)) * -2); --action-clone-fly-delay: .12s; }
  .action-clone-group-mockups--collecting > .action-clone-mockup:nth-child(1) { --action-clone-return-delay: 0s; }
  .action-clone-group-mockups--collecting > .action-clone-mockup:nth-child(2) { --action-clone-return-delay: .1s; }
  .action-clone-group-mockups--collecting > .action-clone-mockup:nth-child(3) { --action-clone-return-delay: .2s; }
  .action-clone-group-mockups--collecting > .action-clone-mockup:nth-child(4) { --action-clone-return-delay: .3s; }
  .action-clone-group-mockups--collecting > .action-clone-mockup:nth-child(5) { --action-clone-return-delay: .4s; }
  .action-clone-group-mockups--collecting > .action-clone-mockup:nth-child(2) .action-clone-mockup-check { --action-clone-check-delay: 1.02s; }
  .action-clone-group-mockups--collecting > .action-clone-mockup:nth-child(3) .action-clone-mockup-check { --action-clone-check-delay: 1.14s; }
  .action-clone-group-mockups--collecting > .action-clone-mockup:nth-child(4) .action-clone-mockup-check { --action-clone-check-delay: 1.26s; }
  .action-clone-group-mockups--collecting > .action-clone-mockup:nth-child(5) .action-clone-mockup-check { --action-clone-check-delay: 1.38s; }
  .action-clone-group-mockups--repeat > .action-clone-mockup .action-clone-mockup-check { --action-clone-check-delay: .55s; }
  .action-clone-group-mockups--repeat > .action-clone-mockup:nth-child(2) .action-clone-mockup-check { --action-clone-check-delay: .67s; }
  .action-clone-group-mockups--repeat > .action-clone-mockup:nth-child(3) .action-clone-mockup-check { --action-clone-check-delay: .79s; }
  .action-clone-group-mockups--repeat > .action-clone-mockup:nth-child(4) .action-clone-mockup-check { --action-clone-check-delay: .91s; }
  .action-clone-group-mockups--repeat > .action-clone-mockup:nth-child(5) .action-clone-mockup-check { --action-clone-check-delay: 1.03s; }
  .action-clone-group-mockups--flying > .action-clone-mockup {
    animation: action-clone-item-fly 420ms cubic-bezier(.22, .8, .28, 1) var(--action-clone-fly-delay) both;
    pointer-events: none;
  }
  .action-clone-group-mockups--returning > .action-clone-mockup {
    animation: action-clone-item-return 400ms cubic-bezier(.12, .8, .25, 1) var(--action-clone-return-delay) both;
    pointer-events: none;
  }
  .action-clone-group-mockups--returning > .action-clone-mockup .action-clone-mockup-check {
    animation: none;
    opacity: 0;
    transform: scale(.45);
  }
  .action-clone-group-mockups--flying > .action-clone-mockup .action-clone-mockup-check {
    animation: none;
    opacity: 1;
    transform: scale(1);
  }
  .action-clone-group-mockups--share-selecting > .action-clone-mockup {
    opacity: 1;
    filter: blur(0);
    transform: translate(0, 0) scale(1);
  }
  .action-clone-share-check {
    transition: opacity .18s ease, transform .28s cubic-bezier(.22, 1, .36, 1);
  }
  .action-clone-share-check--visible {
    opacity: 1;
    transform: scale(1.08);
  }
  .action-clone-group-mockups--share-flying > .action-clone-mockup,
  .action-clone-group-mockups--share-returning > .action-clone-mockup {
    --action-clone-fly-y: clamp(-175px, -12vw, -63px);
    --action-clone-fly-x: 0px;
    --action-clone-fly-delay: 0s;
    --action-clone-return-delay: 0s;
    pointer-events: none;
  }
  .action-clone-group-mockups--share-flying > .action-clone-mockup {
    animation: action-clone-item-fly 720ms cubic-bezier(.22, .8, .28, 1) var(--action-clone-fly-delay) both;
  }
  .action-clone-group-mockups--share-returning > .action-clone-mockup {
    animation: action-clone-item-return 520ms cubic-bezier(.12, .8, .25, 1) var(--action-clone-return-delay) both;
  }
  .action-clone-group-mockups--share-flying > .action-clone-mockup:nth-child(1),
  .action-clone-group-mockups--share-returning > .action-clone-mockup:nth-child(1) {
    --action-clone-fly-x: calc((var(--action-clone-group-item-size) + var(--action-clone-group-item-gap)) * 2);
    --action-clone-fly-delay: .16s;
    --action-clone-return-delay: 0s;
  }
  .action-clone-group-mockups--share-flying > .action-clone-mockup:nth-child(2),
  .action-clone-group-mockups--share-returning > .action-clone-mockup:nth-child(2) {
    --action-clone-fly-x: calc(var(--action-clone-group-item-size) + var(--action-clone-group-item-gap));
    --action-clone-fly-delay: .08s;
    --action-clone-return-delay: .1s;
  }
  .action-clone-group-mockups--share-flying > .action-clone-mockup:nth-child(3),
  .action-clone-group-mockups--share-returning > .action-clone-mockup:nth-child(3) {
    --action-clone-fly-x: 0px;
    --action-clone-fly-delay: .2s;
    --action-clone-return-delay: .2s;
  }
  .action-clone-group-mockups--share-flying > .action-clone-mockup:nth-child(4),
  .action-clone-group-mockups--share-returning > .action-clone-mockup:nth-child(4) {
    --action-clone-fly-x: calc((var(--action-clone-group-item-size) + var(--action-clone-group-item-gap)) * -1);
    --action-clone-fly-delay: 0s;
    --action-clone-return-delay: .3s;
  }
  .action-clone-group-mockups--share-flying > .action-clone-mockup:nth-child(5),
  .action-clone-group-mockups--share-returning > .action-clone-mockup:nth-child(5) {
    --action-clone-fly-x: calc((var(--action-clone-group-item-size) + var(--action-clone-group-item-gap)) * -2);
    --action-clone-fly-delay: .12s;
    --action-clone-return-delay: .4s;
  }
  .action-clone-group-mockups--export-selecting > .action-clone-mockup {
    opacity: 1;
    filter: blur(0);
    transform: translate(0, 0) scale(1);
  }
  .action-clone-export-check {
    transition: opacity .18s ease, transform .28s cubic-bezier(.22, 1, .36, 1);
  }
  .action-clone-export-check--visible {
    opacity: 1;
    transform: scale(1.08);
  }
  .action-clone-group-mockups--export-flying > .action-clone-mockup,
  .action-clone-group-mockups--export-returning > .action-clone-mockup {
    --action-clone-fly-y: clamp(-175px, -12vw, -63px);
    --action-clone-fly-x: 0px;
    --action-clone-fly-delay: 0s;
    --action-clone-return-delay: 0s;
    pointer-events: none;
  }
  .action-clone-group-mockups--export-flying > .action-clone-mockup {
    animation: action-clone-item-fly 420ms cubic-bezier(.22, .8, .28, 1) var(--action-clone-fly-delay) both;
  }
  .action-clone-group-mockups--export-returning > .action-clone-mockup {
    animation: action-clone-item-return 400ms cubic-bezier(.12, .8, .25, 1) var(--action-clone-return-delay) both;
  }
  .action-clone-group-mockups--export-flying > .action-clone-mockup:nth-child(1),
  .action-clone-group-mockups--export-returning > .action-clone-mockup:nth-child(1) {
    --action-clone-fly-x: calc(var(--action-clone-group-item-size) + var(--action-clone-group-item-gap));
    --action-clone-fly-delay: .08s;
    --action-clone-return-delay: 0s;
  }
  .action-clone-group-mockups--export-flying > .action-clone-mockup:nth-child(2),
  .action-clone-group-mockups--export-returning > .action-clone-mockup:nth-child(2) {
    --action-clone-fly-x: 0px;
    --action-clone-fly-delay: .2s;
    --action-clone-return-delay: .1s;
  }
  .action-clone-group-mockups--export-flying > .action-clone-mockup:nth-child(3),
  .action-clone-group-mockups--export-returning > .action-clone-mockup:nth-child(3) {
    --action-clone-fly-x: calc((var(--action-clone-group-item-size) + var(--action-clone-group-item-gap)) * -1);
    --action-clone-fly-delay: .12s;
    --action-clone-return-delay: .2s;
  }
  .action-clone-share-socials > span {
    opacity: 0;
    filter: blur(8px);
    transform: translateY(8px) scale(.76);
    transition: opacity .28s ease, filter .36s ease, transform .42s cubic-bezier(.22, 1, .36, 1);
  }
  .action-clone-share-socials > span.action-clone-share-social--visible {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0) scale(1);
  }
  .action-clone-share-socials > span:nth-child(4).action-clone-share-social--visible .action-clone-share-social-mark {
    transform: scale(1.15);
  }
  .action-clone-group-mockups--pin-pinning-one > .action-clone-mockup,
  .action-clone-group-mockups--pin-pinning-one-shifting > .action-clone-mockup,
  .action-clone-group-mockups--pin-pinning-two-shifting > .action-clone-mockup,
  .action-clone-group-mockups--pin-returning-two > .action-clone-mockup,
  .action-clone-group-mockups--pin-returning-two-shifting > .action-clone-mockup,
  .action-clone-group-mockups--pin-returning-one > .action-clone-mockup,
  .action-clone-group-mockups--pin-returning-one-shifting > .action-clone-mockup {
    pointer-events: none;
  }
  .action-clone-group-mockups--pin-pinning-one-shifting > .action-clone-mockup,
  .action-clone-group-mockups--pin-pinning-two-shifting > .action-clone-mockup,
  .action-clone-group-mockups--pin-returning-two-shifting > .action-clone-mockup,
  .action-clone-group-mockups--pin-returning-one-shifting > .action-clone-mockup {
    animation: action-clone-pin-shift 400ms cubic-bezier(.24, .8, .28, 1) both;
  }
  .action-clone-group-mockups--pin-returning-two-shifting > .action-clone-mockup,
  .action-clone-group-mockups--pin-returning-one-shifting > .action-clone-mockup {
    animation-timing-function: cubic-bezier(.12, .8, .25, 1);
  }
  .action-clone-group-mockups--pin-returning-two-shifting > .action-clone-mockup {
    animation-duration: 400ms;
  }

  .action-clone-group-mockups--pin-pinning-one > .action-clone-mockup,
  .action-clone-group-mockups--pin-pinning-one-shifting > .action-clone-mockup,
  .action-clone-group-mockups--pin-returning-one > .action-clone-mockup {
    --action-clone-pin-from-x: 0px;
    --action-clone-pin-to-x: 0px;
  }
  .action-clone-group-mockups--pin-pinning-one > .action-clone-mockup:nth-child(1),
  .action-clone-group-mockups--pin-pinning-one > .action-clone-mockup:nth-child(2),
  .action-clone-group-mockups--pin-pinning-one-shifting > .action-clone-mockup:nth-child(1),
  .action-clone-group-mockups--pin-pinning-one-shifting > .action-clone-mockup:nth-child(2) {
    --action-clone-pin-to-x: var(--action-clone-pin-step);
  }
  .action-clone-group-mockups--pin-pinning-one > .action-clone-mockup:nth-child(3),
  .action-clone-group-mockups--pin-pinning-one-shifting > .action-clone-mockup:nth-child(3) {
    --action-clone-pin-to-x: calc(var(--action-clone-pin-step) * -2);
  }

  .action-clone-group-mockups--pin-pinning-two > .action-clone-mockup,
  .action-clone-group-mockups--pin-returning-two > .action-clone-mockup {
    --action-clone-pin-hold-x: 0px;
    animation: none;
    transform: translate3d(var(--action-clone-pin-hold-x), 0, 0);
  }
  .action-clone-group-mockups--pin-pinning-two > .action-clone-mockup:nth-child(1),
  .action-clone-group-mockups--pin-pinning-two > .action-clone-mockup:nth-child(2) {
    --action-clone-pin-hold-x: var(--action-clone-pin-step);
  }
  .action-clone-group-mockups--pin-returning-two > .action-clone-mockup:nth-child(1),
  .action-clone-group-mockups--pin-returning-two > .action-clone-mockup:nth-child(2) {
    --action-clone-pin-hold-x: calc(var(--action-clone-pin-step) * 2);
  }
  .action-clone-group-mockups--pin-pinning-two > .action-clone-mockup:nth-child(3) {
    --action-clone-pin-hold-x: calc(var(--action-clone-pin-step) * -2);
  }
  .action-clone-group-mockups--pin-returning-two > .action-clone-mockup:nth-child(3) {
    --action-clone-pin-hold-x: calc(var(--action-clone-pin-step) * -2);
  }
  .action-clone-group-mockups--pin-returning-two > .action-clone-mockup:nth-child(4) {
    --action-clone-pin-hold-x: var(--action-clone-pin-step);
  }
  .action-clone-group-mockups--pin-returning-two > .action-clone-mockup:nth-child(5) {
    --action-clone-pin-hold-x: calc(var(--action-clone-pin-step) * -3);
  }
  .action-clone-group-mockups--pin-returning-one > .action-clone-mockup {
    --action-clone-pin-hold-x: 0px;
    animation: none;
    transform: translate3d(var(--action-clone-pin-hold-x), 0, 0);
  }
  .action-clone-group-mockups--pin-returning-one > .action-clone-mockup:nth-child(1),
  .action-clone-group-mockups--pin-returning-one > .action-clone-mockup:nth-child(2) {
    --action-clone-pin-hold-x: var(--action-clone-pin-step);
  }
  .action-clone-group-mockups--pin-returning-one > .action-clone-mockup:nth-child(3) {
    --action-clone-pin-hold-x: calc(var(--action-clone-pin-step) * -2);
  }

  .action-clone-group-mockups--pin-pinning-two-shifting > .action-clone-mockup,
  .action-clone-group-mockups--pin-returning-two-shifting > .action-clone-mockup,
  .action-clone-group-mockups--pin-returning-one-shifting > .action-clone-mockup {
    --action-clone-pin-from-x: 0px;
    --action-clone-pin-to-x: 0px;
  }
  .action-clone-group-mockups--pin-pinning-two-shifting > .action-clone-mockup:nth-child(1),
  .action-clone-group-mockups--pin-pinning-two-shifting > .action-clone-mockup:nth-child(2) {
    --action-clone-pin-from-x: var(--action-clone-pin-step);
    --action-clone-pin-to-x: calc(var(--action-clone-pin-step) * 2);
  }
  .action-clone-group-mockups--pin-pinning-two-shifting > .action-clone-mockup:nth-child(3) {
    --action-clone-pin-from-x: calc(var(--action-clone-pin-step) * -2);
    --action-clone-pin-to-x: calc(var(--action-clone-pin-step) * -2);
  }
  .action-clone-group-mockups--pin-pinning-two-shifting > .action-clone-mockup:nth-child(4) {
    --action-clone-pin-to-x: var(--action-clone-pin-step);
  }
  .action-clone-group-mockups--pin-pinning-two-shifting > .action-clone-mockup:nth-child(5) {
    --action-clone-pin-to-x: calc(var(--action-clone-pin-step) * -3);
  }

  .action-clone-group-mockups--pin-returning-two-shifting > .action-clone-mockup:nth-child(1),
  .action-clone-group-mockups--pin-returning-two-shifting > .action-clone-mockup:nth-child(2) {
    --action-clone-pin-from-x: calc(var(--action-clone-pin-step) * 2);
    --action-clone-pin-to-x: var(--action-clone-pin-step);
  }
  .action-clone-group-mockups--pin-returning-two-shifting > .action-clone-mockup:nth-child(3) {
    --action-clone-pin-from-x: calc(var(--action-clone-pin-step) * -2);
    --action-clone-pin-to-x: calc(var(--action-clone-pin-step) * -2);
  }
  .action-clone-group-mockups--pin-returning-two-shifting > .action-clone-mockup:nth-child(4) {
    --action-clone-pin-from-x: var(--action-clone-pin-step);
    --action-clone-pin-to-x: 0px;
  }
  .action-clone-group-mockups--pin-returning-two-shifting > .action-clone-mockup:nth-child(5) {
    --action-clone-pin-from-x: calc(var(--action-clone-pin-step) * -3);
    --action-clone-pin-to-x: 0px;
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(.45, 0, .55, 1);
  }

  .action-clone-group-mockups--pin-returning-one-shifting > .action-clone-mockup:nth-child(1),
  .action-clone-group-mockups--pin-returning-one-shifting > .action-clone-mockup:nth-child(2) {
    --action-clone-pin-from-x: var(--action-clone-pin-step);
    --action-clone-pin-to-x: 0px;
  }
  .action-clone-group-mockups--pin-returning-one-shifting > .action-clone-mockup:nth-child(3) {
    --action-clone-pin-from-x: calc(var(--action-clone-pin-step) * -2);
    --action-clone-pin-to-x: 0px;
  }
  .action-clone-group-mockups > .action-clone-mockup {
    width: clamp(56px, 8vw, 96px);
    height: clamp(56px, 8vw, 96px);
    min-width: 0;
    min-height: 0;
    flex: 0 0 clamp(56px, 8vw, 96px);
    aspect-ratio: 1 / 1;
    padding: clamp(4px, 1vw, 10px);
    gap: clamp(3px, .8vw, 8px);
    border-radius: clamp(8px, 1.3vw, 16px);
    box-shadow: none;
  }
  .action-clone-group-mockups > .action-clone-mockup--link {
    /* Leave balanced room for the compact title and URL rows. */
    --action-clone-link-content-padding: clamp(1px, .2vw, 2px);
    display: flex;
    gap: 0;
    padding: 0;
  }
  .action-clone-group-mockups > .action-clone-mockup--image { padding: 0; }
  .action-clone-group-mockups > .action-clone-mockup--text { padding: clamp(4px, 1vw, 10px); }
  .action-clone-group-mockups .action-clone-text-title {
    height: clamp(4px, .8vw, 8px);
    margin-bottom: 5%;
  }
  .action-clone-group-mockups .action-clone-text-lines { gap: clamp(2px, .5vw, 5px); }
  .action-clone-group-mockups .action-clone-text-lines i { height: clamp(2px, .45vw, 4px); }
  .action-clone-group-mockups .action-clone-link-image {
    height: 65%;
    flex: 0 0 65%;
    margin: 0 0 0 -1px;
    border-radius: clamp(8px, 1.2vw, 14px) clamp(8px, 1.2vw, 14px) 0 0;
  }
  .action-clone-group-mockups .action-clone-link-meta {
    align-items: flex-start;
    justify-content: center;
    gap: clamp(3px, .45vw, 5px);
    padding: var(--action-clone-link-content-padding) clamp(5px, .8vw, 8px) var(--action-clone-link-content-padding);
  }
  .action-clone-group-mockups .action-clone-link-title {
    width: 76%;
    height: clamp(3px, .6vw, 6px);
    margin: 0;
  }
  .action-clone-group-mockups .action-clone-link-url {
    width: 58%;
    height: clamp(2px, .45vw, 4px);
    margin: 0;
  }
  .action-clone-group-mockups .action-clone-color-title { height: clamp(3px, .6vw, 6px); }
  .action-clone-group-mockups .action-clone-color-name { height: clamp(5px, .8vw, 8px); }
  @media (prefers-reduced-motion: reduce) {
    .action-clone-panel-bar-motion--flying,
    .action-clone-panel-bar-motion--returning,
    .action-clone-panel-bar-motion--pin-shaking-even,
    .action-clone-panel-bar-motion--pin-shaking-odd,
    .action-clone-panel-bar-motion--share-shaking-even,
    .action-clone-panel-bar-motion--share-shaking-odd,
    .action-clone-panel-bar-motion--export-shaking-even,
    .action-clone-panel-bar-motion--export-shaking-odd,
    .action-clone-group-mockups--collecting > .action-clone-mockup,
    .action-clone-group-mockups--collecting > .action-clone-mockup .action-clone-mockup-check,
    .action-clone-group-mockups--share-flying > .action-clone-mockup,
    .action-clone-group-mockups--share-returning > .action-clone-mockup,
    .action-clone-group-mockups--export-flying > .action-clone-mockup,
    .action-clone-group-mockups--export-returning > .action-clone-mockup {
      animation: none;
    }
    .action-clone-group-mockups--collecting > .action-clone-mockup {
      opacity: 1;
      filter: none;
      transform: none;
    }
    .action-clone-group-mockups--collecting > .action-clone-mockup .action-clone-mockup-check {
      opacity: 1;
      transform: none;
    }
    .action-clone-panel-bar-shell,
    .action-clone-panel-bar-foreground,
    .action-clone-progress-reel,
    .action-clone-share-socials,
    .action-clone-share-socials > span,
    .action-clone-export-formats,
    .action-clone-export-formats > span { transition: none; }
    .action-clone-mockup-pin,
    .action-clone-mockup-pin-number {
      transition: none;
      transition-delay: 0s;
    }
    .action-clone-group-mockups--pin-pinning-one > .action-clone-mockup,
    .action-clone-group-mockups--pin-pinning-two > .action-clone-mockup,
    .action-clone-group-mockups--pin-pinning-two-shifting > .action-clone-mockup,
    .action-clone-group-mockups--pin-returning-two > .action-clone-mockup,
    .action-clone-group-mockups--pin-returning-two-shifting > .action-clone-mockup,
    .action-clone-group-mockups--pin-returning-one > .action-clone-mockup,
    .action-clone-group-mockups--pin-returning-one-shifting > .action-clone-mockup {
      animation: none;
    }
    .action-clone-group-mockups--pin-pinning-one > .action-clone-mockup,
    .action-clone-group-mockups--pin-pinning-two > .action-clone-mockup,
    .action-clone-group-mockups--pin-pinning-two-shifting > .action-clone-mockup,
    .action-clone-group-mockups--pin-returning-two > .action-clone-mockup,
    .action-clone-group-mockups--pin-returning-two-shifting > .action-clone-mockup,
    .action-clone-group-mockups--pin-returning-one > .action-clone-mockup,
    .action-clone-group-mockups--pin-returning-one-shifting > .action-clone-mockup {
      transform: translate3d(var(--action-clone-pin-to-x), 0, 0);
    }
    .action-clone-group-mockups--pin-pinning-two > .action-clone-mockup,
    .action-clone-group-mockups--pin-returning-two > .action-clone-mockup,
    .action-clone-group-mockups--pin-returning-one > .action-clone-mockup {
      transform: translate3d(var(--action-clone-pin-hold-x), 0, 0);
    }
  }

  @media (max-width: 1199px) {
    .action-clone-grid { grid-template-columns: minmax(0, 1fr); }
    .action-clone-panel { border-right: 0; }
    .action-clone-panel:last-child { border-bottom: 0; }
    .action-clone-panel {
      padding-block: clamp(28px, 3.2vw, 36px);
      min-height: calc(clamp(260px, 31vw, 446px) + 2 * (clamp(28px, 3.2vw, 36px) - clamp(14px, 1.6vw, 22px)));
    }
  }

  @media (max-width: 700px) {
    --action-clone-island-width: clamp(168px, 48vw, 180px);
    padding: clamp(48px, 12vw, 84px) 0;
    .container { padding-inline: 16px; }
    .action-clone-panel {
      min-height: calc(clamp(185px, 48vw, 280px) + 2 * (clamp(28px, 4vw, 36px) - 12px));
      padding: clamp(28px, 4vw, 36px) 12px;
    }
    .action-clone-panel { border-right: 0; }
    .action-clone-panel-content { width: min(100%, 150px); }
    .action-clone-panel-content--group { width: 100%; }
    .action-clone-group-mockups { justify-content: center; }
  }

  @media (min-width: 701px) and (max-width: 1024px) {
    .action-clone-panel-content { width: min(60%, 180px); }
    .action-clone-panel-content--group { width: 100%; }
  }
`;

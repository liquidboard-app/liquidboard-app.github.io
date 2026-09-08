import styled from 'styled-components';

export const ActionClipboardSection = styled.section`
  --action-header-height: 75px;
  --action-pin-gap: clamp(30px, 3.6dvh, 42px);
  --action-pin-top: calc(var(--action-header-height) + var(--action-pin-gap));
  --action-wrap-height: calc(100dvh - var(--action-header-height) - (var(--action-pin-gap) * 2));
  --action-mockup-edge: clamp(28px, 5vw, 88px);
  --action-mockup-gap: clamp(12px, 1.6vw, 24px);
  --action-standard-mockup-size: clamp(118px, 13vw, 176px);
  --action-standard-mockup-width: var(--action-standard-mockup-size);
  --action-standard-mockup-height: var(--action-standard-mockup-size);
  --action-share-edge: 18px;
  --action-share-plane-edge: 32px;
  --action-share-expanded-width: 400px;
  --action-share-plane-size: 35px;
  --action-share-social-size: 42px;
  --action-share-social-gap: 16px;
  --action-export-pill-gap: clamp(18px, 2vw, 28px);
  position: relative;
  min-height: calc(var(--action-pin-top) + var(--action-wrap-height));
  padding-top: var(--action-pin-top);
  background: #fff;
  color: #151515;

  .action-clipboard-pin {
    position: relative;
    display: flex;
    width: 100%;
    height: var(--action-wrap-height);
    margin: 0 auto;
    flex-direction: column;
    gap: clamp(12px, 1.8dvh, 18px);
    padding: 0 var(--page-inline-padding);
  }

  .action-clipboard-content-frame {
    position: relative;
    display: grid;
    min-height: 0;
    flex: 1 1 80%;
  }

  .action-clipboard-content {
    position: absolute;
    top: 50%;
    left: 50%;
    display: grid;
    width: 32px;
    height: 32px;
    overflow: hidden;
    border-radius: 16px;
    background: #151515 url('/assets/action-clipboard-noise.png') center / cover no-repeat;
    filter: blur(18px);
    opacity: 0;
    transform: translate(-50%, -50%);
    will-change: width, height, border-radius, filter, opacity;
  }

  .action-clipboard-scene {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .action-clipboard-scene-title-anchor {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    transform: translate(-50%, -50%);
  }

  .action-clipboard-scene-title {
    position: relative;
    display: flex;
    width: max-content;
    align-items: center;
    gap: clamp(12px, 1.4vw, 20px);
    padding: 0;
    border-radius: 999px;
    background: transparent;
    color: #fff;
    transform-origin: center;
    z-index: 2;
    white-space: nowrap;
    will-change: transform, width, background-color, color, filter, opacity;
  }

  .action-clipboard-scene-icon {
    display: grid;
    width: clamp(48px, 5.2vw, 76px);
    height: clamp(48px, 5.2vw, 76px);
    flex: 0 0 auto;
    overflow: hidden;
    place-items: center;
  }
  .action-clipboard-scene-icon svg { width: 100%; height: 100%; stroke-width: 1.7; }

  .action-clipboard-title-words {
    display: block;
    height: 1.08em;
    padding-inline: 12px;
    box-sizing: border-box;
    overflow: hidden;
    font-size: var(--action-title-font-size, clamp(44px, 5.4vw, 84px));
    font-weight: 690;
    letter-spacing: -.07em;
    line-height: 1.08;
    text-transform: capitalize;
  }
  .action-clipboard-title-word-track { display: flex; height: 1.08em; gap: .14em; }
  .action-clipboard-title-word-track > span { display: block; flex: 0 0 auto; width: max-content; height: 1.08em; white-space: nowrap; }
  .action-clipboard-scene--group-vi .action-clipboard-title-word-track { flex-direction: row-reverse; }
  .action-clipboard-scene--cloud .action-clipboard-title-words { text-transform: none; }
  /* Export changes its title width while the pinned timeline is scrubbed.
     Keep the glyphs paintable while that width is being restored on reverse;
     the title pill still provides the visual boundary. */
  .action-clipboard-scene--export .action-clipboard-title-words { overflow: visible; }
  .action-clipboard-scene--export .action-clipboard-scene-title { box-sizing: border-box; justify-content: center; }
  .action-clipboard-scene--export .action-clipboard-title-word-track { position: relative; display: block; }
  .action-clipboard-scene--export .action-clipboard-title-word-track > span { position: absolute; top: 0; left: 0; }

  /* Keep the Scan Text label as one centered unit while the search glyph is
     animated over it. The glyph is an overlay, not part of the title layout. */
  .action-clipboard-scan-heading {
    display: flex;
    width: max-content;
    align-items: center;
    gap: inherit;
  }
  .action-clipboard-scan-motion {
    position: relative;
    display: flex;
    transform-origin: center;
  }

  .action-clipboard-mockups {
    position: absolute;
    right: var(--action-mockup-edge);
    bottom: clamp(26px, 5vh, 68px);
    left: var(--action-mockup-edge);
    display: grid;
    grid-template-columns: repeat(4, var(--action-standard-mockup-width));
    gap: var(--action-mockup-gap);
    justify-content: center;
    z-index: 1;
  }
  .action-clipboard-scene--export .action-clipboard-mockups {
    right: 0;
    left: 0;
    grid-template-columns: repeat(3, var(--action-standard-mockup-width));
    justify-content: center;
  }
  .action-clipboard-mockup {
    --action-mockup-radius: 24px;
    position: relative;
    display: flex;
    width: var(--action-standard-mockup-width);
    height: var(--action-standard-mockup-height);
    padding: clamp(16px, 1.7vw, 24px);
    overflow: hidden;
    box-sizing: border-box;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    justify-self: center;
    aspect-ratio: 1;
    border: 1px solid rgba(255, 255, 255, .07);
    border-radius: var(--action-mockup-radius);
    background: #2d2d2d;
    box-shadow: 0 14px 32px rgba(0, 0, 0, .12);
  }
  .action-clipboard-pin-orb {
    position: absolute;
    top: clamp(10px, 1vw, 16px);
    right: clamp(10px, 1vw, 16px);
    display: grid;
    width: clamp(26px, 2.35vw, 36px);
    aspect-ratio: 1;
    place-items: center;
    border: 1px solid rgba(255, 255, 255, .22);
    border-radius: 50%;
    background: #e78a42;
    box-shadow: 0 10px 22px rgba(0, 0, 0, .28);
    color: #fff;
    z-index: 4;
  }
  .action-clipboard-pin-orb svg { width: 52%; height: 52%; stroke-width: 2.3; }
  .action-clipboard-share-orb {
    position: absolute;
    bottom: clamp(10px, 1vw, 16px);
    right: clamp(10px, 1vw, 16px);
    display: grid;
    width: clamp(26px, 2.35vw, 36px);
    aspect-ratio: 1;
    place-items: center;
    border: 1px solid rgba(255, 255, 255, .2);
    border-radius: 50%;
    background: #4688ed;
    box-shadow: 0 10px 22px rgba(0, 0, 0, .24);
    color: #fff;
    z-index: 4;
  }
  .action-clipboard-share-orb svg { width: 46%; height: 46%; stroke-width: 3; }
  .action-clipboard-share-action {
    --share-action-size: clamp(62px, 5.3vw, 82px);
    position: absolute;
    top: 50%;
    left: 50%;
    display: grid;
    width: var(--share-action-size);
    height: var(--share-action-size);
    place-items: center;
    overflow: hidden;
    border-radius: 999px;
    background: #fff;
    box-shadow: 0 14px 30px rgba(0, 0, 0, .2);
    transform: translate(-50%, -50%);
    z-index: 4;
  }
  .action-clipboard-share-plane {
    position: absolute;
    inset: 0;
    width: var(--action-share-plane-size);
    height: var(--action-share-plane-size);
    margin: auto;
    color: #151515;
  }
  .action-clipboard-share-plane { stroke-width: 2.1; }
  .action-clipboard-share-socials {
    position: absolute;
    top: 50%;
    right: var(--action-share-edge);
    left: calc(var(--action-share-plane-edge) + var(--action-share-plane-size) + 16px);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: clamp(8px, .9vw, 14px);
    transform: translateY(-50%);
  }
  .action-clipboard-share-socials > span {
    display: grid;
    width: var(--action-share-social-size);
    aspect-ratio: 1;
    place-items: center;
    border: 0;
    border-radius: 50%;
    background: #ececec;
    color: #151515;
  }
  .action-clipboard-share-socials svg { width: 48%; height: 48%; stroke-width: 2; }
  .action-clipboard-share-socials .action-clipboard-social-instagram { transform: scale(1.15); }
  .action-clipboard-share-socials .action-clipboard-social-mark,
  .action-clipboard-share-socials .action-clipboard-social-mark path { fill: currentColor; stroke: none; }
  .action-clipboard-social-x { font-size: clamp(17px, 1.5vw, 22px); font-weight: 700; line-height: 1; }
  .action-clipboard-export-options {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    gap: var(--action-export-pill-gap);
    transform: translate(-50%, -50%);
    z-index: 4;
  }
  .action-clipboard-export-options > span {
    display: grid;
    width: 100%;
    min-width: 0;
    padding: 28px 56px;
    box-sizing: border-box;
    place-items: center;
    border-radius: 999px;
    background: #fff;
    color: #151515;
    font-size: var(--action-title-font-size, clamp(44px, 5.4vw, 84px));
    font-weight: 690;
    letter-spacing: -.07em;
    line-height: 1.08;
    white-space: nowrap;
  }
  .action-clipboard-export-previews {
    position: absolute;
    right: 0;
    bottom: clamp(26px, 5vh, 68px);
    left: 0;
    display: grid;
    top: auto;
    grid-template-columns: repeat(2, var(--action-standard-mockup-width));
    justify-content: center;
    gap: var(--action-export-pill-gap);
    z-index: 2;
  }
  .action-clipboard-export-previews > span {
    display: grid;
    min-width: 0;
    height: var(--action-standard-mockup-height);
    padding: clamp(18px, 2vw, 30px);
    overflow: hidden;
    box-sizing: border-box;
    align-content: stretch;
    border: 1px solid rgba(255, 255, 255, .07);
    border-radius: 24px;
    background: #2d2d2d;
  }
  .action-clipboard-export-previews i {
    display: block;
    height: clamp(7px, .65vw, 10px);
    border-radius: 999px;
    background: rgba(255, 255, 255, .19);
  }
  .action-clipboard-export-preview--json {
    display: block !important;
  }
  .action-clipboard-json-skeleton {
    display: grid;
    min-width: 0;
    height: 100%;
    grid-template-rows: repeat(3, minmax(0, 1fr));
    gap: clamp(4px, .45vw, 7px);
  }
  .action-clipboard-json-object {
    display: grid;
    min-width: 0;
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: clamp(2px, .24vw, 4px);
    padding-left: 6%;
  }
  .action-clipboard-json-property {
    display: grid;
    min-width: 0;
    grid-template-columns: minmax(24px, .34fr) 4px minmax(42px, .66fr);
    align-items: center;
    gap: clamp(5px, .55vw, 9px);
    padding-left: 4%;
  }
  .action-clipboard-json-property i { width: 100%; }
  .action-clipboard-json-property i:nth-child(2) { width: 4px; height: 4px; border-radius: 50%; background: rgba(255, 255, 255, .38); }
  .action-clipboard-json-property i:last-child { background: rgba(255, 255, 255, .28); }
  .action-clipboard-export-preview--csv { grid-template-rows: auto repeat(4, minmax(0, 1fr)); gap: clamp(9px, 1vw, 15px); }
  .action-clipboard-csv-row { display: grid; min-height: 0; grid-template-columns: repeat(3, minmax(0, 1fr)); align-items: center; gap: clamp(8px, .9vw, 14px); }
  .action-clipboard-csv-row i { width: 100%; }
  .action-clipboard-csv-row--header { margin-bottom: clamp(10px, 1.1vw, 18px); }
  .action-clipboard-csv-row--header i { height: clamp(6px, .55vw, 8px); background: rgba(255, 255, 255, .12); }

  .action-clipboard-voice-lines {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    width: clamp(160px, 22vw, 300px);
    height: clamp(54px, 6vw, 82px);
    align-items: center;
    justify-content: center;
    gap: clamp(4px, .55vw, 8px);
    transform: translate(-50%, -50%);
  }
  .action-clipboard-voice-line {
    display: block;
    width: clamp(5px, .52vw, 8px);
    height: var(--voice-line-height);
    border-radius: 999px;
    background: #151515;
  }
  .action-clipboard-voice-line:nth-child(1), .action-clipboard-voice-line:nth-child(11) { --voice-line-height: 22%; }
  .action-clipboard-voice-line:nth-child(2), .action-clipboard-voice-line:nth-child(10) { --voice-line-height: 48%; }
  .action-clipboard-voice-line:nth-child(3), .action-clipboard-voice-line:nth-child(9) { --voice-line-height: 74%; }
  .action-clipboard-voice-line:nth-child(4), .action-clipboard-voice-line:nth-child(8) { --voice-line-height: 56%; }
  .action-clipboard-voice-line:nth-child(5), .action-clipboard-voice-line:nth-child(7) { --voice-line-height: 92%; }
  .action-clipboard-voice-line:nth-child(6) { --voice-line-height: 68%; }
  .action-clipboard-voice-transcript {
    position: absolute;
    left: 50%;
    bottom: clamp(28px, 5vh, 68px);
    transform: translateX(-50%);
  }
  .action-clipboard-scan-search {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    z-index: 3;
  }
  .action-clipboard-scan-search svg { width: 52%; height: 52%; stroke-width: 1.9; }
  .action-clipboard-scan-phone {
    position: absolute;
    top: 50%;
    left: 50%;
    width: clamp(168px, 14vw, 220px);
    height: clamp(286px, 28vw, 405px);
    overflow: hidden;
    border: 2px solid rgba(255, 255, 255, .44);
    border-radius: 28px;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .07);
    transform: translate(-50%, -50%);
  }
  .action-clipboard-scan-phone::before,
  .action-clipboard-scan-phone::after {
    position: absolute;
    right: 16px;
    left: 16px;
    height: 1px;
    background: rgba(255, 255, 255, .12);
    content: '';
  }
  .action-clipboard-scan-phone::before { top: 22%; }
  .action-clipboard-scan-phone::after { bottom: 22%; }
  .action-clipboard-scan-phone > span { position: absolute; top: 14px; left: 50%; width: 28%; height: 4px; border-radius: 999px; background: rgba(255, 255, 255, .32); transform: translateX(-50%); }
  .action-clipboard-scan-result {
    position: absolute;
    top: 50%;
    left: 50%;
    width: var(--action-standard-mockup-width);
    height: var(--action-standard-mockup-height);
    padding: clamp(16px, 1.7vw, 24px);
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, .07);
    border-radius: 24px;
    background: #2d2d2d;
    overflow: hidden;
    transform: translate(-50%, -50%);
  }
  .action-clipboard-scan-result-title { display: block; width: 48%; height: clamp(16px, 1.4vw, 22px); margin-bottom: clamp(10px, 1vw, 14px); border-radius: 999px; background: rgba(255, 255, 255, .3); }
  .action-clipboard-scan-result-lines { display: grid; gap: clamp(5px, .45vw, 7px); }
  .action-clipboard-scan-result-lines i { display: block; width: 100%; height: clamp(7px, .65vw, 10px); border-radius: 999px; background: rgba(255, 255, 255, .13); }
  .action-clipboard-scan-result-lines i:nth-child(2) { width: 88%; }
  .action-clipboard-scan-result-lines i:nth-child(3) { width: 74%; }
  .action-clipboard-scan-result-lines i:nth-child(4) { width: 92%; }
  .action-clipboard-scan-result-lines i:nth-child(5) { width: 66%; }
  .action-clipboard-scan-result-lines i:nth-child(6) { width: 84%; }
  .action-clipboard-scan-result-lines i:nth-child(7) { width: 53%; }
  .action-clipboard-mockup-skeleton {
    display: block;
    flex: 0 0 auto;
    border-radius: 999px;
    background: rgba(255, 255, 255, .22);
  }
  .action-clipboard-mockup-skeleton--title {
    width: 72%;
    height: clamp(14px, 1.3vw, 19px);
  }
  .action-clipboard-mockup-skeleton-lines {
    display: grid;
    width: 100%;
    min-height: 0;
    gap: 8px;
    margin-top: 6px;
    overflow: hidden;
  }
  .action-clipboard-mockup-skeleton-lines i {
    display: block;
    width: 100%;
    height: clamp(7px, .65vw, 10px);
    border-radius: 999px;
    background: rgba(255, 255, 255, .11);
  }
  .action-clipboard-mockup-skeleton-lines i:nth-child(2) { width: 88%; }
  .action-clipboard-mockup-skeleton-lines i:nth-child(3) { width: 62%; }
  .action-clipboard-mockup-skeleton-lines i:nth-child(4) { width: 76%; }
  .action-clipboard-mockup-skeleton-lines i:nth-child(5) { width: 48%; }
  .action-clipboard-mockup-skeleton-lines i:nth-child(6) { width: 82%; }
  .action-clipboard-mockup-skeleton-lines i:nth-child(7) { width: 55%; }
  .action-clipboard-mockup-link-thumbnail {
    position: relative;
    display: block;
    width: 100%;
    height: 66%;
    flex: 0 0 66%;
    overflow: hidden;
    border-radius: 0;
    background: #545454;
  }
  .action-clipboard-mockup-link-thumbnail::before {
    position: absolute;
    top: 18%;
    right: 16%;
    width: 12%;
    aspect-ratio: 1;
    border-radius: 50%;
    background: rgba(255, 255, 255, .55);
    content: '';
  }
  .action-clipboard-mockup-link-thumbnail::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 56%;
    background: rgba(255, 255, 255, .2);
    clip-path: polygon(0 100%, 34% 38%, 54% 66%, 72% 25%, 100% 100%);
    content: '';
  }
  .action-clipboard-mockup-link-thumbnail i { display: none; }
  .action-clipboard-mockup-link-title,
  .action-clipboard-mockup-link-url { display: block; width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .action-clipboard-mockup--link { padding: 0; gap: 0; overflow: hidden; }
  .action-clipboard-mockup-link-title { width: 66%; height: clamp(10px, .9vw, 14px); margin: clamp(8px, .8vw, 12px) clamp(12px, 1.25vw, 18px) 0; border-radius: 999px; background: rgba(255, 255, 255, .24); }
  .action-clipboard-mockup-link-url { width: 45%; height: clamp(7px, .65vw, 10px); margin: 6px clamp(12px, 1.25vw, 18px) 0; border-radius: 999px; background: rgba(255, 255, 255, .11); }
  .action-clipboard-mockup--color { align-items: center; justify-content: center; }
  .action-clipboard-mockup-color-title,
  .action-clipboard-mockup-color-name { display: block; border-radius: 999px; background: rgba(255, 255, 255, .16); }
  .action-clipboard-mockup-color-title { width: 42%; height: clamp(8px, .7vw, 11px); }
  .action-clipboard-mockup-color-name { width: 76%; height: clamp(16px, 1.35vw, 22px); background: rgba(255, 255, 255, .28); }
  .action-clipboard-mockup-image-placeholder {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: inherit;
    background: #545454;
  }
  .action-clipboard-mockup-image-placeholder::before {
    position: absolute;
    top: 16%;
    right: 15%;
    width: 12%;
    aspect-ratio: 1;
    border-radius: 50%;
    background: rgba(255, 255, 255, .55);
    content: '';
  }
  .action-clipboard-mockup-image-placeholder::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 58%;
    background: rgba(255, 255, 255, .2);
    clip-path: polygon(0 100%, 32% 42%, 54% 68%, 73% 23%, 100% 100%);
    content: '';
  }
  .action-clipboard-mockup-image-placeholder i { display: none; }
  .action-clipboard-mockup--image { padding: 0; overflow: hidden; border: 0; }

  .action-clipboard-content-state {
    display: flex;
    width: min(100%, 650px);
    grid-area: 1 / 1;
    align-self: center;
    justify-self: center;
    flex-direction: column;
    align-items: center;
    padding: clamp(28px, 5vw, 72px);
    opacity: 0;
    filter: blur(18px);
    pointer-events: none;
    text-align: center;
    transform: translate3d(0, 62px, 0) scale(.98);
    transition: opacity .3s ease, filter .42s ease, transform .6s cubic-bezier(.22, 1, .36, 1);
  }

  .action-clipboard-content-state.is-active {
    opacity: 1;
    filter: blur(0);
    pointer-events: auto;
    transform: translate3d(0, 0, 0) scale(1);
  }

  .action-clipboard-content-state.is-before { transform: translate3d(0, -48px, 0) scale(.98); }
  .action-clipboard-content-state h2 { margin: 0; color: #fff; font-size: clamp(50px, 8vw, 126px); font-weight: 690; letter-spacing: -.07em; line-height: .9; }

  .action-clipboard-tab-viewport {
    min-height: 56px;
    overflow: visible;
  }
  .action-clipboard-tab-scroll {
    padding-bottom: 60px;
    margin-bottom: -60px;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
  }
  .action-clipboard-tab-scroll::-webkit-scrollbar { display: none; }
  .action-clipboard-tabs { display: flex; width: max-content; min-width: 100%; justify-content: center; gap: 8px; }

  .action-clipboard-tab {
    --tab-progress: 0;
    position: relative;
    display: grid;
    width: 56px;
    height: 56px;
    flex: 0 0 auto;
    place-items: center;
    padding: 0;
    overflow: hidden;
    border-radius: 999px;
    background: #e7e9f2;
    color: #151515;
    font-size: 16px;
    font-weight: 680;
    letter-spacing: -.02em;
    line-height: 1;
    isolation: isolate;
    opacity: 0;
    filter: blur(13px);
    transform: translate3d(0, 28px, 0);
  }
  .action-clipboard-tab::before {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: #151515;
    content: '';
    transform: translateZ(0) scaleX(var(--tab-progress));
    transform-origin: left center;
    will-change: transform;
  }
  .action-clipboard-tab-label {
    position: relative;
    z-index: 1;
    display: grid;
    width: 24px;
    height: 24px;
    place-items: center;
    color: #fff;
    mix-blend-mode: difference;
  }
  .action-clipboard-tab-label svg { width: 100%; height: 100%; stroke-width: 1.9; }

  .action-clipboard-pin:not(.is-content-revealed) .action-clipboard-content-state {
    opacity: 0;
    filter: blur(18px);
    transform: translate3d(0, 62px, 0) scale(.98);
  }

  @media (max-width: 1199px), (any-pointer: coarse) {
    --action-header-height: 72px;
    --action-pin-gap: 0px;
    --action-pin-top: var(--action-header-height);
    --action-wrap-height: calc(100dvh - var(--action-header-height));
    --action-wrap-height: calc(100svh - var(--action-header-height));
    --action-tablet-frame-height: clamp(480px, 52dvh, 610px);
    --action-tablet-frame-height: clamp(480px, 52svh, 610px);
    min-height: 100dvh;
    min-height: 100svh;
    padding-top: var(--action-pin-top);

    .action-clipboard-pin {
      height: var(--action-wrap-height);
      justify-content: center;
      gap: 12px;
      padding: 20px var(--page-inline-padding);
    }
    .action-clipboard-content-frame {
      width: 100%;
      height: var(--action-tablet-frame-height);
      max-height: calc(100% - 56px);
      flex: 0 1 var(--action-tablet-frame-height);
    }
    .action-clipboard-tab-viewport { display: block; min-height: 48px; flex: 0 0 48px; }
    .action-clipboard-tab { width: 48px; height: 48px; }
    .action-clipboard-tab-label { width: 20px; height: 20px; }
    .action-clipboard-mockup-skeleton-lines {
      flex: 1 1 auto;
      grid-auto-rows: min-content;
      align-content: start;
      gap: 4px;
      margin-top: 0;
    }
    .action-clipboard-mockup-skeleton-lines i { height: clamp(4px, .65vw, 7px); }
    .action-clipboard-mockup--text .action-clipboard-mockup-skeleton-lines i:nth-child(n + 5) { display: none; }
  }

  /* Keep tablet/iPad mockups at a stable width instead of stretching them
     across the whole content frame. Mobile overrides this below. */
  @media (min-width: 761px) and (max-width: 1199px), (min-width: 761px) and (any-pointer: coarse) {
    --action-standard-mockup-size: 160px;
    --action-mockup-gap: 12px;

    .action-clipboard-mockups {
      grid-template-columns: repeat(4, var(--action-standard-mockup-width));
      justify-content: center;
    }
    .action-clipboard-scene--export .action-clipboard-mockups {
      grid-template-columns: repeat(3, var(--action-standard-mockup-width));
    }
    .action-clipboard-export-previews {
      grid-template-columns: repeat(2, var(--action-standard-mockup-width));
    }
  }

  @media (max-width: 760px) {
    --action-mobile-viewport-height: 100svh;
    --action-mobile-safe-bottom: max(12px, env(safe-area-inset-bottom));
    --action-mobile-frame-height: clamp(380px, 105vw, 455px);
    --action-mockup-edge: 16px;
    --action-mockup-gap: 6px;
    --action-standard-mockup-size: 76px;
    --action-share-edge: 12px;
    --action-share-plane-edge: 18px;
    --action-share-expanded-width: 300px;
    --action-share-plane-size: 26px;
    --action-share-social-size: 30px;
    --action-share-social-gap: 8px;
    --action-export-pill-gap: 10px;
    --action-pin-top: var(--action-header-height);
    --action-wrap-height: calc(100vh - var(--action-header-height));
    --action-wrap-height: calc(var(--action-mobile-viewport-height) - var(--action-header-height));
    min-height: 100vh;
    min-height: var(--action-mobile-viewport-height);
    padding-top: var(--action-pin-top);

    .action-clipboard-pin {
      justify-content: center;
      gap: 10px;
      padding: 24px var(--page-gutter) calc(24px + var(--action-mobile-safe-bottom));
    }
    .action-clipboard-content-frame {
      width: 100%;
      height: var(--action-mobile-frame-height);
      max-height: 100%;
      flex: 0 1 var(--action-mobile-frame-height);
      overflow: hidden;
      border-radius: 24px;
      contain: paint;
      isolation: isolate;
    }
    .action-clipboard-content { border-radius: 24px; }
    .action-clipboard-pin.is-content-revealed .action-clipboard-content {
      width: 100% !important;
      height: 100% !important;
    }
    .action-clipboard-content-state { padding: 28px 22px; }
    .action-clipboard-content-state h2 { font-size: clamp(46px, 14vw, 74px); }
    .action-clipboard-scene-title { gap: 3px; }
    .action-clipboard-scene-icon { width: 22px; height: 22px; }
    .action-clipboard-title-words { font-size: var(--action-title-font-size, clamp(18px, 5vw, 21px)); letter-spacing: -.055em; }
    /* Hidden title text still has horizontal padding. Cancel that reserved
       width while only the icon is visible so every title icon is centered. */
    .action-clipboard-title-words { margin-left: -24px; }
    .action-clipboard-mockups { right: 16px; bottom: 18px; left: 16px; gap: 8px; }
    .action-clipboard-mockup { --action-mockup-radius: 12px; height: var(--action-standard-mockup-height); padding: 6px; }
    .action-clipboard-mockups { grid-template-columns: repeat(4, var(--action-standard-mockup-width)); gap: 6px; justify-content: center; }
    .action-clipboard-scene--export .action-clipboard-mockups {
      right: 0;
      left: 0;
      width: auto;
      grid-template-columns: repeat(3, var(--action-standard-mockup-width));
    }
    .action-clipboard-mockup { gap: 5px; }
    .action-clipboard-mockup--image { padding: 0; border: 0; }
    .action-clipboard-mockup--link { padding: 0; gap: 0; }
    .action-clipboard-mockup-link-thumbnail { height: 58%; flex-basis: 58%; }
    .action-clipboard-mockup-link-title { height: 6px; margin: 6px 7px 0; }
    .action-clipboard-mockup-link-url { height: 4px; margin: 4px 7px 0; }
    .action-clipboard-mockup-skeleton--title { height: 8px; }
    .action-clipboard-mockup-skeleton-lines { gap: 4px; margin-top: 2px; }
    .action-clipboard-mockup-skeleton-lines i { height: 4px; }
    .action-clipboard-mockup--text .action-clipboard-mockup-skeleton-lines i:nth-child(n + 4) { display: none; }
    .action-clipboard-pin-orb { top: 6px; right: 6px; width: 20px; }
    .action-clipboard-share-orb { right: 6px; bottom: 6px; width: 20px; }
    .action-clipboard-export-options { gap: var(--action-export-pill-gap); }
    .action-clipboard-export-options > span { min-width: 0; padding: 16px 18px; font-size: var(--action-title-font-size, clamp(18px, 5vw, 21px)); }
    .action-clipboard-export-previews { top: auto; right: 0; bottom: 18px; left: 0; gap: var(--action-export-pill-gap); }
    .action-clipboard-export-previews > span { height: var(--action-standard-mockup-height); padding: 6px; border-radius: 12px; }
    .action-clipboard-export-previews i { height: 5px; }
    .action-clipboard-json-property { grid-template-columns: minmax(0, .34fr) 3px minmax(0, .66fr); gap: 3px; padding-left: 4%; }
    .action-clipboard-json-property i:nth-child(2) { width: 3px; height: 3px; }
    .action-clipboard-export-preview--csv { gap: 4px; }
    .action-clipboard-csv-row { gap: 4px; }
    .action-clipboard-csv-row--header { margin-bottom: 4px; }
    .action-clipboard-csv-row--header i { height: 4px; }
    .action-clipboard-voice-lines { width: 104px; height: 38px; gap: 3px; }
    .action-clipboard-voice-line { width: 4px; }
    .action-clipboard-voice-transcript { right: auto; bottom: 18px; left: 50%; transform: translateX(-50%); }
    .action-clipboard-scan-phone { width: 176px; height: 278px; border-radius: 22px; }
    .action-clipboard-scan-result { width: var(--action-standard-mockup-width); height: var(--action-standard-mockup-height); padding: 6px; border-radius: 12px; }
    .action-clipboard-scan-result-title { height: 8px; margin-bottom: 6px; }
    .action-clipboard-scan-result-lines { gap: 4px; }
    .action-clipboard-scan-result-lines i { height: 4px; max-width: 100%; }
    .action-clipboard-scan-result-lines i:nth-child(n + 4) { display: none; }
    .action-clipboard-tab-viewport { min-height: 32px; flex-basis: 32px; }
    .action-clipboard-tabs { justify-content: center; gap: 4px; padding: 0; }
    .action-clipboard-tab { width: 32px; height: 32px; padding: 0; }
    .action-clipboard-tab-label { width: 14px; height: 14px; }
  }

  @media (max-width: 360px) {
    --action-share-edge: 10px;
    --action-share-plane-edge: 14px;
    --action-share-plane-size: 24px;
    --action-share-social-size: 28px;
    --action-share-social-gap: 7px;
  }

  @media (prefers-reduced-motion: reduce) {
    .action-clipboard-content-state { filter: none; transition: none; }
    .action-clipboard-content { filter: none; }
  }
`;

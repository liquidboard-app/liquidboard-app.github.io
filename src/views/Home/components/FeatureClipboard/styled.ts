import styled from 'styled-components';

export const FeatureClipboardSection = styled.section`
  --feature-header-height: 75px;
  position: relative;
  min-height: calc(100dvh - var(--feature-header-height));
  min-height: calc(100svh - var(--feature-header-height));
  margin-top: 0;
  overflow-x: clip;
  overflow-y: visible;
  background: #fff;
  color: #151515;

  .feature-clipboard-pin {
    --feature-pin-block-padding: 46px;
    position: relative;
    display: grid;
    height: calc(100dvh - var(--feature-header-height));
    min-height: calc(100dvh - var(--feature-header-height));
    height: calc(100svh - var(--feature-header-height));
    min-height: calc(100svh - var(--feature-header-height));
    padding: var(--feature-pin-block-padding) 0;
    box-sizing: border-box;
    place-items: center;
    /* The rail owns its own vertical clipping so it can disappear precisely
       at the lower edge of the fixed header. */
    overflow: visible;
  }
  .feature-clipboard-layout {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: minmax(0, 1fr);
    gap: 0;
    align-items: stretch;
  }
  .feature-clipboard-copy {
    position: relative;
    width: 100%;
    min-height: 0;
    align-self: stretch;
    /* Clip the rail at the viewport's side edges only. Its vertical movement
       must remain visible so cards can move behind the fixed header. */
    /* Let cards travel through the entire progressive-header blur before
       clipping. The copy starts after the pin padding, so account for that
       padding as well as the fixed header height to avoid a white cut line. */
    overflow: visible;
    clip-path: inset(calc((var(--feature-header-height) + var(--feature-pin-block-padding)) * -1) -100vmax -100vmax);
  }
  .feature-clipboard-track { display: flex; width: max-content; height: 100%; }
  .feature-clipboard-copy-item {
    position: relative;
    display: flex;
    width: 100vw;
    height: 100%;
    flex: 0 0 100vw;
    padding: 0 0 clamp(64px, 8vw, 110px);
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
  }
  .feature-clipboard-content {
    width: 100%;
    padding-inline: var(--page-inline-padding);
    box-sizing: border-box;
  }
  .feature-clipboard-content.is-text-feature,
  .feature-clipboard-content.is-image-feature,
  .feature-clipboard-content.is-sticker-feature {
    --feature-content-inline: var(--page-inline-padding);
    position: relative;
    display: block;
    height: 100%;
  }
  .feature-clipboard-content.is-text-feature .feature-clipboard-copy-content,
  .feature-clipboard-content.is-image-feature .feature-clipboard-copy-content,
  .feature-clipboard-content.is-sticker-feature .feature-clipboard-copy-content {
    position: absolute;
    top: 50%;
    left: var(--feature-content-inline);
    width: calc((100% - (var(--feature-content-inline) * 2)) / 2);
    max-width: none;
    padding-inline: clamp(32px, 3vw, 48px);
    box-sizing: border-box;
    --feature-copy-scroll-y: 0px;
    --feature-copy-scroll-x: 0px;
    --feature-copy-align: center;
    transform: translate(var(--feature-copy-scroll-x), calc(-50% + var(--feature-copy-scroll-y)));
    will-change: transform;
  }
  .feature-text-list-viewport,
  .feature-image-list-viewport,
  .feature-sticker-list-viewport {
    position: absolute;
    /* The content area begins after the pin padding. Lift the viewport back
       to the pin edge so its top clip aligns with the fixed header itself. */
    top: calc(var(--feature-pin-block-padding) * -1);
    right: var(--feature-content-inline);
    width: calc((100% - (var(--feature-content-inline) * 2)) / 2);
    height: calc(100% + (var(--feature-pin-block-padding) * 2));
    overflow: visible;
    /* This is a visual rail, not another scrolling layout. Keep the long
       off-screen cards from expanding the document's scrollable box. */
    contain: layout;
  }
  .feature-text-list-stage,
  .feature-image-list-stage,
  .feature-sticker-list-stage {
    width: 100%;
    height: 100%;
    transform: none;
    transform-origin: center bottom;
  }
  .feature-text-list-track {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: clamp(28px, 2vw, 40px);
    /* The right card in every row is intentionally staggered down. Include
       that offset in the grid row gap so it never collides diagonally with
       the next row as the rail reaches the narrow part of its arc. */
    row-gap: calc(clamp(18px, 1.4vw, 28px) + clamp(16px, 1.3vw, 24px));
    padding: 0 clamp(34px, 3.1vw, 52px) 76px;
    align-items: start;
  }
  .feature-image-list-track {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: clamp(24px, 1.85vw, 36px);
    row-gap: clamp(12px, 1vw, 20px);
    padding: 0 clamp(34px, 3.1vw, 52px) 76px;
    align-items: start;
  }
  .feature-sticker-list-track {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: clamp(24px, 1.85vw, 36px);
    row-gap: clamp(12px, 1vw, 20px);
    padding: 0 clamp(34px, 3.1vw, 52px) 76px;
    align-items: start;
  }
  .feature-text-list-item {
    min-height: 198px;
    padding: 20px 22px;
    border-radius: 22px;
    background: #fff;
    box-sizing: border-box;
    overflow: hidden;
    transform: translateY(var(--feature-card-stagger, 0px)) translateX(var(--feature-card-arc-x, 0px)) scale(var(--feature-card-scale, 1));
    transform-origin: right center;
    will-change: auto;
  }
  .feature-text-list-item:nth-child(even) { --feature-card-stagger: 28px; min-height: 216px; transform-origin: left center; }
  .feature-text-list-item-link {
    display: flex;
    height: clamp(184px, 15.5vw, 220px);
    min-height: 0;
    flex-direction: column;
    padding: 0;
  }
  .feature-text-list-item-link img { display: block; width: 100%; min-height: 0; flex: 1 1 auto; object-fit: cover; }
  .feature-text-list-item-link div { display: grid; gap: 2px; padding: 11px 13px 13px; background: #fff; }
  .feature-text-list-item-link strong { color: #151515; font-size: clamp(15px, 1.15vw, 19px); font-weight: 680; letter-spacing: -.04em; line-height: 1.1; }
  .feature-text-list-item-link span { color: rgba(21, 21, 21, .52); font-size: clamp(11px, .82vw, 13px); letter-spacing: -.02em; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .feature-text-list-item-color { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 9px; color: #151515; text-align: center; }
  .feature-text-list-item-color > span { font-size: clamp(14px, 1.05vw, 18px); font-weight: 640; letter-spacing: -.04em; }
  .feature-text-list-item-color > strong { font-size: clamp(21px, 1.7vw, 29px); font-weight: 650; letter-spacing: -.055em; line-height: 1; }
  .feature-text-list-item-color.is-light { color: #fff; }
  .feature-image-list-item {
    height: clamp(190px, 17vw, 270px);
    margin: 0;
    overflow: hidden;
    border-radius: 22px;
    background: #ececec;
    transform: translateX(var(--feature-image-arc-x, 0px)) scale(var(--feature-image-scale, 1));
    transform-origin: right center;
    will-change: auto;
  }
  .feature-image-list-item:nth-child(even) { margin-top: clamp(20px, 1.8vw, 32px); transform-origin: left center; }
  .feature-image-list-item img { display: block; width: 100%; height: 100%; object-fit: cover; }
  .feature-sticker-list-item {
    height: clamp(190px, 17vw, 270px);
    margin: 0;
    padding: 7px;
    overflow: hidden;
    border-radius: clamp(24px, 2.8vw, 42px);
    box-sizing: border-box;
    background: #fff;
    transform: translateX(var(--feature-sticker-arc-x, 0px)) scale(var(--feature-sticker-scale, 1));
    transform-origin: right center;
    will-change: auto;
    box-shadow: 0 12px 24px rgba(21, 21, 21, .09);
  }
  .feature-sticker-list-item:nth-child(even) { margin-top: clamp(20px, 1.8vw, 32px); transform-origin: left center; }
  .feature-sticker-list-item img { display: block; width: 100%; height: 100%; border-radius: calc(clamp(24px, 2.8vw, 42px) - 7px); object-fit: cover; }
  .feature-text-list-item h3,
  .feature-text-list-item p { max-width: 100%; min-width: 0; margin: 0; overflow-wrap: anywhere; word-break: break-word; }
  .feature-text-list-item h3 { color: #151515; font-size: clamp(17px, 1.35vw, 22px); font-weight: 680; letter-spacing: -.045em; line-height: 1.1; }
  .feature-text-list-item p { margin-top: 9px; color: rgba(21, 21, 21, .6); font-size: clamp(13px, 1vw, 16px); letter-spacing: -.025em; line-height: 1.3; }
  h2 {
    max-width: 760px;
    margin: 0;
    font-family: 'Google Sans Flex', sans-serif;
    font-size: clamp(46px, 5.6vw, 90px);
    font-weight: 740;
    letter-spacing: -.065em;
    line-height: 1.02;
    text-wrap: balance;
    text-align: left;
  }
  .feature-clipboard-content.is-text-feature h2,
  .feature-clipboard-content.is-image-feature h2,
  .feature-clipboard-content.is-sticker-feature h2 {
    font-size: clamp(38px, 4.4vw, 72px);
    line-height: 1.1;
  }
  .feature-clipboard-content.is-text-feature h2,
  .feature-clipboard-content.is-image-feature h2,
  .feature-clipboard-content.is-sticker-feature h2 { text-align: var(--feature-copy-align, center); }
  .feature-clipboard-description {
    max-width: 100%;
    margin: clamp(16px, 1.8vw, 28px) 0 0;
    font-size: clamp(17px, 1.55vw, 24px);
    font-weight: 560;
    letter-spacing: -.045em;
    line-height: 1.26;
    text-align: var(--feature-copy-align, center);
  }
  .feature-split-text {
    display: block;
  }
  .feature-split-text:lang(hi),
  .feature-split-text:lang(bn),
  .feature-split-text:lang(th) {
    letter-spacing: normal;
  }
  .feature-split-text-word-wrap {
    display: inline-block;
    max-width: 100%;
    /* Extend the reveal mask beyond the advance box: negative tracking,
       accents and fallback fonts can paint outside both word edges. */
    overflow: visible;
    clip-path: inset(-.3em -.25em);
    vertical-align: bottom;
  }
  .feature-split-text-word {
    display: inline-block;
    max-width: 100%;
  }
  .feature-split-text-grapheme {
    display: inline-block;
    will-change: auto;
  }

  @media (max-width: 1199px), (any-pointer: coarse) {
    --feature-header-height: 72px;
    margin-top: clamp(64px, 9vw, 112px);
    margin-bottom: clamp(64px, 9vw, 112px);
    .feature-clipboard-pin {
      --feature-pin-block-padding: 0px;
      display: block;
      height: auto;
      min-height: 0;
      padding: 0;
    }
    .feature-clipboard-layout { display: block; width: 100%; height: auto; }
    .feature-clipboard-copy { width: 100%; height: auto; min-height: 0; clip-path: none; }
    .feature-clipboard-track { display: block; width: 100%; height: auto; }
    .feature-clipboard-copy-item {
      display: block;
      width: 100%;
      height: auto;
      padding: 0 0 clamp(96px, 14vw, 160px);
      text-align: center;
    }
    .feature-clipboard-content { width: 100%; height: auto; padding-inline: 0; }
    .feature-clipboard-content.is-text-feature,
    .feature-clipboard-content.is-image-feature,
    .feature-clipboard-content.is-sticker-feature {
      --feature-content-inline: clamp(18px, 3vw, 30px);
      height: auto;
    }
    .feature-clipboard-content.is-text-feature .feature-clipboard-copy-content,
    .feature-clipboard-content.is-image-feature .feature-clipboard-copy-content,
    .feature-clipboard-content.is-sticker-feature .feature-clipboard-copy-content {
      position: relative;
      top: auto;
      left: auto;
      display: flex;
      width: 100%;
      min-height: 0;
      padding: calc(var(--feature-header-height) + clamp(40px, 6vw, 72px)) var(--feature-content-inline) clamp(44px, 6vw, 72px);
      box-sizing: border-box;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transform: none;
    }
    .feature-clipboard-copy-content > * {
      width: min(78vw, 628px);
      max-width: 100%;
      box-sizing: border-box;
      padding-inline: 8px;
    }
    .feature-clipboard-content.is-text-feature h2,
    .feature-clipboard-content.is-image-feature h2,
    .feature-clipboard-content.is-sticker-feature h2,
    .feature-clipboard-description { text-align: center; }
    .feature-clipboard-description { margin-inline: auto; }
    h2 { font-size: clamp(44px, 6vw, 70px); }
    .feature-clipboard-content.is-text-feature h2,
    .feature-clipboard-content.is-image-feature h2,
    .feature-clipboard-content.is-sticker-feature h2 { font-size: clamp(37px, 4.7vw, 59px); line-height: 1.1; }
    .feature-text-list-viewport,
    .feature-image-list-viewport,
    .feature-sticker-list-viewport {
      position: relative;
      top: auto;
      right: auto;
      left: auto;
      width: min(74vw, 720px);
      height: auto;
      min-height: 0;
      margin-inline: auto;
      overflow: visible;
      contain: layout style;
      transform: none;
    }
    .feature-text-list-stage,
    .feature-image-list-stage,
    .feature-sticker-list-stage {
      width: 100%;
      height: auto;
      margin: 0;
      transform: none;
    }
    .feature-text-list-item,
    .feature-image-list-item,
    .feature-sticker-list-item {
      z-index: var(--feature-item-reveal-z, 1);
      contain: layout paint;
      content-visibility: visible;
      backface-visibility: hidden;
      transform: none;
      will-change: auto;
    }
    .feature-text-list-track { --feature-text-card-height: clamp(188px, 22vw, 208px); }
    .feature-text-list-item,
    .feature-text-list-item-text,
    .feature-text-list-item-link,
    .feature-text-list-item-color {
      height: var(--feature-text-card-height);
      min-height: 0;
      max-height: var(--feature-text-card-height);
      box-sizing: border-box;
    }
    .feature-text-list-item {
      text-align: left;
    }
    .feature-text-list-item:nth-child(even) {
      height: var(--feature-text-card-height);
      min-height: 0;
      max-height: var(--feature-text-card-height);
    }
    .feature-text-list-item-color { text-align: center; }
    .feature-text-list-track,
    .feature-image-list-track,
    .feature-sticker-list-track {
      column-gap: clamp(14px, 2vw, 20px);
      row-gap: clamp(6px, .8vw, 10px);
    }
    /* Keep the static compact grid useful without rendering the full desktop
       collection. Desktop retains every example. */
    .feature-text-list-track > :nth-child(n + 25),
    .feature-image-list-track > :nth-child(n + 25),
    .feature-sticker-list-track > :nth-child(n + 25) { display: none; }
    .feature-text-list-item:nth-child(even),
    .feature-image-list-item:nth-child(even),
    .feature-sticker-list-item:nth-child(even) {
      --feature-compact-stagger-y: clamp(30px, 3vw, 38px);
      margin-top: 0;
      transform-origin: center center;
    }
    .feature-sticker-list-item { box-shadow: 0 16px 30px rgba(21, 21, 21, .13); }
    .feature-image-list-item,
    .feature-sticker-list-item { height: clamp(210px, 21vw, 330px); }
    .feature-image-list-item img {
      transform: none;
      will-change: auto;
    }
    .feature-image-list-item {
      transform: translate(
        var(--feature-item-launch-x, 0px),
        calc(var(--feature-compact-stagger-y, 0px) + var(--feature-item-launch-y, 0px))
      ) scale(var(--feature-item-reveal-scale, 1));
      transform-origin: center center;
      will-change: transform;
    }
    .feature-text-list-item,
    .feature-sticker-list-item {
      transform: translate(
        var(--feature-item-launch-x, 0px),
        calc(
          var(--feature-compact-stagger-y, 0px)
          + var(--feature-item-launch-y, 0px)
        )
      ) scale(var(--feature-item-reveal-scale, 1));
      transform-origin: center center;
      will-change: transform;
    }
  }

  @media (min-width: 768px) and (max-width: 1199px),
    (min-width: 768px) and (any-pointer: coarse) {
    .feature-text-list-viewport,
    .feature-image-list-viewport,
    .feature-sticker-list-viewport {
      /* Match the roughly 560px desktop rail so two-column cards keep the
         same visual width instead of expanding with the tablet viewport. */
      width: min(68vw, 560px);
    }
  }

  @media (max-width: 767px) {
    --feature-header-height: 75px;
    .feature-clipboard-pin {
      --feature-pin-block-padding: 0px;
      min-height: 0;
      padding: 0;
    }
    .feature-clipboard-layout,
    .feature-clipboard-copy { height: auto; min-height: 0; }
    .feature-clipboard-content { padding-inline: 0; }
    h2 { max-width: 360px; margin-inline: auto; font-size: clamp(43px, 12.5vw, 62px); line-height: .98; }
    .feature-clipboard-content.is-text-feature h2,
    .feature-clipboard-content.is-image-feature h2,
    .feature-clipboard-content.is-sticker-feature h2 { font-size: clamp(32px, 8.8vw, 42px); line-height: 1.08; }
    .feature-clipboard-description {
      max-width: min(84vw, 330px);
      margin-top: 14px;
      font-size: clamp(15px, 4vw, 16px);
      line-height: 1.35;
    }
    .feature-clipboard-content.is-text-feature,
    .feature-clipboard-content.is-image-feature,
    .feature-clipboard-content.is-sticker-feature { --feature-content-inline: 0; }
    .feature-clipboard-content.is-text-feature .feature-clipboard-copy-content,
    .feature-clipboard-content.is-image-feature .feature-clipboard-copy-content,
    .feature-clipboard-content.is-sticker-feature .feature-clipboard-copy-content {
      position: relative;
      top: auto;
      left: auto;
      width: 100%;
      min-height: 0;
      padding: calc(var(--feature-header-height) + 32px) clamp(12px, 3vw, 16px) 36px;
      text-align: center;
      transform: none;
    }
    .feature-text-list-viewport,
    .feature-image-list-viewport,
    .feature-sticker-list-viewport {
      position: relative;
      top: auto;
      left: auto;
      width: min(90vw, 410px);
      height: auto;
      min-height: 0;
      margin-inline: auto;
      transform: none;
    }
    .feature-text-list-stage,
    .feature-image-list-stage,
    .feature-sticker-list-stage {
      position: relative;
      left: auto;
      width: 100%;
      transform: none;
    }
    .feature-text-list-track,
    .feature-image-list-track,
    .feature-sticker-list-track { column-gap: 16px; padding: 0 8px 46px; }
    .feature-text-list-track > :nth-child(n + 21),
    .feature-image-list-track > :nth-child(n + 21),
    .feature-sticker-list-track > :nth-child(n + 21) { display: none; }
    .feature-text-list-track { --feature-text-card-height: 160px; row-gap: 15px; }
    .feature-image-list-track,
    .feature-sticker-list-track { row-gap: 15px; }
    .feature-text-list-item { height: var(--feature-text-card-height); min-height: 0; max-height: var(--feature-text-card-height); padding: 14px 16px; border-radius: 17px; }
    .feature-text-list-item:nth-child(even) { --feature-compact-stagger-y: 24px; min-height: 0; margin-top: 0; }
    .feature-text-list-item-link { height: var(--feature-text-card-height); min-height: 0; max-height: var(--feature-text-card-height); padding: 0; }
    .feature-text-list-item-link div { padding: 7px 9px 9px; }
    .feature-text-list-item-link strong { font-size: 13px; }
    .feature-text-list-item-link span { font-size: 10px; }
    .feature-text-list-item-text h3,
    .feature-text-list-item-text p {
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
    }
    .feature-text-list-item-text {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 10px 14px 7px;
    }
    .feature-text-list-item-text h3 {
      display: block;
      overflow: hidden;
      font-size: clamp(12px, 3.2vw, 13px);
      line-height: 1.15;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .feature-text-list-item-text p {
      margin-top: 7px;
      font-size: clamp(10.5px, 2.85vw, 11.5px);
      line-height: 1.28;
      -webkit-line-clamp: 8;
    }
    .feature-text-list-item-color { gap: 7px; }
    .feature-text-list-item-color > span { font-size: clamp(12px, 3.2vw, 13px); }
    .feature-text-list-item-color > strong { font-size: clamp(16px, 4.2vw, 17px); }
    .feature-image-list-item { height: 160px; border-radius: 17px; }
    .feature-image-list-item img { transform: none; }
    .feature-image-list-item:nth-child(even) { --feature-compact-stagger-y: 24px; margin-top: 0; }
    .feature-sticker-list-item { height: 160px; padding: 4px; border-radius: 24px; }
    .feature-sticker-list-item:nth-child(even) { --feature-compact-stagger-y: 24px; margin-top: 0; }
    .feature-sticker-list-item img { border-radius: 20px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .feature-clipboard-copy-item,
    .feature-clipboard-phone { transition: none; }
    .feature-split-text-grapheme { transform: none !important; opacity: 1 !important; }
  }
`;

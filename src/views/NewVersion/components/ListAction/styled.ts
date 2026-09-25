import styled from 'styled-components';

export const ListActionSection = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  width: 100%;
  min-width: 0;
  gap: clamp(18px, 2.4vw, 32px);
  padding: 110px 0 118px;
  overflow: hidden;
  background: var(--bg);
  color: var(--text);

  .action-intro { position: relative; z-index: 10; display: flex; width: 100%; min-width: 0; flex-direction: column; align-items: center; margin: 0 auto 36px; padding: 0 20px; text-align: center; }
  .action-intro h2 { position: relative; display: inline-flex; max-width: 980px; align-items: center; margin: 0; padding: .12em .4em .16em; overflow: visible; border-radius: 999px; background: #f8fafc; color: #111318; font-size: clamp(46px, 4.2vw, 72px); font-weight: 800; letter-spacing: -.045em; line-height: 1.08; }
  :root[data-theme='light'] & .action-intro h2 { background: #111318; color: #fff; }
  .counter-window { display: block; width: 2ch; min-width: 2ch; height: 1.36em; margin: -.12em 0 -.16em; overflow: hidden; font-variant-numeric: tabular-nums; }
  .counter-track { display: flex; width: 100%; flex-direction: column; align-items: center; will-change: transform, filter; }
  .counter-digit { display: flex; width: 100%; height: 1.36em; flex: 0 0 1.36em; align-items: center; justify-content: center; line-height: 1.08em; }
  .counter-cursor-icon { position: absolute; top: 50%; display: block; width: .42em; height: .42em; transition: left .2s ease, right .2s ease; }
  .counter-cursor-icon-left { left: -.28em; transform: translateY(-50%) rotate(45deg); }
  .counter-cursor-icon-right { right: -.28em; transform: translateY(-50%) rotate(-135deg); }
  @media (hover: hover) and (pointer: fine) {
    .action-intro h2:hover .counter-cursor-icon-left { left: -.22em; }
    .action-intro h2:hover .counter-cursor-icon-right { right: -.22em; }
  }
  .action-intro p { max-width: 660px; margin: 18px 0 0; color: var(--muted-text); font-size: clamp(16px, 1.2vw, 19px); font-weight: 500; line-height: 1.5; }
  .action-filters { position: relative; z-index: 10; display: flex; width: 100%; min-width: 0; align-items: center; justify-content: center; gap: clamp(18px, 2vw, 30px); margin-bottom: 14px; }
  .action-filters button { display: inline-flex; align-items: center; justify-content: center; gap: 10px; padding: 0 2px; border: 0; background: transparent; color: var(--text); font-size: clamp(15px, 1.15vw, 18px); font-weight: 700; transition: opacity .2s ease; -webkit-tap-highlight-color: transparent; }
  @media (hover: hover) and (pointer: fine) {
    .action-filters button:hover:not(:disabled) { opacity: .78; }
  }
  .action-filters button:disabled { cursor: wait; opacity: 1; }
  .switch-track { position: relative; width: 52px; height: 30px; flex: 0 0 52px; border-radius: 999px; background: #56585c; transition: background .35s ease; }
  :root[data-theme='light'] & .switch-track { background: #d8d8de; }
  .switch-track > span { position: absolute; top: 4px; left: 4px; width: 22px; height: 22px; border-radius: 50%; background: #fff; transition: transform .35s cubic-bezier(.2,.8,.2,1); }
  .action-filters button.active .switch-track { background: #1478ee; }
  .action-filters button.active .switch-track > span { transform: translateX(22px); }
  .action-row { position: relative; z-index: 0; width: 100%; min-width: 0; overflow: visible; }
  @media (min-width: 1025px) {
    .action-row {
      -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, .12) 3%, rgba(0, 0, 0, .45) 6%, #000 10%, #000 90%, rgba(0, 0, 0, .45) 94%, rgba(0, 0, 0, .12) 97%, transparent 100%);
      mask-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, .12) 3%, rgba(0, 0, 0, .45) 6%, #000 10%, #000 90%, rgba(0, 0, 0, .45) 94%, rgba(0, 0, 0, .12) 97%, transparent 100%);
    }
  }
  .action-track { display: flex; width: max-content; will-change: transform; }
  .action-set { display: flex; flex: 0 0 auto; align-items: center; gap: clamp(8px, 1vw, 14px); padding-right: clamp(8px, 1vw, 14px); }
  .action-item { display: inline-flex; flex: 0 0 auto; align-items: center; gap: 12px; color: var(--text); font-size: clamp(24px, 2.45vw, 38px); font-weight: 750; letter-spacing: -.045em; white-space: nowrap; transition: filter .25s ease, opacity .25s ease; }
  &[data-filter-phase='accelerating'] .action-item { filter: blur(5px); opacity: .24; transition-duration: .7s; transition-timing-function: cubic-bezier(.2,.8,.2,1); }
  &[data-filter-phase='swapping'] .action-item { filter: blur(5px); opacity: .24; transition: none; }
  &[data-filter-phase='decelerating'] .action-item { filter: blur(0); opacity: 1; transition-duration: 1.5s; transition-timing-function: cubic-bezier(.2,.65,.3,1); }
  .action-item > span { display: block; white-space: nowrap; text-transform: capitalize; }
  .action-item > span.preserve-brand-case { text-transform: none; }
  .action-item svg { width: clamp(28px, 2.5vw, 38px); height: clamp(28px, 2.5vw, 38px); flex: 0 0 auto; }
  .action-custom-icon { display: block; width: clamp(28px, 2.5vw, 38px); height: clamp(28px, 2.5vw, 38px); flex: 0 0 auto; object-fit: contain; }
  .action-item svg path { paint-order: stroke fill; stroke: color-mix(in srgb, currentColor 76%, var(--bg)); stroke-width: .65px; stroke-linejoin: round; }
  @media (max-width: 700px) {
    gap: 20px;
    padding: 88px 0 82px;
    .action-intro { margin-bottom: 28px; padding-inline: 18px; }
    .action-intro h2 { font-size: clamp(34px, 8vw, 48px); }
    .action-intro p { max-width: 360px; margin-top: 15px; font-size: 15px; }
    .action-filters { flex-direction: row; align-items: flex-start; gap: 28px; margin-bottom: 12px; }
    .action-filters button { flex-direction: column; gap: 8px; font-size: 15px; }
    .switch-track { width: 46px; height: 28px; flex-basis: 28px; }
    .switch-track > span { width: 20px; height: 20px; }
    .action-filters button.active .switch-track > span { transform: translateX(18px); }
    .action-set { gap: 8px; padding-right: 8px; }
    .action-item { gap: 10px; font-size: 22px; }
    .action-item svg { width: 25px; height: 25px; }
    .action-custom-icon { width: 25px; height: 25px; }
  }
  @media (max-width: 1024px) {
    .action-item { transition: none !important; filter: none !important; opacity: 1 !important; }
  }
  @media (prefers-reduced-motion: reduce) {
    .action-track { transform: none !important; }
    .action-item { transition: none !important; filter: none !important; opacity: 1 !important; }
  }
`;

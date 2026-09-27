import styled from 'styled-components';

export const ListMarqueeSection = styled.section`
  padding: 0 0 50px;
  overflow: hidden;
  background: var(--bg);
  color: var(--text);

  .filters { display: flex; justify-content: center; gap: clamp(18px, 2vw, 30px); padding: 56px 20px 38px; }
  .filters button { display: inline-flex; align-items: center; gap: 10px; justify-content: center; padding: 0 2px; border: 0; border-radius: 0; background: transparent; color: var(--text); font-size: clamp(15px, 1.15vw, 18px); font-weight: 700; transition: opacity .2s ease; -webkit-tap-highlight-color: transparent; }
  @media (hover: hover) and (pointer: fine) {
    .filters button:hover:not(:disabled) { opacity: .78; }
  }
  .switch-track { position: relative; width: 52px; height: 30px; flex: 0 0 52px; border-radius: 999px; background: #56585c; transition: background var(--filter-transition-duration, 1080ms) ease; }
  :root[data-theme='light'] & .switch-track { background: #d8d8de; }
  .switch-track span { position: absolute; top: 4px; left: 4px; width: 22px; height: 22px; border-radius: 50%; background: white; transition: transform var(--filter-transition-duration, 1080ms) ease; }
  .filters button:disabled { cursor: wait; opacity: 1; }
  .filters button.active .switch-track { background: #1478ee; }
  .filters button.active .switch-track span { transform: translateX(22px); }
  .rows { display: grid; gap: 18px; }
  .row { position: relative; width: 100%; min-width: 0; overflow: hidden; }
  @media (min-width: 1025px) {
    .row {
      -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, .12) 3%, rgba(0, 0, 0, .45) 6%, #000 10%, #000 90%, rgba(0, 0, 0, .45) 94%, rgba(0, 0, 0, .12) 97%, transparent 100%);
      mask-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, .12) 3%, rgba(0, 0, 0, .45) 6%, #000 10%, #000 90%, rgba(0, 0, 0, .45) 94%, rgba(0, 0, 0, .12) 97%, transparent 100%);
    }
  }
  .row-track { position: relative; display: flex; width: max-content; animation: row-forward 42s linear infinite; will-change: transform; }
  .row-set { display: flex; flex: 0 0 auto; gap: 14px; padding-right: 14px; }
  .row-reverse .row-track { animation-name: row-reverse; }
  .card { width: 172px; height: 172px; flex: 0 0 auto; overflow: hidden; border-radius: 16px; contain: layout paint; }
  .card.is-entering { opacity: 0; filter: blur(7px); }
  .card-text { display: grid; grid-template-rows: auto minmax(0, 1fr); padding: 12px; background: var(--surface); border: 1px solid var(--header-border); }
  .card-text strong { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 1; font-size: 14px; letter-spacing: -.035em; line-height: 1.2; }
  .card-text span { display: -webkit-box; min-height: 0; margin-top: 8px; overflow: hidden; color: var(--muted-text); font-size: 12px; line-height: 1.25; -webkit-box-orient: vertical; -webkit-line-clamp: 7; }
  .card-image { background: var(--surface); }
  .card-image img { width: 100%; height: 100%; object-fit: cover; }
  .card-sticker { display: flex; align-items: center; justify-content: center; padding: 12px; background: transparent; }
  .card-sticker img { display: block; width: 100%; height: 100%; margin: auto; object-fit: contain; object-position: center; }
  @keyframes row-forward { from { transform: translateX(-50%); } to { transform: translateX(0); } }
  @keyframes row-reverse { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  @media (prefers-reduced-motion: reduce) { .row-track { animation: none; } }
  @media (max-width: 600px) {
    .filters { flex-direction: row; align-items: flex-start; gap: 36px; padding: 56px 8px 26px; }
    .filters button { flex-direction: column; gap: 8px; padding: 0; font-size: 15px; }
    .switch-track { width: 46px; height: 28px; flex-basis: 28px; }
    .switch-track span { top: 4px; left: 4px; width: 20px; height: 20px; }
    .filters button.active .switch-track span { transform: translateX(18px); }
  }
`;

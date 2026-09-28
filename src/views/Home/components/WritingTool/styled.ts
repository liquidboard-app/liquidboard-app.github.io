import styled from 'styled-components';

export const WritingToolSection = styled.section`
  position: relative;
  isolation: isolate;
  padding: 158px var(--page-gutter) 160px;
  background: var(--bg);
  color: var(--text);

  .writing-intro { display: flex; flex-direction: column; align-items: center; margin: 0 auto 52px; padding: 0 20px; text-align: center; }
  .writing-intro h2 { max-width: 980px; margin: 0; font-size: clamp(44px, 3.8vw, 68px); font-weight: 800; letter-spacing: normal; line-height: 1.18; }
  .writing-heading-gradient {
    display: inline-block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }
  .writing-intro p { max-width: 667px; margin: 18px 0 0; color: var(--muted-text); font-size: clamp(16px, 1.2vw, 19px); font-weight: 500; letter-spacing: -.02em; line-height: 1.5; }
  .ios-requirement { display: inline-flex; align-items: center; gap: 6px; margin-bottom: 16px; padding: 8px 12px; border-radius: 999px; background: #2a2a2a; color: var(--muted-text); font-size: 12px; font-weight: 450; line-height: 1.4; }
  :root[data-theme='light'] & .ios-requirement { background: #fff; box-shadow: 0 2px 14px rgba(0, 0, 0, .08); }
  .ios-requirement-prefix { color: var(--text); font-weight: 700; }
  .ios-version-label { display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; }
  .ios-version-number { color: var(--text); font-weight: 700; }
  .ios-version-icon { position: relative; display: block; width: 18px; height: 18px; flex: 0 0 18px; overflow: hidden; border-radius: 23%; }
  .ios-version-icon img { position: absolute; inset: 0; display: block; width: 100%; height: 100%; object-fit: cover; transform: scale(1.11); }

  .writing-card {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    width: min(1200px, 100%);
    min-height: 640px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 36px;
    background: var(--surface);
    box-shadow: 0 24px 80px rgba(0, 0, 0, .1);
  }
  .writing-art { position: relative; z-index: 1; display: grid; min-height: 640px; overflow: hidden; place-items: center; background: var(--surface); }
  .writing-art::before { position: absolute; inset: 0; background: linear-gradient(rgba(8, 8, 10, .30), rgba(8, 8, 10, .30)), url('/assets/background-writing-tool.jpg') center / cover; content: ''; }
  :root[data-theme='light'] & .writing-art::before { background-image: linear-gradient(rgba(255, 255, 255, .18), rgba(255, 255, 255, .18)), url('/assets/background-writing-tool.jpg'); }
  .writing-app-image { display: block; width: auto; max-width: 88%; height: 88%; max-height: 560px; object-fit: contain; }
  .writing-app-image { position: relative; z-index: 1; }
  .writing-app-light { display: none; }
  :root[data-theme='light'] & .writing-app-dark { display: none; }
  :root[data-theme='light'] & .writing-app-light { display: block; }

  .writing-copy { position: relative; z-index: 1; display: flex; flex-direction: column; justify-content: center; padding: clamp(34px, 5vw, 68px) clamp(28px, 4vw, 56px); background: var(--surface); }
  :root[data-theme='light'] & .writing-art,
  :root[data-theme='light'] & .writing-copy,
  :root[data-theme='light'] & .writing-card { background: #fff; }
  .writing-symbol { display: block; width: 72px; height: 72px; margin-bottom: 20px; object-fit: contain; }
  .writing-feature-list { display: grid; }
  .writing-feature { padding: 22px 0; }
  .writing-feature + .writing-feature { border-top: 1px solid var(--header-border); }
  .writing-feature h3 { margin: 0 0 9px; font-size: clamp(20px, 2vw, 25px); font-weight: 750; letter-spacing: -.045em; line-height: 1.18; }
  .writing-feature p { max-width: 500px; margin: 0; color: var(--muted-text); font-size: clamp(14px, 1.1vw, 17px); font-weight: 500; line-height: 1.55; }

  @media (max-width: 1024px), (max-width: 1366px) and (pointer: coarse) {
    .writing-card { grid-template-columns: 1fr; width: min(767px, 100%); }
    .writing-art { min-height: 500px; }
    .writing-app-image { max-height: 460px; }
  }

  @media (max-width: 760px) {
    padding: 110px var(--page-gutter) 104px;
    .writing-intro { margin-bottom: 32px; padding-inline: 15px; }
    .writing-intro h2 { font-size: clamp(28px, 6vw, 36px); line-height: 1.2; }
    .writing-intro p { max-width: 340px; margin-top: 16px; font-size: 14px; line-height: 1.45; }
    .writing-card { grid-template-columns: 1fr; }
    .writing-card { border-radius: 28px; }
    .writing-art { min-height: 440px; }
    .writing-app-image { max-width: 100%; height: calc(100% - 28px); max-height: 412px; }
    .writing-copy { padding: 30px 22px; }
    .writing-feature { padding: 18px 0; }
  }
`;

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/* ============================================================
   LiquidBoard — styles
   LiquidBoard light theme
   ============================================================ */

@font-face {
  font-family: 'Google Sans Flex';
  font-style: normal;
  font-display: swap;
  font-weight: 100 1000;
  src: url('https://cdn.jsdelivr.net/fontsource/fonts/google-sans-flex:vf@5.3.1/vietnamese-wght-normal.woff2') format('woff2-variations');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}

@font-face {
  font-family: 'Google Sans Flex';
  font-style: normal;
  font-display: swap;
  font-weight: 100 1000;
  src: url('https://cdn.jsdelivr.net/fontsource/fonts/google-sans-flex:vf@5.3.1/latin-wght-normal.woff2') format('woff2-variations');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

:root {
  color-scheme: light;
  --page-max-width: 1440px;
  --page-gutter: clamp(16px, 3.4vw, 48px);
  --page-inline-padding: max(var(--page-gutter), calc((100vw - var(--page-max-width)) / 2 + var(--page-gutter)));
  --bg: #fff;
  --bg-2: #fff;
  --surface: #f4f4f4;
  --text: #262120;
  --muted: #9b7566;
  --border: rgba(255, 255, 255, 0.1);
  --header-bg: rgba(255, 255, 255, 0.5);
  --popover-bg: rgba(255, 255, 255, 0.86);
  --popover-border: rgba(38, 33, 32, 0.12);
  --shadow-card: 0 6px 22px -8px rgba(0, 0, 0, 0.45);
  --pill-bg: #292422;
  --pill-text: #fff;
  --ghost-bg: rgba(38, 33, 32, 0.06);
}

* {
  box-sizing: border-box;
}

img,
[draggable='true'] {
  user-select: none;
  -webkit-user-select: none;
}

img {
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
}

html {
  scrollbar-gutter: stable;
}

html,
body {
  margin: 0;
  padding: 0;
  background: var(--bg);
  color: var(--text);
  font-family: 'Google Sans Flex', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-optical-sizing: auto;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  transition: background-color 0.5s ease, color 0.5s ease;
  overflow-x: hidden;
}

#root {
  min-height: 100dvh;
}

@media (min-width: 761px) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  html.has-collaborator-cursor,
  html.has-collaborator-cursor body,
  html.has-collaborator-cursor body * {
    cursor: none !important;
  }
}

.language-page-shell {
  min-height: 100dvh;
  transition: filter .42s cubic-bezier(.22, 1, .36, 1), opacity .42s ease, transform .42s cubic-bezier(.22, 1, .36, 1);
}

.language-page-shell.is-changing {
  filter: blur(12px);
  opacity: .72;
  transform: scale(.996);
}

@media (max-width: 1080px) {
  .language-page-shell.is-changing {
    filter: none;
    opacity: 1;
    transform: none;
  }
}

.language-transition {
  position: fixed;
  inset: 0;
  z-index: 3000;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, .2);
  backdrop-filter: blur(0) saturate(120%);
  -webkit-backdrop-filter: blur(0) saturate(120%);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity .28s ease, visibility .28s ease, backdrop-filter .42s ease, -webkit-backdrop-filter .42s ease;
}

.language-transition.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  backdrop-filter: blur(24px) saturate(135%);
  -webkit-backdrop-filter: blur(24px) saturate(135%);
}

.route-transition-stage {
  position: relative;
  min-height: 100dvh;
}

.route-page {
  min-height: 100dvh;
}

.route-transition-stage.is-exiting > :first-child {
  pointer-events: none;
  will-change: filter, opacity;
  animation: route-page-leave .36s cubic-bezier(.4, 0, 1, 1) both;
}

.route-transition-stage.is-entering > :first-child {
  will-change: filter, opacity;
  animation: route-page-arrive .76s cubic-bezier(.22, 1, .36, 1) both;
}

@keyframes route-page-leave {
  from { opacity: 1; filter: blur(0); }
  to { opacity: 0; filter: blur(12px); }
}

@keyframes route-page-arrive {
  from { opacity: 0; filter: blur(12px); }
  to { opacity: 1; filter: blur(0); }
}

@media (prefers-reduced-motion: reduce) {
  .route-transition-stage.is-exiting > :first-child,
  .route-transition-stage.is-entering > :first-child { animation: none; }
}

a {
  color: inherit;
  text-decoration: none;
}
button,
input,
textarea,
select {
  font-family: inherit;
  font-optical-sizing: inherit;
}

a[href],
a[href] *,
button:not(:disabled),
[role='button'],
button:not(:disabled) *,
[role='button'] * {
  cursor: pointer !important;
}

button:disabled {
  cursor: default;
}

.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition-duration: 0.001ms !important;
  }
}
`;

export default GlobalStyles;

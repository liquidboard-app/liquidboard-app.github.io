import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/* ============================================================
   LiquidBoard — styles
   LiquidBoard light theme
   ============================================================ */

:root {
  color-scheme: light;
  --bg: #ffefdE;
  --bg-2: #fff3e4;
  --surface: #f7e4cf;
  --text: #262120;
  --muted: #9b7566;
  --border: rgba(255, 255, 255, 0.1);
  --header-bg: rgba(255, 239, 222, 0.5);
  --popover-bg: rgba(255, 243, 228, 0.86);
  --popover-border: rgba(38, 33, 32, 0.12);
  --shadow-card: 0 6px 22px -8px rgba(0, 0, 0, 0.45);
  --pill-bg: #292422;
  --pill-text: #fff4e6;
  --ghost-bg: rgba(38, 33, 32, 0.06);
}

* {
  box-sizing: border-box;
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
  font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  transition: background-color 0.5s ease, color 0.5s ease;
  overflow-x: hidden;
}

#root {
  min-height: 100dvh;
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
  background: rgba(255, 239, 222, .2);
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

a {
  color: inherit;
  text-decoration: none;
}
button {
  font-family: inherit;
  cursor: pointer;
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

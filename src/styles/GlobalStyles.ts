import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/* ============================================================
   LiquidBoard — styles
   LiquidBoard light theme
   ============================================================ */

:root {
  color-scheme: dark;
  --page-max-width: 1440px;
  --page-gutter: clamp(16px, 3.4vw, 48px);
  --page-inline-padding: max(var(--page-gutter), calc((100vw - var(--page-max-width)) / 2 + var(--page-gutter)));
  --bg: #111111;
  --bg-2: #111111;
  --surface: #1e1e1e;
  --surface-raised: #242424;
  --text: #f7f7f7;
  --muted: #a9a9a9;
  --muted-text: #a9a9a9;
  --accent: #ff91df;
  --border: rgba(255, 255, 255, 0.1);
  --border-strong: rgba(255, 255, 255, .18);
  --header-border: rgba(255, 255, 255, .14);
  --header-bg: rgba(17, 17, 17, 0.5);
  --popover-bg: rgba(30, 30, 30, 0.9);
  --popover-border: rgba(255, 255, 255, 0.12);
  --shadow-card: 0 18px 45px rgba(0, 0, 0, .28);
  --pill-bg: #292422;
  --pill-text: #fff;
  --ghost-bg: rgba(255, 255, 255, 0.06);
}

:root[data-theme='light'] {
  color-scheme: light;
  --bg: #fff;
  --bg-2: #fff;
  --surface: #f4f4f4;
  --surface-raised: #fff;
  --text: #171717;
  --muted: #777;
  --muted-text: #777;
  --accent: #8b38c8;
  --border: rgba(21, 21, 21, .1);
  --border-strong: rgba(21, 21, 21, .18);
  --header-border: rgba(21, 21, 21, .12);
  --header-bg: rgba(255, 255, 255, .72);
  --popover-bg: rgba(255, 255, 255, .9);
  --shadow-card: 0 18px 45px rgba(0, 0, 0, .12);
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", Helvetica, Arial, sans-serif;
  font-optical-sizing: auto;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  transition: background-color 0.5s ease, color 0.5s ease;
  overflow-x: hidden;
}

#root {
  min-height: 100dvh;
}

.route-transition-stage {
  position: relative;
  min-height: 100dvh;
  background: var(--bg);
}

.route-page {
  min-height: 100dvh;
  background: var(--bg);
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

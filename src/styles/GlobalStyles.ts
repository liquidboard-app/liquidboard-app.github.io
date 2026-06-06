import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/* ============================================================
   LiquidBoard — styles
   Theming via CSS custom properties (light/dark)
   ============================================================ */

/* dark mode only */
:root {
  --bg: #0b0b0d;
  --bg-2: #0f0f12;
  --surface: #161619;
  --text: #f3f3f5;
  --muted: #9b9ba3;
  --border: rgba(255, 255, 255, 0.1);
  --header-bg: rgba(20, 20, 23, 0.5);
  --popover-bg: rgba(28, 28, 32, 0.6);
  --popover-border: rgba(255, 255, 255, 0.12);
  --shadow-card: 0 6px 22px -8px rgba(0, 0, 0, 0.45);
  --pill-bg: #ffffff;
  --pill-text: #111114;
  --ghost-bg: rgba(255, 255, 255, 0.06);
  --logo: url("/assets/logo-app-light.jpg");
}

* {
  box-sizing: border-box;
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

/* Lenis recommended styles */
html.lenis,
html.lenis body {
  height: auto;
}
.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}
.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}
.lenis.lenis-stopped {
  overflow: hidden;
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

/* Base fade-in helpers (set initial hidden, JS animates) */
.fade-up {
  opacity: 0;
  will-change: transform, opacity;
}

/* preload gate */
.preload .hero__title,
.preload .hero__desc,
.preload .hero__lead,
.preload .hero__cta,
.preload .stage {
  opacity: 0 !important;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition-duration: 0.001ms !important;
  }
}
`;

export default GlobalStyles;

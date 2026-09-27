import React, { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { BrowserRouter, Navigate, Routes, Route, useLocation } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import Header from './components/MinimalHeader';
import { useTranslation } from './contexts/LanguageContext';
import { getPageMetadata } from '@/components/Translations/Global/pageMetadata';

const HomeContent = lazy(() => import('@/views/Home'));
const Pricing = lazy(() => import('@/views/Pricing'));
const Faq = lazy(() => import('@/views/Faq'));
const Policy = lazy(() => import('@/views/Policy'));
const About = lazy(() => import('@/views/About'));
const Updates = lazy(() => import('@/views/Updates'));

const RouteContent = ({ children }: { children: React.ReactNode }) => <Suspense fallback={null}>{children}</Suspense>;

const routePageLeave = keyframes`
  from { opacity: 1; filter: blur(0); }
  to { opacity: 0; filter: blur(12px); }
`;
const routePageArrive = keyframes`
  from { opacity: 0; filter: blur(12px); }
  to { opacity: 1; filter: blur(0); }
`;
const RouteTransitionStage = styled.div<{ $phase: 'idle' | 'exiting' | 'entering' }>`
  position: relative;
  min-height: 100dvh;
  background: var(--bg);

  > :first-child {
    ${({ $phase }) => $phase === 'exiting' && css`pointer-events: none; will-change: filter, opacity; animation: ${routePageLeave} .36s cubic-bezier(.4, 0, 1, 1) both;`}
    ${({ $phase }) => $phase === 'entering' && css`will-change: filter, opacity; animation: ${routePageArrive} .76s cubic-bezier(.22, 1, .36, 1) both;`}
  }

  @media (prefers-reduced-motion: reduce) {
    > :first-child { animation: none; }
  }
`;

const RoutePage = styled.div`
  min-height: 100dvh;
  background: var(--bg);
`;

const RoutedScrollFrame = styled.div`
  @media (pointer: coarse), (max-width: 700px) {
    position: fixed;
    inset: 0;
    height: 100dvh;
    overflow-x: hidden;
    overflow-y: auto;
    overscroll-behavior-y: contain;
    -webkit-overflow-scrolling: touch;
  }
`;

const HomeRoute: React.FC<{ replayKey?: number }> = ({ replayKey = 0 }) => {
  const { key } = useLocation();
  return <RouteContent><HomeContent key={`${key}-${replayKey}`} /></RouteContent>;
};

const PageMetadata: React.FC = () => {
  const { pathname } = useLocation();
  const { dict, lang } = useTranslation();

  useEffect(() => {
    const metadata = getPageMetadata(lang, pathname);
    const description = pathname === '/' ? dict.browserDescription : metadata.description;
    const canonicalUrl = new URL(`${import.meta.env.BASE_URL}${pathname.replace(/^\//, '')}`, window.location.origin).toString();
    const setMeta = (attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.append(element);
      }
      element.content = content;
    };
    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    document.title = dict.browserTitle;
    canonical?.setAttribute('href', canonicalUrl);
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', dict.browserTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('name', 'twitter:title', dict.browserTitle);
    setMeta('name', 'twitter:description', description);
  }, [dict.browserDescription, dict.browserTitle, lang, pathname]);

  return null;
};

export const ScrollTopButton = styled.button<{ $visible: boolean; $leaving: boolean }>`
  position: fixed;
  right: clamp(16px, 3dvw, 32px);
  bottom: clamp(18px, 3dvw, 32px);
  z-index: 100;
  display: grid;
  width: 48px;
  height: 48px;
  padding: 0;
  place-items: center;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, .28);
  border-radius: 50%;
  background: #2c2724;
  box-shadow: 0 12px 24px rgba(67, 42, 31, .22);
  color: #fff;
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  filter: blur(${({ $visible }) => $visible ? '0' : '8px'});
  pointer-events: ${({ $visible }) => $visible ? 'auto' : 'none'};
  transform: translateY(${({ $visible }) => $visible ? '0' : '12px'});
  transition: opacity .24s ease, filter .24s ease, transform .24s ease, background .2s ease;

  &:hover { background: #4a3933; }
  &:focus-visible { outline: 3px solid #fff; outline-offset: 3px; }

  @media (max-width: 700px) {
    width: 40px;
    height: 40px;
  }

  .scroll-arrow {
    position: relative;
    width: 22px;
    height: 22px;
    transform: translateY(145%);
    animation: ${({ $visible, $leaving }) => $leaving
      ? 'scroll-arrow-out .32s ease-in forwards'
      : $visible ? 'scroll-arrow-center .28s ease-out forwards' : 'none'};
  }
  .scroll-arrow svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 700px) { .scroll-arrow { width: 19px; height: 19px; } }

  @keyframes scroll-arrow-out {
    to { opacity: 0; transform: translateY(-145%); }
  }
  @keyframes scroll-arrow-center {
    to { transform: translateY(0); }
  }
`;

const scrollToStart = () => {
  const frame = document.getElementById('app-scroll-frame');
  if (frame) frame.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  else window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
};

const ScrollToTop = () => {
  useLayoutEffect(() => {
    scrollToStart();

    if (!window.matchMedia('(min-width: 1200px)').matches) return undefined;

    let followUpFrame: number | undefined;
    const frame = window.requestAnimationFrame(() => {
      scrollToStart();
      followUpFrame = window.requestAnimationFrame(scrollToStart);
    });
    const timer = window.setTimeout(scrollToStart, 120);
    const handlePageShow = () => {
      scrollToStart();
      window.setTimeout(scrollToStart, 0);
    };
    window.addEventListener('pageshow', handlePageShow);

    return () => {
      window.cancelAnimationFrame(frame);
      if (followUpFrame !== undefined) window.cancelAnimationFrame(followUpFrame);
      window.clearTimeout(timer);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);

  useEffect(() => {
    const handleRouteContentSwapped = () => {
      // The outgoing page is fully hidden before RoutedPages swaps the route.
      // Reset scroll in that hidden gap so the user never watches the jump.
      scrollToStart();

      if (!window.matchMedia('(min-width: 1200px)').matches) return;
      window.requestAnimationFrame(() => {
        scrollToStart();
        window.requestAnimationFrame(scrollToStart);
      });
    };

    window.addEventListener('liquidboard:route-content-swapped', handleRouteContentSwapped);
    return () => window.removeEventListener('liquidboard:route-content-swapped', handleRouteContentSwapped);
  }, []);

  return null;
};

const RoutedPages: React.FC = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionPhase, setTransitionPhase] = useState<'idle' | 'exiting' | 'entering'>('idle');
  const [homeReplayKey, setHomeReplayKey] = useState(0);
  const displayLocationRef = useRef(location);
  const homeReplayTimersRef = useRef<{ swap?: number; settle?: number }>({});

  useEffect(() => {
    if (location.key === displayLocationRef.current.key) {
      return undefined;
    }

    setTransitionPhase('exiting');
    const swapTimer = window.setTimeout(() => {
      displayLocationRef.current = location;
      setDisplayLocation(location);
      setTransitionPhase('entering');
      window.dispatchEvent(new Event('liquidboard:route-content-swapped'));
    }, 360);
    const settleTimer = window.setTimeout(() => setTransitionPhase('idle'), 1160);

    return () => {
      window.clearTimeout(swapTimer);
      window.clearTimeout(settleTimer);
    };
  }, [location]);

  useEffect(() => {
    if (location.pathname !== '/') return undefined;
    const replayTimers = homeReplayTimersRef.current;

    const handleHomeReplay = () => {
      window.clearTimeout(replayTimers.swap);
      window.clearTimeout(replayTimers.settle);
      setTransitionPhase('exiting');
      replayTimers.swap = window.setTimeout(() => {
        setHomeReplayKey((current) => current + 1);
        setTransitionPhase('entering');
        window.dispatchEvent(new Event('liquidboard:route-content-swapped'));
      }, 360);
      replayTimers.settle = window.setTimeout(() => setTransitionPhase('idle'), 1160);
    };

    window.addEventListener('liquidboard:replay-home', handleHomeReplay);
    return () => {
      window.removeEventListener('liquidboard:replay-home', handleHomeReplay);
      window.clearTimeout(replayTimers.swap);
      window.clearTimeout(replayTimers.settle);
    };
  }, [location.pathname]);

  return (
    <RoutedScrollFrame id="app-scroll-frame">
      <RouteTransitionStage $phase={transitionPhase}>
        <Routes location={displayLocation}>
        <Route path="/" element={<RoutePage><HomeRoute replayKey={homeReplayKey} /></RoutePage>} />
        <Route path="/about" element={<RoutePage><RouteContent><About /></RouteContent></RoutePage>} />
        <Route path="/pricing" element={<RoutePage><RouteContent><Pricing /></RouteContent></RoutePage>} />
        <Route path="/updates" element={<RoutePage><RouteContent><Updates /></RouteContent></RoutePage>} />
        <Route path="/faq" element={<RoutePage><Navigate to="/help/faq" replace /></RoutePage>} />
        <Route path="/help" element={<RoutePage><Navigate to="/help/contact" replace /></RoutePage>} />
        <Route path="/help/faq" element={<RoutePage><RouteContent><Faq section="faq" /></RouteContent></RoutePage>} />
        <Route path="/help/document" element={<RoutePage><RouteContent><Faq section="documents" /></RouteContent></RoutePage>} />
        <Route path="/help/documents" element={<RoutePage><Navigate to="/help/document" replace /></RoutePage>} />
        <Route path="/help/contact" element={<RoutePage><RouteContent><Faq section="contact" /></RouteContent></RoutePage>} />
        <Route path="/policy/*" element={<RoutePage><RouteContent><Policy /></RouteContent></RoutePage>} />
        </Routes>
      </RouteTransitionStage>
    </RoutedScrollFrame>
  );
};

const App: React.FC = () => (
  <BrowserRouter basename={import.meta.env.BASE_URL} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <PageMetadata />
    <ScrollToTop />
    <Header />
    <RoutedPages />
  </BrowserRouter>
);

export default App;

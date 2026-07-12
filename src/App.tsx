import React, { lazy, Suspense, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';

const Home = lazy(() => import('@/views/Home'));
const Pricing = lazy(() => import('@/views/Pricing'));
const Faq = lazy(() => import('@/views/Faq'));
const Policy = lazy(() => import('@/views/Policy'));
const About = lazy(() => import('@/views/About'));
const Updates = lazy(() => import('@/views/Updates'));

const RouteContent = ({ children }: { children: React.ReactNode }) => <Suspense fallback={null}>{children}</Suspense>;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const scrollToStart = () => window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
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
  }, [pathname]);

  return null;
};

const App: React.FC = () => (
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <ScrollToTop />
    <Header />
    <Routes>
      <Route path="/" element={<RouteContent><Home /></RouteContent>} />
      <Route path="/about" element={<RouteContent><About /></RouteContent>} />
      <Route path="/pricing" element={<RouteContent><Pricing /></RouteContent>} />
      <Route path="/updates" element={<RouteContent><Updates /></RouteContent>} />
      <Route path="/faq" element={<RouteContent><Faq /></RouteContent>} />
      <Route path="/policy/*" element={<RouteContent><Policy /></RouteContent>} />
    </Routes>
  </BrowserRouter>
);

export default App;

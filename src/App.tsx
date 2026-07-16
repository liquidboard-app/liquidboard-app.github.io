import React, { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { BrowserRouter, Navigate, Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowUp } from 'lucide-react';
import Header from './components/Header';

const Home = lazy(() => import('@/views/Home'));
const Pricing = lazy(() => import('@/views/Pricing'));
const Faq = lazy(() => import('@/views/Faq'));
const Policy = lazy(() => import('@/views/Policy'));
const About = lazy(() => import('@/views/About'));
const Updates = lazy(() => import('@/views/Updates'));

const RouteContent = ({ children }: { children: React.ReactNode }) => <Suspense fallback={null}>{children}</Suspense>;

const pageMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'LiquidBoard — Copy, organize and paste faster',
    description: 'LiquidBoard keeps texts, photos, stickers and links organized so they are ready to paste from your iPhone keyboard.',
  },
  '/about': {
    title: 'About LiquidBoard',
    description: 'Learn how LiquidBoard helps you keep everyday clipboard content private, organized and ready to send.',
  },
  '/pricing': {
    title: 'LiquidBoard Pricing',
    description: 'Explore LiquidBoard plans and choose the clipboard workspace that fits the way you work.',
  },
  '/updates': {
    title: 'LiquidBoard Updates',
    description: 'See the latest LiquidBoard features, improvements and product updates.',
  },
  '/help/contact': {
    title: 'LiquidBoard Help & Support',
    description: 'Get help with LiquidBoard, browse frequently asked questions or contact support.',
  },
  '/help/faq': {
    title: 'LiquidBoard FAQ',
    description: 'Find answers to common questions about LiquidBoard and its keyboard features.',
  },
  '/policy/data-security': {
    title: 'LiquidBoard Data Security',
    description: 'Read how LiquidBoard protects your data and keeps your content under your control.',
  },
  '/policy/privacy': {
    title: 'LiquidBoard Privacy Policy',
    description: 'Read the LiquidBoard privacy policy and learn how your information is handled.',
  },
  '/policy/terms-of-use': {
    title: 'LiquidBoard Terms of Use',
    description: 'Read the terms that apply to your use of LiquidBoard.',
  },
  '/policy/payment-and-refund': {
    title: 'LiquidBoard Payment & Refund Policy',
    description: 'Read LiquidBoard payment, purchase and refund information.',
  },
};

const PageMetadata: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[pathname] ?? pageMetadata['/'];
    const canonicalUrl = new URL(pathname, window.location.origin).toString();
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

    document.title = metadata.title;
    canonical?.setAttribute('href', canonicalUrl);
    setMeta('name', 'description', metadata.description);
    setMeta('property', 'og:title', metadata.title);
    setMeta('property', 'og:description', metadata.description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('name', 'twitter:title', metadata.title);
    setMeta('name', 'twitter:description', metadata.description);
  }, [pathname]);

  return null;
};

const ScrollTopButton = styled.button<{ $visible: boolean; $leaving: boolean }>`
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
  color: #fff3e4;
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  filter: blur(${({ $visible }) => $visible ? '0' : '8px'});
  pointer-events: ${({ $visible }) => $visible ? 'auto' : 'none'};
  transform: translateY(${({ $visible }) => $visible ? '0' : '12px'});
  transition: opacity .24s ease, filter .24s ease, transform .24s ease, background .2s ease;

  &:hover { background: #4a3933; }
  &:focus-visible { outline: 3px solid #e3c76c; outline-offset: 3px; }

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

const ScrollTopControl: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const scrollFrameRef = useRef<number>();
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const updateVisibility = () => {
      const isMobile = window.matchMedia('(max-width: 700px)').matches;
      const isDesktop = window.matchMedia('(min-width: 1200px)').matches;
      const featureStackStart = Number(document.querySelector<HTMLElement>('[data-feature-stack-start]')?.dataset.featureStackStart);
      const threshold = isMobile
        ? Math.max(420, window.innerHeight * 0.9)
        : isDesktop && Number.isFinite(featureStackStart)
          ? featureStackStart
          : Math.max(720, window.innerHeight * 0.95);
      const isPastThreshold = window.scrollY > threshold;
      setVisible(isPastThreshold);
      if (!isPastThreshold) setDismissed(false);
    };
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility, { passive: true });
    window.addEventListener('liquidboard:feature-stack-threshold-change', updateVisibility);
    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
      window.removeEventListener('liquidboard:feature-stack-threshold-change', updateVisibility);
    };
  }, []);

  useEffect(() => () => {
    if (scrollFrameRef.current !== undefined) window.cancelAnimationFrame(scrollFrameRef.current);
  }, []);

  const scrollToTop = () => {
    if (isScrollingRef.current || window.scrollY <= 0) return;

    const startY = window.scrollY;
    const duration = Math.min(1950, Math.max(950, startY * 0.24));
    const startedAt = window.performance.now();
    isScrollingRef.current = true;
    setIsLeaving(true);

    const advance = (now: number) => {
      const elapsed = Math.min((now - startedAt) / duration, 1);
      const easedProgress = elapsed < 0.5
        ? 16 * elapsed ** 5
        : 1 - (-2 * elapsed + 2) ** 5 / 2;
      window.scrollTo({ top: Math.round(startY * (1 - easedProgress)), left: 0, behavior: 'auto' });

      if (elapsed < 1) {
        scrollFrameRef.current = window.requestAnimationFrame(advance);
      } else {
        isScrollingRef.current = false;
        scrollFrameRef.current = undefined;
      }
    };

    scrollFrameRef.current = window.requestAnimationFrame(advance);
  };

  return (
    <ScrollTopButton
      type="button"
      $visible={(visible && !dismissed) || isLeaving}
      $leaving={isLeaving}
      aria-label="Scroll to top"
      onClick={scrollToTop}
    >
      <span className="scroll-arrow" aria-hidden="true" onAnimationEnd={() => {
        if (!isLeaving) return;
        setIsLeaving(false);
        setDismissed(true);
      }}>
        <ArrowUp size={22} strokeWidth={2.6} />
      </span>
    </ScrollTopButton>
  );
};

const App: React.FC = () => (
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <PageMetadata />
    <ScrollToTop />
    <Header />
    <Routes>
      <Route path="/" element={<RouteContent><Home /></RouteContent>} />
      <Route path="/about" element={<RouteContent><About /></RouteContent>} />
      <Route path="/pricing" element={<RouteContent><Pricing /></RouteContent>} />
      <Route path="/updates" element={<RouteContent><Updates /></RouteContent>} />
      <Route path="/faq" element={<Navigate to="/help/faq" replace />} />
      <Route path="/help" element={<Navigate to="/help/contact" replace />} />
      <Route path="/help/faq" element={<RouteContent><Faq section="faq" /></RouteContent>} />
      <Route path="/help/document" element={<RouteContent><Faq section="documents" /></RouteContent>} />
      <Route path="/help/documents" element={<Navigate to="/help/document" replace />} />
      <Route path="/help/contact" element={<RouteContent><Faq section="contact" /></RouteContent>} />
      <Route path="/policy/*" element={<RouteContent><Policy /></RouteContent>} />
    </Routes>
    <ScrollTopControl />
  </BrowserRouter>
);

export default App;

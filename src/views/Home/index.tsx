import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import ClipboardGrid from './components/ClipboardGrid';
import CoreClipboard from './components/CoreClipboard';
import FeatureClipboard from './components/FeatureClipboard';
import ActionClipboardClone from './components/ActionClipboardClone';
import Hero from './components/Hero';
import { LandingPage } from './styled';

const DownloadSection = lazy(() => import('./components/DownloadSection'));
const Footer = lazy(() => import('./components/Footer'));

const DeferredSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || isReady) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setIsReady(true);
      observer.disconnect();
    }, { rootMargin: '1200px 0px' });
    // A nonzero sentinel normally resolves this on iOS Safari. Keep a short
    // fallback as well so the final page sections can never disappear when
    // IntersectionObserver misses a zero-area boundary after a long pin.
    const fallbackTimer = window.setTimeout(() => setIsReady(true), 2500);

    observer.observe(sentinel);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallbackTimer);
    };
  }, [isReady]);

  return (
    <div ref={sentinelRef} style={isReady ? undefined : { minHeight: 1 }}>
      {isReady ? <Suspense fallback={null}>{children}</Suspense> : null}
    </div>
  );
};

const Home: React.FC = () => (
  <LandingPage>
    <Hero />
    <ClipboardGrid />
    <CoreClipboard />
    <FeatureClipboard />
    <ActionClipboardClone />
    <DeferredSection>
      <DownloadSection />
      <Footer />
    </DeferredSection>
  </LandingPage>
);

export default Home;

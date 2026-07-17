import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import Features from './components/Features';
import Hero from './components/Hero';
import { LandingPage } from './styled';

const GridFeatures = lazy(() => import('./components/GridFeatures'));
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
    }, { rootMargin: '900px 0px' });

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [isReady]);

  return <div ref={sentinelRef}>{isReady ? <Suspense fallback={null}>{children}</Suspense> : null}</div>;
};

const Home: React.FC = () => (
  <LandingPage>
    <Hero />
    <Features />
    <DeferredSection>
      <GridFeatures />
      <DeferredSection>
        <DownloadSection />
        <DeferredSection><Footer /></DeferredSection>
      </DeferredSection>
    </DeferredSection>
  </LandingPage>
);

export default Home;

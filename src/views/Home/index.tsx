import React, { lazy, Suspense } from 'react';
import Features from './components/Features';
import Hero from './components/Hero';
import { LandingPage } from './styled';

const GridFeatures = lazy(() => import('./components/GridFeatures'));
const DownloadSection = lazy(() => import('./components/DownloadSection'));
const Footer = lazy(() => import('./components/Footer'));

const Home: React.FC = () => (
  <LandingPage>
    <Hero />
    <Features />
    <Suspense fallback={null}>
      <GridFeatures />
      <DownloadSection />
      <Footer />
    </Suspense>
  </LandingPage>
);

export default Home;

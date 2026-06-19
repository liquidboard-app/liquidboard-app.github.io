import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header';
import Home from '@/views/Home';
import About from '@/views/About';
import Pricing from '@/views/Pricing';
import Updates from '@/views/Updates';
import Help from '@/views/Help';
import Policy from '@/views/Policy';

gsap.registerPlugin(ScrollTrigger);
gsap.config({ force3D: true });

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ((window as any).__lbLenis) {
      (window as any).__lbLenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 1.1,
      touchMultiplier: 1.1,
      infinite: false,
    });
    lenisRef.current = lenis;
    (window as any).__lbLenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      delete (window as any).__lbLenis;
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/help/*" element={<Help />} />
        <Route path="/policy/*" element={<Policy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import { About, Pricing, Updates, Help } from './pages/Pages';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => (
  <>
    <Hero />
    {/* <Showcase /> Tạm ẩn theo yêu cầu */}
  </>
);

const App: React.FC = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize normal smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 1,
      touchMultiplier: 1,
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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

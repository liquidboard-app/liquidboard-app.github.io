import React, { useEffect, useRef, useState } from 'react';
import { Footer as FooterElement } from '../../styled';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || entry.intersectionRatio < 0.55) return;
      setIsVisible(true);
      observer.disconnect();
    }, { threshold: [0, 0.55] });

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return <FooterElement ref={footerRef} className={`footer-wordmark${isVisible ? ' is-visible' : ''}`}><span>LiquidBoard</span></FooterElement>;
};

export default Footer;

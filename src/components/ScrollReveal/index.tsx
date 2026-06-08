import React, { useEffect, useRef, ReactNode } from 'react';
import './ScrollReveal.css';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  duration?: number;
  /** If true, animates word by word. If false, animates the whole block */
  wordByWord?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  threshold = 0.1,
  delay = 0,
  duration = 0.8,
  wordByWord = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (wordByWord && typeof children === 'string') {
      const words = (children as string).split(' ');
      el.innerHTML = words
        .map(
          (word, i) =>
            `<span class="sr-word" style="transition-delay: ${delay + i * 0.05}s; transition-duration: ${duration}s">${word}</span>`
        )
        .join(' ');
    } else {
      el.style.transitionDelay = `${delay}s`;
      el.style.transitionDuration = `${duration}s`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (wordByWord) {
              el.querySelectorAll('.sr-word').forEach((w) => {
                (w as HTMLElement).classList.add('sr-visible');
              });
            } else {
              el.classList.add('sr-visible');
            }
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [children, delay, duration, threshold, wordByWord]);

  return (
    <div
      ref={containerRef}
      className={`scroll-reveal ${wordByWord ? 'sr-word-mode' : ''} ${className}`}
    >
      {!wordByWord && children}
    </div>
  );
};

export default ScrollReveal;

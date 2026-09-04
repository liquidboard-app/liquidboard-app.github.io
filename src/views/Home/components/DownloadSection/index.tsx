import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '@/contexts/LanguageContext';
import { getAccessibilityLabels } from '@/locales/config';
import { SectionDownload } from '../../styled';
import AppStoreButton from '../AppStoreButton';
import SocialMark, { type SocialName } from '../SocialMark';

const socialLinks: Array<{ name: SocialName; href: string; label: string }> = [
  { name: 'facebook', href: 'https://facebook.com', label: 'Facebook' },
  { name: 'x', href: 'https://x.com', label: 'X' },
  { name: 'threads', href: 'https://threads.net', label: 'Threads' },
  { name: 'tiktok', href: 'https://tiktok.com', label: 'TikTok' },
];

const DownloadSection: React.FC = () => {
  const { lang } = useTranslation();
  const accessibility = getAccessibilityLabels(lang);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || entry.intersectionRatio < 0.2) return;
      setIsVisible(true);
      observer.disconnect();
    }, { threshold: [0, 0.2] });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <SectionDownload ref={sectionRef} className={`download-reveal${isVisible ? ' is-visible' : ''}`}>
      <div className="download-reveal-control"><AppStoreButton /></div>
      <div className="socials" aria-label={accessibility.socialMediaLinks}>
        {socialLinks.map(({ name, href, label }, index) => (
          <span
            className="social-reveal-item"
            key={name}
            style={{ '--social-reveal-delay': `${150 + index * 65}ms` } as React.CSSProperties}
          >
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><SocialMark name={name} /></a>
          </span>
        ))}
      </div>
    </SectionDownload>
  );
};

export default DownloadSection;

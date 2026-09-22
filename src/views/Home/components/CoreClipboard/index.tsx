import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '@/contexts/LanguageContext';
import { splitGraphemes } from '@/utils/graphemes';
import { publicAsset } from '@/utils/publicAssets';
import { CoreClipboardSection } from './styled';

const coreItems = [
  {
    label: 'Text',
    images: [publicAsset('/assets/lb-text.webp'), publicAsset('/assets/lb-text.webp')],
  },
  {
    label: 'Image',
    images: [publicAsset('/assets/lb-photos.webp'), publicAsset('/assets/lb-photos.webp')],
  },
  {
    label: 'Sticker',
    images: [publicAsset('/assets/lb-keyboard.webp'), publicAsset('/assets/lb-keyboard.webp')],
  },
] as const;

const coreHighlightTerms: Record<string, { line1: string; line2: string }> = {
  bn: { line1: 'ক্লিপবোর্ড', line2: 'iOS কীবোর্ড' },
  de: { line1: 'Zwischenablage', line2: 'iOS-Tastatur' },
  en: { line1: 'clipboard', line2: 'iOS Keyboard' },
  es: { line1: 'portapapeles', line2: 'teclado de iOS' },
  fr: { line1: 'presse-papiers', line2: 'clavier iOS' },
  hi: { line1: 'क्लिपबोर्ड', line2: 'iOS कीबोर्ड' },
  id: { line1: 'Clipboard', line2: 'Keyboard iOS' },
  it: { line1: 'appunti', line2: 'tastiera iOS' },
  ja: { line1: 'クリップボード', line2: 'iOSキーボード' },
  ko: { line1: '클립보드', line2: 'iOS 키보드' },
  pl: { line1: 'schowka', line2: 'klawiaturę iOS' },
  'pt-BR': { line1: 'área de transferência', line2: 'teclado do iOS' },
  ru: { line1: 'буфера обмена', line2: 'клавиатуры iOS' },
  th: { line1: 'คลิปบอร์ด', line2: 'คีย์บอร์ด iOS' },
  tl: { line1: 'Clipboard', line2: 'iOS Keyboard' },
  tr: { line1: 'panodan', line2: 'iOS klavyenize' },
  vi: { line1: 'Clipboard', line2: 'Bàn Phím iOS' },
  'zh-CN': { line1: '剪贴板', line2: 'iOS 键盘' },
  'zh-TW': { line1: '剪貼簿', line2: 'iOS 鍵盤' },
};

const coreTextDuration = 620;
const coreTextStagger = 26;

const SmartphonePreviewIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-smartphone preview-icon core-preview-icon"
    aria-hidden="true"
  >
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

const KeyboardPreviewIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-keyboard preview-icon core-preview-icon"
    aria-hidden="true"
  >
    <path d="M10 8h.01" />
    <path d="M12 12h.01" />
    <path d="M14 8h.01" />
    <path d="M16 12h.01" />
    <path d="M18 8h.01" />
    <path d="M6 8h.01" />
    <path d="M7 16h10" />
    <path d="M8 12h.01" />
    <rect width="20" height="16" x="2" y="4" rx="2" />
  </svg>
);

const renderHighlightedCoreLine = (
  text: string,
  term: string,
  tone: 'green' | 'blue',
  renderText: (text: string) => React.ReactNode,
) => {
  const start = text.toLocaleLowerCase().indexOf(term.toLocaleLowerCase());
  if (start < 0) return <span aria-hidden="true">{renderText(text)}</span>;

  const end = start + term.length;
  return (
    <span aria-hidden="true">
      {renderText(text.slice(0, start))}
      <span className={`core-heading-highlight core-heading-highlight-${tone}`}>
        {renderText(text.slice(start, end))}
        <span className="core-heading-underline" aria-hidden="true" />
      </span>
      {renderText(text.slice(end))}
    </span>
  );
};

type AnimationPhase = 'idle' | 'entering' | 'entered';

const CoreClipboard: React.FC = () => {
  const { dict, lang } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [headingPhase, setHeadingPhase] = useState<AnimationPhase>('idle');

  let characterIndex = 0;
  const renderSplitText = (text: string) => text.split(/(\s+)/).map((word, wordIndex) => {
    if (!word || /^\s+$/.test(word)) return word;
    // Preserve connected scripts and keep Vietnamese accents with their letters.
    const characters = /^(hi|bn|th)(-|$)/.test(lang) ? [word] : splitGraphemes(word, lang);
    return (
      <span className="core-heading-word" key={wordIndex}>
        {characters.map((character, index) => (
          <span
            className="core-heading-grapheme"
            key={index}
            style={{ animationDelay: `${characterIndex++ * coreTextStagger}ms` }}
          >{character}</span>
        ))}
      </span>
    );
  });
  const terms = coreHighlightTerms[lang] ?? coreHighlightTerms.en;
  const headingLines = [
    renderHighlightedCoreLine(dict.coreClipboard.line1, terms.line1, 'green', renderSplitText),
    renderHighlightedCoreLine(dict.coreClipboard.line2, terms.line2, 'blue', renderSplitText),
  ];
  const textRevealDuration = coreTextDuration + Math.max(0, characterIndex - 1) * coreTextStagger;

  useEffect(() => {
    let headingPhase: AnimationPhase = 'idle';
    let headingAnimationTimer: number | undefined;
    const desktopQuery = window.matchMedia('(min-width: 1200px)');
    const headingElement = sectionRef.current;
    const finalizeCompactHeadingGrapheme = (event: AnimationEvent) => {
      if (desktopQuery.matches || !(event.target instanceof HTMLElement)) return;
      if (!event.target.classList.contains('core-heading-grapheme')) return;
      // iOS can keep the text layer in its blurred raster surface after the
      // keyframe has reached blur(0). Flatten each finished grapheme back to a
      // normal text layer so visible letters are always crisp.
      event.target.style.animation = 'none';
      event.target.style.filter = 'none';
      event.target.style.opacity = '1';
      event.target.style.transform = 'none';
      event.target.style.willChange = 'auto';
    };
    headingElement?.addEventListener('animationend', finalizeCompactHeadingGrapheme);

    const setHeading = (phase: typeof headingPhase) => {
      headingPhase = phase;
      setHeadingPhase(phase);
    };
    const beginHeadingEnter = () => {
      if (headingPhase !== 'idle') return;
      window.clearTimeout(headingAnimationTimer);
      setHeading('entering');
      headingAnimationTimer = window.setTimeout(() => {
        setHeading('entered');
      }, 1450);
    };
    const headingObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) beginHeadingEnter();
    }, { rootMargin: '0px 0px -12% 0px' });
    if (sectionRef.current) headingObserver.observe(sectionRef.current);
    return () => {
      window.clearTimeout(headingAnimationTimer);
      headingObserver.disconnect();
      headingElement?.removeEventListener('animationend', finalizeCompactHeadingGrapheme);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const items = Array.from(section.querySelectorAll<HTMLElement>('[data-core-item]'));
    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-item-revealed'));
      return undefined;
    }

    const itemObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-item-revealed');
        itemObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: .12 });

    items.forEach((item) => itemObserver.observe(item));
    return () => itemObserver.disconnect();
  }, []);

  return (
    <CoreClipboardSection
      ref={sectionRef}
      className={headingPhase === 'entering' || headingPhase === 'entered' ? 'is-heading-animated' : ''}
    >
      <div className="core-clipboard-heading">
        <div className="core-app-brand">
          <span className="core-app-name">Liquid</span>
          <span className="core-app-logos" aria-hidden="true">
            <span className="core-app-icon core-app-icon-light"><img src={publicAsset('/assets/logo-app-light.jpg')} alt="" decoding="async" /></span>
            <span className="core-app-icon core-app-icon-dark"><img src={publicAsset('/assets/logo-app-dark.jpg')} alt="" decoding="async" /></span>
          </span>
          <span className="core-app-name">Board</span>
        </div>
        <h2
          key={lang}
          lang={lang}
          aria-label={`${dict.coreClipboard.line1} ${dict.coreClipboard.line2}`}
          style={{
            '--core-text-duration': `${coreTextDuration}ms`,
            '--core-underline-delay': `${textRevealDuration}ms`,
          } as React.CSSProperties}
        >
          {headingLines[0]}
          {headingLines[1]}
        </h2>
      </div>

      <div className="core-clipboard-list" aria-label="LiquidBoard Core Clipboard preview">
        {coreItems.map((item, index) => (
          <article className={`core-clipboard-item core-clipboard-item-${index + 1}`} data-core-item key={item.label}>
            <div className="core-preview-icons" aria-hidden="true">
              <span className="core-preview-badge core-preview-badge-app">
                <SmartphonePreviewIcon />
                <span>App</span>
              </span>
              <span className="core-preview-badge core-preview-badge-keyboard">
                <KeyboardPreviewIcon />
                <span>Keyboard</span>
              </span>
            </div>
            <div className="core-clipboard-item-images">
              {item.images.map((image, imageIndex) => (
                <div className="core-clipboard-media" key={`${item.label}-${imageIndex}`}>
                  <img
                    src={image}
                    alt={`${item.label} clipboard preview ${imageIndex + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </CoreClipboardSection>
  );
};

export default CoreClipboard;

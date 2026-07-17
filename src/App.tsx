import React, { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { BrowserRouter, Navigate, Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowUp } from 'lucide-react';
import Header from './components/Header';
import { useTranslation } from './contexts/LanguageContext';
import { getAccessibilityLabels } from './locales/config';

const Home = lazy(() => import('@/views/Home'));
const Pricing = lazy(() => import('@/views/Pricing'));
const Faq = lazy(() => import('@/views/Faq'));
const Policy = lazy(() => import('@/views/Policy'));
const About = lazy(() => import('@/views/About'));
const Updates = lazy(() => import('@/views/Updates'));

const RouteContent = ({ children }: { children: React.ReactNode }) => <Suspense fallback={null}>{children}</Suspense>;

const HomeRoute: React.FC = () => {
  const { key } = useLocation();
  return <RouteContent><Home key={key} /></RouteContent>;
};

type PageMetadataMap = Record<string, { description: string }>;

const pageMetadataByLanguage: Record<string, PageMetadataMap> = {
  en: {
    '/': {
      description: 'LiquidBoard keeps texts, photos, stickers and links organized so they are ready to paste from your iPhone keyboard.',
    },
    '/about': {
      description: 'Learn how LiquidBoard helps you keep everyday clipboard content private, organized and ready to send.',
    },
    '/pricing': {
      description: 'Explore LiquidBoard plans and choose the clipboard workspace that fits the way you work.',
    },
    '/updates': {
      description: 'See the latest LiquidBoard features, improvements and product updates.',
    },
    '/help/contact': {
      description: 'Get help with LiquidBoard, browse frequently asked questions or contact support.',
    },
    '/help/faq': {
      description: 'Find answers to common questions about LiquidBoard and its keyboard features.',
    },
    '/policy/data-security': {
      description: 'Read how LiquidBoard protects your data and keeps your content under your control.',
    },
    '/policy/privacy': {
      description: 'Read the LiquidBoard privacy policy and learn how your information is handled.',
    },
    '/policy/terms-of-use': {
      description: 'Read the terms that apply to your use of LiquidBoard.',
    },
    '/policy/payment-and-refund': {
      description: 'Read LiquidBoard payment, purchase and refund information.',
    },
  },
  tr: {
    '/': {
      description: 'LiquidBoard metinleri, fotoğrafları, çıkartmaları ve bağlantıları iPhone klavyenizden yapıştırmaya hazır olacak şekilde düzenli tutar.',
    },
    '/about': {
      description: 'LiquidBoard’un günlük pano içeriklerinizi nasıl gizli, düzenli ve gönderilmeye hazır tuttuğunu öğrenin.',
    },
    '/pricing': {
      description: 'LiquidBoard planlarını inceleyin ve çalışma biçiminize uygun pano alanını seçin.',
    },
    '/updates': {
      description: 'En yeni LiquidBoard özelliklerini, iyileştirmelerini ve ürün güncellemelerini görün.',
    },
    '/help/contact': {
      description: 'LiquidBoard için yardım alın, sık sorulan sorulara göz atın veya destek ekibiyle iletişime geçin.',
    },
    '/help/faq': {
      description: 'LiquidBoard ve klavye özellikleri hakkında sık sorulan soruların yanıtlarını bulun.',
    },
    '/policy/data-security': {
      description: 'LiquidBoard’un verilerinizi nasıl koruduğunu ve içeriklerinizin denetimini nasıl size bıraktığını okuyun.',
    },
    '/policy/privacy': {
      description: 'LiquidBoard gizlilik politikasını ve bilgilerinizin nasıl işlendiğini okuyun.',
    },
    '/policy/terms-of-use': {
      description: 'LiquidBoard kullanımınız için geçerli olan koşulları okuyun.',
    },
    '/policy/payment-and-refund': {
      description: 'LiquidBoard ödeme, satın alma ve para iadesi bilgilerini okuyun.',
    },
  },
  'zh-CN': {
    '/': {
      description: 'LiquidBoard 将文本、照片、贴纸和链接整理妥当，让你能直接从 iPhone 键盘粘贴。',
    },
    '/about': {
      description: '了解 LiquidBoard 如何让日常剪贴板内容保持私密、有序并随时可发送。',
    },
    '/pricing': {
      description: '浏览 LiquidBoard 方案，选择适合你工作方式的剪贴板空间。',
    },
    '/updates': {
      description: '查看 LiquidBoard 的最新功能、改进和产品更新。',
    },
    '/help/contact': {
      description: '获取 LiquidBoard 帮助、浏览常见问题或联系支持团队。',
    },
    '/help/faq': {
      description: '查找有关 LiquidBoard 及其键盘功能的常见问题解答。',
    },
    '/policy/data-security': {
      description: '了解 LiquidBoard 如何保护你的数据并让内容始终由你掌控。',
    },
    '/policy/privacy': {
      description: '阅读 LiquidBoard 隐私政策，了解你的信息如何被处理。',
    },
    '/policy/terms-of-use': {
      description: '阅读适用于你使用 LiquidBoard 的条款。',
    },
    '/policy/payment-and-refund': {
      description: '阅读 LiquidBoard 的付款、购买和退款信息。',
    },
  },
};

const PageMetadata: React.FC = () => {
  const { pathname } = useLocation();
  const { dict, lang } = useTranslation();

  useEffect(() => {
    const pageMetadata = pageMetadataByLanguage[lang] ?? pageMetadataByLanguage.en;
    const metadata = pageMetadata[pathname] ?? pageMetadata['/'];
    const description = pathname === '/' ? dict.browserDescription : metadata.description;
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

    document.title = dict.browserTitle;
    canonical?.setAttribute('href', canonicalUrl);
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', dict.browserTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('name', 'twitter:title', dict.browserTitle);
    setMeta('name', 'twitter:description', description);
  }, [dict.browserDescription, dict.browserTitle, lang, pathname]);

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
  const { key, pathname } = useLocation();

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
  }, [key, pathname]);

  return null;
};

const ScrollTopControl: React.FC = () => {
  const { lang } = useTranslation();
  const accessibility = getAccessibilityLabels(lang);
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
      aria-label={accessibility.scrollToTop}
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
      <Route path="/" element={<HomeRoute />} />
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

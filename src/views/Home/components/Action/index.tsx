import React, { useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useTranslation } from '@/contexts/LanguageContext';
import {
  ActionSection,
  ActionPin,
  ActionInner,
  CopyColumn,
  CopyLines,
  ActionLine,
  ActionLineInner,
  ActionBadge,
  ActionChar,
  VisualColumn,
  VisualFrame,
  VisualLayer,
} from './styled';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const HEADER_OFFSET = 132;
const ENTRY_PROGRESS_SHARE = 0.14;
const fillEase = gsap.parseEase('sine.inOut');

const actionContent = {
  en: {
    titles: ['Create Group', 'Pin', 'Copy & Duplicate', 'Import & Export Files'],
    paragraphs: [
      'Create additional groups and categorize texts, images, and stickers based on your needs. Switch smoothly between groups and pin essential groups to the top first.',
      'Pin important texts, images, and stickers that you use frequently to the top so you can send them faster.',
      'Copy and duplicate texts, images, and stickers easily and quickly.',
      'Export and import text data as JSON and CSV directly through the Files app.',
    ],
    images: [
      { src: '/assets/lb-text.PNG', alt: 'LiquidBoard groups' },
      { src: '/assets/lb-photos.PNG', alt: 'LiquidBoard pinned items' },
      { src: '/assets/lb-keyboard.PNG', alt: 'LiquidBoard copy and duplicate' },
      { src: '/assets/lb-text.PNG', alt: 'LiquidBoard import and export files' },
    ],
  },
  vi: {
    titles: ['Tạo Nhóm', 'Ghim', 'Sao Chép & Nhân Bản', 'Xuất & Nhập File'],
    paragraphs: [
      'Tạo thêm nhóm và phân loại các văn bản, ảnh, nhãn dán theo nhu cầu. Chuyển đổi mượt mà giữa các nhóm và ghim những nhóm cần thiết lên đầu tiên.',
      'Ghim những văn bản, ảnh, nhãn dán quan trọng và sử dụng nhiều lên đầu tiên để gửi nhanh hơn.',
      'Sao chép, nhân bản văn bản, ảnh, nhãn dán dễ dàng và nhanh chóng.',
      'Xuất và nhập văn bản ra JSON, CSV đến ứng dụng Files.',
    ],
    images: [
      { src: '/assets/lb-text.PNG', alt: 'LiquidBoard nhom noi dung' },
      { src: '/assets/lb-photos.PNG', alt: 'LiquidBoard ghim noi dung' },
      { src: '/assets/lb-keyboard.PNG', alt: 'LiquidBoard sao chep va nhan ban' },
      { src: '/assets/lb-text.PNG', alt: 'LiquidBoard xuat va nhap file' },
    ],
  },
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const Action: React.FC = () => {
  const { lang } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const visualColumnRef = useRef<HTMLDivElement>(null);
  const activeImageRef = useRef(0);

  const content = useMemo(
    () => (lang === 'vi' ? actionContent.vi : actionContent.en),
    [lang]
  );

  useGSAP(
    () => {
      const section = sectionRef.current;
      const pin = pinRef.current;
      const visualColumn = visualColumnRef.current;
      const lineEls = lineRefs.current.filter(Boolean) as HTMLDivElement[];
      const imageEls = imageRefs.current.filter(Boolean) as HTMLDivElement[];

      if (!section || !pin || !visualColumn || lineEls.length === 0 || imageEls.length === 0) {
        return;
      }

      const mm = gsap.matchMedia(section);

      mm.add('(min-width: 901px)', () => {
        const segmentCount = content.paragraphs.length;
        const segmentSpan = 1 / segmentCount;
        const entryStartViewport = Math.round(window.innerHeight * 0.5 + HEADER_OFFSET);

        const resetLines = () => {
          lineEls.forEach((line) => {
            const charEls = Array.from(line.querySelectorAll<HTMLElement>('[data-action-char]'));
            charEls.forEach((charEl) => charEl.style.setProperty('--char-progress', '0'));
            gsap.set(line, {
              autoAlpha: 0,
              filter: 'blur(18px)',
              y: 18,
            });
          });

          gsap.set(visualColumn, {
            autoAlpha: 0,
            filter: 'blur(18px)',
          });
        };

        const updateLines = (progress: number) => {
          content.paragraphs.forEach((_, index) => {
            const segmentStart = index * segmentSpan;
            const local = clamp((progress - segmentStart) / segmentSpan, 0, 1);
            const enter = clamp(local / 0.24, 0, 1);
            const fill = fillEase(clamp((local - 0.3) / 0.66, 0, 1));
            const exit = clamp((local - 0.96) / 0.04, 0, 1);
            const opacity = enter * (1 - exit);
            const blur = 18 * (1 - enter) + 18 * exit;
            const y = (1 - enter) * 18 - exit * 16;
            const paragraphEl = lineEls[index];
            const charEls = Array.from(paragraphEl?.querySelectorAll<HTMLElement>('[data-action-char]') ?? []);
            const revealChars = fill * charEls.length;

            charEls.forEach((charEl, charIndex) => {
              const charProgress = clamp(revealChars - charIndex, 0, 1);
              charEl.style.setProperty('--char-progress', charProgress.toFixed(4));
            });

            gsap.set(paragraphEl, {
              autoAlpha: opacity <= 0.015 ? 0 : opacity,
              filter: `blur(${blur.toFixed(2)}px)`,
              y,
            });
          });

          const firstEnter = clamp(progress / 0.08, 0, 1);
          gsap.set(visualColumn, {
            autoAlpha: firstEnter <= 0.015 ? 0 : firstEnter,
            filter: firstEnter === 1 ? 'none' : `blur(${18 * (1 - firstEnter)}px)`,
          });
        };

        const setImageIndex = (nextIndex: number, immediate = false) => {
          const currentIndex = activeImageRef.current;
          if (nextIndex === currentIndex && !immediate) return;

          const currentImage = imageEls[currentIndex];
          const nextImage = imageEls[nextIndex];
          if (!nextImage) return;

          gsap.killTweensOf(imageEls);

          if (immediate || !currentImage) {
            imageEls.forEach((image, index) => {
              gsap.set(image, {
                autoAlpha: index === nextIndex ? 1 : 0,
                filter: index === nextIndex ? 'blur(0px)' : 'blur(18px)',
                scale: index === nextIndex ? 1 : 1.02,
              });
            });
            activeImageRef.current = nextIndex;
            return;
          }

          gsap.timeline()
            .to(currentImage, {
              autoAlpha: 0,
              filter: 'blur(18px)',
              scale: 0.985,
              duration: 0.32,
              ease: 'power2.out',
            }, 0)
            .fromTo(
              nextImage,
              { autoAlpha: 0, filter: 'blur(18px)', scale: 1.02 },
              { autoAlpha: 1, filter: 'blur(0px)', scale: 1, duration: 0.48, ease: 'power3.out' },
              0.06
            );

          activeImageRef.current = nextIndex;
        };

        const getImageIndex = (progress: number) =>
          clamp(Math.floor(progress / segmentSpan), 0, imageEls.length - 1);

        const applyState = (progress: number, immediateImage = false) => {
          updateLines(progress);
          setImageIndex(getImageIndex(progress), immediateImage);
        };

        resetLines();
        activeImageRef.current = 0;
        setImageIndex(0, true);

        ScrollTrigger.create({
          trigger: section,
          start: () => `top ${entryStartViewport}px`,
          end: 'top top',
          scrub: 1.18,
          invalidateOnRefresh: true,
          onRefresh: (self) => {
            const progress = (self.progress || 0) * ENTRY_PROGRESS_SHARE;
            applyState(progress, true);
          },
          onUpdate: (self) => {
            const progress = (self.progress || 0) * ENTRY_PROGRESS_SHARE;
            applyState(progress);
          },
          onLeaveBack: () => {
            resetLines();
            setImageIndex(0, true);
          },
        });

        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: () => `+=${window.innerHeight * 3.9}`,
          pin,
          pinSpacing: true,
          scrub: 1.55,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefresh: (self) => {
            if (!self.isActive) return;
            const progress = ENTRY_PROGRESS_SHARE + (self.progress || 0) * (1 - ENTRY_PROGRESS_SHARE);
            applyState(progress, true);
          },
          onUpdate: (self) => {
            const progress = ENTRY_PROGRESS_SHARE + (self.progress || 0) * (1 - ENTRY_PROGRESS_SHARE);
            applyState(progress);
          },
        });
      });

      mm.add('(max-width: 900px)', () => {
        gsap.set(visualColumn, { autoAlpha: 1, filter: 'none' });

        lineEls.forEach((line) => {
          const charEls = Array.from(line.querySelectorAll<HTMLElement>('[data-action-char]'));
          charEls.forEach((charEl) => charEl.style.setProperty('--char-progress', '0'));
          gsap.set(line, { autoAlpha: 0, y: 20 });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${window.innerHeight * 8.2}`,
            pin,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        imageEls.forEach((img) => {
          gsap.set(img, {
            opacity: 1,
            visibility: 'visible',
            y: '120vh',
            scale: 0.95,
            filter: 'blur(20px)',
          });
        });

        content.paragraphs.forEach((_, index) => {
          const line = lineEls[index];
          if (!line) return;
          const chars = Array.from(line.querySelectorAll<HTMLElement>('[data-action-char]'));
          const img = imageEls[index];
          const offset = index > 0 ? '-=2.0' : '+=0';

          tl.to(img, {
            y: '50vh',
            filter: 'blur(0px)',
            duration: 4.0,
            ease: 'power2.out',
          }, offset);

          tl.to(line, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out' }, offset);

          tl.to(chars, {
            '--char-progress': 1,
            duration: 2.5,
            stagger: 0.1,
            ease: 'none',
          }, '<0.5');

          tl.to({}, { duration: 0.5 });

          tl.to(img, {
            y: 0,
            scale: 1,
            duration: 8.0,
            ease: 'none',
          });

          tl.to(line, {
            autoAlpha: 0,
            filter: 'blur(10px)',
            y: -20,
            duration: 4.0,
            ease: 'power2.inOut',
          }, '<4.0');

          if (index < content.paragraphs.length - 1) {
            tl.to(img, {
              y: '-120vh',
              duration: 8.0,
              ease: 'none',
            });

            tl.to(img, {
              opacity: 0,
              filter: 'blur(20px)',
              duration: 4.0,
              ease: 'power2.out',
            }, '<2.0');
          }
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [content], revertOnUpdate: true }
  );

  return (
    <ActionSection id="action" ref={sectionRef}>
      <ActionPin ref={pinRef}>
        <ActionInner className="container">
          <CopyColumn>
            <CopyLines>
              {content.paragraphs.map((paragraph, index) => (
                <ActionLine
                  key={`${content.titles[index]}-${paragraph}`}
                  ref={(element) => {
                    lineRefs.current[index] = element;
                  }}
                >
                  <ActionLineInner>
                    <ActionBadge>{content.titles[index]}</ActionBadge>
                    <div>
                      {Array.from(paragraph).map((char, charIndex) => (
                        <ActionChar key={`${index}-${charIndex}`} data-action-char>
                          {char}
                        </ActionChar>
                      ))}
                    </div>
                  </ActionLineInner>
                </ActionLine>
              ))}
            </CopyLines>
          </CopyColumn>

          <VisualColumn ref={visualColumnRef}>
            <VisualFrame>
              {content.images.map((image, index) => (
                <VisualLayer
                  key={`${image.src}-${index}`}
                  ref={(element) => {
                    imageRefs.current[index] = element;
                  }}
                >
                  <img src={image.src} alt={image.alt} />
                </VisualLayer>
              ))}
            </VisualFrame>
          </VisualColumn>
        </ActionInner>
      </ActionPin>
    </ActionSection>
  );
};

export default Action;

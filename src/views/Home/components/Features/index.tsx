import React, { useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useTranslation } from '@/contexts/LanguageContext';
import {
  FeaturesSection,
  FeaturesPin,
  FeaturesInner,
  CopyColumn,
  CopyLines,
  FeatureLine,
  FeatureLineInner,
  FeatureBadge,
  FeatureChar,
  VisualColumn,
  VisualFrame,
  VisualLayer,
} from './styled';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const HEADER_OFFSET = 132;
const ENTRY_PROGRESS_SHARE = 0.14;
const fillEase = gsap.parseEase('sine.inOut');

const featureContent = {
  en: {
    titles: ['LiquidBoard for Text', 'LiquidBoard for Images', 'LiquidBoard for Stickers'],
    paragraphs: [
      'Create and compose multiple text documents, introductory information, and content tailored to your writing needs. Set up pre-built response templates for immediate use. Input and quickly share contact information. Store website links, code snippets, and AI prompt structures for efficient reference and reuse.',
      'Rapidly share payment QR codes and bank transfer QR codes. Access a diverse collection of product sample prototypes, design mockups, infographics, and instructional screenshots. Organize and retrieve visual assets seamlessly for professional communication.',
      'Create and instantly share stickers, favorite memes, congratulatory messages, and emotional expressions to connect with loved ones and customers. Personalize your communication with visual elements that convey sentiment and enhance engagement.',
    ],
    images: [
      { src: '/assets/lb-text.PNG', alt: 'LiquidBoard text snippets' },
      { src: '/assets/lb-photos.PNG', alt: 'LiquidBoard photo board' },
      { src: '/assets/lb-keyboard.PNG', alt: 'LiquidBoard keyboard view' },
    ],
  },
  vi: {
    titles: ['LiquidBoard cho Văn bản', 'LiquidBoard cho Hình ảnh', 'LiquidBoard cho Nhãn dán'],
    paragraphs: [
      'Soạn thảo nhiều tài liệu văn bản, thông tin giới thiệu, và nội dung phù hợp với nhu cầu viết của bạn. Thiết lập sẵn các mẫu phản hồi để dùng ngay. Nhập và chia sẻ nhanh thông tin liên hệ. Lưu website, đoạn mã, và cấu trúc prompt AI để tra cứu và tái sử dụng hiệu quả.',
      'Chia sẻ nhanh mã QR thanh toán và mã QR chuyển khoản ngân hàng. Truy cập bộ sưu tập đa dạng gồm prototype sản phẩm, mockup thiết kế, infographic, và ảnh hướng dẫn. Sắp xếp và truy xuất tài nguyên hình ảnh mượt mà cho giao tiếp chuyên nghiệp.',
      'Tạo và chia sẻ ngay sticker, meme yêu thích, lời chúc, và những biểu cảm cảm xúc để kết nối với người thân và khách hàng. Cá nhân hóa giao tiếp bằng các yếu tố hình ảnh truyền tải cảm xúc và tăng sự gắn kết.',
    ],
    images: [
      { src: '/assets/lb-text.PNG', alt: 'LiquidBoard doan van ban' },
      { src: '/assets/lb-photos.PNG', alt: 'LiquidBoard bang anh' },
      { src: '/assets/lb-keyboard.PNG', alt: 'LiquidBoard ban phim' },
    ],
  },
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const Features: React.FC = () => {
  const { lang } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const visualColumnRef = useRef<HTMLDivElement>(null);
  const activeImageRef = useRef(0);

  const content = useMemo(
    () => (lang === 'vi' ? featureContent.vi : featureContent.en),
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

      let mm = gsap.matchMedia(section);

      // ─── DESKTOP LOGIC (>= 901px) ───
      mm.add("(min-width: 901px)", () => {
        const segmentCount = content.paragraphs.length;
        const segmentSpan = 1 / segmentCount;
        const entryStartViewport = Math.round(window.innerHeight * 0.5 + HEADER_OFFSET);

        const resetLines = () => {
          lineEls.forEach((line) => {
            const charEls = Array.from(line.querySelectorAll<HTMLElement>('[data-feature-char]'));
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
          content.paragraphs.forEach((paragraph, index) => {
            const segmentStart = index * segmentSpan;
            const local = clamp((progress - segmentStart) / segmentSpan, 0, 1);
            const enter = clamp(local / 0.24, 0, 1);
            const fill = fillEase(clamp((local - 0.3) / 0.66, 0, 1));
            const exit = clamp((local - 0.96) / 0.04, 0, 1);
            const opacity = enter * (1 - exit);
            const blur = 18 * (1 - enter) + 18 * exit;
            const y = (1 - enter) * 18 - exit * 16;
            const paragraphEl = lineEls[index];
            const charEls = Array.from(paragraphEl?.querySelectorAll<HTMLElement>('[data-feature-char]') ?? []);
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
            filter: firstEnter === 1 ? 'none' : `blur(${18 * (1 - firstEnter)}px)`
          });
        };

        const setImageIndex = (nextIndex: number, immediate = false) => {
          const currentIndex = activeImageRef.current;
          if (nextIndex === currentIndex && !immediate) {
            return;
          }

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
            .fromTo(nextImage,
              { autoAlpha: 0, filter: 'blur(18px)', scale: 1.02 },
              { autoAlpha: 1, filter: 'blur(0px)', scale: 1, duration: 0.48, ease: 'power3.out' },
              0.06
            );

          activeImageRef.current = nextIndex;
        };

        const getImageIndex = (progress: number) => clamp(Math.floor(progress / segmentSpan), 0, imageEls.length - 1);

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

      // ─── MOBILE LOGIC (<= 900px) ───
      mm.add("(max-width: 900px)", () => {
        // Initial setup for mobile
        gsap.set(visualColumn, { autoAlpha: 1, filter: 'none' });
        
        lineEls.forEach((line) => {
          const charEls = Array.from(line.querySelectorAll<HTMLElement>('[data-feature-char]'));
          charEls.forEach((charEl) => charEl.style.setProperty('--char-progress', '0'));
          gsap.set(line, { autoAlpha: 0, y: 20 });
        });

        imageEls.forEach((img) => {
          gsap.set(img, { 
            opacity: 1, 
            visibility: 'visible',
            y: window.innerHeight, // start from the very bottom
            scale: 0.95, 
            filter: 'blur(20px)' 
          });
        });

        // Create a sequenced timeline for pinning
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            // Increase scroll distance significantly so animations don't rush
            end: () => `+=${window.innerHeight * 6.5}`,
            pin: pin,
            scrub: 1,
            anticipatePin: 1
          }
        });

        content.paragraphs.forEach((paragraph, index) => {
          const line = lineEls[index];
          const chars = Array.from(line.querySelectorAll<HTMLElement>('[data-feature-char]'));
          const img = imageEls[index];

          // 1. Fade in text block
          tl.to(line, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" });

          // 2. Reveal text characters sequentially
          tl.to(chars, {
            '--char-progress': 1,
            duration: 2.5,
            stagger: 0.05,
            ease: "none"
          });

          // 3. Pause briefly so user can read full text before image slides up
          tl.to({}, { duration: 0.5 });

          // 4. Slide image up to center
          tl.to(img, { 
            y: 0, 
            scale: 1,
            duration: 4.0, 
            ease: "none" // Linear movement
          });

          // Unblur image quickly at the very beginning of the slide up
          tl.to(img, {
            filter: 'blur(0px)',
            duration: 1.0, // Finishes unblurring much earlier
            ease: "power2.out"
          }, "<");

          // Blur and hide text as the image comes up to the center
          tl.to(line, {
            autoAlpha: 0,
            filter: 'blur(10px)',
            y: -20,
            duration: 2.0,
            ease: "power2.inOut"
          }, "<2.0"); // Starts halfway through the 4.0s image slide-up

          // 5. Continue sliding image up (No pause)
          if (index < content.paragraphs.length - 1) {
            tl.to(img, { 
              y: -window.innerHeight, 
              duration: 4.0, 
              ease: "none" // Continuous linear movement
            });
          }
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [content], revertOnUpdate: true }
  );

  return (
    <FeaturesSection id="features" className="showcase" ref={sectionRef}>
      <FeaturesPin ref={pinRef}>
        <FeaturesInner className="container">
          <CopyColumn>
            <CopyLines>
              {content.paragraphs.map((paragraph, index) => (
                <FeatureLine
                  key={paragraph}
                  ref={(element) => {
                    lineRefs.current[index] = element;
                  }}
                >
                  <FeatureLineInner>
                    <FeatureBadge>{content.titles[index]}</FeatureBadge>
                    <div>
                      {Array.from(paragraph).map((char, charIndex) => {
                        const glyph = char;

                        return (
                          <FeatureChar key={`${index}-${charIndex}`} data-feature-char>
                            {glyph}
                          </FeatureChar>
                        );
                      })}
                    </div>
                  </FeatureLineInner>
                </FeatureLine>
              ))}
            </CopyLines>
          </CopyColumn>

          <VisualColumn ref={visualColumnRef}>
            <VisualFrame>
              {content.images.map((image, index) => (
                <VisualLayer
                  key={image.src}
                  ref={(element) => {
                    imageRefs.current[index] = element;
                  }}
                >
                  <img src={image.src} alt={image.alt} />
                </VisualLayer>
              ))}
            </VisualFrame>
          </VisualColumn>
        </FeaturesInner>
      </FeaturesPin>
    </FeaturesSection>
  );
};

export default Features;

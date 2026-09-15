import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from '@/contexts/LanguageContext';
import { getHeroImageSrcSet, heroImageSizes } from '@/utils/responsiveImages';
import { publicAsset } from '@/utils/publicAssets';
import { splitGraphemes } from '@/utils/graphemes';
import { getFeatureClipboardContent, type FeatureClipboardKey } from '../../featureClipboardContent';
import { getHeroClipboardItemCopy, type HeroTextItemKey } from '../../heroClipboardCopy';
import { FeatureClipboardSection } from './styled';
import { bindPhaseScrollInput, clipboardPhaseAt, createClipboardPhases, railProgress } from '@/utils/scrollPhases';

const featureItems: FeatureClipboardKey[] = ['text', 'image', 'sticker'];
const localizedTextItemKeys: HeroTextItemKey[] = [
  'meetingFollowUp',
  'deliveryAddress',
  'emailReplyTemplate',
  'projectBrief',
  'weeklyStatusUpdate',
  'quickCustomerReply',
  'launchAnnouncement',
  'travelChecklist',
  'invoiceReminder',
  'pastaDinnerRecipe',
];

const textItems = [
  { title: 'Email greeting', content: 'Hi Minh, thank you for taking the time to review the proposal. I have included a concise summary below, together with the key milestones and open questions we can discuss during our next working session.' },
  { title: 'Customer reply', content: 'Hi Lan, we received your request and the team is checking it with engineering now. I will send a clear progress update before 4:00 PM today so you can plan the rest of your work with confidence.' },
  { title: 'Product introduction', content: 'LiquidBoard gives your team one organized clipboard for text, images, links and small ideas. Everything stays close to hand and can be brought back exactly when you need it in the next app.' },
  { title: 'Affiliate link', content: 'https://example.com/product?ref=liquidboard&utm_source=partner&utm_campaign=launch — use this tracked link in the product introduction and include it in the final newsletter so the partnership attribution remains accurate.' },
  { title: 'Meeting notes', content: 'Decision: keep the visual direction minimal and prioritize the onboarding flow before Friday. Thuan owns the prototype, Mai prepares the content, and Nam will verify the tracking events before the review.' },
  { title: 'AI prompt', content: 'Act as an experienced content strategist. Turn the brief below into three distinct messaging directions, each with a headline, customer insight, tone of voice, supporting proof points and a short social caption.' },
  { title: 'React handler', content: 'const handleSave = async () => { setSaving(true); await saveClipboardItem(payload); toast.success("Saved to LiquidBoard"); setSaving(false); }; Add error handling before release so the interface can recover gracefully when a request fails.' },
  { title: 'CSS motion', content: '@keyframes riseIn { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } } Use this for section reveals, then respect reduced-motion preferences for people who do not want animated transitions.' },
  { title: 'Product brief', content: 'Goal: help iPhone users find and paste useful content faster. The primary audience is marketers, designers and people who constantly move between notes, browsers, chat apps and their keyboard throughout the day.' },
  { title: 'Feature description', content: 'Automatically group clipboard items by content type, let people pin important references, and surface recently used items again when they are likely to be useful in the current task or conversation.' },
  { title: 'Demo script', content: 'Open Mail, select a saved reply, switch to Safari for the product link, then paste both into the message in seconds. The story should make it clear that no one has to hunt through separate apps anymore.' },
  { title: 'Team reminder', content: 'Please leave final feedback before 2:00 PM on Thursday. After that point we will consolidate changes, lock the release candidate and reserve the remaining time for QA rather than introducing new directions.' },
  { title: 'Support response', content: 'I am sorry the experience did not work as expected. Please send a screenshot and the app version you are using, and our team will investigate carefully before sharing the next update with you.' },
  { title: 'Launch announcement', content: 'The new LiquidBoard is ready. This release improves search speed, introduces a quicker save area and makes the whole keyboard experience feel calmer, smoother and more reliable across the everyday moments that matter.' },
  { title: 'Campaign concept', content: 'Tell the story of a workday interrupted by searching for the same fragments again and again. Then show how everything becomes more fluid when the clipboard is already present above the keyboard at the right moment.' },
  { title: 'Social caption', content: 'A good idea should not disappear because you opened the wrong app. Save it, find it and paste it when the moment is right with LiquidBoard — a clipboard designed for a modern rhythm of work.' },
  { title: 'Collaboration pitch', content: 'We love the way you have built a thoughtful creative community. We would like to create a short video together that shows how LiquidBoard supports small, real moments in a creator’s everyday workflow.' },
  { title: 'Interview insight', content: 'People said they do not lack tools; they lack a reliable home for the small but important pieces: a reply, an address, a useful link, a quote or an idea that appeared between two other tasks.' },
  { title: 'Launch checklist', content: 'Review the App Store copy, preview images, download links, analytics events, responsive layouts, privacy language and the person responsible for monitoring feedback during the first day after release.' },
  { title: 'Recipe note', content: 'Marinate the chicken with garlic, pepper and fish sauce for twenty minutes. Pan-sear over medium heat until golden, add the honey lemon glaze, then finish with spring onion and serve while warm.' },
  { title: 'Travel plan', content: 'Da Lat trip: check in at 2:00 PM, have lunch near Hoa Binh, then visit the hillside coffee shop in the afternoon. Keep the hotel address, ride booking code and local contact number in this clip.' },
  { title: 'Article excerpt', content: 'A good product does not make people think about the tool itself. It lets them focus on what they are trying to accomplish, then quietly reduces the distance between intention, action and a useful result.' },
  { title: 'Design feedback', content: 'This direction has the right brand feeling. Give the headline more room to breathe, reduce the weight of the supporting copy, and make the interactive states easier to understand on smaller touch screens.' },
  { title: 'Feature request', content: 'Add the ability to tag multiple items at once, then filter them by project or client. People should also be able to see what they copied in the last few minutes without opening a separate history screen.' },
  { title: 'Project estimate', content: 'The landing-page design package includes research, a wireframe, desktop and mobile UI, plus handoff. The estimated timeline is fourteen working days and includes two revision rounds based on consolidated feedback.' },
  { title: 'Research summary', content: 'People value speed more than a long list of features. They want familiar content to appear immediately, rather than opening a large library and searching through a complicated set of folders and filters.' },
  { title: 'Follow-up email', content: 'Hi, I am sending the file from yesterday’s discussion once more. If the scope and timeline look right, please confirm so the team can begin preparation at the start of next week without losing momentum.' },
  { title: 'Sales template', content: 'Thank you for your interest in LiquidBoard. The best fit for your current workflow is the Pro plan, which includes device sync, unlimited clipboard storage and priority support whenever your team needs a hand.' },
  { title: 'Terminal command', content: 'npm run build && npm run preview — run the production build locally to check fonts, animation timing, safe-area behavior and every responsive state before deployment. Capture any issue before it reaches the release branch.' },
  { title: 'Next actions', content: 'Complete the reverse animation, test the sticky section in Safari on iOS, review the Vietnamese translation and send the final preview to the team before closing the sprint and preparing the production release.' },
  { title: 'Invoice reminder', content: 'Hi Alex, a quick reminder that invoice INV-0248 is due this Friday. Please let us know if you need the purchase order, bank details or a revised billing reference before the payment is processed.' },
  { title: 'Newsletter draft', content: 'This month we focused on making the small actions feel faster: saving a clip, finding it again and bringing it back into the conversation without interrupting the thought you were already working through.' },
  { title: 'Workshop agenda', content: '09:30 welcome and context, 10:00 review the current journey, 11:00 map the highest-friction moments, then use the final hour to choose one focused experiment the team can test next week.' },
  { title: 'Job description', content: 'We are looking for a product designer who can move comfortably from customer research to interaction details, communicate decisions clearly and help turn a complex workflow into something calm and useful.' },
  { title: 'Password note', content: 'Use the shared vault rather than placing credentials in chat. For this account, confirm the workspace email, two-factor device and recovery contact before asking an administrator to reset access.' },
  { title: 'Bug report', content: 'On iOS 18, the keyboard extension occasionally closes after switching quickly between two apps. Steps to reproduce: copy a long text item, open Messages, then return to Safari before pasting.' },
  { title: 'QA checklist', content: 'Test empty, loading, error and success states. Check the animation with reduced motion enabled, rotate the device, dismiss the keyboard and confirm that every saved item remains available after relaunch.' },
  { title: 'Onboarding copy', content: 'Save something useful first. A reply, a link or a note is enough to begin. LiquidBoard will keep it nearby so the next time you need it, you can paste without breaking your flow.' },
  { title: 'Press quote', content: 'LiquidBoard is built around a simple belief: the things people use repeatedly should never be difficult to find. The product turns an overlooked part of the phone into a quieter, more useful workspace.' },
  { title: 'Event invitation', content: 'You are invited to a small product preview on Thursday evening. We will share the thinking behind the new release, demonstrate the latest workflows and leave plenty of room for honest questions.' },
  { title: 'Book recommendation', content: 'Read this when you have time to slow down. It is a thoughtful study of how small habits, clear systems and better defaults can make everyday work feel less fragmented and more intentional.' },
  { title: 'Accessibility note', content: 'Do not rely on color alone to communicate state. Keep labels visible, preserve comfortable tap targets, support Dynamic Type and make sure the keyboard actions remain understandable through VoiceOver.' },
  { title: 'Legal disclaimer', content: 'This material is provided for general information only and should not be treated as legal, financial or professional advice. Please review the final wording with the appropriate qualified advisor before publication.' },
  { title: 'Performance note', content: 'The first render is smooth, but the long list needs a quick profile on lower-powered devices. Measure layout shifts, image decoding and scroll responsiveness before deciding whether to virtualize the collection.' },
  { title: 'API example', content: 'POST /v1/clips with a JSON body containing type, title, content and tags. Return the saved identifier, created timestamp and normalized metadata so the client can update the local list immediately.' },
  { title: 'SQL query', content: 'SELECT project_id, COUNT(*) AS saved_clips FROM clipboard_items WHERE created_at >= CURRENT_DATE - INTERVAL 30 DAY GROUP BY project_id ORDER BY saved_clips DESC; Use this to identify active workspaces.' },
  { title: 'Morning routine', content: 'Review the calendar, choose the one outcome that matters most, collect the notes you need and close the extra tabs. Start with a small, clear task before messages begin to take over the morning.' },
  { title: 'Gift message', content: 'I saw this and thought of you. Thank you for making ordinary days feel lighter, for showing up when it counts and for bringing a little more curiosity into every conversation we share.' },
  { title: 'Learning note', content: 'When a new concept feels complicated, write down one example in your own words, connect it to a familiar problem and return to it the next day. Repetition becomes much easier when context is preserved.' },
  { title: 'Retrospective', content: 'What went well: the team shipped the focused scope and caught issues early. What to improve: lock content sooner, test the long-scroll behavior earlier and leave more time for the final responsive pass.' },
] as const;

const galleryImages = [
  { src: publicAsset('/assets/hero-image/HERO_IMG_1.JPG'), alt: 'Sculptural green landscape' },
  { src: publicAsset('/assets/hero-image/HERO_IMG_2.JPG'), alt: 'Blue botanical composition' },
  { src: publicAsset('/assets/hero-image/HERO_IMG_3.JPG'), alt: 'Architectural curve at dusk' },
  { src: publicAsset('/assets/hero-image/HERO_IMG_4.JPG'), alt: 'Circular wheat field beneath a blue sky' },
  { src: publicAsset('/assets/hero-image/HERO_IMG_5.JPG'), alt: 'Layered garden waterfalls' },
  { src: publicAsset('/assets/hero-image/HERO_IMG_6.JPG'), alt: 'Fashion portrait framed by foliage' },
  { src: publicAsset('/assets/hero-image/HERO_IMG_7.JPG'), alt: 'Concrete bridge between buildings' },
  { src: publicAsset('/assets/hero-image/HERO_IMG_8.JPG'), alt: 'Monumental circular sculpture' },
  { src: publicAsset('/assets/hero-image/HERO_IMG_9.JPG'), alt: 'Red architectural landscape' },
  { src: publicAsset('/assets/hero-image/HERO_IMG_10.JPG'), alt: 'Figure crossing a concrete bridge' },
  { src: publicAsset('/assets/hero-image/HERO_IMG_11.JPG'), alt: 'Figure standing among dark basalt columns' },
] as const;

const imageItems = Array.from({ length: 30 }, (_, index) => ({
  ...galleryImages[index % galleryImages.length],
  id: `clipboard-image-${index + 1}`,
}));

const stickerItems = imageItems.map((imageItem, index) => ({
  ...imageItem,
  id: `clipboard-sticker-${index + 1}`,
}));

type TextClipboardRailItem =
  | { id: string; type: 'text'; title: string; content: string }
  | { id: string; type: 'link'; title: string; href: string; image: string; alt: string }
  | { id: string; type: 'color'; name: string; value: string; color: string; lightText?: boolean };

const textRailExtras: TextClipboardRailItem[] = [
  { id: 'link-product', type: 'link', title: 'LiquidBoard', href: 'liquidboard.io', image: publicAsset('/assets/hero-image/HERO_IMG_8.JPG'), alt: 'LiquidBoard product preview' },
  { id: 'color-azure', type: 'color', name: 'Azure Blue', value: '#3B82F6', color: '#3b82f6', lightText: true },
  { id: 'link-portfolio', type: 'link', title: 'Product portfolio', href: 'behance.net/liquidboard', image: publicAsset('/assets/hero-image/HERO_IMG_6.JPG'), alt: 'Product portfolio preview' },
  { id: 'color-coral', type: 'color', name: 'Soft Coral', value: '#FF7A70', color: '#ff7a70' },
  { id: 'link-campaign', type: 'link', title: 'Campaign reference', href: 'notion.so/launch-board', image: publicAsset('/assets/hero-image/HERO_IMG_9.JPG'), alt: 'Campaign reference preview' },
  { id: 'color-forest', type: 'color', name: 'Forest Green', value: '#175C45', color: '#175c45', lightText: true },
  { id: 'link-mockup', type: 'link', title: 'iPhone mockup', href: 'figma.com/file/mockup', image: publicAsset('/assets/hero-image/HERO_IMG_3.JPG'), alt: 'iPhone mockup preview' },
  { id: 'color-lilac', type: 'color', name: 'Electric Lilac', value: '#8B5CF6', color: '#8b5cf6', lightText: true },
  { id: 'link-brief', type: 'link', title: 'Creative brief', href: 'docs.google.com/brief', image: publicAsset('/assets/hero-image/HERO_IMG_1.JPG'), alt: 'Creative brief preview' },
  { id: 'color-electric-blue', type: 'color', name: 'Electric Blue', value: '#243CFF', color: '#243cff', lightText: true },
  { id: 'link-apple', type: 'link', title: 'Apple', href: 'apple.com', image: 'https://image.thum.io/get/width/1200/crop/720/noanimate/https://www.apple.com/', alt: 'Apple website preview' },
  { id: 'color-warm-lemon', type: 'color', name: 'Warm Lemon', value: '#F4CB3F', color: '#f4cb3f' },
  { id: 'link-icloud', type: 'link', title: 'iCloud', href: 'icloud.com', image: 'https://image.thum.io/get/width/1200/crop/720/noanimate/https://www.icloud.com/', alt: 'iCloud website preview' },
  { id: 'color-deep-violet', type: 'color', name: 'Deep Violet', value: '#7C4DFF', color: '#7c4dff', lightText: true },
  { id: 'link-airbnb', type: 'link', title: 'Airbnb', href: 'airbnb.com', image: 'https://image.thum.io/get/width/1200/crop/720/noanimate/https://www.airbnb.com/', alt: 'Airbnb website preview' },
  { id: 'color-soft-rose', type: 'color', name: 'Soft Rose', value: '#F4A4B7', color: '#f4a4b7' },
  { id: 'link-behance', type: 'link', title: 'Behance', href: 'behance.net', image: 'https://image.thum.io/get/width/1200/crop/720/noanimate/https://www.behance.net/', alt: 'Behance website preview' },
  { id: 'color-fresh-green', type: 'color', name: 'Fresh Green', value: '#35C878', color: '#35c878', lightText: true },
  { id: 'link-spotify', type: 'link', title: 'Spotify', href: 'spotify.com', image: 'https://image.thum.io/get/width/1200/crop/720/noanimate/https://www.spotify.com/', alt: 'Spotify website preview' },
  { id: 'color-basalt-black', type: 'color', name: 'Basalt Black', value: '#151515', color: '#151515', lightText: true },
  { id: 'link-disney', type: 'link', title: 'Disney', href: 'disney.com', image: 'https://image.thum.io/get/width/1200/crop/720/noanimate/https://www.disney.com/', alt: 'Disney website preview' },
  { id: 'color-ocean-blue', type: 'color', name: 'Ocean Blue', value: '#2B8CFF', color: '#2b8cff', lightText: true },
  { id: 'link-samsung', type: 'link', title: 'Samsung', href: 'samsung.com', image: 'https://image.thum.io/get/width/1200/crop/720/noanimate/https://www.samsung.com/', alt: 'Samsung website preview' },
  { id: 'color-midnight-indigo', type: 'color', name: 'Midnight Indigo', value: '#3533A3', color: '#3533a3', lightText: true },
  { id: 'link-porsche', type: 'link', title: 'Porsche', href: 'porsche.com', image: 'https://image.thum.io/get/width/1200/crop/720/noanimate/https://www.porsche.com/', alt: 'Porsche website preview' },
];

type TextClipboardCopy = { title: string; content: string };

const SplitText: React.FC<{ text: string; lang: string; className?: string }> = ({ text, lang, className }) => {
  const Segmenter = (Intl as typeof Intl & {
    Segmenter?: new (locale: string, options: { granularity: 'word' }) => {
      segment: (input: string) => Iterable<{ segment: string }>;
    };
  }).Segmenter;
  // These languages do not consistently separate words with spaces.
  const words = /^(ja|zh|th)(-|$)/.test(lang) && Segmenter
    ? Array.from(new Segmenter(lang, { granularity: 'word' }).segment(text), ({ segment }) => segment)
      .reduce<string[]>((segments, segment) => {
        // Keep closing punctuation with its word when the line wraps.
        if (segments.length && /^[\p{Pe}\p{Pf}、。，．！？：；.!?,:;]+$/u.test(segment)) {
          segments[segments.length - 1] += segment;
        } else {
          segments.push(segment);
        }
        return segments;
      }, [])
    : text.split(/(\s+)/);
  // Keep contextual shaping and conjuncts intact in connected scripts.
  const preserveWordShaping = /^(hi|bn|th)(-|$)/.test(lang);
  return (
    <span className={className ? `feature-split-text ${className}` : 'feature-split-text'} lang={lang} aria-hidden="true">
      {words.map((word, index) => {
        if (/\s+/.test(word)) return word;
        return (
          <span className="feature-split-text-word-wrap" key={`${word}-${index}`}>
            <span className="feature-split-text-word">
              {(preserveWordShaping ? [word] : splitGraphemes(word, lang)).map((grapheme, graphemeIndex) => (
                <span className="feature-split-text-grapheme" key={`${grapheme}-${graphemeIndex}`}>{grapheme}</span>
              ))}
            </span>
          </span>
        );
      })}
    </span>
  );
};

const buildTextClipboardItems = (localizedTextItems: readonly TextClipboardCopy[]): TextClipboardRailItem[] => {
  const items: TextClipboardRailItem[] = [];
  const reusableText = localizedTextItems.slice(0, 28);
  let textIndex = 0;
  let extraIndex = 0;

  // Place each special item into alternating grid columns instead of letting
  // the repeating text cadence land every Link/Color card on the right.
  while (textIndex < reusableText.length || extraIndex < textRailExtras.length) {
    const nextExtraColumn = extraIndex % 2;
    const previousItem = items[items.length - 1];
    const canPlaceExtra = extraIndex < textRailExtras.length
      && items.length % 2 === nextExtraColumn
      && (!previousItem || previousItem.type === 'text');

    if (canPlaceExtra || textIndex >= reusableText.length) {
      items.push(textRailExtras[extraIndex]);
      extraIndex += 1;
      continue;
    }

    items.push({ id: `text-${textIndex + 1}`, type: 'text', ...reusableText[textIndex] });
    textIndex += 1;
  }

  return items;
};

const FeatureClipboard: React.FC = () => {
  const { lang } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const textListViewportRef = useRef<HTMLDivElement>(null);
  const textListTrackRef = useRef<HTMLDivElement>(null);
  const imageListViewportRef = useRef<HTMLDivElement>(null);
  const imageListTrackRef = useRef<HTMLDivElement>(null);
  const stickerListViewportRef = useRef<HTMLDivElement>(null);
  const stickerListTrackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [compactLayout, setCompactLayout] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 1199px), (any-pointer: coarse)').matches,
  );
  const localizedContent = getFeatureClipboardContent(lang);
  const localizedTextItems = useMemo(() => {
    if (lang === 'en') return textItems.slice(0, 28);

    const translatedExamples: TextClipboardCopy[] = localizedTextItemKeys.map((itemKey) => {
      const item = getHeroClipboardItemCopy(lang, itemKey);
      return { title: item.title, content: item.body.replace('\n', ' ') };
    });

    return Array.from({ length: 28 }, (_, index) => translatedExamples[index % translatedExamples.length]);
  }, [lang]);
  const textClipboardItems = useMemo(
    () => buildTextClipboardItems(localizedTextItems),
    [localizedTextItems],
  );

  useEffect(() => {
    const query = window.matchMedia('(max-width: 1199px), (any-pointer: coarse)');
    const updateLayout = () => setCompactLayout(query.matches);
    query.addEventListener('change', updateLayout);
    return () => query.removeEventListener('change', updateLayout);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!compactLayout || !section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const revealItems = Array.from(section.querySelectorAll<HTMLElement>(
      '.feature-text-list-item, .feature-image-list-item, .feature-sticker-list-item',
    ));
    const revealLayerByItem = new Map<HTMLElement, number>();
    const revealTracks = new Set(revealItems.map((item) => item.parentElement).filter(Boolean));
    revealTracks.forEach((track) => {
      if (!track) return;
      const trackItems = revealItems.filter((item) => item.parentElement === track);
      const rowCount = Math.ceil(trackItems.length / 2);
      trackItems.forEach((item, index) => {
        // Earlier rows launch first and stay above the rows following them
        // while several rows overlap around the shared bottom origin.
        revealLayerByItem.set(item, rowCount - Math.floor(index / 2));
      });
    });
    const evenRevealItems = new Set(revealItems.filter((item) => {
      const track = item.parentElement;
      return track ? (Array.prototype.indexOf.call(track.children, item) + 1) % 2 === 0 : false;
    }));
    const visibleRevealItems = new Set<HTMLElement>();
    const mobileQuery = window.matchMedia('(max-width: 767px)');
    const minimumScale = .002;
    let animationFrame = 0;
    let previousFrameTime = 0;
    let revealDirty = true;
    type RevealMotion = {
      scale: number;
      x: number;
      y: number;
      targetScale: number;
      targetX: number;
      targetY: number;
    };
    const revealMotions = new Map<HTMLElement, RevealMotion>();

    const writeRevealMotion = (item: HTMLElement, motion: RevealMotion) => {
      if (compactLayout) {
        const staggerY = evenRevealItems.has(item)
          ? mobileQuery.matches ? 24 : Math.min(38, Math.max(30, window.innerWidth * .03))
          : 0;
        // Keep the launch on one compositor transform. Updating three custom
        // properties per frame makes mobile browsers recalculate the transform
        // expression for every card while the list is moving.
        item.style.transform = `translate3d(${motion.x.toFixed(2)}px, ${(motion.y + staggerY).toFixed(2)}px, 0) scale(${motion.scale.toFixed(3)})`;
        return;
      }
      item.style.setProperty('--feature-item-reveal-scale', motion.scale.toFixed(3));
      item.style.setProperty('--feature-item-launch-x', `${motion.x.toFixed(2)}px`);
      item.style.setProperty('--feature-item-launch-y', `${motion.y.toFixed(2)}px`);
    };

    const setRevealMotionImmediate = (item: HTMLElement, scale: number, x = 0, y = 0) => {
      const motion = { scale, x, y, targetScale: scale, targetX: x, targetY: y };
      revealMotions.set(item, motion);
      writeRevealMotion(item, motion);
    };

    const updateRevealItems = (items: Iterable<HTMLElement>, immediate = false) => {
      const viewportHeight = Math.max(window.innerHeight, 1);
      const viewportWidth = Math.max(window.innerWidth, 1);
      const mobile = mobileQuery.matches;
      const revealStart = viewportHeight * 1.10;
      const revealEnd = viewportHeight * .54;
      const launchOriginX = viewportWidth * .5;
      // Every pair starts at one shared point on the lower viewport edge.
      // Keeping the origin on the edge (rather than several hundred pixels
      // below it) makes the compact launch match the iPad composition.
      const launchOriginY = viewportHeight;
      const trackBounds = new Map<HTMLElement, DOMRect>();
      const updates: Array<{
        item: HTMLElement;
        scale: number;
        x: number;
        y: number;
        active: boolean;
        aboveViewport: boolean;
      }> = [];

      for (const item of items) {
        if (!item.offsetWidth || !item.offsetHeight) continue;
        const track = item.parentElement;
        if (!track) continue;
        let bounds = trackBounds.get(track);
        if (!bounds) {
          bounds = track.getBoundingClientRect();
          trackBounds.set(track, bounds);
        }

        const staggerY = evenRevealItems.has(item)
          ? mobile ? 24 : Math.min(38, Math.max(30, viewportWidth * .03))
          : 0;
        const finalTop = bounds.top + item.offsetTop + staggerY;
        const linearProgress = Math.max(0, Math.min(1, (revealStart - finalTop) / (revealStart - revealEnd)));
        // Leave the shared bottom origin quickly, then settle gently into the
        // grid. Reversing the same curve makes the bottom feel magnetic.
        const launchProgress = 1 - ((1 - linearProgress) ** 2.6);
        const finalCenterX = bounds.left + item.offsetLeft + item.offsetWidth * .5;
        const finalCenterY = bounds.top + item.offsetTop + staggerY + item.offsetHeight * .5;
        const y = (launchOriginY - finalCenterY) * (1 - launchProgress);
        // Scale from the item's visible, transformed position instead of its
        // off-screen grid position. The tiny state now reaches the actual
        // bottom edge before expanding, so the launch/suction is perceptible.
        const rowFinalTop = bounds.top + item.offsetTop;
        const rowLinearProgress = Math.max(0, Math.min(1, (revealStart - rowFinalTop) / (revealStart - revealEnd)));
        const rowLaunchProgress = 1 - ((1 - rowLinearProgress) ** 2.6);
        const rowFinalCenterY = bounds.top + item.offsetTop + item.offsetHeight * .5;
        const rowY = (launchOriginY - rowFinalCenterY) * (1 - rowLaunchProgress);
        const visibleCenterY = rowFinalCenterY + rowY;
        // Make the scale range wider than one compact-grid row. The following
        // row therefore starts growing while the previous row is still in
        // flight instead of waiting for it to reach full size first.
        const scaleTravel = mobile
          ? Math.min(450, Math.max(390, viewportHeight * .50))
          : Math.min(620, Math.max(540, viewportHeight * .58));
        const visibleScaleProgress = Math.max(0, Math.min(1, (viewportHeight - visibleCenterY) / scaleTravel));
        const scaleProgress = 1 - ((1 - visibleScaleProgress) ** 1.65);
        // Keep every tiny card on the exact horizontal center until it reaches
        // the visible bottom edge. Only then fan it toward its grid column as
        // it grows, so the list visibly launches from one shared point.
        // Let a tiny card travel vertically before it fans out. This keeps
        // the first visible state stacked at bottom-center, then gives the
        // horizontal split a clear, accelerating release as the card grows.
        const horizontalProgress = scaleProgress ** 2.4;
        const x = (launchOriginX - finalCenterX) * (1 - horizontalProgress);
        updates.push({
          item,
          scale: minimumScale + scaleProgress * (1 - minimumScale),
          x,
          y,
          active: finalTop + item.offsetHeight > viewportHeight * -.4 && finalTop < viewportHeight * 1.5,
          aboveViewport: finalTop < 0,
        });
      }

      // Keep layout reads above and compositor-only writes below so mobile
      // browsers do not alternate reflow and paint for every visible card.
      updates.forEach(({ item, scale, x, y, active, aboveViewport }) => {
        const motion = revealMotions.get(item);
        const wasActive = visibleRevealItems.has(item);
        if (active) visibleRevealItems.add(item);
        else visibleRevealItems.delete(item);

        if (!motion || immediate || (active && !wasActive)) {
          setRevealMotionImmediate(item, scale, x, y);
          return;
        }
        if (!active) {
          const endpointScale = aboveViewport ? 1 : minimumScale;
          const endpointX = aboveViewport ? 0 : x;
          const endpointY = aboveViewport ? 0 : y;
          if (
            Math.abs(motion.scale - endpointScale) > .001
            || Math.abs(motion.x - endpointX) > .05
            || Math.abs(motion.y - endpointY) > .05
          ) {
            setRevealMotionImmediate(item, endpointScale, endpointX, endpointY);
          }
          return;
        }
        motion.targetScale = scale;
        motion.targetX = x;
        motion.targetY = y;
      });
    };

    const renderRevealMotions = (frameTime: number) => {
      const elapsedFrames = previousFrameTime
        ? Math.min(2, Math.max(.5, (frameTime - previousFrameTime) / (1000 / 60)))
        : 1;
      const basePositionSmoothing = mobileQuery.matches ? .42 : .46;
      const positionSmoothing = 1 - ((1 - basePositionSmoothing) ** elapsedFrames);
      previousFrameTime = frameTime;
      let isMoving = false;
      visibleRevealItems.forEach((item) => {
        const motion = revealMotions.get(item);
        if (!motion) return;
        const baseScaleSmoothing = motion.targetScale < motion.scale ? .58 : .52;
        const scaleSmoothing = 1 - ((1 - baseScaleSmoothing) ** elapsedFrames);
        motion.scale += (motion.targetScale - motion.scale) * scaleSmoothing;
        motion.x += (motion.targetX - motion.x) * positionSmoothing;
        motion.y += (motion.targetY - motion.y) * positionSmoothing;
        const scaleDelta = Math.abs(motion.targetScale - motion.scale);
        const positionDelta = Math.max(
          Math.abs(motion.targetX - motion.x),
          Math.abs(motion.targetY - motion.y),
        );
        if (scaleDelta < .001 && positionDelta < .05) {
          motion.scale = motion.targetScale;
          motion.x = motion.targetX;
          motion.y = motion.targetY;
        } else {
          isMoving = true;
        }
        writeRevealMotion(item, motion);
      });
      return isMoving;
    };

    const renderMotion = (frameTime: number) => {
      if (revealDirty) {
        updateRevealItems(revealItems);
        revealDirty = false;
      }
      const revealIsMoving = renderRevealMotions(frameTime);

      if (revealIsMoving) {
        animationFrame = window.requestAnimationFrame(renderMotion);
      } else {
        animationFrame = 0;
        previousFrameTime = 0;
      }
    };

    const requestRender = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(renderMotion);
    };
    const handleScroll = () => {
      revealDirty = true;
      requestRender();
    };

    revealItems.forEach((item) => {
      item.style.setProperty('--feature-item-reveal-z', `${revealLayerByItem.get(item) ?? 1}`);
    });
    updateRevealItems(revealItems, true);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      revealItems.forEach((item) => {
        item.style.removeProperty('transform');
        item.style.removeProperty('--feature-item-reveal-scale');
        item.style.removeProperty('--feature-item-launch-x');
        item.style.removeProperty('--feature-item-launch-y');
        item.style.removeProperty('--feature-item-reveal-z');
      });
    };
  }, [compactLayout]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    const textListViewport = textListViewportRef.current;
    const textListTrack = textListTrackRef.current;
    const imageListViewport = imageListViewportRef.current;
    const imageListTrack = imageListTrackRef.current;
    const stickerListViewport = stickerListViewportRef.current;
    const stickerListTrack = stickerListTrackRef.current;
    const motionQuery = window.matchMedia('(prefers-reduced-motion: no-preference)');
    const compactQuery = window.matchMedia('(max-width: 1199px), (any-pointer: coarse)');
    // Tablet and mobile use a plain document-flow grid. Avoid importing GSAP
    // or creating any ScrollTrigger/pin-spacer on these devices.
    if (compactLayout) return undefined;
    if (!section || !pin || !track || !textListViewport || !textListTrack || !imageListViewport || !imageListTrack || !stickerListViewport || !stickerListTrack || !motionQuery.matches) return undefined;

    // GSAP is loaded asynchronously. Keep every desktop copy hidden during that
    // short gap so no phase can flash in its final state before its own reveal.
    const prehiddenCopyContents = Array.from(track.querySelectorAll<HTMLElement>('.feature-clipboard-copy-content'));
    prehiddenCopyContents.forEach((copy) => {
      copy.style.opacity = '0';
      copy.style.visibility = 'hidden';
    });

    let active = true;
    let cleanup: (() => void) | undefined;

    const initialize = async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
      if (!active || !motionQuery.matches) return;
      gsap.registerPlugin(ScrollTrigger);
      if (window.matchMedia('(pointer: coarse)').matches) {
        ScrollTrigger.config({ ignoreMobileResize: true, limitCallbacks: true });
      }

      const headerOffset = () => {
        const header = document.querySelector('header');
        return header && getComputedStyle(header).position === 'fixed'
          ? header.getBoundingClientRect().height
          : 0;
      };
      const motionCleanups: Array<() => void> = [];
      const context = gsap.context(() => {
        const compact = compactQuery.matches;
        const slideDistance = () => {
          const slide = track.querySelector<HTMLElement>('.feature-clipboard-copy-item');
          return Math.max(slide?.getBoundingClientRect().width ?? window.innerWidth, 1);
        };
        const copyCenterOffset = (copy = track.querySelector<HTMLElement>('.feature-clipboard-copy-content')) => {
          const slide = copy?.closest<HTMLElement>('.feature-clipboard-copy-item');
          if (!copy || !slide) return 0;
          // Measure the untransformed layout box. Reading copyRect here is
          // incorrect once the copy is centered: its current translate makes
          // the visual center equal the slide center, producing a false 0px
          // offset and causing the left transition to jump without animating.
          const slideRect = slide.getBoundingClientRect();
          const offsetParent = copy.offsetParent as HTMLElement | null;
          if (!offsetParent) return 0;
          const parentRect = offsetParent.getBoundingClientRect();
          const copyLayoutCenter = parentRect.left + copy.offsetLeft + copy.offsetWidth * .5;
          return (slideRect.left + slideRect.width * .5) - copyLayoutCenter;
        };
        const listStartOffset = (listViewport: HTMLDivElement) => {
          if (compact) return listViewport.clientHeight * .58;
          // Put the first row close to the visible bottom when a phase lands.
          // The next cards can then start reading immediately instead of
          // leaving an empty scroll segment before the rail enters view.
          return pin.clientHeight * .84;
        };
        const listEndOffset = (listTrack: HTMLDivElement, listViewport: HTMLDivElement) => {
          if (!compact && listTrack === stickerListTrack) {
            const visibleItems = Array.from(listTrack.children) as HTMLElement[];
            const lastCenter = Math.max(0, ...visibleItems
              .filter((item) => item.offsetWidth > 0)
              .map((item) => item.offsetTop + item.offsetHeight * .5));
            // The final row must reach the reading position before leaving
            // the section; the old endpoint left it near the bottom edge.
            return listViewport.clientHeight * .5 - lastCenter;
          }
          return -listTrack.scrollHeight + listViewport.clientHeight * (compact ? .60 : .88);
        };
        const copyContents = Array.from(track.querySelectorAll('.feature-clipboard-copy-content')) as HTMLElement[];
        const listViewports = [textListViewport, imageListViewport, stickerListViewport];
        const allTextListItems = Array.from(textListTrack.children) as HTMLElement[];
        const allImageListItems = Array.from(imageListTrack.children) as HTMLElement[];
        const allStickerListItems = Array.from(stickerListTrack.children) as HTMLElement[];
        let textListItems: HTMLElement[] = [];
        let imageListItems: HTMLElement[] = [];
        let stickerListItems: HTMLElement[] = [];
        let cardArcCenters: number[] = [];
        let imageCardArcCenters: number[] = [];
        let stickerCardArcCenters: number[] = [];
        type CardLayout = { top: number; height: number; left: number; width: number };
        const cardLayouts: CardLayout[][] = [[], [], []];
        const activeCardIndices = [new Set<number>(), new Set<number>(), new Set<number>()];
        const refreshRenderableItems = () => {
          // Mobile/iPad intentionally keep fewer repeated examples in paint.
          // Resolve that compact subset only during ScrollTrigger refresh, not
          // during every scroll frame.
          textListItems = allTextListItems.filter((item) => item.offsetWidth > 0);
          imageListItems = allImageListItems.filter((item) => item.offsetWidth > 0);
          stickerListItems = allStickerListItems.filter((item) => item.offsetWidth > 0);
        };
        const measureCardCenters = () => {
          const rows = new Map<number, { start: number; end: number }>();
          textListItems.forEach((item) => {
            const start = item.offsetTop;
            const row = rows.get(start);
            rows.set(start, { start, end: Math.max(row?.end ?? 0, start + item.offsetHeight) });
          });
          cardArcCenters = textListItems.map((item) => {
            const row = rows.get(item.offsetTop)!;
            return (row.start + row.end) / 2;
          });
        };
        const measureImageCardCenters = () => {
          imageCardArcCenters = imageListItems.map((_, index) => {
            const rowStart = Math.floor(index / 2) * 2;
            const rowItems = imageListItems.slice(rowStart, rowStart + 2);
            const start = Math.min(...rowItems.map((rowItem) => rowItem.offsetTop));
            const end = Math.max(...rowItems.map((rowItem) => rowItem.offsetTop + rowItem.offsetHeight));
            return (start + end) / 2;
          });
        };
        const measureStickerCardCenters = () => {
          stickerCardArcCenters = stickerListItems.map((_, index) => {
            const rowStart = Math.floor(index / 2) * 2;
            const rowItems = stickerListItems.slice(rowStart, rowStart + 2);
            const start = Math.min(...rowItems.map((rowItem) => rowItem.offsetTop));
            const end = Math.max(...rowItems.map((rowItem) => rowItem.offsetTop + rowItem.offsetHeight));
            return (start + end) / 2;
          });
        };
        const refreshCardLayouts = () => {
          const measure = (items: HTMLElement[]) => items.map((item) => ({
            top: item.offsetTop,
            height: item.offsetHeight,
            left: item.offsetLeft,
            width: item.offsetWidth,
          }));
          cardLayouts[0] = measure(textListItems);
          cardLayouts[1] = measure(imageListItems);
          cardLayouts[2] = measure(stickerListItems);
        };
        const updateCardTransforms = (
          railIndex: number,
          items: HTMLElement[],
          centers: number[],
          layouts: CardLayout[],
          railY: number,
          viewportHeight: number,
          createTransform: (index: number, arcX: number, y: number, scale: number, settleProgress?: number) => string,
        ) => {
          const previousIndices = activeCardIndices[railIndex];
          const nextIndices = new Set<number>();
          // Only cards near the viewport need per-frame launch calculations.
          // Cards outside this window are parked once until they re-enter.
          const buffer = compact ? viewportHeight * .12 : viewportHeight * .42;
          const viewportElement = items[0]?.parentElement?.parentElement?.parentElement;
          const viewportBounds = viewportElement?.getBoundingClientRect();
          const viewportTop = viewportBounds?.top ?? 0;
          // The fixed header reserves the top of the browser viewport, while
          // the launch must always use the real viewport bottom. Do not let a
          // partially measured pin/rail become a floating intermediate edge.
          const viewportBottom = window.innerHeight;
          const railHeight = Math.max(viewportBottom - viewportTop, 1);
          // Resolve the launch point in rail-local coordinates. Both the
          // viewport and its card track inherit the horizontal panel tween,
          // so subtracting their bounds removes that tween from the math and
          // keeps the origin fixed when scrolling back through a phase.
          const cardTrack = items[0]?.parentElement;
          const trackBounds = cardTrack?.getBoundingClientRect();
          const measuredViewportWidth = viewportBounds?.width ?? 0;
          const originX = measuredViewportWidth > 0 && trackBounds && viewportBounds
            ? viewportBounds.left - trackBounds.left + measuredViewportWidth * .5
            : measuredViewportWidth > 0 ? measuredViewportWidth * .5 : viewportHeight * .5;

          centers.forEach((center, index) => {
            if (!layouts[index]) return;
            const position = viewportTop + center + railY;
            if (position >= viewportTop - buffer && position <= viewportBottom + buffer) nextIndices.add(index);
          });

          // Once a card leaves the buffered viewport, park it at the narrow
          // edge of the arc. This avoids recalculating and repainting the long
          // off-screen tail on every mobile scroll frame.
          previousIndices.forEach((index) => {
            if (nextIndices.has(index)) return;
            const item = items[index];
            if (!item) return;
            item.style.willChange = 'auto';
            if (compact) {
              item.style.removeProperty('transform');
              return;
            }
            const transform = createTransform(index, 0, 0, .955);
            if (item.style.transform !== transform) item.style.transform = transform;
          });

          nextIndices.forEach((index) => {
            if (!previousIndices.has(index)) items[index].style.willChange = 'transform';
            if (compact) {
              // The compact reveal loop owns the transform through CSS
              // variables, keeping the shared-bottom launch in sync with
              // the document scroll instead of replacing it with the desktop
              // rail's arc transform.
              items[index].style.removeProperty('transform');
              return;
            }
            // Use each card's own center for the launch. Row centers are still
            // useful for visibility checks, but a staggered right-hand card
            // must leave from the exact same bottom origin as its left pair.
            const layout = layouts[index];
            if (!layout) return;
            const position = viewportTop + layout.top + layout.height * .5 + railY;
            const verticalPosition = position / viewportHeight;
            const arcDistance = Math.min(1, Math.abs(verticalPosition - .5) / .74);
            const scale = 1.04 - arcDistance * .085;
            // Keep the pair in a controlled funnel: the extra lateral offset
            // is modest, constant at the top, and is multiplied by the launch
            // progress below so it can only widen as the cards rise.
            const funnelSpread = Math.min(24, Math.max(12, (viewportBounds?.width ?? viewportHeight) * .018));
            const arcX = funnelSpread;
            // Desktop uses the same launch language as the compact layout:
            // cards are parked at one shared point on the lower viewport edge,
            // then grow and settle into their two-column rail as they travel up.
            // Anchor the shared launch on the visible bottom edge itself so
            // both cards can be seen leaving the middle before fanning out.
            const originY = viewportBottom;
            const scaleTravel = Math.min(500, Math.max(420, railHeight * .48));
            // Use one bottom-up progress for both scale and vertical travel.
            // A shorter travel window plus an ease-out curve lets the card
            // become readable sooner, while still beginning at the shared
            // bottom-center origin.
            const visibleScaleProgress = Math.max(0, Math.min(1, (viewportBottom - position) / scaleTravel));
            const scaleProgress = 1 - ((1 - visibleScaleProgress) ** 2.2);
            // offsetLeft is layout space, so it stays unchanged while the
            // whole panel is translated left or right by the phase tween.
            const finalCenterX = layout.left + layout.width * .5;
            const launchY = (originY - position) * (1 - scaleProgress);
            // Keep the first frame stacked at the origin, then let the pair
            // fan outward as soon as the cards become readable.
            const horizontalProgress = Math.max(0, Math.min(1, scaleProgress ** 1.25));
            // The two columns leave the same bottom-center origin and fan out
            // in opposite directions as they settle into the grid.
            const columnDirection = index % 2 === 0 ? -1 : 1;
            const targetArcX = columnDirection * arcX;
            const launchScale = .002 + scaleProgress * (scale - .002);
            // Cards scale from their outer edge (right edge for the left
            // column, left edge for the right column). Interpolating only
            // between the unscaled centers leaves the tiny launch cards one
            // half-width away from the shared origin. Account for that edge
            // pivot so their visual centers really meet at bottom-center.
            const transformOriginDirection = index % 2 === 0 ? 1 : -1;
            const preScaleVisualCenter = finalCenterX
              + transformOriginDirection * layout.width * (1 - launchScale) * .5;
            const targetVisualCenter = originX * (1 - horizontalProgress)
              + (finalCenterX + targetArcX) * horizontalProgress;
            const launchX = targetVisualCenter - preScaleVisualCenter;
            const transform = createTransform(index, launchX, launchY, launchScale, horizontalProgress);
            if (items[index].style.transform !== transform) items[index].style.transform = transform;
          });

          activeCardIndices[railIndex] = nextIndices;
        };
        const updateCardScale = () => {
          const railY = Number(gsap.getProperty(textListTrack, 'y')) || 0;
          const viewportHeight = Math.max(textListViewport.clientHeight, 1);
          const mobile = window.matchMedia('(max-width: 767px)').matches;
          updateCardTransforms(0, textListItems, cardArcCenters, cardLayouts[0], railY, viewportHeight, (index, arcX, y, scale, settleProgress = 1) => {
            const stagger = index % 2 === 1 ? (mobile ? 22 : 28) : 0;
            const settledStagger = mobile ? stagger : stagger * settleProgress;
            return `translate(${arcX.toFixed(2)}px, ${(y + settledStagger).toFixed(2)}px) scale(${scale.toFixed(3)})`;
          });
        };
        const updateImageCardScale = () => {
          const railY = Number(gsap.getProperty(imageListTrack, 'y')) || 0;
          const viewportHeight = Math.max(imageListViewport.clientHeight, 1);
          updateCardTransforms(1, imageListItems, imageCardArcCenters, cardLayouts[1], railY, viewportHeight, (_index, arcX, y, scale) => (
            `translate(${arcX.toFixed(2)}px, ${y.toFixed(2)}px) scale(${scale.toFixed(3)})`
          ));
        };
        const updateStickerCardScale = () => {
          const railY = Number(gsap.getProperty(stickerListTrack, 'y')) || 0;
          const viewportHeight = Math.max(stickerListViewport.clientHeight, 1);
          updateCardTransforms(2, stickerListItems, stickerCardArcCenters, cardLayouts[2], railY, viewportHeight, (_index, arcX, y, scale) => (
            `translate(${arcX.toFixed(2)}px, ${y.toFixed(2)}px) scale(${scale.toFixed(3)})`
          ));
        };
        const updateRail = (index: number) => {
          if (index === 0) updateCardScale();
          else if (index === 1) updateImageCardScale();
          else updateStickerCardScale();
        };
        // Give every rail more scroll room than its physical travel so all
        // three phases read as a calm, deliberate vertical movement. Keeping
        // one multiplier for text, image and sticker avoids a fast phase
        // transition when the shorter rails take over.
        const railScrollMultiplier = compact ? 1.6 : 2.5;
        const listTravelDistance = (listTrack: HTMLDivElement, listViewport: HTMLDivElement) => (
          (listStartOffset(listViewport) - listEndOffset(listTrack, listViewport)) * railScrollMultiplier
        );
        let displayedIndex = 0;
        refreshRenderableItems();
        measureCardCenters();
        measureImageCardCenters();
        measureStickerCardCenters();
        refreshCardLayouts();
        const refreshMeasurements = () => {
          refreshRenderableItems();
          measureCardCenters();
          measureImageCardCenters();
          measureStickerCardCenters();
          refreshCardLayouts();
        };

        if (compact) {
          const compactRails = [
            { viewport: textListViewport, rail: textListTrack },
            { viewport: imageListViewport, rail: imageListTrack },
            { viewport: stickerListViewport, rail: stickerListTrack },
          ];

          // Copy now belongs to the natural document flow. Each list directly
          // below it owns a small independent pin instead of one giant pinned
          // horizontal scene spanning all three features.
          gsap.set(track, { clearProps: 'transform,willChange' });
          gsap.set(copyContents, { clearProps: 'transform,willChange,opacity' });
          compactRails.forEach(({ viewport, rail }, index) => {
            gsap.set(viewport, { clearProps: 'transform,willChange' });
            gsap.set(rail, { x: 0, y: () => listStartOffset(viewport), willChange: 'transform' });
            updateRail(index);

            const distance = Math.max(listTravelDistance(rail, viewport), window.innerHeight * 1.4);
            gsap.timeline({
              onUpdate: () => updateRail(index),
              scrollTrigger: {
                trigger: viewport,
                start: () => `top ${headerOffset()}px`,
                end: () => `+=${distance}`,
                pin: true,
                scrub: .12,
                anticipatePin: 2,
                invalidateOnRefresh: true,
                onRefresh: () => {
                  refreshMeasurements();
                  updateRail(index);
                },
              },
            }).to(rail, { y: () => listEndOffset(rail, viewport), duration: distance, ease: 'none' });
          });
          return;
        }

        const copyWordGroups = copyContents.map((content) => (
          Array.from(content.querySelectorAll<HTMLElement>('.feature-split-text-grapheme'))
        ));
        const allCopyGraphemes = copyWordGroups.flat();
        // The copy appears as one centered, blurred block. Keeping every
        // grapheme at its final Y position avoids a second split-text lift
        // when the same h2/p nodes later move horizontally as one block.
        gsap.set(allCopyGraphemes, { yPercent: 0, opacity: 0 });
        gsap.set(track, { x: 0, willChange: 'transform' });
        gsap.set(copyContents, {
          '--feature-copy-scroll-x': '0px',
          '--feature-copy-scroll-y': '0px',
          '--feature-copy-align': 'center',
          autoAlpha: 0,
          willChange: 'transform',
        });
        copyContents.forEach((copy) => {
          gsap.set(copy, { '--feature-copy-scroll-x': `${copyCenterOffset(copy)}px` });
        });
        gsap.set(listViewports, { autoAlpha: 0, willChange: 'opacity' });
        gsap.set(textListTrack, { x: 0, y: () => listStartOffset(textListViewport), willChange: 'transform' });
        gsap.set(imageListTrack, { x: 0, y: () => listStartOffset(imageListViewport), willChange: 'transform' });
        gsap.set(stickerListTrack, { x: 0, y: () => listStartOffset(stickerListViewport), willChange: 'transform' });
        const listTracks = [textListTrack, imageListTrack, stickerListTrack];
        const measurePhases = () => createClipboardPhases(
          listTracks.map((rail, index) => listTravelDistance(rail, listViewports[index])),
          Math.max(320, Math.min(500, window.innerHeight * .40)),
          80,
        );
        // Fixed until an explicit layout refresh; never changed by scroll input.
        let phases = measurePhases();
        const copyMoveDuration = .52;
        const copyReturnDuration = copyMoveDuration;
        const copyHideDuration = .42;
        const phaseHandoffDuration = .72;

        type CopyTween = ReturnType<typeof gsap.timeline>;
        type TrackTween = ReturnType<typeof gsap.to>;
        type CopyMotionState = 'hidden' | 'center' | 'left' | 'returning';
        const copyNodes = copyContents.map((copy) => (
          Array.from(copy.querySelectorAll<HTMLElement>('h2, .feature-clipboard-description'))
        ));
        const copyMotionStates: CopyMotionState[] = copyContents.map(() => 'hidden');
        const copyRevealTweens: Array<CopyTween | undefined> = [];
        const copyMoveTweens: Array<CopyTween | undefined> = [];
        const copyHoldReady: boolean[] = copyContents.map(() => false);
        const copyMoveComplete: boolean[] = copyContents.map(() => false);
        const copyReverseComplete: boolean[] = copyContents.map(() => false);
        // A phase may only begin its center reveal once its horizontal panel
        // handoff has landed. Without this gate, phase 2/3 reveal off-screen
        // while the previous panel slides away and appear already finished.
        const phaseReady: boolean[] = copyContents.map((_copy, index) => index === 0);
        const listVisibility: boolean[] = listViewports.map(() => false);
        // Origins are fixed for the scene's lifetime. A rail becomes active
        // only after its title lands; transition input cannot shift its origin.
        const listStartProgress: number[] = listViewports.map(() => Number.NaN);
        const listRenderedProgress = listViewports.map(() => 0);
        const copyRevealDuration = .68;

        let latestProgressDistance = 0;
        let latestDirection = 1;
        let trackHandoffIndex = 0;
        let trackMoving = false;
        let nativeSeekRequested = false;

        const syncListRail = (index: number, progressDistance: number) => {
          if (trackMoving || index !== trackHandoffIndex) return;
          const rail = listTracks[index];
          const viewport = listViewports[index];
          const startProgress = listStartProgress[index];
          if (!rail || !viewport) return;
          const startY = listStartOffset(viewport);
          if (!Number.isFinite(startProgress)) {
            listRenderedProgress[index] = 0;
            gsap.set(rail, { y: startY });
            return;
          }
          // The travel ratio is identical for every rail, regardless of when
          // its title finishes moving or how many cards it contains.
          const endProgress = startProgress + Math.max(listTravelDistance(rail, viewport), 1);
          const progress = railProgress(progressDistance, startProgress, endProgress - startProgress);
          const endY = listEndOffset(rail, viewport);
          listRenderedProgress[index] = progress;
          gsap.set(rail, { y: startY + ((endY - startY) * progress) });
          updateRail(index);
        };

        const syncListRails = (progressDistance: number) => {
          listTracks.forEach((_rail, index) => syncListRail(index, progressDistance));
        };

        const syncListVisibility = (progressDistance: number) => {
          listViewports.forEach((viewport, index) => {
            // A rail remains visible until it has fully returned to its first
            // row. Only then may the title leave the left column on reverse.
            const revealStart = phases.railStarts[index] ?? Number.POSITIVE_INFINITY;
            const shouldShow = copyMotionStates[index] === 'left'
              && copyMoveComplete[index]
              && progressDistance >= revealStart;
            if (shouldShow === listVisibility[index]) return;
            listVisibility[index] = shouldShow;
            gsap.to(viewport, {
              autoAlpha: shouldShow ? 1 : 0,
              duration: shouldShow ? .18 : .12,
              ease: 'power1.out',
              overwrite: 'auto',
            });
          });
        };

        const copyMoveThreshold = (index: number) => phases.railStarts[index];

        const killCopyTweens = (index: number) => {
          copyHoldReady[index] = false;
          copyRevealTweens[index]?.kill();
          copyMoveTweens[index]?.kill();
          copyRevealTweens[index] = undefined;
          copyMoveTweens[index] = undefined;
        };

        const revealCopyAtCenter = (index: number) => {
          const copy = copyContents[index];
          const nodes = copyNodes[index];
          if (!copy || !nodes || copyMotionStates[index] === 'center') return;
          const wasHidden = copyMotionStates[index] === 'hidden';
          killCopyTweens(index);
          gsap.set(copy, {
            autoAlpha: 1,
            '--feature-copy-scroll-x': `${copyCenterOffset(copy)}px`,
            '--feature-copy-scroll-y': '0px',
            '--feature-copy-align': 'center',
          });
          // Treat title and description as one copy block. Split-text stays
          // fully rendered; the phase transition uses only blur and opacity,
          // never a slow per-letter reveal.
          gsap.set(copyWordGroups[index] ?? [], { yPercent: 0, opacity: 1 });
          gsap.set(nodes, {
            filter: wasHidden ? 'blur(16px)' : 'blur(0px)',
            opacity: wasHidden ? 0 : 1,
            willChange: 'transform,filter,opacity',
          });
          const reveal = gsap.timeline({ defaults: { overwrite: 'auto' } });
          if (wasHidden) reveal.to(nodes, {
            filter: 'blur(0px)',
            opacity: 1,
            duration: copyRevealDuration,
            ease: 'power2.out',
          }, 0);
          copyRevealTweens[index] = reveal;
          copyMotionStates[index] = 'center';
          copyMoveComplete[index] = false;
          copyReverseComplete[index] = false;
          syncListVisibility(latestProgressDistance);
          if (wasHidden) {
            reveal.eventCallback('onComplete', () => {
              if (copyMotionStates[index] !== 'center') return;
              copyHoldReady[index] = true;
              if (latestDirection >= 0 && latestProgressDistance >= copyMoveThreshold(index)) {
                moveCopyToLeft(index);
              }
            });
          } else {
            copyHoldReady[index] = true;
          }
        };

        function moveCopyToLeft(index: number) {
          const copy = copyContents[index];
          const nodes = copyNodes[index];
          if (!copy || !nodes || copyMotionStates[index] === 'left') return;
          killCopyTweens(index);
          gsap.set(copy, {
            autoAlpha: 1,
            '--feature-copy-scroll-x': `${copyCenterOffset(copy)}px`,
            '--feature-copy-scroll-y': '0px',
            '--feature-copy-align': 'center',
          });
          gsap.set(nodes, { filter: 'blur(0px)', opacity: 1 });
          copyMoveComplete[index] = false;
          copyReverseComplete[index] = false;
          syncListVisibility(latestProgressDistance);
          const move = gsap.timeline({ defaults: { overwrite: 'auto' } });
          const horizontal = { value: copyCenterOffset(copy) };
          // Keep a soft, readable silhouette while the copy travels. Setting
          // opacity to zero before the x tween made the title disappear and
          // reappear at its destination, which looked like a jump.
          move.to(nodes, { opacity: .42, filter: 'blur(14px)', duration: .10, ease: 'power2.in' }, 0);
          move.to(horizontal, {
            value: 0,
            duration: copyMoveDuration - .22,
            ease: 'power2.inOut',
            onUpdate: () => {
              // Write through style.setProperty so CSS custom properties are
              // interpolated consistently in every GSAP bundle/runtime.
              copy.style.setProperty('--feature-copy-scroll-x', `${horizontal.value}px`);
            },
          }, .10);
          move.to(nodes, { opacity: 1, filter: 'blur(0px)', duration: .12, ease: 'power2.out' }, copyMoveDuration - .12);
          move.eventCallback('onComplete', () => {
            gsap.set(copy, { '--feature-copy-scroll-x': '0px', '--feature-copy-align': 'center' });
            copyMoveComplete[index] = true;
            // Scroll input is gated during this motion. Keep the rail origin
            // fixed so its first row and reverse path always share one anchor.
            listStartProgress[index] = phases.railStarts[index];
            syncListRail(index, latestProgressDistance);
            syncListVisibility(latestProgressDistance);
          });
          copyMoveTweens[index] = move;
          copyMotionStates[index] = 'left';
        }

        const placeCopyAtLeft = (index: number) => {
          const copy = copyContents[index];
          const nodes = copyNodes[index];
          if (!copy || !nodes) return;
          killCopyTweens(index);
          gsap.set(copy, {
            autoAlpha: 1,
            '--feature-copy-scroll-x': '0px',
            '--feature-copy-scroll-y': '0px',
            '--feature-copy-align': 'center',
          });
          gsap.set(copyWordGroups[index] ?? [], { yPercent: 0, opacity: 1 });
          gsap.set(nodes, { filter: 'blur(0px)', opacity: 1, willChange: 'transform,filter,opacity' });
          copyMotionStates[index] = 'left';
          copyMoveComplete[index] = true;
          listStartProgress[index] = phases.railStarts[index] ?? latestProgressDistance;
          copyReverseComplete[index] = false;
        };

        function returnCopyToCenter(index: number) {
          const copy = copyContents[index];
          const nodes = copyNodes[index];
          if (!copy || !nodes || copyMotionStates[index] === 'returning' || copyMotionStates[index] === 'hidden') return;
          killCopyTweens(index);
          gsap.set(copy, { autoAlpha: 1, '--feature-copy-align': 'center' });
          gsap.set(nodes, { filter: 'blur(0px)', opacity: 1, willChange: 'transform,filter' });
          copyMoveComplete[index] = false;
          syncListVisibility(latestProgressDistance);
          const returning = gsap.timeline({ defaults: { overwrite: 'auto' } });
          const horizontal = { value: 0 };
          returning.to(nodes, { opacity: .42, filter: 'blur(14px)', duration: .10, ease: 'power2.in' }, 0);
          returning.to(horizontal, {
            value: copyCenterOffset(copy),
            duration: copyReturnDuration - .22,
            ease: 'power2.inOut',
            onUpdate: () => {
              copy.style.setProperty('--feature-copy-scroll-x', `${horizontal.value}px`);
            },
          }, .10);
          returning.to(nodes, { opacity: 1, filter: 'blur(0px)', duration: .12, ease: 'power2.out' }, copyReturnDuration - .12);
          returning.eventCallback('onComplete', () => {
            gsap.set(copy, {
              '--feature-copy-scroll-x': `${copyCenterOffset(copy)}px`,
              '--feature-copy-scroll-y': '0px',
              '--feature-copy-align': 'center',
            });
            copyMotionStates[index] = 'center';
            // If the user changes direction while this copy is centered,
            // allow the normal forward left/list sequence to resume.
            copyHoldReady[index] = true;
            // Do not immediately hide when a fast reverse scroll has already
            // crossed the next threshold. Center must remain readable until
            // the user makes one more reverse scroll update.
          });
          copyMoveTweens[index] = returning;
          copyMotionStates[index] = 'returning';
        }

        function hideCopyFromCenter(index: number) {
          const copy = copyContents[index];
          const nodes = copyNodes[index];
          if (!copy || !nodes || copyMotionStates[index] === 'hidden' || copyMotionStates[index] === 'returning') return;
          killCopyTweens(index);
          gsap.set(copy, {
            autoAlpha: 1,
            '--feature-copy-scroll-x': `${copyCenterOffset(copy)}px`,
            '--feature-copy-scroll-y': '0px',
            '--feature-copy-align': 'center',
          });
          gsap.set(nodes, { filter: 'blur(0px)', opacity: 1, willChange: 'transform,filter,opacity' });
          const hiding = gsap.timeline({ defaults: { overwrite: 'auto' } });
          hiding.to(nodes, {
            filter: 'blur(18px)',
            opacity: 0,
            duration: copyHideDuration,
            ease: 'power2.inOut',
          }, 0);
          hiding.set(copy, { autoAlpha: 0 }, copyHideDuration);
          hiding.eventCallback('onComplete', () => {
            copyMotionStates[index] = 'hidden';
            copyReverseComplete[index] = true;
            // The user can stop exactly while the blur-out finishes. Resume
            // the reverse state machine here instead of waiting for another
            // browser scroll event, otherwise the outgoing panel may remain
            // pinned even though it is ready to hand off to the prior phase.
            if (latestDirection < 0) {
              syncCopyMotion(latestProgressDistance, -1);
              syncTrackHandoff(latestProgressDistance, -1);
            }
          });
          copyMoveTweens[index] = hiding;
          copyMotionStates[index] = 'returning';
        }

        const hideCopy = (index: number) => {
          const copy = copyContents[index];
          if (!copy || copyMotionStates[index] === 'hidden') return;
          killCopyTweens(index);
          gsap.set(copy, { autoAlpha: 0, '--feature-copy-scroll-y': '0px', '--feature-copy-align': 'center' });
          copyMotionStates[index] = 'hidden';
          copyMoveComplete[index] = false;
          listStartProgress[index] = Number.NaN;
          syncListRail(index, latestProgressDistance);
          syncListVisibility(latestProgressDistance);
        };

        const syncCopyMotion = (progressDistance: number, direction: number) => {
          latestProgressDistance = progressDistance;
          latestDirection = direction;
          if (trackMoving) return;
          const index = trackHandoffIndex;
          if (index < 0) return;
          const state = copyMotionStates[index];
          const reverseCopyStart = (Number.isFinite(listStartProgress[index])
            ? listStartProgress[index] : phases.railStarts[index]);
          if (direction < 0 && progressDistance <= reverseCopyStart) {
            if (state === 'left') {
              returnCopyToCenter(index);
              return;
            }
            if (state === 'center' && copyHoldReady[index]
              && progressDistance <= phases.starts[index] + (index === 0 ? 1 : 0)) {
              hideCopyFromCenter(index);
              return;
            }
            if (state === 'returning' || copyReverseComplete[index]) {
              syncListVisibility(progressDistance);
              return;
            }
          }
          // If the user reverses while a newly arrived panel is still empty,
          // do not start a fresh reveal only to remove it a moment later.
          if (direction < 0 && state === 'hidden' && progressDistance <= reverseCopyStart) {
            syncListVisibility(progressDistance);
            return;
          }
          if (!phaseReady[index]) {
            syncListVisibility(progressDistance);
            return;
          }
          if (state === 'hidden') {
            revealCopyAtCenter(index);
            return;
          }
          if (direction >= 0 && state === 'center' && progressDistance >= copyMoveThreshold(index) && copyHoldReady[index]) {
            moveCopyToLeft(index);
          }
          syncListVisibility(progressDistance);
        };

        const trackHandoffTweens: Array<TrackTween | undefined> = [];
        // Scrollbar dragging, Home/End and restoration are seeks, not wheel
        // gestures. Resolve their pose directly without fighting native scroll
        // or replaying a queue of transitions after the section has left view.
        const settleAtPosition = (distance: number) => {
          trackHandoffTweens.forEach((tween) => tween?.kill());
          trackMoving = false;
          const pose = clipboardPhaseAt(phases, distance);
          trackHandoffIndex = pose.index;
          copyContents.forEach((copy, index) => {
            killCopyTweens(index);
            phaseReady[index] = index <= pose.index;
            if (index < pose.index || (index === pose.index && pose.left)) {
              placeCopyAtLeft(index);
            } else if (index === pose.index) {
              gsap.set(copy, {
                autoAlpha: 1,
                '--feature-copy-scroll-x': `${copyCenterOffset(copy)}px`,
                '--feature-copy-scroll-y': '0px',
              });
              gsap.set(copyNodes[index], { opacity: 1, filter: 'blur(0px)' });
              gsap.set(copyWordGroups[index], { opacity: 1, yPercent: 0 });
              copyMotionStates[index] = 'center';
              copyHoldReady[index] = true;
              copyMoveComplete[index] = false;
              copyReverseComplete[index] = false;
              listStartProgress[index] = Number.NaN;
            } else {
              hideCopy(index);
            }
          });
          latestProgressDistance = distance;
          gsap.set(track, { x: -(slideDistance() * pose.index) });
          syncListRails(distance);
          syncListVisibility(distance);
          displayedIndex = pose.index;
          setActiveIndex(pose.index);
        };
        const syncTrackHandoff = (progressDistance: number, direction: number) => {
          if (trackMoving) return;
          const scrollTargetIndex = progressDistance < phases.starts[1] ? 0 : progressDistance < phases.starts[2] ? 1 : 2;
          // A scroll boundary alone cannot advance the panel: the outgoing
          // rail must actually have rendered its final position first.
          if (direction >= 0 && scrollTargetIndex > trackHandoffIndex
            && (!copyMoveComplete[trackHandoffIndex]
              || listRenderedProgress[trackHandoffIndex] < 1)) return;
          // Once the outgoing copy has completed its center blur-out, hand
          // off immediately to the prior panel. Waiting for the old numeric
          // phase boundary here leaves the user in an empty, stuck panel.
          const targetIndex = direction < 0
            && trackHandoffIndex > 0
            && copyMotionStates[trackHandoffIndex] === 'hidden'
            ? trackHandoffIndex - 1
            : direction < 0 ? trackHandoffIndex : Math.min(trackHandoffIndex + 1, scrollTargetIndex);
          // On reverse, let the outgoing title return from the top and blur
          // away before the phase track itself starts moving back.
          if (direction < 0 && targetIndex < trackHandoffIndex
            && copyMotionStates[trackHandoffIndex] !== 'hidden') return;
          if (targetIndex === trackHandoffIndex) return;
          trackHandoffTweens[trackHandoffIndex]?.kill();
          trackMoving = true;
          trackHandoffIndex = targetIndex;
          trackHandoffTweens[targetIndex]?.kill();
          if (direction >= 0 && targetIndex > 0) phaseReady[targetIndex] = false;
          trackHandoffTweens[targetIndex] = gsap.to(track, {
            x: () => -(slideDistance() * targetIndex),
            duration: phaseHandoffDuration,
            ease: 'power2.inOut',
            overwrite: 'auto',
          });
          trackHandoffTweens[targetIndex].eventCallback('onComplete', () => {
            if (trackHandoffIndex !== targetIndex) return;
            trackMoving = false;
            phaseReady[targetIndex] = true;
            if (direction < 0) {
              placeCopyAtLeft(targetIndex);
            }
            syncCopyMotion(latestProgressDistance, latestDirection);
            syncListRails(latestProgressDistance);
          });
        };
        motionCleanups.push(() => {
          copyContents.forEach((_copy, index) => {
            killCopyTweens(index);
          });
          trackHandoffTweens.forEach((tween) => tween?.kill());
        });
        updateCardScale();
        updateImageCardScale();
        updateStickerCardScale();
        const timeline = gsap.timeline({
          // Keep the card arc synchronized with the rail's scrubbed Y value.
          // ScrollTrigger's onUpdate fires when the scroll target changes,
          // before the scrub tween has rendered its next frame; reading Y
          // there caused a one-frame kick to the left exactly as pinning began.
          onUpdate: () => {
            updateRail(displayedIndex);
          },
          scrollTrigger: {
            trigger: pin,
            start: () => `top ${headerOffset()}px`,
            end: () => `+=${phases.totalDistance}`,
            pin: true,
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefreshInit: () => {
              refreshMeasurements();
              phases = measurePhases();
              listStartProgress.forEach((start, index) => {
                if (Number.isFinite(start)) listStartProgress[index] = phases.railStarts[index];
              });
            },
            onRefresh: (self) => {
              refreshMeasurements();
              // A layout refresh must not cancel a title transition in flight.
              if (self.isActive && nativeSeekRequested) settleAtPosition(Math.max(0, self.scroll() - self.start));
              syncListRails(latestProgressDistance);
              updateCardScale();
              updateImageCardScale();
              updateStickerCardScale();
            },
            // Do not reveal the first copy while the page is loading above
            // this section. It must begin its blur-in only when the pinned
            // scene actually enters the viewport.
            onEnter: (self) => {
              if (self.scroll() - self.start >= phases.railStarts[0]) {
                settleAtPosition(self.scroll() - self.start);
                return;
              }
              phaseReady[0] = true;
              syncCopyMotion(Math.max(0, self.scroll() - self.start), 1);
              syncTrackHandoff(Math.max(0, self.scroll() - self.start), 1);
            },
            onEnterBack: (self) => {
              const progressDistance = Math.max(0, self.scroll() - self.start);
              // A page can enter this pinned scene from its lower edge (for
              // example after a reload). Rehydrate the current phase in its
              // completed left/list state, then let the normal reverse path
              // bring the list down before returning copy to center.
              const resumeIndex = progressDistance >= phases.starts[2] ? 2
                : progressDistance >= phases.starts[1] ? 1
                  : 0;
              gsap.set(track, { x: -(slideDistance() * resumeIndex) });
              trackHandoffIndex = resumeIndex;
              // Restore every already-passed phase as a completed left/list
              // state. This also makes a reload or entry from below reverse
              // through phase 2 → phase 1 without replaying a center reveal.
              for (let index = 0; index <= resumeIndex; index += 1) {
                phaseReady[index] = true;
                if (copyMotionStates[index] === 'hidden') placeCopyAtLeft(index);
              }
              syncCopyMotion(progressDistance, -1);
              syncTrackHandoff(progressDistance, -1);
            },
            onLeaveBack: () => {
              trackHandoffTweens.forEach((tween) => tween?.kill());
              trackMoving = false;
              copyContents.forEach((_copy, index) => hideCopy(index));
              phaseReady.forEach((_ready, index) => {
                phaseReady[index] = index === 0;
              });
              gsap.set(track, { x: 0 });
              syncListRails(0);
              trackHandoffIndex = 0;
              displayedIndex = 0;
              setActiveIndex(0);
            },
            onLeave: () => settleAtPosition(phases.totalDistance),
            onUpdate: (self) => {
              const progressDistance = Math.max(0, self.scroll() - self.start);
              if (nativeSeekRequested && self.isActive && Math.abs(progressDistance - latestProgressDistance) > .5) {
                settleAtPosition(progressDistance);
                return;
              }
              syncCopyMotion(progressDistance, self.direction);
              syncListRails(progressDistance);
              syncTrackHandoff(progressDistance, self.direction);
              // Keep the active phase on the previous panel while the
              // horizontal handoff is in progress.
              const nextIndex = trackHandoffIndex;
              if (nextIndex === displayedIndex) return;
              displayedIndex = nextIndex;
              setActiveIndex(nextIndex);
            },
          },
        });
        // ScrollTrigger remains the pin/timing source. Rails are positioned
        // by syncListRail so a list cannot progress behind title movement.
        timeline.to({}, { duration: 1, ease: 'none' }, 0);

        // One fixed scroll range owns this scene. Stop each gesture at its
        // next checkpoint before native scrolling happens, and consume no
        // input during the short, non-scrubbed title/panel transitions.
        // This replaces changing the pin-spacer height during scroll.
        const scene = timeline.scrollTrigger;
        const onSeekPointer = (event: PointerEvent) => {
          const width = document.documentElement?.clientWidth ?? window.innerWidth;
          nativeSeekRequested = event.button === 0 && event.clientX >= width - 16;
        };
        const onSeekKey = (event: KeyboardEvent) => {
          if (event.target instanceof Element && event.target.closest('input, textarea, select, [contenteditable="true"]')) return;
          if (event.key === 'Home' || event.key === 'End') nativeSeekRequested = true;
        };
        window.addEventListener('pointerdown', onSeekPointer);
        window.addEventListener('keydown', onSeekKey);
        motionCleanups.push(() => {
          window.removeEventListener('pointerdown', onSeekPointer);
          window.removeEventListener('keydown', onSeekKey);
        });
        const motionBusy = () => trackMoving || copyMotionStates.some((state, index) => (
          state === 'returning' || (state === 'center' && !copyHoldReady[index])
          || (state === 'left' && !copyMoveComplete[index])
        ));
        if (scene) motionCleanups.push(bindPhaseScrollInput({
          range: () => ({ start: scene.start, end: scene.end }),
          checkpoints: () => phases.checkpoints,
          busy: motionBusy,
          beforeScroll: (distance, direction) => {
            syncCopyMotion(distance, direction);
            syncTrackHandoff(distance, direction);
          },
          afterScroll: () => {
            // Only explicit scrollbar/Home/End input may bypass transitions.
            // Timing or coordinate differences in ordinary scroll are not seeks.
            nativeSeekRequested = false;
            ScrollTrigger.update();
          },
        }));
      });

      cleanup = () => {
        motionCleanups.forEach((teardown) => teardown());
        context.revert();
        prehiddenCopyContents.forEach((copy) => {
          copy.style.removeProperty('opacity');
          copy.style.removeProperty('visibility');
        });
        section.querySelectorAll<HTMLElement>('.feature-text-list-item, .feature-image-list-item, .feature-sticker-list-item').forEach((item) => {
          item.style.removeProperty('transform');
          item.style.removeProperty('will-change');
        });
      };
      ScrollTrigger.refresh();
    };

    void initialize();
    return () => {
      active = false;
      cleanup?.();
      // The dynamic import may still be pending when the layout changes.
      // In that case no GSAP context exists to restore these inline values.
      if (!cleanup) {
        prehiddenCopyContents.forEach((copy) => {
          copy.style.removeProperty('opacity');
          copy.style.removeProperty('visibility');
        });
      }
    };
  }, [compactLayout, lang]);

  return (
    <FeatureClipboardSection ref={sectionRef} aria-label="Clipboard feature highlights">
      <div ref={pinRef} className="feature-clipboard-pin">
        <div className="feature-clipboard-layout">
          <div className="feature-clipboard-copy">
            <div ref={trackRef} className="feature-clipboard-track">
            {featureItems.map((itemKey, index) => {
              const item = localizedContent[itemKey];
              return (
              <article
                className={`feature-clipboard-copy-item${activeIndex === index ? ' is-active' : ''}`}
                key={itemKey}
                aria-hidden={compactLayout ? undefined : activeIndex !== index}
              >
                <div className={`feature-clipboard-content${itemKey === 'text' ? ' is-text-feature' : itemKey === 'image' ? ' is-image-feature' : ' is-sticker-feature'}`}>
                  <div className="feature-clipboard-copy-content">
                    <h2 aria-label={item.title}><SplitText text={item.title} lang={lang} /></h2>
                    <p className="feature-clipboard-description" aria-label={item.description}><SplitText text={item.description} lang={lang} /></p>
                  </div>
                  {itemKey === 'text' && (
                    <div ref={textListViewportRef} className="feature-text-list-viewport" aria-label="Text clipboard examples">
                      <div className="feature-text-list-stage">
                        <div ref={textListTrackRef} className="feature-text-list-track">
                          {textClipboardItems.map((textItem) => (
                            <article
                              className={`feature-text-list-item feature-text-list-item-${textItem.type}${textItem.type === 'color' && textItem.lightText ? ' is-light' : ''}`}
                              key={textItem.id}
                              style={textItem.type === 'color' ? { backgroundColor: textItem.color } : undefined}
                            >
                              {textItem.type === 'text' && <><h3>{textItem.title}</h3><p>{textItem.content}</p></>}
                              {textItem.type === 'link' && <><img src={textItem.image} alt={textItem.alt} loading="lazy" decoding="async" /><div><strong>{textItem.title}</strong><span>{textItem.href}</span></div></>}
                              {textItem.type === 'color' && <><span>{textItem.name}</span><strong>{textItem.value}</strong></>}
                            </article>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {itemKey === 'image' && (
                    <div ref={imageListViewportRef} className="feature-image-list-viewport" aria-label="Image clipboard examples">
                      <div className="feature-image-list-stage">
                        <div ref={imageListTrackRef} className="feature-image-list-track">
                          {imageItems.map((imageItem) => (
                            <figure className="feature-image-list-item" key={imageItem.id}>
                              <img src={imageItem.src} srcSet={getHeroImageSrcSet(imageItem.src)} sizes={heroImageSizes} alt={imageItem.alt} loading="lazy" decoding="async" />
                            </figure>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {itemKey === 'sticker' && (
                    <div ref={stickerListViewportRef} className="feature-sticker-list-viewport" aria-label="Sticker clipboard examples">
                      <div className="feature-sticker-list-stage">
                        <div ref={stickerListTrackRef} className="feature-sticker-list-track">
                          {stickerItems.map((stickerItem) => (
                            <figure className="feature-sticker-list-item" key={stickerItem.id}>
                              <img src={stickerItem.src} srcSet={getHeroImageSrcSet(stickerItem.src)} sizes={heroImageSizes} alt={stickerItem.alt} loading="lazy" decoding="async" />
                            </figure>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </article>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </FeatureClipboardSection>
  );
};

export default FeatureClipboard;

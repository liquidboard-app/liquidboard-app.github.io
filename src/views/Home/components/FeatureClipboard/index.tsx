import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from '@/contexts/LanguageContext';
import { getHeroImageSrcSet, heroImageSizes } from '@/utils/responsiveImages';
import { getFeatureClipboardContent, type FeatureClipboardKey } from '../../featureClipboardContent';
import { getHeroClipboardItemCopy, type HeroTextItemKey } from '../../heroClipboardCopy';
import { FeatureClipboardSection } from './styled';

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
  { src: '/assets/hero-image/HERO_IMG_1.JPG', alt: 'Sculptural green landscape' },
  { src: '/assets/hero-image/HERO_IMG_2.JPG', alt: 'Blue botanical composition' },
  { src: '/assets/hero-image/HERO_IMG_3.JPG', alt: 'Architectural curve at dusk' },
  { src: '/assets/hero-image/HERO_IMG_4.JPG', alt: 'Circular wheat field beneath a blue sky' },
  { src: '/assets/hero-image/HERO_IMG_5.JPG', alt: 'Layered garden waterfalls' },
  { src: '/assets/hero-image/HERO_IMG_6.JPG', alt: 'Fashion portrait framed by foliage' },
  { src: '/assets/hero-image/HERO_IMG_7.JPG', alt: 'Concrete bridge between buildings' },
  { src: '/assets/hero-image/HERO_IMG_8.JPG', alt: 'Monumental circular sculpture' },
  { src: '/assets/hero-image/HERO_IMG_9.JPG', alt: 'Red architectural landscape' },
  { src: '/assets/hero-image/HERO_IMG_10.JPG', alt: 'Figure crossing a concrete bridge' },
  { src: '/assets/hero-image/HERO_IMG_11.JPG', alt: 'Figure standing among dark basalt columns' },
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
  { id: 'link-product', type: 'link', title: 'LiquidBoard', href: 'liquidboard.io', image: '/assets/hero-image/HERO_IMG_8.JPG', alt: 'LiquidBoard product preview' },
  { id: 'color-azure', type: 'color', name: 'Azure Blue', value: '#3B82F6', color: '#3b82f6', lightText: true },
  { id: 'link-portfolio', type: 'link', title: 'Product portfolio', href: 'behance.net/liquidboard', image: '/assets/hero-image/HERO_IMG_6.JPG', alt: 'Product portfolio preview' },
  { id: 'color-coral', type: 'color', name: 'Soft Coral', value: '#FF7A70', color: '#ff7a70' },
  { id: 'link-campaign', type: 'link', title: 'Campaign reference', href: 'notion.so/launch-board', image: '/assets/hero-image/HERO_IMG_9.JPG', alt: 'Campaign reference preview' },
  { id: 'color-forest', type: 'color', name: 'Forest Green', value: '#175C45', color: '#175c45', lightText: true },
  { id: 'link-mockup', type: 'link', title: 'iPhone mockup', href: 'figma.com/file/mockup', image: '/assets/hero-image/HERO_IMG_3.JPG', alt: 'iPhone mockup preview' },
  { id: 'color-lilac', type: 'color', name: 'Electric Lilac', value: '#8B5CF6', color: '#8b5cf6', lightText: true },
  { id: 'link-brief', type: 'link', title: 'Creative brief', href: 'docs.google.com/brief', image: '/assets/hero-image/HERO_IMG_1.JPG', alt: 'Creative brief preview' },
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
      const launchOriginY = viewportHeight + Math.max(220, viewportHeight * .32);
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
        const horizontalProgress = 1 - ((1 - visibleScaleProgress) ** 1.8);
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
      const basePositionSmoothing = mobileQuery.matches ? .24 : .26;
      const positionSmoothing = 1 - ((1 - basePositionSmoothing) ** elapsedFrames);
      previousFrameTime = frameTime;
      let isMoving = false;
      visibleRevealItems.forEach((item) => {
        const motion = revealMotions.get(item);
        if (!motion) return;
        const baseScaleSmoothing = motion.targetScale < motion.scale ? .44 : .38;
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
      const context = gsap.context(() => {
        const compact = compactQuery.matches;
        const slideDistance = () => Math.max(pin.clientWidth, 1);
        const listStartOffset = (listViewport: HTMLDivElement) => (
          compact ? listViewport.clientHeight * .58 : pin.clientHeight * .50
        );
        const listEndOffset = (listTrack: HTMLDivElement, listViewport: HTMLDivElement) => (
          -listTrack.scrollHeight + listViewport.clientHeight * .60
        );
        const textListStage = textListTrack.parentElement as HTMLElement | null;
        const imageListStage = imageListTrack.parentElement as HTMLElement | null;
        const stickerListStage = stickerListTrack.parentElement as HTMLElement | null;
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
        const updateCardTransforms = (
          railIndex: number,
          items: HTMLElement[],
          centers: number[],
          railY: number,
          viewportHeight: number,
          createTransform: (index: number, arcX: number, scale: number) => string,
        ) => {
          const previousIndices = activeCardIndices[railIndex];
          const nextIndices = new Set<number>();
          const buffer = compact ? viewportHeight * .12 : Number.POSITIVE_INFINITY;

          centers.forEach((center, index) => {
            const position = center + railY;
            if (position >= -buffer && position <= viewportHeight + buffer) nextIndices.add(index);
          });

          // Once a card leaves the buffered viewport, park it at the narrow
          // edge of the arc. This avoids recalculating and repainting the long
          // off-screen tail on every mobile scroll frame.
          previousIndices.forEach((index) => {
            if (nextIndices.has(index)) return;
            const item = items[index];
            if (!item) return;
            const transform = createTransform(index, 0, .955);
            if (item.style.transform !== transform) item.style.transform = transform;
            if (compact) item.style.willChange = 'auto';
          });

          nextIndices.forEach((index) => {
            if (compact && !previousIndices.has(index)) items[index].style.willChange = 'transform';
            const verticalPosition = (centers[index] + railY) / viewportHeight;
            const arcDistance = Math.min(1, Math.abs(verticalPosition - .5) / .74);
            const scale = 1.04 - arcDistance * .085;
            const arcX = (1 - arcDistance * arcDistance) * 72;
            const transform = createTransform(index, arcX, scale);
            if (items[index].style.transform !== transform) items[index].style.transform = transform;
          });

          activeCardIndices[railIndex] = nextIndices;
        };
        const updateCardScale = () => {
          const railY = Number(gsap.getProperty(textListTrack, 'y')) || 0;
          const viewportHeight = Math.max(textListViewport.clientHeight, 1);
          const mobile = window.matchMedia('(max-width: 767px)').matches;
          updateCardTransforms(0, textListItems, cardArcCenters, railY, viewportHeight, (index, arcX, scale) => {
            const stagger = index % 2 === 1 ? (mobile ? 22 : 36) : 0;
            const depth = index % 2 === 1 ? (mobile ? 20 : 28) : 10;
            return `translate3d(${arcX.toFixed(2)}px, ${stagger}px, ${depth}px) scale(${scale.toFixed(3)})`;
          });
        };
        const updateImageCardScale = () => {
          const railY = Number(gsap.getProperty(imageListTrack, 'y')) || 0;
          const viewportHeight = Math.max(imageListViewport.clientHeight, 1);
          updateCardTransforms(1, imageListItems, imageCardArcCenters, railY, viewportHeight, (_index, arcX, scale) => (
            `translate3d(${arcX.toFixed(2)}px, 0, 14px) scale(${scale.toFixed(3)})`
          ));
        };
        const updateStickerCardScale = () => {
          const railY = Number(gsap.getProperty(stickerListTrack, 'y')) || 0;
          const viewportHeight = Math.max(stickerListViewport.clientHeight, 1);
          updateCardTransforms(2, stickerListItems, stickerCardArcCenters, railY, viewportHeight, (_index, arcX, scale) => (
            `translate3d(${arcX.toFixed(2)}px, 0, 14px) scale(${scale.toFixed(3)})`
          ));
        };
        const listStages = [textListStage, imageListStage, stickerListStage];
        const compactWarpTransforms = ['', '', ''];
        const updateScrollWarp = (velocity = 0, activeRail?: number) => {
          const momentum = Math.max(-1, Math.min(1, velocity / 2200));
          listStages.forEach((stage, index) => {
            if (!stage) return;
            if (activeRail !== undefined && activeRail !== index) return;
            if (compact) {
              // One compositor transform with coarser rounding is cheaper than
              // cascading two CSS custom-property writes through every card.
              const transform = `rotateX(${(5 - momentum * 1.6).toFixed(1)}deg) rotateY(-2deg) skewX(${(momentum * .3).toFixed(1)}deg)`;
              if (compactWarpTransforms[index] !== transform) {
                compactWarpTransforms[index] = transform;
                stage.style.transform = transform;
              }
              return;
            }
            stage.style.setProperty('--feature-list-pitch', `${(5 - momentum * 2.25).toFixed(2)}deg`);
            stage.style.setProperty('--feature-list-shear', `${(momentum * .45).toFixed(2)}deg`);
          });
        };
        const updateRail = (index: number) => {
          if (index === 0) updateCardScale();
          else if (index === 1) updateImageCardScale();
          else updateStickerCardScale();
        };
        // Give the long text rail more scroll room than its physical travel so
        // it reads as a calm, deliberate vertical movement.
        const listTravelDistance = (listTrack: HTMLDivElement, listViewport: HTMLDivElement) => (
          (listStartOffset(listViewport) - listEndOffset(listTrack, listViewport)) * 1.28
        );
        let displayedIndex = 0;
        refreshRenderableItems();
        measureCardCenters();
        measureImageCardCenters();
        measureStickerCardCenters();
        const refreshMeasurements = () => {
          refreshRenderableItems();
          measureCardCenters();
          measureImageCardCenters();
          measureStickerCardCenters();
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
            updateScrollWarp(0, index);
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
                  updateScrollWarp(0, index);
                  updateRail(index);
                },
                onUpdate: (self) => {
                  updateScrollWarp(self.getVelocity(), index);
                },
                onScrubComplete: () => {
                  const stage = listStages[index];
                  if (!stage) return;
                  gsap.to(stage, { rotateX: 5, rotateY: -2, skewX: 0, duration: .3, ease: 'power3.out', overwrite: true });
                },
              },
            }).to(rail, { y: () => listEndOffset(rail, viewport), duration: distance, ease: 'none' });
          });
          return;
        }

        gsap.set(track, { x: 0, force3D: true, backfaceVisibility: 'hidden', willChange: 'transform' });
        gsap.set(copyContents, { '--feature-copy-scroll-x': '0px', '--feature-copy-scroll-y': '0px', opacity: 1, willChange: 'transform' });
        gsap.set(listViewports, { '--feature-list-enter-x': '0px', willChange: 'transform' });
        gsap.set(textListTrack, { x: 0, y: () => listStartOffset(textListViewport), force3D: true, backfaceVisibility: 'hidden', willChange: 'transform' });
        gsap.set(imageListTrack, { x: 0, y: () => listStartOffset(imageListViewport), force3D: true, backfaceVisibility: 'hidden', willChange: 'transform' });
        gsap.set(stickerListTrack, { x: 0, y: () => listStartOffset(stickerListViewport), force3D: true, backfaceVisibility: 'hidden', willChange: 'transform' });
        const textVerticalDistance = Math.max(listTravelDistance(textListTrack, textListViewport), 1);
        const imageVerticalDistance = Math.max(listTravelDistance(imageListTrack, imageListViewport), 1);
        const stickerVerticalDistance = Math.max(listTravelDistance(stickerListTrack, stickerListViewport), 1);
        const horizontalDistance = slideDistance();
        // Begin changing space while the final cluster is still visible (the
        // rail keeps moving vertically during this overlap). Previously each
        // horizontal slide waited for the rail to finish completely, leaving
        // only the last card on screen before the transition could start.
        const transitionLead = (verticalDistance: number) => Math.min(
          verticalDistance * .34,
          pin.clientHeight * .75,
        );
        const textTransitionLead = transitionLead(textVerticalDistance);
        const imageTransitionLead = transitionLead(imageVerticalDistance);
        const firstSlideStart = textVerticalDistance - textTransitionLead;
        const imageRailStart = firstSlideStart + horizontalDistance;
        const secondSlideStart = imageRailStart + imageVerticalDistance - imageTransitionLead;
        const stickerRailStart = secondSlideStart + horizontalDistance;
        const totalDistance = stickerRailStart + stickerVerticalDistance;
        updateScrollWarp();
        updateCardScale();
        updateImageCardScale();
        updateStickerCardScale();
        const timeline = gsap.timeline({
          // Keep the card arc synchronized with the rail's scrubbed Y value.
          // ScrollTrigger's onUpdate fires when the scroll target changes,
          // before the scrub tween has rendered its next frame; reading Y
          // there caused a one-frame kick to the left exactly as pinning began.
          onUpdate: () => updateRail(displayedIndex),
          scrollTrigger: {
            trigger: pin,
            start: () => `top ${headerOffset()}px`,
            end: () => `+=${Math.max(totalDistance, window.innerHeight * 2.4)}`,
            pin: true,
            scrub: .7,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefresh: () => {
              refreshMeasurements();
              updateScrollWarp();
              updateCardScale();
              updateImageCardScale();
              updateStickerCardScale();
            },
            onUpdate: (self) => {
              const progressDistance = self.progress * totalDistance;
              const firstBoundary = firstSlideStart + horizontalDistance / 2;
              const secondBoundary = secondSlideStart + horizontalDistance / 2;
              const nextIndex = progressDistance < firstBoundary ? 0 : progressDistance < secondBoundary ? 1 : 2;
              // ScrollTrigger can report a one-frame velocity spike while it
              // swaps the scene into fixed pinning. Do not feed that spike to
              // the 3D warp or the text rail visibly kicks sideways.
              const edgeDistance = Math.min(self.progress, 1 - self.progress);
              updateScrollWarp(edgeDistance < .008 ? 0 : self.getVelocity(), nextIndex);
              if (nextIndex === displayedIndex) return;
              displayedIndex = nextIndex;
              setActiveIndex(nextIndex);
            },
            onScrubComplete: () => {
              const stage = listStages[displayedIndex];
              if (!stage) return;
              gsap.to(stage, {
                '--feature-list-pitch': '5deg',
                '--feature-list-shear': '0deg',
                duration: .4,
                ease: 'power3.out',
                overwrite: true,
              });
            },
          },
        });
        timeline
          .to(textListTrack, { y: () => listEndOffset(textListTrack, textListViewport), force3D: true, duration: textVerticalDistance, ease: 'none' }, 0)
          .to(track, { x: () => -slideDistance(), force3D: true, duration: horizontalDistance, ease: 'none' }, firstSlideStart)
          .to(imageListTrack, { y: () => listEndOffset(imageListTrack, imageListViewport), force3D: true, duration: imageVerticalDistance, ease: 'none' }, imageRailStart)
          .to(track, { x: () => -(slideDistance() * 2), force3D: true, duration: horizontalDistance, ease: 'none' }, secondSlideStart)
          .to(stickerListTrack, { y: () => listEndOffset(stickerListTrack, stickerListViewport), force3D: true, duration: stickerVerticalDistance, ease: 'none' }, stickerRailStart);
      });

      cleanup = () => {
        context.revert();
        section.querySelectorAll<HTMLElement>('.feature-text-list-item, .feature-image-list-item, .feature-sticker-list-item').forEach((item) => {
          item.style.removeProperty('transform');
          item.style.removeProperty('will-change');
        });
        section.querySelectorAll<HTMLElement>('.feature-text-list-3d, .feature-image-list-3d, .feature-sticker-list-3d').forEach((stage) => {
          stage.style.removeProperty('transform');
          stage.style.removeProperty('--feature-list-pitch');
          stage.style.removeProperty('--feature-list-shear');
        });
      };
      ScrollTrigger.refresh();
    };

    void initialize();
    return () => {
      active = false;
      cleanup?.();
    };
  }, [compactLayout]);

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
                    <h2>{item.title}</h2>
                    <p className="feature-clipboard-description">{item.description}</p>
                  </div>
                  {itemKey === 'text' && (
                    <div ref={textListViewportRef} className="feature-text-list-viewport" aria-label="Text clipboard examples">
                      <div className="feature-text-list-3d">
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
                      <div className="feature-image-list-3d">
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
                      <div className="feature-sticker-list-3d">
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

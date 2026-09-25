import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { publicAsset } from '@/utils/publicAssets';
import { ListMarqueeSection } from './styled';
import { useTranslation } from '@/contexts/LanguageContext';
import { getNewVersionCopy } from '../../copy';

type Filter = 'text' | 'image' | 'sticker';
type Item = { type: Filter; title: string; body?: string; src?: string };
const EXIT_DELAY = 140;
const EXIT_DURATION = 260;
const ENTER_DURATION = 300;
const ITEM_BLUR = '7px';
const FILTER_TRANSITION_DURATION = EXIT_DELAY + EXIT_DURATION + ENTER_DURATION;

const getItemsPerRow = (width: number) => (width <= 600 ? 6 : width <= 1024 ? 9 : 12);

const isInViewport = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight
    && rect.right > 0 && rect.left < window.innerWidth;
};

const shuffle = <T,>(values: T[]): T[] => {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
};

const images = Array.from({ length: 11 }, (_, index) => ({
  src: publicAsset(`/assets/hero-image/HERO_IMG_${index + 1}.JPG`),
  alt: `Clipboard image ${index + 1}`,
}));

const stickerSrc = publicAsset('/assets/STICKER_10.png');

const makeDisplayRows = (allRows: Item[][], pools: Record<Filter, Item[]>, filter: Filter | null) => (
  filter
    ? allRows.map((row, rowIndex) => row.map((item, slotIndex) => (
      item.type === filter ? item : pools[filter][(rowIndex + slotIndex * 3) % pools[filter].length]
    )))
    : allRows
);

const copyComputedStyles = (source: HTMLElement, clone: HTMLElement) => {
  const computed = window.getComputedStyle(source);
  Array.from(computed).forEach((property) => {
    clone.style.setProperty(property, computed.getPropertyValue(property), computed.getPropertyPriority(property));
  });

  const sourceChildren = Array.from(source.children);
  const cloneChildren = Array.from(clone.children);
  sourceChildren.forEach((child, index) => {
    const cloneChild = cloneChildren[index];
    if (child instanceof HTMLElement && cloneChild instanceof HTMLElement) {
      copyComputedStyles(child, cloneChild);
    }
  });
};

const filters: Filter[] = ['text', 'image', 'sticker'];

const TextCard: React.FC<{ item: Item; slotKey: string }> = ({ item, slotKey }) => {
  return <article className="card card-text" data-motion-key={slotKey} data-slot-key={slotKey} data-item-key={`${item.type}:${item.title}`} data-card-type={item.type}>
    <strong>{item.title}</strong>
    <span>{item.body}</span>
  </article>;
};

const ListMarquee: React.FC = () => {
  const { lang } = useTranslation();
  const copy = getNewVersionCopy(lang);
  const localizedImages = images.map((image, index) => ({ ...image, alt: copy.imageAlt(index + 1) }));
  const items: Item[] = [
    ...copy.cards.map(([title, body]) => ({ type: 'text' as const, title, body })),
    ...localizedImages.map((image) => ({ type: 'image' as const, title: image.alt, src: image.src })),
    ...Array.from({ length: 12 }, (_, index) => ({ type: 'sticker' as const, title: copy.stickerAlt(index + 1), src: stickerSrc })),
  ];
  const [filter, setFilter] = useState<Filter | null>(null);
  const [appliedFilter, setAppliedFilter] = useState<Filter | null>(null);
  const [filterChanging, setFilterChanging] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(() => window.innerWidth);
  const rowsRef = useRef<HTMLDivElement | null>(null);
  const changedSlots = useRef<Set<string> | null>(null);
  const filterTimer = useRef<number | null>(null);

  useEffect(() => {
    let frame = 0;
    const updateWidth = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const nextWidth = window.innerWidth;
        setViewportWidth((current) => getItemsPerRow(current) === getItemsPerRow(nextWidth) ? current : nextWidth);
      });
    };
    window.addEventListener('resize', updateWidth);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  useEffect(() => () => {
    if (filterTimer.current !== null) window.clearTimeout(filterTimer.current);
  }, []);

  useLayoutEffect(() => {
    const slots = changedSlots.current;
    const container = rowsRef.current;
    if (!slots || !container) return;
    changedSlots.current = null;

    container.querySelectorAll<HTMLElement>('[data-motion-key]').forEach((card) => {
      if (!card.dataset.slotKey || !slots.has(card.dataset.slotKey)) return;
      if (!isInViewport(card)) return;
      card.animate([
        { filter: `blur(${ITEM_BLUR})`, opacity: 0 },
        { filter: 'blur(0)', opacity: 1 },
      ], { duration: ENTER_DURATION, delay: EXIT_DELAY + EXIT_DURATION, fill: 'both', easing: 'ease-out' });
    });
  }, [appliedFilter]);

  const changeFilter = (id: Filter) => {
    if (filterChanging) return;
    const nextFilter = filter === id ? null : id;
    const nextRows = makeDisplayRows(rowsForViewport, itemPools, nextFilter);
    const targetBySlot = new Map<string, Item>();
    nextRows.forEach((row, rowIndex) => {
      const copies = Math.max(1, Math.ceil(viewportWidth / (row.length * 182)));
      for (let setIndex = 0; setIndex < 2; setIndex += 1) {
        for (let copyIndex = 0; copyIndex < copies; copyIndex += 1) {
          row.forEach((item, slotIndex) => {
            targetBySlot.set(`${rowIndex}:${setIndex}:${copyIndex}:${slotIndex}`, item);
          });
        }
      }
    });

    const changed = new Set<string>();
    const outgoing: { track: HTMLElement; ghost: HTMLElement }[] = [];
    rowsRef.current?.querySelectorAll<HTMLElement>('[data-motion-key]').forEach((card) => {
      const slotKey = card.dataset.slotKey;
      const nextItem = slotKey ? targetBySlot.get(slotKey) : undefined;
      if (!slotKey || !nextItem || card.dataset.itemKey === `${nextItem.type}:${nextItem.title}`) return;
      changed.add(slotKey);
      if (!isInViewport(card)) return;
      const cardRect = card.getBoundingClientRect();
      const track = card.closest<HTMLElement>('.row-track');
      if (!track) return;
      const trackRect = track.getBoundingClientRect();
      const ghost = card.cloneNode(true) as HTMLElement;
      copyComputedStyles(card, ghost);
      ghost.removeAttribute('data-motion-key');
      ghost.removeAttribute('data-slot-key');
      ghost.setAttribute('aria-hidden', 'true');
      Object.assign(ghost.style, {
        position: 'absolute',
        left: '0',
        top: '0',
        width: `${cardRect.width}px`,
        height: `${cardRect.height}px`,
        boxSizing: 'border-box',
        overflow: 'hidden',
        margin: '0',
        zIndex: '300',
        pointerEvents: 'none',
        transform: `translate(${cardRect.left - trackRect.left}px, ${cardRect.top - trackRect.top}px)`,
      });
      outgoing.push({ track, ghost });
    });

    outgoing.forEach(({ track, ghost }) => {
      track.appendChild(ghost);
      const animation = ghost.animate([
        { opacity: 1, filter: 'blur(0)' },
        { opacity: 0, filter: `blur(${ITEM_BLUR})` },
      ], { duration: EXIT_DURATION, delay: EXIT_DELAY, fill: 'both', easing: 'ease-in' });
      void animation.finished.then(() => ghost.remove()).catch(() => ghost.remove());
    });
    changedSlots.current = changed;
    setFilter(nextFilter);
    setAppliedFilter(nextFilter);
    setFilterChanging(true);
    filterTimer.current = window.setTimeout(() => {
      setFilterChanging(false);
      filterTimer.current = null;
    }, FILTER_TRANSITION_DURATION);
  };

  const allRows = useMemo(() => {
    const distributed: Item[][] = [[], [], []];
    shuffle(items).forEach((item, index) => distributed[index % distributed.length].push(item));

    return distributed.map((row) => {
      const remaining = shuffle(row);
      const arranged: Item[] = [];
      while (remaining.length) {
        const firstType = arranged[0]?.type;
        const lastType = arranged[arranged.length - 1]?.type;
        const candidates = remaining
          .map((item, index) => ({ item, index }))
          .filter(({ item }) => item.type !== lastType
            && !(remaining.length === 1 && item.type === firstType && arranged.length > 1));
        const choices = candidates.length ? candidates : remaining.map((item, index) => ({ item, index }));
        const selected = choices[Math.floor(Math.random() * choices.length)];
        arranged.push(selected.item);
        remaining.splice(selected.index, 1);
      }
      return arranged;
    });
  }, [lang]);
  const rowsForViewport = useMemo(() => {
    const count = getItemsPerRow(viewportWidth);
    return allRows.map((row) => row.slice(0, count));
  }, [allRows, viewportWidth]);
  const itemPools = useMemo(() => ({
    text: shuffle(items.filter((item) => item.type === 'text')),
    image: shuffle(items.filter((item) => item.type === 'image')),
    sticker: shuffle(items.filter((item) => item.type === 'sticker')),
  }), [lang]);
  const rows = useMemo(() => makeDisplayRows(rowsForViewport, itemPools, appliedFilter), [rowsForViewport, itemPools, appliedFilter]);

  return <ListMarqueeSection>
    <div className="filters" aria-label={lang === 'vi' ? 'Bộ lọc bảng tạm' : 'Clipboard filters'} style={{ '--filter-transition-duration': `${FILTER_TRANSITION_DURATION}ms` } as React.CSSProperties}>
      {filters.map((id, index) => <button
        key={id}
        type="button"
        className={filter === id ? 'active' : ''}
        role="switch"
        aria-checked={filter === id}
        disabled={filterChanging}
        onClick={() => changeFilter(id)}
      >
        {copy.filters[index]}<span className="switch-track" aria-hidden="true"><span /></span>
      </button>)}
    </div>
    <div className="rows" ref={rowsRef}>
      {rows.map((row, rowIndex) => <div className={`row row-${rowIndex % 2 ? 'reverse' : 'forward'}`} key={rowIndex}>
        <div className="row-track">
          {[0, 1].map((setIndex) => {
            const copies = row.length ? Math.max(1, Math.ceil(viewportWidth / (row.length * 182))) : 1;
            return <div className="row-set" key={`${rowIndex}-${setIndex}`}>
              {Array.from({ length: copies }, (_, copyIndex) => row.map((item, slotIndex) => {
                const slotKey = `${rowIndex}:${setIndex}:${copyIndex}:${slotIndex}`;
                if (item.type === 'text') return <TextCard item={item} slotKey={slotKey} key={slotKey} />;
                return <article className={`card card-${item.type}`} data-motion-key={slotKey} data-slot-key={slotKey} data-item-key={`${item.type}:${item.title}`} data-card-type={item.type} key={slotKey}>
                  {item.src && <img src={item.src} alt={item.title} loading="lazy" />}
                </article>;
              }))}
            </div>;
          })}
        </div>
      </div>)}
    </div>
  </ListMarqueeSection>;
};

export default ListMarquee;

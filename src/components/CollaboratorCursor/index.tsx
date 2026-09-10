import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Cursor = styled.div<{ $visible: boolean; $color: string; $textColor: string }>`
  position: fixed;
  z-index: 6000;
  top: 0;
  left: 0;
  display: grid;
  justify-items: start;
  pointer-events: none;
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transform: translate3d(-100px, -100px, 0);
  transition: ${({ $visible }) => $visible ? 'opacity .18s ease' : 'none'};
  will-change: transform;

  .cursor-arrow {
    width: 35px;
    height: 35px;
    margin-left: -2px;
    color: ${({ $color }) => $color};
    filter: drop-shadow(0 3px 4px rgba(0, 0, 0, .12));
    transform: rotate(-12deg);
  }

  .cursor-label {
    margin-top: -4px;
    margin-left: 14px;
    padding: 7px 14px 8px;
    border-radius: 999px;
    background: ${({ $color }) => $color};
    box-shadow: 0 6px 14px rgba(0, 0, 0, .14);
    color: ${({ $textColor }) => $textColor};
    font-size: 16px;
    font-weight: 650;
    line-height: 1;
    white-space: nowrap;
  }

  @media (max-width: 760px), (pointer: coarse), (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

const CollaboratorCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [cursorContent, setCursorContent] = useState({ label: 'Me', color: '#1d9f62', textColor: '#fff' });

  useEffect(() => {
    const media = window.matchMedia('(min-width: 761px) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let frame = 0;
    let position = { x: -100, y: -100 };
    let currentContent = { label: 'Me', color: '#1d9f62', textColor: '#fff' };

    const paint = () => {
      cursorRef.current?.style.setProperty('transform', `translate3d(${position.x}px, ${position.y}px, 0)`);
      frame = 0;
    };
    const updateFromTarget = (element: Element | null) => {
      const target = element?.closest<HTMLElement>('[data-cursor-label]') ?? null;
      if (!target) {
        document.documentElement.classList.remove('has-collaborator-cursor');
        setVisible(false);
        return;
      }

      document.documentElement.classList.add('has-collaborator-cursor');
      setVisible(true);
      const nextContent = {
        label: target.dataset.cursorLabel ?? '',
        color: target.dataset.cursorColor ?? '#1d9f62',
        textColor: target.dataset.cursorTextColor ?? '#fff',
      };
      if (
        nextContent.label !== currentContent.label
        || nextContent.color !== currentContent.color
        || nextContent.textColor !== currentContent.textColor
      ) {
        currentContent = nextContent;
        setCursorContent(nextContent);
      }
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!media.matches) return;
      position = { x: event.clientX, y: event.clientY };
      if (!frame) frame = window.requestAnimationFrame(paint);
      updateFromTarget(event.target instanceof Element ? event.target : null);
    };
    const onPointerOut = (event: PointerEvent) => {
      if (!media.matches) return;
      const nextTarget = event.relatedTarget instanceof Element
        ? event.relatedTarget.closest<HTMLElement>('[data-cursor-label]')
        : null;
      if (!nextTarget) hide();
    };
    const hide = () => {
      document.documentElement.classList.remove('has-collaborator-cursor');
      setVisible(false);
    };
    const onMediaChange = () => {
      if (!media.matches) hide();
    };
    const onCursorChange = (event: Event) => {
      if (!media.matches) return;
      const detail = (event as CustomEvent<Partial<typeof currentContent>>).detail;
      if (!detail?.label || !detail.color || !detail.textColor) return;
      currentContent = { label: detail.label, color: detail.color, textColor: detail.textColor };
      setCursorContent(currentContent);
      document.documentElement.classList.add('has-collaborator-cursor');
      setVisible(true);
    };
    const onCursorRefresh = () => {
      if (!media.matches) return;
      updateFromTarget(document.elementFromPoint(position.x, position.y));
    };

    document.addEventListener('pointermove', onPointerMove, { capture: true, passive: true });
    document.addEventListener('pointerout', onPointerOut, { capture: true, passive: true });
    window.addEventListener('blur', hide);
    document.documentElement.addEventListener('mouseleave', hide);
    media.addEventListener('change', onMediaChange);
    window.addEventListener('liquidboard-cursor-change', onCursorChange);
    window.addEventListener('liquidboard-cursor-hide', hide);
    window.addEventListener('liquidboard-cursor-refresh', onCursorRefresh);

    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener('pointermove', onPointerMove, true);
      document.removeEventListener('pointerout', onPointerOut, true);
      window.removeEventListener('blur', hide);
      document.documentElement.removeEventListener('mouseleave', hide);
      media.removeEventListener('change', onMediaChange);
      window.removeEventListener('liquidboard-cursor-change', onCursorChange);
      window.removeEventListener('liquidboard-cursor-hide', hide);
      window.removeEventListener('liquidboard-cursor-refresh', onCursorRefresh);
      document.documentElement.classList.remove('has-collaborator-cursor');
    };
  }, []);

  return (
    <Cursor
      ref={cursorRef}
      $visible={visible}
      $color={cursorContent.color}
      $textColor={cursorContent.textColor}
      aria-hidden="true"
    >
      <svg className="cursor-arrow" viewBox="0 0 36 36" fill="none">
        <path d="M5 3.5 11.7 30l6.8-9.5 10.7-.1L5 3.5Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round" strokeWidth="2.8" />
      </svg>
      <span className="cursor-label">{cursorContent.label}</span>
    </Cursor>
  );
};

export default CollaboratorCursor;

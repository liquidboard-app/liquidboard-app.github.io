/** Stop an input gesture at the next phase boundary, never after it. */
export function clampPhaseScroll(position: number, delta: number, boundaries: readonly number[]) {
  const destination = position + delta;
  if (delta > 0) {
    return boundaries.find((boundary) => boundary > position && boundary < destination) ?? destination;
  }
  if (delta < 0) {
    return [...boundaries].reverse().find((boundary) => boundary < position && boundary > destination) ?? destination;
  }
  return position;
}

/** Fixed origins keep forward and reverse travel identical. */
export function railProgress(position: number, start: number, distance: number) {
  return Math.max(0, Math.min(1, (position - start) / Math.max(distance, 1)));
}

export function createClipboardPhases(distances: readonly number[], centerHold: number, exitHold: number) {
  let cursor = 0;
  const starts: number[] = [];
  const railStarts: number[] = [];
  const ends: number[] = [];
  for (const distance of distances) {
    starts.push(cursor);
    railStarts.push(cursor + centerHold);
    cursor += centerHold + Math.max(distance, 1);
    ends.push(cursor);
  }
  return {
    starts, railStarts, ends, totalDistance: cursor + exitHold,
    checkpoints: [...new Set([1, ...starts.slice(1), ...railStarts, cursor, cursor + exitHold])].sort((a, b) => a - b),
  };
}

export function clipboardPhaseAt(phases: ReturnType<typeof createClipboardPhases>, position: number) {
  const next = phases.starts.findIndex((start) => start > position);
  const index = next < 0 ? phases.starts.length - 1 : Math.max(0, next - 1);
  return { index, left: position >= phases.railStarts[index] };
}

interface PhaseScrollInput {
  range: () => { start: number; end: number };
  checkpoints: () => readonly number[];
  busy: () => boolean;
  beforeScroll?: (distance: number, direction: number) => void;
  afterScroll: () => void;
}

const inputOwners = new Set<PhaseScrollInput>();

/** Gate only the owning scene, without resizing its pin or running a scroll tween. */
export function bindPhaseScrollInput(options: PhaseScrollInput) {
  inputOwners.add(options);
  const isNestedScroll = (target: EventTarget | null) => {
    let element = target instanceof Element ? target : null;
    while (element && element !== document.body) {
      if (element.matches('input, textarea, select, [contenteditable="true"], [role="dialog"]')) return true;
      if (element.scrollHeight > element.clientHeight + 1
        && /auto|scroll/.test(getComputedStyle(element).overflowY)) return true;
      element = element.parentElement;
    }
    return false;
  };
  const consumeScroll = (delta: number, event: Event) => {
    if (!delta || !event.cancelable || event.defaultPrevented || isNestedScroll(event.target)) return;
    const { start, end } = options.range();
    const position = window.scrollY;
    const destination = position + delta;
    if ((position < start && destination < start) || (position > end && destination > end)) return;
    // Effects can register out of document order (FeatureClipboard loads
    // asynchronously). The nearest scene owns a gesture, not the first listener.
    const owner = [...inputOwners].map((candidate) => {
      const range = candidate.range();
      const distance = position >= range.start && position <= range.end ? 0
        : delta > 0 && position < range.start && destination >= range.start ? range.start - position
          : delta < 0 && position > range.end && destination <= range.end ? position - range.end
            : Infinity;
      return { candidate, distance };
    }).sort((a, b) => a.distance - b.distance)[0];
    if (owner?.candidate !== options) return;
    event.preventDefault();
    if (position >= start && position <= end) {
      if (options.busy()) return;
      options.beforeScroll?.(position - start, Math.sign(delta));
      if (options.busy()) return;
    }
    // Layout can yield fractional anchors while browsers round scroll offsets.
    // Land on the reached side of a boundary, rather than repeatedly requesting
    // an unrepresentable position and getting stuck just short of a transition.
    const round = delta > 0 ? Math.ceil : Math.floor;
    const boundaries = [-1, ...options.checkpoints(), end - start + 1]
      .map((boundary) => round(start + boundary));
    const next = clampPhaseScroll(position, delta, boundaries);
    window.scrollTo({ top: next, behavior: 'instant' });
    options.afterScroll();
  };
  const onWheel = (event: WheelEvent) => {
    if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
    const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1;
    consumeScroll(event.deltaY * unit, event);
  };
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.ctrlKey || event.metaKey || event.altKey
      || (event.target instanceof Element && event.target.closest('button, a, input, textarea, select, [contenteditable="true"]'))) return;
    const delta = event.key === 'ArrowDown' ? 40 : event.key === 'ArrowUp' ? -40
      : event.key === 'PageDown' ? window.innerHeight * .85
        : event.key === 'PageUp' ? -window.innerHeight * .85
          : event.key === ' ' ? window.innerHeight * .85 * (event.shiftKey ? -1 : 1) : 0;
    consumeScroll(delta, event);
  };
  window.addEventListener('wheel', onWheel, { passive: false });
  window.addEventListener('keydown', onKeyDown);
  return () => {
    inputOwners.delete(options);
    window.removeEventListener('wheel', onWheel);
    window.removeEventListener('keydown', onKeyDown);
  };
}

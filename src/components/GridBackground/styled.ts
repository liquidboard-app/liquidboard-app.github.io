import styled from 'styled-components';

export const GridSurface = styled.section`
  --grid-size: 64px;
  --grid-line: rgba(38, 33, 32, .12);
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background-color: #fff;
  background-image:
    linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
    linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px),
    linear-gradient(to bottom, #fff 0%, #fff 50%, #fff 100%);
  background-position: -1px -1px, -1px -1px, 0 0;
  background-size: var(--grid-surface-size, var(--grid-size)) var(--grid-surface-size, var(--grid-size)), var(--grid-surface-size, var(--grid-size)) var(--grid-surface-size, var(--grid-size)), 100% 100%;

  &::before {
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
      radial-gradient(circle at 50% 0%, rgba(255, 255, 255, .92), transparent 52%),
      linear-gradient(to bottom, rgba(255, 255, 255, .22), transparent 34%);
    content: '';
    pointer-events: none;
  }

  > * { position: relative; z-index: 1; }

  @media (max-width: 700px) {
    --grid-size: 42px;
    --grid-line: rgba(38, 33, 32, .1);
  }
`;

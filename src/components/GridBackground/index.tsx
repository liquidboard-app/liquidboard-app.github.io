import React, { forwardRef } from 'react';
import { GridSurface } from './styled';

export type GridBackgroundProps = React.ComponentPropsWithoutRef<typeof GridSurface>;

const GridBackground = forwardRef<HTMLElement, GridBackgroundProps>(function GridBackground(
  { children, ...props },
  ref,
) {
  return (
    <GridSurface ref={ref} {...props}>
      {children}
    </GridSurface>
  );
});

export default GridBackground;

import { HTMLAttributes } from 'react';

/**
 * The width of a column
 * @link https://design-system.service.gov.uk/styles/layout#grid-system
 */
export type ColumnSize =
  | 'full'
  | 'one-half'
  | 'one-third'
  | 'two-thirds'
  | 'one-quarter'
  | 'three-quarters';

export type ColumnProps = {
  /**
   * The width of this column on a desktop viewport
   * @link https://design-system.service.gov.uk/styles/layout#desktop-specific-grid-classes
   */
  desktopSize?: ColumnSize;
} & HTMLAttributes<HTMLDivElement>;

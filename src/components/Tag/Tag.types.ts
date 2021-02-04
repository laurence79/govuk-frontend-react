import { HTMLAttributes } from 'react';

export type TagColour =
  | 'dark-blue'
  | 'grey'
  | 'green'
  | 'turquoise'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red'
  | 'orange'
  | 'yellow';

export type TagProps = {
  /**
   * Show a glow effect, to give feedback that the component is loading.
   * @default false
   */
  loading?: boolean;
  /**
   * @deprecated Use "children" instead.
   */
  text?: string;
  /**
   * @deprecated Use "colour" instead.
   */
  color?: TagColour;
  /**
   * Renders with the supplied colour.
   * @default "dark-blue"
   * @link https://design-system.service.gov.uk/components/button/#additional-colours
   */
  colour?: TagColour;
} & HTMLAttributes<HTMLElement>;

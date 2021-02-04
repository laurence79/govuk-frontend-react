import { HTMLAttributes } from 'react';

export type GlowProps = {
  /**
   * Gives child elements a glow effect.
   * @default "true"
   */
  on?: boolean;
} & HTMLAttributes<HTMLDivElement>;

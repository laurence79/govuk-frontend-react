import { HTMLAttributes } from 'react';

export type GlowProps = {
  /**
   * Gives child elements a glow effect.
   * @default "false"
   */
  on?: boolean;
} & HTMLAttributes<HTMLDivElement>;

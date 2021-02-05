import React from 'react';
import cx from 'classnames';
import { GlowProps } from './Glow.types';
import './Glow.scss';

/**
 * Gives child elements a glow effect
 * @param props - The properties to render the component with.
 */
export const Glow: React.FC<GlowProps> = ({
  on = false,
  className,
  ...rest
}) => (
  <div data-testid="Glow" className={cx(on && 'glow', className)} {...rest} />
);

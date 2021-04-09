import React from 'react';
import cx from 'classnames';
import { GlowProps } from './Glow.types';
import './Glow.scss';

/**
 * Gives child elements a shimmering glow effect
 * @function Glow
 * @param {GlowProps} props - The properties to render the component with.
 */
export const Glow = ({
  on = false,
  className,
  ...rest
}: GlowProps): JSX.Element => (
  <div data-testid="Glow" className={cx(on && 'glow', className)} {...rest} />
);

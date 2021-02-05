import React from 'react';
import cx from 'classnames';
import { WidthContainerProps } from './WidthContainer.types';
import './WidthContainer.scss';

/**
 * Renders a GOV.UK Design System Width Container component
 * @function WidthContainer
 * @link https://design-system.service.gov.uk/styles/layout#limiting-width-of-content
 * @param {WidthContainerProps} props - The properties to render the component with.
 */
export const WidthContainer: React.FC<WidthContainerProps> = ({
  className,
  ...rest
}) => (
  <div
    data-testid="WidthContainer"
    className={cx('govuk-width-container', className)}
    {...rest}
  />
);

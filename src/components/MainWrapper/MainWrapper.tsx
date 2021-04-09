import React from 'react';
import cx from 'classnames';
import { MainWrapperProps } from './MainWrapper.types';
import './MainWrapper.scss';

/**
 * Renders a GOV.UK Design System MainWrapper component
 * @function MainWrapper
 * @link https://design-system.service.gov.uk/styles/layout#page-wrappers
 * @param {MainWrapperProps} props - The properties to render the component with.
 */
export const MainWrapper = ({
  className,
  ...rest
}: MainWrapperProps): JSX.Element => (
  <div
    data-testid="MainWrapper"
    className={cx('govuk-main-wrapper', className)}
    {...rest}
  />
);

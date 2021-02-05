import React from 'react';
import cx from 'classnames';
import { RowProps } from './Row.types';
import './Row.scss';

/**
 * Renders a GOV.UK Design System Row component
 * @function Row
 * @link https://design-system.service.gov.uk/styles/layout#understanding-the-grid-system
 * @param {RowProps} props - The properties to render the component with.
 */
export const Row: React.FC<RowProps> = ({ className, ...rest }) => (
  <div
    data-testid="Row"
    className={cx('govuk-grid-row', className)}
    {...rest}
  />
);

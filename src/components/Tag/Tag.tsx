import React from 'react';
import './Tag.scss';
import '../Glow/Glow.scss';
import cx from 'classnames';
import { TagProps } from './Tag.types';
import { classNameForTagColour } from './classNameForTagColour';
import { compact } from '../../helpers';

/**
 * Renders a GOV.UK Design System Tag component
 * @link https://design-system.service.gov.uk/components/tag/
 * @param props - The properties to render the component with.
 */
export const Tag: React.FC<TagProps> = ({
  loading,
  text,
  className,
  color,
  colour: colourIn,
  children: childrenIn,
  ...rest
}: TagProps) => {
  const children = compact([childrenIn, text]);

  return (
    <strong
      data-testid="tag"
      className={cx(
        loading && 'glow-text',
        'govuk-tag',
        classNameForTagColour(colourIn ?? color ?? 'dark-blue'),
        className
      )}
      {...rest}
    >
      {children}
    </strong>
  );
};

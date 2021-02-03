import React from 'react';
import './Tag.scss';
import cx from 'classnames';
import { TagProps } from './Tag.types';
import { classNameForTagColour } from './classNameForTagColour';

export const Tag: React.FC<TagProps> = ({
  loading,
  text,
  colour,
  ...rest
}: TagProps) => (
  <strong
    data-testid="tag"
    className={cx(
      'govuk-tag',
      loading && 'glow-text',
      classNameForTagColour(colour)
    )}
    {...rest}
  >
    {text}
  </strong>
);

import React from 'react';
import './Tag.scss';
import cx from 'classnames';
import { TagProps } from './Tag.types';
import { classNameForTagColour } from './classNameForTagColour';

export const Tag: React.FC<TagProps> = ({
  loading,
  text,
  colour
}: TagProps) => (
  <strong
    data-testid="tag"
    className={cx(
      'govuk-tag',
      loading && 'glow-text',
      classNameForTagColour(colour)
    )}
  >
    {text}
  </strong>
);

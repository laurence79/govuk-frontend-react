import React from 'react';
import cx from 'classnames';
import { ColumnSize, ColumnProps } from './Column.types';

export const makeColumnComponent = (
  size: ColumnSize,
  name: string
): React.FC<ColumnProps> => {
  const id = `Column.${name}`;
  const Component = ({
    className,
    desktopSize,
    ...rest
  }: ColumnProps): JSX.Element => {
    return (
      <div
        data-testid={id}
        className={cx(
          `govuk-grid-column-${size}`,
          desktopSize && `govuk-grid-column-${desktopSize}-from-desktop`,
          className
        )}
        {...rest}
      />
    );
  };
  Component.displayName = id;
  return Component;
};

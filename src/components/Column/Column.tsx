import React from 'react';
import cx from 'classnames';
import { ColumnProps, ColumnSize } from './Column.types';
import './Column.scss';

const allSizes: [ColumnSize, string][] = [
  ['full', 'Full'],
  ['half', 'Half'],
  ['one-quarter', 'Quarter'],
  ['one-third', 'Third'],
  ['three-quarters', 'ThreeQuarters'],
  ['two-thirds', 'TwoThirds']
];

const [Full, Half, Quarter, Third, ThreeQuarters, TwoThirds] = allSizes.map(
  ([size, name]) => {
    const id = `Column.${name}`;
    const Component: React.FC<ColumnProps> = ({
      className,
      desktopSize,
      ...rest
    }) => {
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
  }
);

/**
 * Renders a GOV.UK Design System Column components
 */
export const Column = {
  /**
   * Renders a GOV.UK Design System Full Column component
   * @function Full
   * @link https://design-system.service.gov.uk/styles/layout#understanding-the-grid-system
   * @param {ColumnProps} props - The properties to render the component with.
   * @example
    ```
    import { WidthContainer, Row, Column } from 'govuk-frontend-react-ts'
    ...
    <WidthContainer>
      <Row>
        <Column.Full>
          {content}
        </Column.Full>
      </Row>
    </WidthContainer>
    ```
  */
  Full,

  /**
   * Renders a GOV.UK Design System Half Column component
   * @function Half
   * @link https://design-system.service.gov.uk/styles/layout#understanding-the-grid-system
   * @param {ColumnProps} props - The properties to render the component with.
   * @example
    ```
    import { WidthContainer, Row, Column } from 'govuk-frontend-react-ts'
    ...
    <WidthContainer>
      <Row>
        <Column.Half>
          {content}
        </Column.Half>
      </Row>
    </WidthContainer>
    ```
  */
  Half,

  /**
   * Renders a GOV.UK Design System One Quarter Column component
   * @function Quarter
   * @link https://design-system.service.gov.uk/styles/layout#understanding-the-grid-system
   * @param {ColumnProps} props - The properties to render the component with.
   * @example
    ```
    import { WidthContainer, Row, Column } from 'govuk-frontend-react-ts'
    ...
    <WidthContainer>
      <Row>
        <Column.Quarter>
          {content}
        </Column.Quarter>
      </Row>
    </WidthContainer>
    ```
  */
  Quarter,

  /**
   * Renders a GOV.UK Design System One Third Column component
   * @function Third
   * @link https://design-system.service.gov.uk/styles/layout#understanding-the-grid-system
   * @param {ColumnProps} props - The properties to render the component with.
   * @example
    ```
    import { WidthContainer, Row, Column } from 'govuk-frontend-react-ts'
    ...
    <WidthContainer>
      <Row>
        <Column.Third>
          {content}
        </Column.Third>
      </Row>
    </WidthContainer>
    ```
  */
  Third,

  /**
   * Renders a GOV.UK Design System Three Quarters Column component
   * @function ThreeQuarters
   * @link https://design-system.service.gov.uk/styles/layout#understanding-the-grid-system
   * @param {ColumnProps} props - The properties to render the component with.
   * @example
    ```
    import { WidthContainer, Row, Column } from 'govuk-frontend-react-ts'
    ...
    <WidthContainer>
      <Row>
        <Column.ThreeQuarters>
          {content}
        </Column.ThreeQuarters>
      </Row>
    </WidthContainer>
    ```
  */
  ThreeQuarters,

  /**
   * Renders a GOV.UK Design System Two Thirds Column component
   * @function TwoThirds
   * @link https://design-system.service.gov.uk/styles/layout#understanding-the-grid-system
   * @param {ColumnProps} props - The properties to render the component with.
   * @example
    ```
    import { WidthContainer, Row, Column } from 'govuk-frontend-react-ts'
    ...
    <WidthContainer>
      <Row>
        <Column.TwoThirds>
          {content}
        </Column.TwoThirds>
      </Row>
    </WidthContainer>
    ```
  */
  TwoThirds
};

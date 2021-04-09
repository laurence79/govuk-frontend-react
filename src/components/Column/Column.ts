import './Column.scss';
import { makeColumnComponent } from './makeColumnComponent';

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
  Full: makeColumnComponent('full', 'Full'),

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
  Half: makeColumnComponent('half', 'Half'),

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
  Quarter: makeColumnComponent('one-quarter', 'Quarter'),

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
  Third: makeColumnComponent('one-third', 'Third'),

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
  ThreeQuarters: makeColumnComponent('three-quarters', 'ThreeQuarters'),

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
  TwoThirds: makeColumnComponent('two-thirds', 'TwoThirds')
};

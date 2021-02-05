/* eslint-disable react/no-danger */
import * as React from 'react';
import { mount } from '@cypress/react';
import { WidthContainer, Row, Column } from '..';

describe('Column Component', () => {
  describe('rendering', () => {
    it('renders children', () => {
      mount(
        <>
          <Column.Full>Full</Column.Full>
          <Column.Half>Half</Column.Half>
          <Column.Third>Third</Column.Third>
          <Column.TwoThirds>TwoThirds</Column.TwoThirds>
          <Column.Quarter>Quarter</Column.Quarter>
          <Column.ThreeQuarters>ThreeQuarters</Column.ThreeQuarters>
        </>
      );

      cy.get('[data-testid="Column.Full"]').should('contain.text', 'Full');
      cy.get('[data-testid="Column.Half"]').should('contain.text', 'Half');
      cy.get('[data-testid="Column.Third"]').should('contain.text', 'Third');
      cy.get('[data-testid="Column.TwoThirds"]').should(
        'contain.text',
        'TwoThirds'
      );
      cy.get('[data-testid="Column.Quarter"]').should(
        'contain.text',
        'Quarter'
      );
      cy.get('[data-testid="Column.ThreeQuarters"]').should(
        'contain.text',
        'ThreeQuarters'
      );
    });
  });

  it('appears as expected', () => {
    /*
     *  Render your component in a variety of different states
     */
    mount(
      <>
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `div { background: #00000022; }`
            }}
          />
          <WidthContainer>
            <Row>
              <Column.Full desktopSize="half">
                Full column, desktop half
              </Column.Full>
            </Row>
            <Row>
              <Column.Half desktopSize="one-third">
                Half column, desktop third
              </Column.Half>
              <Column.Half desktopSize="one-quarter">
                Half column, desktop quarter
              </Column.Half>
            </Row>
            <Row>
              <Column.Third desktopSize="full">
                Third column, desktop full
              </Column.Third>
              <Column.TwoThirds desktopSize="three-quarters">
                Two thirds column, desktop three quarters
              </Column.TwoThirds>
            </Row>
            <Row>
              <Column.Quarter desktopSize="two-thirds">
                Quarter column, desktop two thirds
              </Column.Quarter>
              <Column.ThreeQuarters>Three quarters column</Column.ThreeQuarters>
            </Row>
          </WidthContainer>
        </div>
      </>
    );
    cy.percySnapshot();
  });
});

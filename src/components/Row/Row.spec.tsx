import * as React from 'react';
import { mount } from '@cypress/react';
import { Row } from './Row';
import { WidthContainer } from '../WidthContainer';

describe('Row Component', () => {
  describe('rendering', () => {
    it('renders', () => {
      mount(
        <WidthContainer>
          <Row>Some content</Row>
        </WidthContainer>
      );

      cy.get('[data-testid="Row"]').should('exist');
    });
  });

  it('appears as expected', () => {
    /*
     *  Render your component in a variety of different states
     */
    mount(
      <>
        <WidthContainer>
          <Row>Some content</Row>
        </WidthContainer>
      </>
    );
    cy.percySnapshot();
  });
});

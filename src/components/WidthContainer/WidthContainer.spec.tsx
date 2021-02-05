import * as React from 'react';
import { mount } from '@cypress/react';
import { WidthContainer } from './WidthContainer';

describe('WidthContainer Component', () => {
  describe('rendering', () => {
    it('renders', () => {
      mount(<WidthContainer>Some content</WidthContainer>);

      cy.get('[data-testid="WidthContainer"]').should('exist');
    });
  });

  it('appears as expected', () => {
    /*
     *  Render your component in a variety of different states
     */
    mount(
      <>
        <WidthContainer>Some content</WidthContainer>
      </>
    );
    cy.percySnapshot();
  });
});

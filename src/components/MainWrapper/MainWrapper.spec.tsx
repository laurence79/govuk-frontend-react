import * as React from 'react';
import { mount } from '@cypress/react';
import { MainWrapper } from './MainWrapper';

describe('MainWrapper Component', () => {
  describe('rendering', () => {
    it('renders', () => {
      mount(<MainWrapper>Some content</MainWrapper>);

      cy.get('[data-testid="MainWrapper"]').should('exist');
    });
  });

  it('appears as expected', () => {
    /*
     *  Render your component in a variety of different states
     */
    mount(
      <>
        <MainWrapper>Some content</MainWrapper>
      </>
    );
    cy.percySnapshot();
  });
});

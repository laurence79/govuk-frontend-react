import * as React from 'react';
import { mount } from '@cypress/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders', () => {
    mount(<Button html="Hello" />);

    cy.get('[data-testid="Button"]').should('exist');
  });
});

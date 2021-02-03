import * as React from 'react';
import { mount } from '@cypress/react';
import { Tag } from './Tag';

describe('Tag component', () => {
  it('renders its text', () => {
    mount(<Tag text="Hello" />);

    cy.contains('Hello');
  });

  it('uses govuk-tag class', () => {
    mount(<Tag text="Hello" />);

    cy.get('[data-testid="tag"]').should('have.class', 'govuk-tag');
  });

  it('renders loading state', () => {
    mount(<Tag text="Hello" loading />);

    cy.get('[data-testid="tag"]').should('have.class', 'glow-text');
  });

  it('renders not loading state', () => {
    mount(<Tag text="Hello" loading={false} />);

    cy.get('[data-testid="tag"]').should('not.have.class', 'glow-text');
  });

  it('renders correct colour classes', () => {
    mount(
      <>
        <Tag data-testid="red-tag" text="Red" colour="RED" />
        <Tag data-testid="green-tag" text="Green" colour="GREEN" />
        <Tag data-testid="grey-tag" text="Grey" colour="GREY" />
        <Tag data-testid="orange-tag" text="Orange" colour="ORANGE" />
      </>
    );

    cy.get('[data-testid="red-tag"]').should('have.class', 'red-tag');
    cy.get('[data-testid="green-tag"]').should('have.class', 'green-tag');
    cy.get('[data-testid="grey-tag"]').should('have.class', 'grey-tag');
    cy.get('[data-testid="orange-tag"]').should('have.class', 'orange-tag');
  });
});

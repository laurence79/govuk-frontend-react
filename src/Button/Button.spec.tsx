/* eslint-disable no-plusplus */
import * as React from 'react';
import { mount } from '@cypress/react';
import { Button } from './Button';

describe('Button Component', () => {
  const startNow = {
    html: 'Start now',
    href: '#',
    isStartButton: true
  };

  const secondary = {
    html: 'Find address',
    classes: 'govuk-button--secondary'
  };

  const saveAndContinue = {
    html: 'Save and continue',
    classes: 'govuk-!-margin-right-1'
  };

  describe('rendering', () => {
    it('renders inner html', () => {
      mount(<Button html="Continue" />);

      cy.get('[data-testid="Button"]').should('exist');
      cy.contains('Continue');
    });
  });

  describe('behaviour', () => {
    it('handles clicks', () => {
      const onClick = cy.stub();
      mount(<Button html="Confirm and send" onClick={onClick} />);

      cy.get('[data-testid="Button"]')
        .click()
        .then(() => {
          expect(onClick).to.be.calledOnce;
        });
    });

    it('handles double-clicks as 2 clicks', () => {
      const onClick = cy.stub();
      mount(<Button html="Confirm and send" onClick={onClick} />);

      cy.get('[data-testid="Button"]')
        .dblclick()
        .then(() => {
          expect(onClick).to.be.calledTwice;
        });
    });

    it('ignores clicks when disabled', () => {
      const onClick = cy.stub();
      mount(<Button html="Disabled" disabled onClick={onClick} />);

      cy.get('[data-testid="Button"]')
        .click({ force: true })
        .then(() => {
          expect(onClick).not.to.be.called;
        });
    });
  });

  describe('appearance', () => {
    it('default', () => {
      mount(<Button html="Continue" />);
      cy.percySnapshot();
    });

    it('start now', () => {
      mount(<Button {...startNow} />);
      cy.percySnapshot();
    });

    it('secondary', () => {
      mount(<Button {...secondary} />);
      cy.percySnapshot();
    });

    it('two buttons', () => {
      mount(
        <>
          <Button {...saveAndContinue} />
          <Button {...secondary} html="Save as draft" />
        </>
      );
      cy.percySnapshot();
    });

    it('warning', () => {
      mount(<Button html="Delete account" classes="govuk-button--warning" />);
      cy.percySnapshot();
    });

    it('disabled', () => {
      mount(<Button html="Disabled button" disabled />);
      cy.percySnapshot();
    });
  });
});

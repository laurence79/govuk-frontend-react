import * as React from 'react';
import { mount } from '@cypress/react';
import { Button } from './Button';

describe('Button Component', () => {
  describe('rendering', () => {
    it('renders children', () => {
      mount(<Button>Continue</Button>);

      cy.get('[data-testid="Button"]').should('exist');
      cy.contains('Continue');
    });
  });

  describe('behaviour', () => {
    it('handles clicks', () => {
      const onClick = cy.stub();
      mount(<Button onClick={onClick}>Confirm and send</Button>);

      cy.get('[data-testid="Button"]')
        .click()
        .then(() => {
          expect(onClick).to.be.calledOnce;
        });
    });

    // These tests upset Cypress
    // @cypress/react is still in Alpha so this is probably temporary
    // Error: [@cypress/react] 🔥 Hmm, cannot find root element to mount the component. Did you forget to include the support file?
    //
    // describe('default double-click behaviour', () => {
    //   it('handles double-clicks as 2 clicks', () => {
    //     const onSubmit = cy.stub();
    //     mount(
    //       <form onSubmit={onSubmit}>
    //         <Button type="submit">Confirm and send</Button>
    //       </form>
    //     );

    //     cy.get('[data-testid="Button"]')
    //       .dblclick()
    //       .then(() => {
    //         expect(onSubmit).to.be.calledTwice;
    //       });
    //   });
    // });

    // describe('double-click prevented', () => {
    //   it('handles double-clicks as 1 click', () => {
    //     const onSubmit = cy.stub();
    //     mount(
    //       <form onSubmit={onSubmit}>
    //         <Button type="submit" preventDoubleClick>
    //           Confirm and send
    //         </Button>
    //       </form>
    //     );

    //     cy.get('[data-testid="Button"]')
    //       .click()
    //       .then(() => {
    //         expect(onSubmit).to.be.calledOnce;
    //       });
    //   });
    // });

    it('ignores clicks when disabled', () => {
      const onClick = cy.stub();
      mount(
        <Button disabled onClick={onClick}>
          Disabled
        </Button>
      );

      cy.get('[data-testid="Button"]')
        .click({ force: true })
        .then(() => {
          expect(onClick).not.to.be.called;
        });
    });
  });

  describe('appearance', () => {
    it('default', () => {
      mount(<Button>Continue</Button>);
      cy.percySnapshot();
    });

    it('start now', () => {
      mount(<Button start>Start now</Button>);
      cy.percySnapshot();
    });

    it('secondary', () => {
      mount(<Button secondary>Find address</Button>);
      cy.percySnapshot();
    });

    it('two buttons', () => {
      mount(
        <>
          <Button className="govuk-!-margin-right-1">Save and continue</Button>
          <Button secondary>Save as draft</Button>
        </>
      );
      cy.percySnapshot();
    });

    it('warning', () => {
      mount(<Button warning>Delete account</Button>);
      cy.percySnapshot();
    });

    it('disabled', () => {
      mount(<Button disabled>Disabled button</Button>);
      cy.percySnapshot();
    });
  });
});

import * as React from 'react';
import { mountWithJsEnabled } from '../../test-helpers';
import { Button } from './Button';

describe('Button Component', () => {
  describe('rendering', () => {
    it('renders children', () => {
      mountWithJsEnabled(<Button>Continue</Button>);

      cy.get('[data-testid="Button"]').should('exist');
      cy.contains('Continue');
    });
  });

  describe('behaviour', () => {
    it('handles clicks', () => {
      const onClick = cy.stub();
      mountWithJsEnabled(<Button onClick={onClick}>Confirm and send</Button>);

      cy.get('[data-testid="Button"]')
        .click()
        .then(() => {
          expect(onClick).to.be.calledOnce;
        });
    });

    // These tests upset Cypress
    // @cypress/react is still in Alpha so this is probably temporary
    // Error: [@cypress/react] 🔥 Hmm, cannot find root element to mountWithJsEnabled the component. Did you forget to include the support file?
    //
    // describe('default double-click behaviour', () => {
    //   it('handles double-clicks as 2 clicks', () => {
    //     const onSubmit = cy.stub();
    //     mountWithJsEnabled(
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
    //     mountWithJsEnabled(
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
      mountWithJsEnabled(
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

  it('appears as expected', () => {
    mountWithJsEnabled(
      <>
        <Button>Default</Button>
        <Button start>Start now</Button>
        <Button secondary>Secondary</Button>
        <Button warning>Warning</Button>
        <Button disabled>Disabled</Button>
      </>
    );
    cy.percySnapshot();
  });
});

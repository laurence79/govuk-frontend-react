module.exports = componentName => ({
  content: `import * as React from 'react';
import { mount } from '@cypress/react';
import { ${componentName} } from './${componentName}';

describe('${componentName} Component', () => {
  describe('rendering', () => {
    it('renders', () => {
      mount(<${componentName} foo="bar" />);

      cy.get('[data-testid="${componentName}"]').should('exist');
    });
  });

  describe('appearance', () => {
    mount(<${componentName} foo="bar" />);
    cy.percySnapshot();
  });
});
`,
  filename: `${componentName}.spec.tsx`
});

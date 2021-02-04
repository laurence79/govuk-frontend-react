module.exports = componentName => ({
  content: `import * as React from 'react';
import { mount } from '@cypress/react';
import { ${componentName} } from './${componentName}';

describe('${componentName} Component', () => {
  it('renders', () => {
    mount(<${componentName} foo="bar" />);

    cy.get('[data-testid="${componentName}"]').should('exist');
  });
});
`,
  filename: `${componentName}.spec.tsx`
});

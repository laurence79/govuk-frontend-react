module.exports = componentName => ({
  content: `import React from 'react';
import { ${componentName}Props } from './${componentName}.types';
import './${componentName}.scss';

/**
 * Renders a GOV.UK Design System ${componentName} component
 * @function ${componentName}
 * @link https://design-system.service.gov.uk/components/${componentName.toLowerCase()}/
 * @param {${componentName}Props} props - The properties to render the component with.
 */
export const ${componentName} = ({ foo }: ${componentName}Props): JSX.Element => (
  <div data-testid="${componentName}" className="${componentName.toLowerCase()}">
    {foo}
  </div>
);
`,
  filename: `${componentName}.tsx`
});

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
export const ${componentName}: React.FC<${componentName}Props> = ({ foo }) => (
  <div data-testid="${componentName}" className="${componentName.toLowerCase()}">
    {foo}
  </div>
);
`,
  filename: `${componentName}.tsx`
});

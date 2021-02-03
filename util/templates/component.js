module.exports = componentName => ({
  content: `import React from 'react';
import { ${componentName}Props } from './${componentName}.types';
import './${componentName}.scss';

export const ${componentName}: React.FC<${componentName}Props> = ({ foo }) => (
  <div data-testid="${componentName}" className="${componentName.toLowerCase()}">
    {foo}
  </div>
);
`,
  extension: `.tsx`
});

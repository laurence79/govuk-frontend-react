module.exports = componentName => ({
  content: `import React from 'react';
import { ${componentName} } from './${componentName}';

export default {
  title: '${componentName}'
};

export const ${componentName}Story = () => <${componentName} foo="bar" />;
`,
  filename: `${componentName}.stories.tsx`
});

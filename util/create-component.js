require('colors');
const fs = require('fs');
const templates = require('./templates');

const componentName = process.argv[2];

if (!componentName) {
  console.error('Please supply a valid component name'.red);
  process.exit(1);
}

console.log(`Creating Component Templates with name: ${componentName}`);

const componentsDirectory = './src/components';
const componentDirectory = `${componentsDirectory}/${componentName}`;
const indexFile = `${componentsDirectory}/index.ts`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map(template => template(componentName));

generatedTemplates.forEach(template => {
  fs.writeFileSync(
    `${componentDirectory}/${template.filename}`,
    template.content
  );
});

const currentIndexContent = fs.existsSync(indexFile)
  ? fs.readFileSync(indexFile, 'utf8')
  : '';

const newIndexContent =
  // reads better with concatenation
  // eslint-disable-next-line prefer-template
  currentIndexContent
    .split('\n')
    .filter(l => l !== '')
    .concat(`export * from './${componentName}';`)
    .sort()
    .join('\n') + '\n';

fs.writeFileSync(indexFile, newIndexContent);

console.log(
  `Successfully created component under: ${componentDirectory.green}`
);

module.exports = componentName => ({
  content: `export type ${componentName}Props = {
  foo: string;
};
`,
  filename: `${componentName}.types.ts`
});

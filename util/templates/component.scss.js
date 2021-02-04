module.exports = componentName => ({
  content: `.${componentName.toLowerCase()} {
}
`,
  filename: `${componentName}.scss`
});

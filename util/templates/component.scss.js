module.exports = componentName => ({
  content: `.${componentName.toLowerCase()} {
}
`,
  extension: `.scss`
});

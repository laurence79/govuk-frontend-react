// load Webpack file preprocessor that comes with this plugin
// https://github.com/bahmutov/cypress-react-unit-test#install
const preprocessor = require('@cypress/react/plugins/load-webpack');
const percyHealthCheck = require('@percy/cypress/task');

module.exports = (on, config) => {
  // point at the webpack config file at the root of the project
  // eslint-disable-next-line no-param-reassign
  config.env.webpackFilename = 'webpack.config.js';
  preprocessor(on, config);

  on('task', percyHealthCheck);

  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config;
};

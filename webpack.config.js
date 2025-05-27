const path = require('path');

module.exports = function override(config) {
  config.resolve = config.resolve || {};
  config.resolve.alias = {
    ...config.resolve.alias,
    '@mui/styled-engine': '@mui/styled-engine-sc',
  };
  return config;
};

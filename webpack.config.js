const path = require('path');

module.exports = function override(config) {
  config.resolve = config.resolve || {};
  config.resolve.alias = {
    ...config.resolve.alias,
    '@mui/styled-engine': '@mui/styled-engine-sc',
  };
  // Add devServer config for client-side routing
  config.devServer = config.devServer || {};
  config.devServer.historyApiFallback = true;
  return config;
};

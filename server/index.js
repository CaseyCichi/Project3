// Ignore those pesky styles
require('ignore-styles');

// Set up babel to do its thing... env for the latest toys, react-app for CRA
require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: ['env', 'react-app'],
  // plugins: ['css-modules-transform']
});

// Now that the nonsense is over... load up the server entry point
require('./server');

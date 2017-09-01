const config = require('./base.conf');
const path = require('path');

// Webpack Production Settings
module.exports = Object.assign(config, {
  entry: './src',
  output: {
    path: path.join(__dirname, '../lib'),
    filename: 'index.js',
    library: 'csunReactComponents',
    libraryTarget: 'commonjs2',
  },
  externals: [
    {
      react: true,
    },
  ],
});

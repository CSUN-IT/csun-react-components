const config = require('./base.conf');
const path = require('path');

// Webpack Production Settings
module.exports = Object.assign(config, {
  entry: './src',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'csun-react-components.js',
    library: 'csunReactComponents',
    libraryTarget: 'umd',
  },
  externals: [
    {
      react: true,
    },
  ],
});

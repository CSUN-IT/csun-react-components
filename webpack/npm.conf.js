const config = require('./base.conf');
const path = require('path');
const webpack = require('webpack');

// Webpack Production Settings
module.exports = Object.assign(config, {
  entry: './src',
  output: {
    path: path.join(__dirname, '../lib'),
    filename: 'index.js',
    library: 'csun-components',
    libraryTarget: 'commonjs2',
  },
  externals: [
    {
      react: true,
    },
  ],
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
});

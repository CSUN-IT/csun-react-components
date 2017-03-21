const webpack = require('webpack');
const config = require('./dist.conf');

// Webpack Production Settings - Minified
module.exports = Object.assign(config, {
  output: Object.assign(config.output, {
    filename: 'csun-react-components.min.js',
  }),
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
});

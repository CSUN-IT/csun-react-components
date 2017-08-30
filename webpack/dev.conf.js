const config = require('./base.conf');

// Webpack Development Settings
module.exports = Object.assign(config, {
  entry: './dev/Index.jsx',
  output: 'bundle.js',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: 'dev',
    historyApiFallback: {
      index: '/index.html',
    },
  },
  module: {
    loaders: [
      ...config.module.loaders,
    ],
  },
});

const config = require('./base.conf');

// Webpack Development Settings
module.exports = Object.assign(config, {
  entry: './dev/index.jsx',
  output: 'bundle.js',
  devtool: 'source-map',
  devServer: {
    contentBase: 'dev',
    historyApiFallback: {
      index: '/index.html',
    },
  },
  module: {
    loaders: [
      ...config.module.loaders,
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
});

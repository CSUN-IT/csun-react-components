const config = require('./base.conf');

// Webpack Development Settings
module.exports = Object.assign(config, {
  entry: './dev/Index.tsx',
  output: 'bundle.js',
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js'],
  },
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

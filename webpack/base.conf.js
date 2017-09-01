// Webpack Base Settings
module.exports = {
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};

const config = require('./base.conf');

// Webpack Production Settings
module.exports = Object.assign(config, {
  entry: './src',
  output: {
    path: 'dist',
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

const webpack = require('webpack');

module.exports = {
  entry: {
    'bundle.js': './client/app.js',
    'lib.js': './client/lib.js',
  },
  output: {
    path: './public',
    filename: '[name]',
  },
  externals: {
    'react': 'window.__lib__["react"]',
    'react-dom': 'window.__lib__["react-dom"]',
    'react-router': 'window.__lib__["react-router"]',
    'history': 'window.__lib__["history"]',
    'redux': 'window.__lib__["redux"]',
    'react-redux': 'window.__lib__["react-redux"]',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
  ],
};

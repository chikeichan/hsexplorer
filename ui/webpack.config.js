const webpack = require('webpack');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    names: './entries/names.js',
  },
  output: {
    filename: isProd ? '[name].[contenthash].bundle.js' : '[name].bundle.js',
    path: path.join(__dirname, '..', 'explorer', 'static', 'bundles'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
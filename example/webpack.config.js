// const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: {
    main: [
      'babel-polyfill',
      './example/index.jsx',
    ],
  },

  output: {
    path: __dirname,
    publicPath: '',
    filename: 'index.jsx',
  },

  resolve: {
    extensions: [
      '', '.js', '.jsx',
    ],
  },

  devtool: 'inline-source-map',

  module: {
    preLoaders: [],
    loaders: [{
      test: /\.es6$/,
      loader: 'babel',
      exclude: /node_modules/,
    }, {
      test: /\.jsx$/,
      loader: 'babel',
      exclude: /node_modules/,
    }],
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './example/index.html',
      inject: 'body',
      chunks: ['main'],
      filename: 'index.html',
    }),
  ],
  devServer: {
    contentBase: '',
    stats: {
      modules: true,
      cached: true,
      colors: true,
    },
    hot: true,
  },
};
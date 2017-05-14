const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const manifest = new ManifestPlugin();

const provide = new webpack.ProvidePlugin({
  '$': 'jquery',
  'jQuery': 'jquery',
  'Tether': 'tether',
});

const extractSass = new ExtractTextPlugin({
    filename: 'css/[name].[contenthash:20].css',
    disable: process.env.NODE_ENV === 'development',
});

const cleanFolders = new CleanWebpackPlugin([
  'css',
  'js',
], {
  root: path.resolve(
    __dirname,
    '..',
    'public'
  ),
});

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: './resources/assets/js/index.js',
  output: {
    path: path.resolve(
      __dirname,
      '..',
      'public'
    ),
    filename: 'js/[name].[hash].js',
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: ['transform-runtime'],
        },
      },
    },
    {
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader',
          options: {
            minimize: process.env.NODE_ENV === 'production',
          },
        }, {
          loader: 'sass-loader',
        }],
        fallback: 'style-loader',
      }),
    }],
  },
  plugins: [
    manifest,
    provide,
    cleanFolders,
    extractSass,
    new UglifyJSPlugin(),
  ],
};

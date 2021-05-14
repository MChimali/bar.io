const { mergeWithCustomize, customizeArray } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const base = require('./base');
const helpers = require('./helpers');
const merge = require('lodash.merge');

const hotReloadingEntries = ['react-hot-loader/patch'];

module.exports = mergeWithCustomize({
  customizeArray: customizeArray({
    'entry.*': 'prepend',
  }),
})(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  entry: {
    app: hotReloadingEntries,
  },
  output: {
    path: helpers.resolveFromRootPath('dist'),
    filename: '[name].js',
  },
  devServer: {
    inline: true,
    host: 'localhost',
    port: 8082,
    stats: 'minimal',
    hot: true,
    compress: true,
    contentBase: helpers.resolveFromRootPath('dist'),
  },
  plugins: [
    new Dotenv({
      path: 'dev.env',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});

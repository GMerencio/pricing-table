const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
       test: /\.(s*)css$/,
       use: [
         'style-loader',
         'css-loader',
         'postcss-loader',
         'sass-loader'
       ]
     }
    ]
  }
});
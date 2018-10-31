'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const entry = {
  common: [
    './src/pages/common.css',
    './src/pages/common.js',
  ],
  vendor: [
    'choo',
  ],
};

const rulesDev = [
  {
    test: /\.pug$/,
    use: 'pug-loader',
  },
  {
    test: /\.css$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '_[name]_[local]--[hash:base64:5]',
        },
      },
      'postcss-loader',
    ],
  },
];

const rulesProd = [
  {
    test: /\.pug$/,
    use: 'pug-loader',
  },
  {
    test: /\.css$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '_[hash:base64:5]',
        },
      },
      'postcss-loader',
    ],
  },
];

const pluginsDev = [
  new BundleAnalyzerPlugin({
    openAnalyzer: false,
  }),
  new MiniCssExtractPlugin({
    chunkFilename: 'common.[hash].css',
    filename: 'common.[hash].css',
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/pages/index.pug',
  }),
  new HtmlWebpackPlugin({
    filename: 'color/index.html',
    template: 'src/pages/color/index.pug',
  }),
];

const pluginsProd = [
  new MiniCssExtractPlugin({
    chunkFilename: 'common.[hash].css',
    filename: 'common.[hash].css',
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/pages/index.pug',
  }),
  new HtmlWebpackPlugin({
    filename: 'color/index.html',
    template: 'src/pages/color/index.pug',
  }),
];

module.exports = function (env, argv) {
  const dist = path.resolve(__dirname, 'dist');

  return {
    mode: 'development',

    entry,

    output: {
      path: dist,
      filename: '[name].[hash].js',
      publicPath: '/',
    },

    module: {
      rules: argv.mode !== 'production'
        ? rulesDev
        : rulesProd,
    },

    target: 'web',

    optimization: {
      runtimeChunk: {
        name: 'vendor',
      },
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'initial',
            enforce: true,
            name: 'vendor',
            test: 'vendor',
          },
        },
      },
    },

    stats: {
      all: false,
      assets: true,
      errors: true,
      timings: true,
      warnings: true,
    },

    devServer: {
      contentBase: dist,
      compress: false,
      port: 1234,
      stats: {
        all: false,
        assets: true,
        errors: true,
        warnings: true,
      },
    },

    plugins: argv.mode !== 'production'
      ? pluginsDev
      : pluginsProd,
  };
};

const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackBar = require('webpackbar')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CONFIG = require('../bin/config')

const isProduction = CONFIG.mode === 'production'

const Plugins = CONFIG => {
  const basePlugins = [
    new webpack.EnvironmentPlugin({
      NODE_ENV: CONFIG.mode,
      BASE_URL: CONFIG.BASE_URL,
      tabTitle: CONFIG.tabTitle,
      menuTitle: CONFIG.menuTitle,
      packageName: CONFIG.packageName
    }),
    new TerserPlugin({
      extractComments: false
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: '',
          globOptions: {
            ignore: ['**/index.html']
          }
        }
      ]
    })
  ]

  const productionPlugins = [
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: '../BundleAnalyzer.html'
    }),
    new WebpackBar()
  ]

  return isProduction ? [...basePlugins, ...productionPlugins] : basePlugins
}

module.exports = Plugins

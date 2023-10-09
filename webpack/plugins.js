const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackBar = require('webpackbar')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const AutoImportPlugin = require('unplugin-auto-import/webpack')
const { isProduction } = require('./env')

const Plugins = CONFIG => {
  const basePlugins = [
    AutoImportPlugin({
      dts: './shims/auto-imports.d.ts',
      imports: ['react']
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV,
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

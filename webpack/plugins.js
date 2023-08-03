const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const webpack = require('webpack');

const Plugins = (CONFIG) => {
  return [
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: '../BundleAnalyzer.html'
    }),
    new TerserPlugin({
      extractComments: false
    }),
    CONFIG.mode === 'production' &&  new HtmlWebpackPlugin({
      template: 'public/index.html',  // 模板文件路径
      filename: 'index.html',  // 输出文件名
      minify: {
        collapseWhitespace: true, // 移除空格
        removeComments: true, // 移除注释
        removeRedundantAttributes: true // 移除冗余的属性
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    //  浏览器全局变量 使用 process.env.BASE_URL 获取
    new webpack.EnvironmentPlugin({
      NODE_ENV: CONFIG.mode, // use 'development' unless process.env.NODE_ENV is defined
      BASE_URL: CONFIG.BASE_URL, // 接口请求地址
      tabTitle: CONFIG.tabTitle, // 浏览器页签名称
      menuTitle: CONFIG.menuTitle // 菜单名称
    })
  ]
}
module.exports = Plugins

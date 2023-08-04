const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackBar = require('webpackbar')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const CONFIG = require('../bin/config')
const isProduction = CONFIG.mode === 'production'


const Plugins = (CONFIG) => {
  return [
    //  浏览器全局变量 使用 process.env.BASE_URL 获取
    new webpack.EnvironmentPlugin({
      NODE_ENV: CONFIG.mode,
      BASE_URL: CONFIG.BASE_URL, // 接口请求地址
      tabTitle: CONFIG.tabTitle, // 浏览器页签名称
      menuTitle: CONFIG.menuTitle, // 菜单名称
      packageName: CONFIG.packageName // 打包后的文件夹名称
    }),
    // 在生产打包的时候，启用 BundleAnalyzerPlugin 插件
    isProduction && new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: '../BundleAnalyzer.html'
    }),
    //  压缩js
    new TerserPlugin({
      extractComments: false
    }),
    // 生成html文件
    new HtmlWebpackPlugin({
      template: 'public/index.html',  // 模板文件路径
      filename: 'index.html',  // 输出文件名
      minify: { // html 压缩配置
        collapseWhitespace: true, // 移除空格
        removeComments: true, // 移除注释
        removeRedundantAttributes: true // 移除冗余的属性
      }
    }),
    // 提取css
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    // 进度条
    isProduction && new WebpackBar(),
    new CopyWebpackPlugin({
      patterns: [{
        from: 'public',
        to: '',
        globOptions: {
          ignore: ['**/index.html']
        }
      }]
    })
  ]
}
module.exports = Plugins

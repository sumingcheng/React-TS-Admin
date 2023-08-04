const path = require('path');
// 模块化配置
const Module = require('./webpack/module');
const Plugins = require('./webpack/plugins');
const Optimization = require('./webpack/optimization');
const Proxy = require('./webpack/proxy');
const Stats = require('./webpack/stats')
// 配置文件
const CONFIG = require('./bin/config');
console.log(CONFIG.mode, CONFIG.modeName)

module.exports = {
  mode: CONFIG.mode,
  devtool: CONFIG.devtool,
  entry: './src/main.tsx',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist/resource'),
    publicPath: '/',
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[id].[contenthash].js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
      publicPath: '/'
    },
    compress: true, // 是否启用 gzip 压缩
    open: false, // 是否打开浏览器
    hot: true, // 启用热模块替换
    historyApiFallback: true,
    port: CONFIG.port, // 服务运行的端口
    https: CONFIG.https, // 是否启用 https
    proxy: Proxy(CONFIG) || {}, // 代理配置
    client: {
      overlay: false // 全屏覆盖
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/')
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'] // 缩小打包范围
  },
  cache: {
    type: 'filesystem'
  },
  // 插件
  plugins: Plugins(CONFIG) || [],
  // 代码分割
  optimization: Optimization(CONFIG) || {},
  // 模块化配置
  module: Module(CONFIG) || {},
  // 输出构建信息
  stats: Stats(CONFIG) || {}
};

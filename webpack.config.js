const path = require('path')

// 模块化配置
const Module = require('./webpack/module')
const Plugins = require('./webpack/plugins')
const Optimization = require('./webpack/optimization')
const Proxy = require('./webpack/proxy')
const Stats = require('./webpack/stats')

const CONFIG = require('./bin/config')

console.log(
  'NODE_ENV:',
  process.env.NODE_ENV,
  'Environment:',
  CONFIG.Environment
)

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/main.tsx',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist/resource'),
    publicPath: '/',
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[id].[contenthash].js'
  },

  devtool: CONFIG.devtool,
  devServer: {
    compress: true,
    open: false,
    hot: true,
    historyApiFallback: true,
    port: CONFIG.port,
    https: CONFIG.https,
    proxy: Proxy(CONFIG),
    static: {
      directory: path.join(__dirname, 'public'),
      publicPath: '/'
    },
    client: {
      overlay: false
    }
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/')
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },

  plugins: Plugins(CONFIG),
  module: Module(CONFIG),
  optimization: Optimization(CONFIG),

  cache: {
    type: 'filesystem'
  },

  stats: Stats(CONFIG)
}

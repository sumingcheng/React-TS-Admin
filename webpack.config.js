const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const CONFIG = require('./config');
const webpack = require('webpack');
console.log(CONFIG)

module.exports = {
  mode: CONFIG.mode,
  devtool: 'source-map',
  devServer: {
    static: 'dist',
    compress: true, // 是否启用 gzip 压缩
    port: CONFIG.startPort, // 服务运行的端口
    open: false, // 是否打开浏览器
    https: CONFIG.https, // 是否启用 https
    hot: true, // 启用热模块替换
    // proxy: {
    //   '/api': {
    //     target:  CONFIG.BASE_URL, // 直接指向你请求的服务器地址
    //     changeOrigin: true
    //   }
    // },
    client: {
      overlay: true // 全屏覆盖
    }
  },
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, './src/')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CleanWebpackPlugin(),
    //  浏览器全局变量 使用 process.env.BASE_URL 获取
    new webpack.EnvironmentPlugin({
      NODE_ENV: CONFIG.mode, // use 'development' unless process.env.NODE_ENV is defined
      BASE_URL: CONFIG.BASE_URL, // 接口请求地址
      tabTitle: CONFIG.tabTitle, // 浏览器页签名称
      menuTitle: CONFIG.menuTitle // 菜单名称
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {loader: "less-loader"}
        ]
      }
    ]
  }
  // 输出构建信息
  // stats: {
  //   all: false,
  //   warnings: true,
  //   errors: true,
  //   errorDetails: true,
  //   colors: true,
  //   performance: true,
  //   timings: true
  // }
};

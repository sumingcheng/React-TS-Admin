const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CONFIG = require('./config');
const webpack = require('webpack');
console.log(CONFIG)

module.exports = {
  mode: CONFIG.mode,
  entry: './src/main.tsx',
  devServer: {
    static: path.join(__dirname, 'dist'), // 从哪个目录提供内容
    compress: true, // 是否启用 gzip 压缩
    port: CONFIG.startPort, // 服务运行的端口
    open: false, // 是否打开浏览器
    https: CONFIG.https, // 是否启用 https
    hot: true, // 启用热模块替换（请注意，你可能还需要在你的项目中安装并配置 webpack.HotModuleReplacementPlugin）
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    //  浏览器全局变量 使用 process.env.BASE_URL 获取
    new webpack.EnvironmentPlugin({
      NODE_ENV: CONFIG.mode, // use 'development' unless process.env.NODE_ENV is defined
      BASE_URL: CONFIG.BASE_URL, // 接口请求地址
      tabTitle: CONFIG.tabTitle, // 浏览器页签名称
      menuTitle: CONFIG.menuTitle, // 菜单名称
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.less$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {loader: "less-loader"},
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, './src/'),
      // ...
    },
  },
};

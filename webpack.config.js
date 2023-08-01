const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './src/main.tsx',
  devServer: {
    static: path.join(__dirname, 'dist'), // 从哪个目录提供内容
    compress: true, // 是否启用 gzip 压缩
    port: 11111, // 服务运行的端口
    open: false, // 是否自动打开浏览器窗口
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
    new Dotenv({
      path: `./config${process.env.NODE_ENV}.env.js`,
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

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CONFIG = require('./config');
const webpack = require('webpack');

console.log(CONFIG)

module.exports = {
  mode: CONFIG.mode,
  devtool: CONFIG.devtool,
  devServer: {
    static: 'dist',
    compress: true, // 是否启用 gzip 压缩
    open: false, // 是否打开浏览器
    hot: true, // 启用热模块替换
    historyApiFallback: true,
    port: CONFIG.startPort, // 服务运行的端口
    https: CONFIG.https, // 是否启用 https
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
  // 代码分割
  optimization: {
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '~',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            // 去掉 @ 符号，因为 @ 符号不会被 webpack 识别
            return `${packageName.replace('@', '')}`;
          }
        }
      }
    }
  },
  entry: './src/main.tsx',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist/resource'),
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[id].[contenthash].js'
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
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: 'Analyzer.html'
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',  // 模板文件路径
      filename: 'index.html'  // 输出文件名
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
          CONFIG.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer')
                ]
              }
            }
          }
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

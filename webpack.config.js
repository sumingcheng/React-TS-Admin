const path = require('path');
// 模块化配置
const Module = require('./webpack/module');
const Plugins = require('./webpack/plugins');
const CONFIG = require('./config');

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
    port: CONFIG.port, // 服务运行的端口
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
        // reactDom: {
        //   test: /[\\/]node_modules[\\/]react-dom[\\/]/,
        //   name: 'react-dom',
        //   chunks: 'all',
        //   minSize: 2 * 1024, // 50KB
        //   maxSize: 5 * 1024 // 100KB
        // },
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
  plugins: Plugins,
  module: Module
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

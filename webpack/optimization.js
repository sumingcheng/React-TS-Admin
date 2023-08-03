const Optimization = {
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
}
exports = Optimization

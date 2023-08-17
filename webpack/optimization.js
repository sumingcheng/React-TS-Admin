const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const Optimization = () => {
  return {
    minimize: true,
    minimizer: ['...', new CssMinimizerPlugin()],
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
            const matchResult = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)

            if (!matchResult) {
              return 'unknown-package'
            }

            const [, packageName] = matchResult
            return packageName.replace('@', '')
          }
        }
      }
    }
  }
}
module.exports = Optimization

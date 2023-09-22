const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const Optimization = CONFIG => {
  return {
    minimize: true,
    minimizer: ['...', new CssMinimizerPlugin()],
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '~',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          maxSize: 244 * 1024, // 244 KiB
          minSize: 50 * 1024, // 30 KiB
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

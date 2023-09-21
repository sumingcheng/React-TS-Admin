const dev = require('../config/dev.js')
const other = require('../config/other.js')
const prod = require('../config/prod.js')
const sit = require('../config/sit.js')

const APP_ENV = process.env.APP_ENV
const envConfig = {
  dev,
  prod,
  sit,
  other
}

// 导出对应配置
module.exports = {
  ...envConfig[APP_ENV]
}

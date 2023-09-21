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

if (!envConfig[APP_ENV]) {
  throw new Error(
    `Configuration for ${APP_ENV} not found! Please check your bin/config files.`
  )
}

// 导出对应配置
module.exports = envConfig[APP_ENV]

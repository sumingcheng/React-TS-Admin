const dev = require('./dev.js');
const prod = require('./prod.js');
const sit = require('./sit.js');
const test = require('./test.js');

// 根据不同的环境变量，导出不同的配置
function config(env) {
  switch (env) {
    case 'development':
      return dev;
    case 'production':
      return prod;
    case 'sit':
      return sit;
    case 'test':
      return test;
    default:
      return 'dev';
  }
}

console.log('process.env.APP_ENV', process.env.APP_ENV)
const CONFIG = config(process.env.APP_ENV);

module.exports = CONFIG

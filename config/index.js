const dev = require('./dev.js');
const prod = require('./prod.js');
const sit = require('./sit.js');
const test = require('./test.js');

// 根据不同的环境变量，导出不同的配置
function config(env) {
  switch (env) {
    case 'dev':
      return dev;
    case 'prod':
      return prod;
    case 'sit':
      return sit;
    case 'test':
      return test;
    default:
      return dev;
  }
}

console.log('process.env.NODE_ENV', process.env.NODE_ENV)
module.exports = config(process.env.NODE_ENV);

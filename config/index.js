const dev = require('./dev.js');
const devOther = require('./devOther.js');
const prod = require('./prod.js');
const sit = require('./sit.js');

// 根据不同的环境变量，导出不同的配置
function config(env) {
  let _env = getEnv(env);
  switch (_env) {
    case 'dev':
      return dev;
    case 'prod':
      return prod;
    case 'sit':
      return sit;
    case 'devOther':
      return devOther;
    default:
      return 'dev';
  }
}

function getEnv(env) {
  return env.split('-')[0]
}

console.log('process.env.APP_ENV', process.env.APP_ENV)
const CONFIG = config(process.env.APP_ENV);

module.exports = CONFIG

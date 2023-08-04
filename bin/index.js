const dev = require('../config/dev.js');
const devOther = require('../config/devOther.js');
const prod = require('../config/prod.js');
const sit = require('../config/sit.js');

const CONFIG = config(process.env.APP_ENV);

// 根据不同的环境变量，导出不同的配置
function config(env) {
  console.log('APP_ENV:', env);
  const envConfig = {
    dev,
    prod,
    sit,
    devOther
  };

  if (envConfig[env]) {
    return envConfig[env];
  } else {
    throw new Error('找不到对应的环境变量');
  }
}

module.exports = CONFIG;

module.exports = {
  // webpack-dev-server 配置
  mode: 'development',
  modeName: '测试环境',
  version: '2.0.0',
  port: 22222,
  https: false,
  devtool: 'eval-source-map',
  // 项目配置
  BASE_URL: 'https://www.baidu.com', // 接口请求地址
  tabTitle: 'test', // 浏览器页签名称
  menuTitle: 'test' // 菜单名称
}

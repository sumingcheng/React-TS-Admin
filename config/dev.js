module.exports = {
  // webpack-dev-server 配置
  Environment: 'dev',
  port: 22222,
  https: false,
  devtool: 'eval-source-map',
  // 项目配置
  BASE_URL: 'http://172.40.253.155:15000', // 接口请求地址
  tabTitle: 'AIstore', // 浏览器页签名称
  menuTitle: 'AIstore', // 菜单名称
  version: '1.1.1',
  packageName: 'AIstore-dev' // 打包后的文件夹名称
}

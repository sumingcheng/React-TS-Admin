module.exports = {
  // webpack-dev-server 配置
  mode: 'development',
  modeName: 'other',
  port: 22222,
  https: false,
  devtool: 'eval-source-map',
  // 项目配置
  BASE_URL: 'https://jsonplaceholder.typicode.com', // 接口请求地址
  tabTitle: 'other', // 浏览器页签名称
  menuTitle: 'other', // 菜单名称
  version: '2.0.0',
  packageName: 'React-TS-Admin-other' // 打包后的文件夹名称
}

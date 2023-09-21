module.exports = {
  // webpack-dev-server 配置
  mode: 'development',
  modeName: 'dev',
  port: 22222,
  https: false,
  devtool: 'eval-source-map',
  // 项目配置
  BASE_URL: 'https://jsonplaceholder.typicode.com', // 接口请求地址
  tabTitle: 'React-TS-Admin', // 浏览器页签名称
  menuTitle: 'React-TS-Admin', // 菜单名称
  version: '2.0.0',
  packageName: 'React-TS-Admin-dev' // 打包后的文件夹名称
}

module.exports = {
  // webpack-dev-server 配置
  mode: 'production',
  modeName: 'prod',
  version: '2.0.0',
  port: 22222,
  https: false,
  devtool: false, // 是否启用 source-map
  // 项目配置
  BASE_URL: 'https://jsonplaceholder.typicode.com', // 接口请求地址
  tabTitle: 'prod', // 浏览器页签名称
  menuTitle: 'prod', // 菜单名称
  packageName: 'React-TS-Admin-prod' // 打包后的文件夹名称
}

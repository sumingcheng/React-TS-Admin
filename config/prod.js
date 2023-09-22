module.exports = {
  // webpack-dev-server 配置
  Environment: 'prod',
  port: 22222,
  https: false,
  devtool: false, // 是否启用 source-map
  // 项目配置
  BASE_URL: 'https://jsonplaceholder.typicode.com', // 接口请求地址
  tabTitle: 'prod', // 浏览器页签名称
  menuTitle: 'prod', // 菜单名称
  version: '1.0.1',
  packageName: 'React-TS-Admin-prod' // 打包后的文件夹名称
}

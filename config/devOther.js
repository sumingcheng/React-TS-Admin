module.exports = {
  // webpack-dev-server 配置
  mode: 'development',
  modeName: 'devOther-开发环境',
  version: '2.0.0',
  port: 22222,
  https: false,
  devtool: 'eval-source-map',
  // 项目配置
  BASE_URL: 'https://jsonplaceholder.typicode.com', // 接口请求地址
  tabTitle: 'ReactAntWorks', // 浏览器页签名称
  menuTitle: 'ReactAntWorks', // 菜单名称
  packageName: 'ReactAntWorks-devOther' // 打包后的文件夹名称
}

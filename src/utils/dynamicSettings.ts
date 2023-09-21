export function setTitle() {
  // 动态设置标题
  document.getElementsByTagName('title')[0].innerHTML = process.env.tabTitle
}

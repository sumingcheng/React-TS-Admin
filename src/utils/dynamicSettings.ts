/**
 * 动态设置网站标题
 */
export function setTitle() {
  document.getElementsByTagName('title')[0].innerHTML = process.env.tabTitle
}

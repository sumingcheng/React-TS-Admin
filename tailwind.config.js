/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [],
  // corePlugins：false 自己处理浏览器默认样式
  corePlugins: {
    preflight: false
  }
}

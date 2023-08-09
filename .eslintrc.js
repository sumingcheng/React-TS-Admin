module.exports = {
  // 使用 @typescript-eslint/parser 作为 ESLint 的解析器，使其能够解析 TypeScript 代码
  parser: '@typescript-eslint/parser',

  // 注册 @typescript-eslint 和 react 插件，使我们能使用与 TypeScript 和 React 相关的规则
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint'
  ],

  extends: [
    'plugin:@typescript-eslint/recommended' // 添加 @typescript-eslint/recommended 配置
  ],

  // 定义全局环境，告诉 ESLint 我们的代码将在哪些环境中运行
  env: {
    browser: true, // 浏览器环境（如 window、document 等）
    node: true, // Node.js 环境（如 require、process 等）
    es2020: true // 启用 ES6 语法
  },

  parserOptions: {
    ecmaVersion: 2021, // 或更高版本
    sourceType: 'module' // 这是关键，表示支持 ES6 的 import/export 语法
  },

  // 配置模块解析设置
  settings: {
    'import/resolver': {
      // 配置 Webpack 解析器，使 ESLint 能理解 Webpack 的别名和模块路径
      webpack: {
        config: './webpack.config.js' // 你的 webpack 配置文件路径
      },
      // 配置 Node 解析器，设置模块的解析路径和文件扩展名
      node: {
        moduleDirectory: ['node_modules', 'src/'], // 指定模块根目录
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'] // 指定可以被解析的文件扩展名
      },
      react: {
        version: 'detect' // 自动检测 React 版本
      }
    }
  },

  // 自定义或覆盖默认规则
  rules: {
    // 禁用对函数组件定义方式的检查
    'react/function-component-definition': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // 仅允许在 .jsx 和 .tsx 文件中使用 JSX 语法，并发出警告
    'react/jsx-filename-extension': [1, {extensions: ['.jsx', '.tsx']}],
    '@typescript-eslint/no-var-requires': 'off'
  }
}

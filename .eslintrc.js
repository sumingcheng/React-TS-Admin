module.exports = {
  // 使用 TypeScript 的解析器
  parser: '@typescript-eslint/parser',

  // 使用 import 插件，主要用于导入/导出相关的规则
  plugins: ['import'],

  // 使用 TypeScript、React Hooks 和 React 的推荐配置
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended'
  ],

  // 定义代码运行的环境
  env: {
    browser: true,
    node: true,
    es2020: true
  },

  // 定义全局变量
  globals: {
    // APP_ENV: 'readonly'
  },

  // 定义解析器选项
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true  // 允许解析 JSX
    }
  },

  // 配置模块解析设置
  settings: {
    // 指定 TypeScript 解析器应解析哪些文件
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    // 使用 TypeScript 解析器作为模块解析器
    'import/resolver': {
      'typescript': {
        'alwaysTryTypes': true  // 始终尝试使用类型信息进行解析
      }
    }
  },

  // 自定义规则
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',  // 允许未使用的变量
    'react/function-component-definition': 'off',  // 不要求特定的函数组件定义方式
    'react-hooks/rules-of-hooks': 'error',  // 强制使用 React Hooks 规则
    'react-hooks/exhaustive-deps': 'warn',  // 警告缺失的依赖项
    'react/jsx-filename-extension': [1, {extensions: ['.jsx', '.tsx']}],  // 仅在指定的文件扩展名中允许 JSX
    '@typescript-eslint/no-var-requires': 'off',  // 允许使用 require
    'import/order': [  // 配置导入顺序
      'error',
      {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'never',
        'alphabetize': {
          'order': 'ignore',
          'caseInsensitive': true
        }
      }
    ]
  }
}

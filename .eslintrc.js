module.exports = {
  // 使用 TypeScript 的解析器
  parser: '@typescript-eslint/parser',

  // 定义代码运行的环境
  env: {
    browser: true,
    node: true,
    es2020: true
  },

  // 定义解析器选项
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    // 允许解析 JSX
    ecmaFeatures: {
      jsx: true
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
      // 始终尝试使用类型信息进行解析
      'typescript': {
        'alwaysTryTypes': true
      }
    }
  },

  // 使用 import 插件，主要用于导入/导出相关的规则
  plugins: [
    'import'
  ],

  // 使用 TypeScript、React Hooks 和 React 的推荐配置
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:promise/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:security/recommended'
  ],

  // 自定义规则
  rules: {
    // 基础规则
    'padding-line-between-statements': [
      'error',
      {
        // 在函数或多行块语句之间始终添加空行
        'blankLine': 'always',
        'prev': ['function', 'multiline-block-like'],
        'next': ['function', 'multiline-block-like']
      }
    ],
    // 类的成员之间始终有空行
    'lines-between-class-members': ['error', 'always'],
    // 当链式调用超过2次时，要求换行
    'newline-per-chained-call': ['error', {
      'ignoreChainWithDepth': 2
    }],
    // 对于对象字面量，当属性跨多行或对象至少有一个属性时，要求花括号内有换行。
    // "consistent": true 确保开始和结束花括号要么都换行，要么都不换行。
    'object-curly-newline': ['error', {
      'ObjectExpression': {
        'multiline': true,
        'minProperties': 0,
        'consistent': true
      },
      'ObjectPattern': {
        'multiline': true,
        'minProperties': 0,
        'consistent': true
      },
      'ImportDeclaration': 'never',   // import 语句的花括号不换行
      'ExportDeclaration': 'never'    // export 语句的花括号不换行
    }],
    // 要求 import 语句后有指定数量的空行，此配置要求有一个空行。
    'import/newline-after-import': ['error', {
      'count': 1
    }],
    // 要求数组的开闭括号之间的换行与括号内的元素保持一致
    'array-bracket-newline': ['error', 'consistent'],
    // typescript-eslint
    '@typescript-eslint/no-unused-vars': 'off',  // 允许未使用的变量
    '@typescript-eslint/no-var-requires': 'off',  // 允许使用 require
    // react
    'react/function-component-definition': 'off',  // 不要求特定的函数组件定义方式
    'react-hooks/rules-of-hooks': 'error',  // 强制使用 React Hooks 规则
    'react-hooks/exhaustive-deps': 'warn',  // 警告缺失的依赖项
    'react/jsx-filename-extension': [1, {
      extensions: ['.jsx', '.tsx']
    }],
    // 仅在指定的文件扩展名中允许 JSX
    // 配置导入顺序
    'import/order': [
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

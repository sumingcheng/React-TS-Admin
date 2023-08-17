module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复问题
        'docs', // 文档改变
        'add', // 增加某个模块
        'eslint', // 修改eslint相关配置
        'style', // 样式（不影响代码运行的变动）
        'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
        'perf', // 性能优化
        'test', // 增加测试
        'build', // 构建过程或辅助工具的变动
        'ci', // 改变持续集成的配置文件和 package 中的 scripts 命令
        'chore', // 其他改变（比如依赖更新）
        'revert' // 代码回退
      ]
    ],
    'subject-case': [2, 'never', ['upper-case']], // 提交信息的主题不能是大写
    'header-max-length': [2, 'always', 999] // 提交信息的长度不能超过999个字符
  }
}

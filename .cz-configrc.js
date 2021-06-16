module.exports = {
  types: [
    {
      value: 'WIP',
      name: '💪  WIP:      正在进行的工作',
    },
    {
      value: 'feat',
      name: '✨  feat:     新功能',
    },
    {
      value: 'fix',
      name: '🐞  fix:      bug 修复',
    },
    {
      value: 'refactor',
      name:
        '🛠  refactor: 既不修复bug也不添加特性的代码更改',
    },
    {
      value: 'docs',
      name: '📚  docs:     仅文档更改',
    },
    {
      value: 'test',
      name: '🏁  test:     添加缺少的测试或更正现有测试',
    },
    {
      value: 'chore',
      name:
        "🗯  chore:    不修改 src 或 test 文件的更改。例如更新生成任务、包管理器、项目配置等",
    },
    {
      value: 'style',
      name: '💅  style:    代码样式，不影响代码含义的更改（空格、格式、缺少分号等）',
    },
    {
      value: 'release',
      name: '📦  release:      发布新包',
    },
    {
      value: 'revert',
      name: '⏪  revert:   恢复到提交',
    },
  ],
  scopes: [],
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
};

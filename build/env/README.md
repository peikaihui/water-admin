# 环境变量的聚集地

每个环境都可以配置忽略 git 提交的文件。后缀带有 `.local` 即可忽略。如 `.env.test.local` 会忽略 git 管理，并且覆盖 `.env.test` 的环境变量。

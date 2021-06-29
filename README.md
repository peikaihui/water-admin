# Water Admin

简单的项目模板。

## 代码提交

1. 执行 `yarn lint` ，看是否有报错，若有报错 `yarn lint:fix` 自动修复下，然后再进行手动修复。
2. 运行 `git add .`
3. 运行 `yarn cz` 提交 commit 信息。格式参考： feat($update): code 。 commit 提交原则，不怕频繁，就怕一大堆好几百个提交。一个小功能，一个小页面，一个方法，提交一次。方便查找，方便 ***review***


## a-icon demo

``` vue
<template>
  <balance-two theme="filled" size="32" fill="#17bd08" />
  <icon icon-id="29464" size="32"></icon>
</template>

<script lang="ts">
// 官网： https://iconpark.oceanengine.com/official
// 参数： https://bytedance.feishu.cn/docs/doccnfQ9MVhtfye33SymobB5usb#bIprMt
// icon 使用
import { defineComponent } from 'vue';
import { BalanceTwo } from '@icon-park/vue-next';
import Icon from '@@utils/use/components/icon';
export default defineComponent({
  components: {
    BalanceTwo,
    Icon,
  },
});
</script>
```

### 待办

- 一级路径跳转
- 导航高亮匹配
- 二级导航渲染
- 头部右边
- 公共退出
- 账户设置
- 二级三级根据权限自动匹配跳转第一个页面
- 账号信息的渲染
- 文档目录
  - 路由配置，导航高亮规则
  - 权限的配置
  - ajax 的配置
  - use 的使用
  - icon
  - vuex 相关

### 新建项目

- 设置 `build/env` 中的字段 ***VITE_PUBLIC_PATH*** ， ***VITE_BASE_HOME*** ， ***VITE_MENU_ACTIVE***

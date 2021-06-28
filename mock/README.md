# 模拟数据

模拟数据的配置

## ajax 文件

ajax 文件中存放着和 `src/apis` 目录中同样的文件，配置的地址也是完全一样。例子如下

```
// mock/ajax/demo.ts
import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../mock-util';

export default [
  // 权限信息接口
  {
    url: '/api/demo',
    method: 'get',
    response: () => {
      return resultSuccess([]);
    },
  },
] as MockMethod[];
```

```
// src/apis/demo.ts
export function getCode() {
  return defHttp.request({
    url: '/api/demo',
    method: 'GET',
  }, {
    // 是否模拟数据
    mock: true,
  });
}
```

import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../mock-util';

export default [
  // 权限信息接口
  {
    url: '/api/external/menus',
    method: 'get',
    response: () => {
      return resultSuccess([]);
    },
  },
] as MockMethod[];

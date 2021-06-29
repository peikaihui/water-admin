import { MockMethod } from 'vite-plugin-mock';
import { resultError, resultSuccess } from '../mock-util';

export default [
  // 测试的接口
  {
    url: '/api/test/code',
    timeout: 200,
    method: 'get',
    response: () => {
      return resultSuccess({
        row: 1,
      });
    },
  },
  // 测试的接 404
  {
    url: '/api/404',
    timeout: 200,
    method: 'get',
    response: () => {
      return resultError('Incorrect account or password！');
    },
  },
  // 测试的 503
  {
    url: '/api/503',
    timeout: 200,
    method: 'get',
    response: () => {
      return resultError('Incorrect account or password！');
    },
  },
] as MockMethod[];

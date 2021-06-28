/** @format */

// NOTE water/use
import type { AppRouteModule } from '@@utils/use/routers/types';
import { LAYOUT_DEF, LAYOUT_BOX } from '@@utils/use/routers/constant';

const test1Page: AppRouteModule = {
  path: '/test1',
  name: 'Test1',
  component: LAYOUT_DEF,
  children: [
    {
      path: '',
      name: 'Test1',
      children: [
        {
          path: '',
          name: 'Test1View',
          meta: {
            title: '测试1',
          },
          component: () => import('@@views/TestContent.vue'),
        },
        {
          path: 'test4',
          name: 'Test4View',
          meta: {
            title: '测试4',
          },
          component: () => import('@@views/TestContent.vue'),
        },
      ],
      component: LAYOUT_BOX,
    },
  ],
};

export default test1Page;

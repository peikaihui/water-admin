import { defineComponent } from 'vue';

import routers from './use-path';

export default defineComponent({
  setup() {
    // console.log(routers(), 'routers');
    const routes = [
      {
        path: 'index',
        breadcrumbName: 'home',
      },
      {
        path: 'first',
        breadcrumbName: 'first',
      },
      {
        path: 'second',
        breadcrumbName: 'second',
      },
    ];

    return {
      routes,
      rrr: routers()[0]
    };
  },
});

import type { RouteRecordRaw } from 'vue-router';

// NOTE water/use
import type { AppRouteRecordRaw } from '@@utils/use/routers/types';
import waterRouter from '@@utils/use/routers';

import { basicRoutes } from '@@routers/configs';
export { setupRouter } from '@@utils/use/routers';

basicRoutes.forEach((route: AppRouteRecordRaw) => {
  waterRouter.addRoute((route as any) as RouteRecordRaw);
});

export default waterRouter;

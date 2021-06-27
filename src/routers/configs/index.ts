import type { AppRouteRecordRaw, AppRouteModule } from '@@utils/use/routers/types';

// NOTE water/use
import { PAGE_NOT_FOUND_ROUTE } from '@@utils/use/routers/configs/routers';

const modules = import.meta.globEager('./mods/**/*.ts');

const routeModuleList: AppRouteModule[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = [...routeModuleList];

// 不用权限的白名单
export const basicRoutes: AppRouteRecordRaw[] = [
  PAGE_NOT_FOUND_ROUTE,
  ...asyncRoutes,
];

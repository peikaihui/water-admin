import type { AppRouteRecordRaw, AppRouteModule } from '@@utils/use/routers/types';

// import { HOME_NAME } from '@@utils/use/routers/constant';

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

// export const rootTitle = '活动易';
// export const rootRoute: AppRouteRecordRaw = {
//   path: '/',
//   name: 'Root',
//   redirect: { name: HOME_NAME },
//   meta: {
//     title: rootTitle,
//   },
// };

// export const loginTitle = '登录';
// export const roginRoute: AppRouteRecordRaw = {
//   path: '/login',
//   name: 'Login',
//   meta: {
//     title: loginTitle,
//   },
//   component: () => import('@@views/login/Login.vue'),
// };

// 不用权限的白名单
export const basicRoutes: AppRouteRecordRaw[] = [
  PAGE_NOT_FOUND_ROUTE,
  // roginRoute,
  // rootRoute,
];

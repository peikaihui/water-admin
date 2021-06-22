/** @format */

import type { AppRouteRecordRaw } from '@@routers/types';

/**
 * @description: default layout
 */

export const DEF_LAYOUT = () => import('@@layouts/default/index/Index.vue');

export const BOX_LAYOUT = () => import('@@layouts/box/Box.vue');

// 404 on a page
export const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
  path: '/:path(.*)*',
  name: 'NotPage',
  component: () => import('@@views/not-page/NotPage.vue'),
  meta: {
    title: 'NotPage',
  },
};

export const REDIRECT_NAME = 'Marketingirect';

export const REDIRECT_ROUTE: AppRouteRecordRaw = {
  path: '/redirect',
  name: REDIRECT_NAME,
  component: DEF_LAYOUT,
  meta: {
    title: REDIRECT_NAME,
  },
  children: [
    {
      path: '/redirect/:path(.*)',
      name: REDIRECT_NAME,
      component: () => import('@@views/redirect/Redirect.vue'),
      meta: {
        title: REDIRECT_NAME,
      },
    },
  ],
};

export const HOME_NAME = 'CustomerList';

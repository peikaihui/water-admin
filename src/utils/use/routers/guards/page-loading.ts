/** @format */

import type { Router } from 'vue-router';

import { unref } from 'vue';

import myStores from '../../stores';
import { useTimeoutFn } from '@vueuse/core';

// 全局 加载状态 的 守卫
export function createPageLoadingGuard(router: Router) {
  let TimeoutStop = null;
  let TimeoutIsPending = false;
  router.beforeEach(() => {
    // if (!authStore.getTokenState) {
    //   return true;
    // }

    // NOTE 全局加载
    unref(myStores).dispatch('app/setPageLoading', true);

    return true;
  });
  router.afterEach((to) => {
    if (!to.meta.loading && !TimeoutIsPending) {
      const { isPending, stop } = useTimeoutFn(() => {
        unref(myStores).dispatch('app/setPageLoading', false);
      }, 2000);

      TimeoutStop = stop;
      TimeoutIsPending = isPending.value;
    }

    return true;
  });
}

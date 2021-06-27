import type {
  MenuModal,
} from '../api-mods/external';

import {
  MENU_TYPE_ENUM,
  AUTH_TYPE_ENUM,
} from '../api-mods/external';
import { getEnvConfig } from '../env';

const { VITE_MENU_ACTIVE, VITE_USE_AUTH } = getEnvConfig();

export const getDarkMenus = (external: MenuModal[]) => {
  const originMenus = external
    .filter(({ isAccessible, options }: MenuModal) => (!VITE_USE_AUTH || !!isAccessible) && options.deniedType === AUTH_TYPE_ENUM.HIDDEN)
    .sort((prev: MenuModal, next: MenuModal) => prev.order - next.order);

  const baseMenus = originMenus.filter((mItem: MenuModal) => mItem.type === MENU_TYPE_ENUM.BASE);
  const otherMenus = originMenus.filter((mItem: MenuModal) => mItem.type === MENU_TYPE_ENUM.OTHER);
  return {
    [MENU_TYPE_ENUM.BASE]: baseMenus,
    [MENU_TYPE_ENUM.OTHER]: otherMenus,
  };
};

const getSubMenus = (external: MenuModal[]): MenuModal[] => {
  // 如果没有 二级 导航
  if (!external.length) { return []; }

  const testPathNavs: MenuModal[] = [];

  external.forEach(({ subMenus, ...eItem }: MenuModal) => {
    testPathNavs.push(eItem);
    if (subMenus && subMenus.length) {
      subMenus.forEach(({ subMenus: subMenusChild, ...childItem }: MenuModal) => {
        testPathNavs.push(childItem);
      });
    }
  });

  return testPathNavs;
};

export interface NavActiveModal {
  activeNavCode: string
  openNavCode: string
}

export const getAvtiveKey = (navs: MenuModal[], fullPath: string): NavActiveModal => {
  // 如果没有 二级 导航
  if (!navs.length) {
    return {
      activeNavCode: '',
      openNavCode: '',
    };
  }

  const testPathNavs: MenuModal[] = [];
  let activeNavCode = '';
  let openNavCode = '';
  navs.forEach(({ subMenus, ...eItem }: MenuModal) => {
    testPathNavs.push(eItem);
    // NOTE 匹配 三级
    if (subMenus && subMenus.length) {
      const activeNavItem = subMenus.find((sItem: MenuModal) => sItem.path.includes(fullPath));

      if (activeNavItem) { activeNavCode = activeNavItem.permissionCode; }
    }
    else {
      const activeNav = eItem.path.includes(fullPath);
      if (activeNav) {
        activeNavCode = eItem.permissionCode;
        openNavCode = eItem.permissionCode;
      }
    }
    // NOTE 匹配 二级
    if (activeNavCode && !openNavCode) { openNavCode = eItem.permissionCode; }
  });

  return {
    activeNavCode,
    openNavCode,
  };
};

export const getLightMenus = (external: MenuModal[]): MenuModal[] => {
  const currentMenus = external.find((eItem: MenuModal) => eItem.permissionCode === VITE_MENU_ACTIVE);
  const currentNavs = currentMenus?.subMenus || [];
  return currentNavs;
};

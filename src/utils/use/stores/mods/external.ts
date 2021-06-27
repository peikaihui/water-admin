import type {
  MenuModal,
} from '../../api-mods/external';

import {
  MenusPageModal,
} from '../../api-mods/external';

import { getSomeInfo } from '../../apis/external';
import { getDarkMenus, getLightMenus } from '../../utils/menus';

interface ExternalStateModal {
  originMenus: MenuModal[]
  menus: MenusPageModal
  navs: MenuModal[]
}

const state: ExternalStateModal = {
  originMenus: [],
  menus: {} as MenusPageModal,
  navs: [] as MenuModal[],
};

// getters
const getters = {
  getOriginMenus: (state: ExternalStateModal) => {
    return state.originMenus;
  }
};

// actions
const actions = {
  getAllExternals: async({ commit }: any) => {
    const externalResult = await getSomeInfo();
    commit('setAllExternals', { externalResult });
  }
};

// mutations
const mutations = {
  setAllExternals(state: ExternalStateModal, { externalResult }: any) {
    state.originMenus = externalResult.menus.slice();
    state.menus = getDarkMenus(state.originMenus);
    const currentNavs = getLightMenus(state.originMenus);
    state.navs = currentNavs;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

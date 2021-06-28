import { createApp } from 'vue';

import router, { setupRouter } from '@@routers';

// NOTE water/use
import useAntd from '@@utils/use/water';
import { setupStore } from '@@utils/use/stores';

import App from './App.vue';

const app = createApp(App);

useAntd(app);

setupRouter(app);

setupStore(app, {
  // 配置项目的模块
  modules: {},
});

router.isReady().then(() => {
  app.mount('#root', true);
});

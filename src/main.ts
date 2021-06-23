import { createApp } from 'vue';

import router, { setupRouter } from '@@routers';

// NOTE water/use
import useAntd from '@@utils/use/antd';

import App from './App.vue';

const app = createApp(App);

useAntd(app);

setupRouter(app);

router.isReady().then(() => {
  app.mount('#app', true);
});

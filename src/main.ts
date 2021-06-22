import { createApp } from 'vue';

import router, { setupRouter } from './routers';

import App from './App.vue';

const app = createApp(App);

setupRouter(app);

router.isReady().then(() => {
  app.mount('#app', true);
});

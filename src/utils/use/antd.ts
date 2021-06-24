import { App } from 'vue';

// NOTE ant-design-vue
import antd from '@fe6/water-pro';
import '@fe6/water-pro/dist/water.css';
// import antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';

export default (app: App) => {
  app.use(antd);
};

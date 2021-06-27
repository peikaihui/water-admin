import { defineComponent } from 'vue';
import {
  EditOutlined,
  ShareAltOutlined,
} from '@ant-design/icons-vue';

import ALayoutDefaultAuth from '../layout-default-auth/LayoutDefaultAuth.vue';
import Icon from '../icon';

import { errUploadImage } from './error-image';

export default defineComponent({
  components: {
    Icon,
    ShareAltOutlined,
    EditOutlined,
    ALayoutDefaultAuth,
  },
  setup() {
    return {
      errUploadImage,
    };
  }
});

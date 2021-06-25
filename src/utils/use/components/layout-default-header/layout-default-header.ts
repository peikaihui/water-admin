import { isUndefined } from 'lodash';
import { defineComponent, ref } from 'vue';
import { EditOutlined, ShareAltOutlined } from '@ant-design/icons-vue';

import WBasicArrow from '../basic-arrow/BasicArrow.vue';
import ALayoutDefaultAuth from '../layout-default-auth/LayoutDefaultAuth.vue';
import Icon from '../icon';
import { errUploadImage } from './error-image';

export default defineComponent({
  components: {
    Icon,
    EditOutlined,
    ShareAltOutlined,
    WBasicArrow,
    ALayoutDefaultAuth,
  },
  setup() {
    const visible = ref(false);

    const hideInfo = (newStatus?: boolean) => {
      visible.value = isUndefined(newStatus) ? !visible.value : newStatus;
    };

    return {
      visible,
      hideInfo,
      errUploadImage,
    };
  }
});

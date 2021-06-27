import { isUndefined } from 'lodash-es';
import { defineComponent, ref } from 'vue';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';

import { propTypes } from '../../utils/prop-types';
import ABasicArrow from '../basic-arrow/BasicArrow.vue';
import ALayoutDefaultAuth from '../layout-default-auth/LayoutDefaultAuth.vue';
import ALayoutDefaultPanel from '../layout-default-panel/LayoutDefaultPanel.vue';
import Icon from '../icon';

export default defineComponent({
  components: {
    Icon,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    ABasicArrow,
    ALayoutDefaultAuth,
    ALayoutDefaultPanel,
  },
  props: {
    collapsed: propTypes.looseBool,
  },
  emits: ['on-collapsed'],
  setup(props, { emit }) {
    const visible = ref(false);

    const hideInfo = (newStatus?: boolean) => {
      visible.value = isUndefined(newStatus) ? !visible.value : newStatus;
    };

    const changeCollapsed = () => {
      emit('on-collapsed', props.collapsed);
    };

    return {
      changeCollapsed,
      visible,
      hideInfo,
    };
  }
});

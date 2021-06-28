<template>
  <w-layout-default-content style="height: 2000px">
    <a-button>
      这是内容
    </a-button>
  </w-layout-default-content>
</template>

<script lang="ts" >
import {
  defineComponent
} from 'vue';

import WLayoutDefaultContent from '@@utils/use/components/layout-default-content/LayoutDefaultContent.vue';

export default defineComponent({
  components: {
    WLayoutDefaultContent,
  }
});
</script>

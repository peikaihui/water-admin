/** @format */

import { defineComponent, ref, unref, nextTick } from 'vue';

import { useScrollTo } from '../../hooks/use-scroll-to';
import { Scrollbar, ScrollbarType } from '../scrollbar';

export default defineComponent({
  name: 'AContainerScroll',
  // inheritAttrs: false,
  components: { Scrollbar },
  setup() {
    const scrollbarRef = ref<Nullable<ScrollbarType>>(null);

    function scrollTo(to: number, duration = 500) {
      const scrollbar = unref(scrollbarRef);
      if (!scrollbar) { return; }

      nextTick(() => {
        const wrap = unref(scrollbar.wrap);
        if (!wrap) { return; }
        const { start } = useScrollTo({
          el: wrap,
          to,
          duration,
        });
        start();
      });
    }

    function getScrollWrap() {
      const scrollbar = unref(scrollbarRef);
      if (!scrollbar) { return null; }
      return scrollbar.wrap;
    }

    function scrollBottom() {
      const scrollbar = unref(scrollbarRef);
      if (!scrollbar) { return; }

      nextTick(() => {
        const wrap = unref(scrollbar.wrap);
        if (!wrap) { return; }
        const scrollHeight = wrap.scrollHeight as number;
        const { start } = useScrollTo({
          el: wrap,
          to: scrollHeight,
        });
        start();
      });
    }

    return {
      scrollbarRef,
      scrollTo,
      scrollBottom,
      getScrollWrap,
    };
  },
});

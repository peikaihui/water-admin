<template>
  <a-button class="ant-affix" type="danger">
    这是 {{ name }}
  </a-button>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { unref } from 'vue';

const { currentRoute } = useRouter();
const { name } = unref(currentRoute);
</script>

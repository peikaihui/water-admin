<!-- @format -->

<template>
  <Scrollbar ref="scrollbarRef" class="ant-scroll-container" v-bind="$attrs">
    <slot></slot>
  </Scrollbar>
</template>

<script lang="ts" src="./container-scroll.ts"></script>
<style lang="scss" src="./container-scroll.scss"></style>

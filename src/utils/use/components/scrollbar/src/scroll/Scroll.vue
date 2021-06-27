<!-- @format -->

<template>
  <div class="ant-scrollbar">
    <div
      ref="wrap"
      :class="[
        wrapClass,
        'ant-scrollbar-wrap',
        native ? '' : 'ant-scrollbar-wrap-hidden-default',
      ]"
      :style="style"
      @scroll="handleScroll"
    >
      <component
        :is="tag"
        ref="resize"
        :class="['ant-scrollbar-view', viewClass]"
        :style="viewStyle"
      >
        <slot></slot>
      </component>
    </div>
    <template v-if="!native">
      <bar v-if="showHorizontal" :move="moveX" :size="sizeWidth" />
      <bar vertical :move="moveY" :size="sizeHeight" />
    </template>
  </div>
</template>

<script lang="ts" src="./scroll.ts"></script>
<style lang="scss" src="./scroll.scss"></style>

<template>
  <a-page-header
    title="Title"
    :ghost="false"
    :breadcrumb="{ routes }"
    sub-title="This is a subtitle"
  />
  <!-- <div>
    -{{rrr}}
    <a-breadcrumb :routes="rrr">
      <template #itemRender="{ route, params, routes, paths }">
        <span v-if="routes.indexOf(route) === routes.length - 1">
          {{route.meta.title}}
        </span>
        <router-link v-else :to="paths.join('/')">
          {{route.meta.title}}
        </router-link>
      </template>
    </a-breadcrumb>
  </div> -->
</template>

<script lang="ts" src="./layout-default-pageheader.ts"></script>
<style lang="scss" src="./layout-default-pageheader.scss"></style>

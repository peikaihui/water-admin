<template>
  <a-layout
    class="w-layout-default"
    prefix-cls="ant-layout"
  >
    <a-layout-sider
      :trigger="null"
      collapsible
      :width="100"
      :collapsed-width="80"
    >
      <div class="w-layout-default-logo-box">
        <img class="w-layout-default-logo" src="https://objects.evente.cn/assets/brand/piaodada/logo-200.png" />
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <user-outlined />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <user-outlined />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <user-outlined />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout-sider
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
      :width="154"
      :collapsed-width="0"
      style="overflow: hidden;"
      breakpoint="xxl"
    >
      <div class="w-layout-default-header-name">
        产品管理
      </div>
      <a-menu
        v-model:selectedKeys="selectedKeys2"
        v-model:openKeys="openKeys"
        mode="inline"
        style="height: 100%"
      >
        <a-sub-menu key="sub1">
          <template #title>
            <span>subnav 1</span>
          </template>
          <a-menu-item key="1">
            option1
          </a-menu-item>
          <a-menu-item key="2">
            option2
          </a-menu-item>
          <a-menu-item key="3">
            option3
          </a-menu-item>
          <a-menu-item key="4">
            option4
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              subnav 2
            </span>
          </template>
          <a-menu-item key="5">
            option5
          </a-menu-item>
          <a-menu-item key="6">
            option6
          </a-menu-item>
          <a-menu-item key="7">
            option7
          </a-menu-item>
          <a-menu-item key="8">
            option8
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <template #title>
            <span>
              subnav 3
            </span>
          </template>
          <a-menu-item key="9">
            option9
          </a-menu-item>
          <a-menu-item key="10">
            option10
          </a-menu-item>
          <a-menu-item key="11">
            option11
          </a-menu-item>
          <a-menu-item key="12">
            option12
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout
      prefix-cls="ant-layout"
    >
      <a-layout-header
        style="background: #fff; padding: 0"
        prefix-cls="ant-layout-header"
      >
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px 0', padding: '24px', background: '#fff', minHeight: '280px' }"
        prefix-cls="ant-layout-content"
      >
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer class="w-layout-default-footer">
        <div>活动易 · 文旅行业解决专家</div>
        <div>�-2021 Evente.cn</div>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" src="./layout-default.ts"></script>
<style lang="scss" src="./layout-default.scss"></style>

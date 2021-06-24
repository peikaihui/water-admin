<template>
  <div class="layout-default-header">
    <div class="layout-default-header-label">
      <a-popover
        v-model:visible="visible"
        overlay-class-name="layout-default-header-info"
        trigger="click"
        placement="bottomLeft"
      >
        <template #content>
          <div class="layout-default-header-info-inner">
            <a-image
              :width="100"
              :height="100"
              :src="'sss'"
              class="w-upload-image-img"
              :preview="false"
              :fallback="errUploadImage"
            ></a-image>
            <div class="layout-default-header-info-content">
              <div class="layout-default-header-info-title layout-default-header-item">
                <span>中国金茂酒店官方旗舰店</span>
                <EditOutlined />
              </div>
              <div>
                <a-layout-default-auth size="small" class="layout-default-header-item layout-default-header-info-tag" />
              </div>
              <div>
                <a-button><ShareAltOutlined />分享</a-button>
                <a-button class="layout-default-header-info-btn">
                  <EditOutlined />进店
                </a-button>
                <a-button type="danger">
                  店铺认证
                </a-button>
              </div>
            </div>
          </div>
          <a-row class="layout-default-header-info-footer">
            <a-col :span="11">
              <div>
                <EditOutlined />进店
              </div>
            </a-col>
            <a-col :span="2">
              <a-divider type="vertical" />
            </a-col>
            <a-col :span="11">
              <div>
                <EditOutlined />进店
              </div>
            </a-col>
          </a-row>
        </template>
        <div class="layout-default-header-info-action layout-default-header-item">
          <span class="layout-default-header-title layout-default-header-item">中国金茂酒店官方旗舰店</span>
          <WBasicArrow class="layout-default-header-arrow layout-default-header-item" bottom />
        </div>
      </a-popover>
      <a-layout-default-auth class="layout-default-header-item" />
    </div>
    <div style="flex: 1 1 0%;" />
    <div>
      header
    </div>
  </div>
</template>

<script lang="ts" src="./layout-default-header.ts"></script>
<style lang="scss" src="./layout-default-header.scss"></style>

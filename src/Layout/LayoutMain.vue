<!--
 * @Author: zsmya
 * @Date: 2022-04-26 16:37:37
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-27 18:20:06
 * @FilePath: /three-admin/src/Layout/layoutMain.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->

<template>
  <div class="layout-main">
    <n-layout class="layout-box">
      <n-layout-header style="height: 64px; padding: 12px" bordered>
        <NavBar ref="navbar">1</NavBar>
      </n-layout-header>
      <n-layout class="layout-container" has-sider>
        <n-layout-sider
          class="layout-sider"
          bordered
          content-style="padding: 24px;"
        >
          海淀桥
        </n-layout-sider>
        <n-layout content-style="padding: 12px;">
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <router-view></router-view>
        </n-layout>
      </n-layout>
    </n-layout>
  </div>
</template>

<script lang="ts">
import NavBar from "./NavBar/index.vue";

import { ref, defineComponent } from "vue";

const LayoutMain = defineComponent({
  components: {
    NavBar,
  },
  setup() {
    const navbar = ref(null);
    return {
      navbar,
    };
  },
});
export default LayoutMain;
</script>

<style lang="scss" scoped>
.layout-main {
  width: 100vw;
  height: 100vh;
  .layout-box {
    width: 100%;
    height: 100%;
  }
  .layout-sider {
    width: 120px;
  }
  .layout-container {
    height: calc(100% - 64px);
  }
}
</style>

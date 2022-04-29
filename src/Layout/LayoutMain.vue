<!--
 * @Author: zsmya
 * @Date: 2022-04-26 16:37:37
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-29 16:52:57
 * @FilePath: /three-admin/src/Layout/layoutMain.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->

<template>
  <div class="layout-main">
    <a-layout class="layout-box" theme="light">
      <a-layout-header
        class="layout-header"
        style="height: 48px; padding: 6px; background: #fff"
        bordered
        theme="light"
      >
        <NavBar ref="navbar">1</NavBar>
      </a-layout-header>
      <a-layout class="layout-container" has-sider>
        <a-layout-sider class="layout-sider" bordered width="200" theme="light">
          <SilderBar></SilderBar>
        </a-layout-sider>
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import NavBar from "./NavBar/index.vue";
import SilderBar from "./SilderBar/index.vue";
import { ref, defineComponent } from "vue";

const LayoutMain = defineComponent({
  components: {
    NavBar,
    SilderBar,
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
    .layout-header {
      line-height: 48px;
    }
    .layout-container {
      height: calc(100% - 60px);
    }
    .layout-sider {
      height: 100%;
    }
  }
}
</style>

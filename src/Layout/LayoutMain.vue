<!--
 * @Author: zsmya
 * @Date: 2022-04-26 16:37:37
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-26 17:15:43
 * @FilePath: /three-admin/src/Layout/layoutMain.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->

<template>
  <div class="layout">
    <NavBar ref="navbar"></NavBar>
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
.layout {
  width: 100vw;
  height: 100vh;
}
</style>

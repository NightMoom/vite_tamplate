<!--
 * @Author: zsmya
 * @Date: 2022-04-28 09:44:30
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-28 18:13:46
 * @FilePath: /three-admin/src/Layout/SilderBar/index.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<template>
  <div class="sider-bar"></div>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import { routes } from "@/router/index";
import { useMainStore } from "@/store/index";
const ignoreRouter: Array<string> = ["/login", "*"];

const silderBar = defineComponent({
  setup() {
    console.log("routes", routes);
    const mainStore = useMainStore();
    watch(mainStore, (nv) => {
      console.log(nv);
      const { routerKey } = nv.$state;
      const filter = routes.filter((i) => i.path === routerKey);
      console.log("filter", filter);
    });
    return {};
  },
});

export default silderBar;
</script>

<style></style>

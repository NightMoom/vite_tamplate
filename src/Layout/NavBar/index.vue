<!--
 * @Author: zsmya
 * @Date: 2022-04-26 16:51:11
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-26 17:04:53
 * @FilePath: /three-admin/src/Layout/NavBar/index.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->

<template>
  <div class="nav-bar"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter, RouteRecord } from "vue-router";
const ignoreRouter: Array<string> = ["/login", "*"];
interface routerFormat {
  path: string;
  meta: {
    title: string;
  };
}
const NavBar = defineComponent({
  setup() {
    const router = useRouter();
    const currentRouter: RouteRecord[] = router.getRoutes();

    const formatRouter = (router: Array<RouteRecord>): Array<string> => {
      router.map((i) => {
        return {
          path: i.path,
          meta: i.meta,
        };
      });
      return [];
    };
  },
});
export default NavBar;
</script>

<style lang="scss" scoped></style>

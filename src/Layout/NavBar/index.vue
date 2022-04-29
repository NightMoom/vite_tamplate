<!--
 * @Author: zsmya
 * @Date: 2022-04-26 16:51:11
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-29 16:53:39
 * @FilePath: /three-admin/src/Layout/NavBar/index.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->

<template>
  <div class="nav-bar">
    <div class="logo">看上去应该是放logo</div>
    <div class="menu">
      <div class="menu-item" v-for="(v, index) in format" :key="index">
        <div class="item-name" @click="routerTo(v)">{{ v.meta.title }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter, RouteRecord, RouteMeta } from "vue-router";
import { useMainStore } from "@/store/index";
interface routerFormat {
  path: string;
  meta: RouteMeta;
}
const NavBar = defineComponent({
  setup() {
    const mainStore = useMainStore();
    const router = useRouter();
    const currentRouter: RouteRecord[] = router.getRoutes();

    const formatRouter = (router: Array<RouteRecord>): Array<routerFormat> => {
      return router.map((i) => {
        return {
          path: i.path,
          meta: i.meta,
        };
      });
    };
    const format = formatRouter(currentRouter).filter(
      (i) => i.meta && i.meta.title
    );

    const routerTo = (v: routerFormat): void => {
      mainStore.$patch({
        routerKey: v.path,
      });
      router.replace(v);
    };
    return {
      format,
      routerTo,
    };
  },
});
export default NavBar;
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  align-items: center;
  height: 100%;
  .logo {
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .menu {
    display: flex;
    .menu-item {
      padding: 0 30px;
      .item-name {
        color: #000;
        font-size: 20px;
        cursor: pointer;
        &:hover {
          color: rgb(255, 109, 42);
        }
      }
    }
  }
}
</style>

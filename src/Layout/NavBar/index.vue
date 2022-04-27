<!--
 * @Author: zsmya
 * @Date: 2022-04-26 16:51:11
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-27 18:23:35
 * @FilePath: /three-admin/src/Layout/NavBar/index.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->

<template>
  <div class="nav-bar">
    <div class="logo"></div>
    <div class="menu">
      <div class="menu-item" v-for="(v, index) in format" :key="index">
        <div class="item-name">{{ v.meta.title }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter, RouteRecord, RouteMeta } from "vue-router";
const ignoreRouter: Array<string> = ["/login", "*"];
interface routerFormat {
  path: string;
  meta: RouteMeta;
}
const NavBar = defineComponent({
  setup() {
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
    console.log(format);
    return {
      format,
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
    width: 120px;
    height: 100%;
  }
  .menu {
    .menu-item {
      padding: 0 30px;
      .item-name {
        color: #000;
        font-size: 24px;
        cursor: pointer;
        &:hover {
          color: rgb(53, 112, 214);
        }
      }
    }
  }
}
</style>

<!--
 * @Author: zsmya
 * @Date: 2022-04-28 09:44:30
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-29 17:05:22
 * @FilePath: /three-admin/src/Layout/SilderBar/index.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<template>
  <div class="sider-bar">
    <a-menu mode="inline">
      <a-sub-menu v-for="v in filter" :key="v.path">
        <template #title>{{ v.meta?.sub }}</template>

        <a-menu-item v-for="sub in v.children" :key="sub.path">
          {{ sub.meta?.subtitle }}
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
    <!-- <a-menu mode="inline" theme="dark">
      <a-menu-item key="1">
        <template #icon>
          <PieChartOutlined />
        </template>
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <template #icon>
          <DesktopOutlined />
        </template>
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <template #icon>
          <InboxOutlined />
        </template>
        <span>Option 3</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #icon>
          <MailOutlined />
        </template>
        <template #title>Navigation One</template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #icon>
          <AppstoreOutlined />
        </template>
        <template #title>Navigation Two</template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">Option 11</a-menu-item>
          <a-menu-item key="12">Option 12</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, reactive } from "vue";
import { routes } from "@/router/index";
import { RouteRecordRaw, RouteRecord } from "vue-router";
import { useMainStore } from "@/store/index";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from "@ant-design/icons-vue";
const silderBar = defineComponent({
  component: [
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
  ],
  setup() {
    console.log("routes", routes);
    const mainStore = useMainStore();
    let filter = ref<Array<RouteRecordRaw> | undefined>([]);
    watch(
      mainStore,
      (state) => {
        console.log("stata", state);
        filter.value = routes.filter(
          (i) => i.path === state.routerKey
        )[0].children;
      },
      {
        immediate: true,
      }
    );

    return {
      filter,
    };
  },
});

export default silderBar;
</script>

<style></style>

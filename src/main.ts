/*
 * @Author: zsmya
 * @Date: 2022-04-26 15:56:24
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-28 17:32:59
 * @FilePath: /three-admin/src/main.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "normalize.css";
import { createPinia } from "pinia";
import { useMainStore } from "@/store/index";

import {
  create,
  NButton,
  NCard,
  NMenu,
  NLayoutHeader,
  NLayout,
  NForm,
  NFormItem,
  NInput,
} from "naive-ui";

const app = createApp(App);

const naive = create({
  components: [
    NButton,
    NMenu,
    NCard,
    NLayoutHeader,
    NLayout,
    NForm,
    NFormItem,
    NInput,
  ],
});
app.use(naive);

app.use(createPinia());
// 路由守卫
router.beforeEach((to, form, next) => {
  console.log("to", to);
  console.log("form", form);
  const mainStore = useMainStore();
  if (to.path !== "/login") {
    mainStore.$patch({
      routerKey: to.path,
    });
  }
  next();
});

app.use(router);

app.mount("#app");

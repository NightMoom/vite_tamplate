/*
 * @Author: zsmya
 * @Date: 2022-04-26 15:56:24
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-29 15:39:08
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
  Button,
  Layout,
  Form,
  Input,
  Menu,
  ConfigProvider,
} from "ant-design-vue";

const app = createApp(App);

app.use(Button);
app.use(Layout);
app.use(Form);
app.use(Input);
app.use(Menu);
app.use(ConfigProvider);
// app.use(MenuItem);
// app.use(SubMenu);
app.use(createPinia());
// 路由守卫
router.beforeEach((to, form, next) => {
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

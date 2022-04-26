/*
 * @Author: zsmya
 * @Date: 2022-04-26 15:56:24
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-26 16:10:51
 * @FilePath: /three-admin/src/main.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";

import {
  create,
  NButton,
  NCard,
  NMenu,
  NLayoutHeader,
  NLayout,
  NForm,
  NFormItem,
} from "naive-ui";

const app = createApp(App);

const naive = create({
  components: [NButton, NMenu, NCard, NLayoutHeader, NLayout, NForm, NFormItem],
});
app.use(naive);

app.use(store);
app.use(router);
app.mount("#app");

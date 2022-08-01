/*
 * @Author: zsmya
 * @Date: 2022-08-01 09:33:16
 * @LastEditors: zsmya
 * @LastEditTime: 2022-08-01 15:49:49
 * @FilePath: /vite_vue3_ts/src/main.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import { createApp } from "vue"
import App from "./App.vue"
import { setGlobalOptions } from "vue-request"
import { createPinia } from "pinia"
import router from "./router"

setGlobalOptions({
  manual: true,
})

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount("#app")

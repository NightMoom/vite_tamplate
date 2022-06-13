/*
 * @Author: zsmya
 * @Date: 2022-06-13 14:02:42
 * @LastEditors: zsmya
 * @LastEditTime: 2022-06-13 17:59:17
 * @FilePath: /effect/src/main.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import { createApp } from "vue"
import App from "./App.vue"
import { createPinia } from "pinia"
import router from "./router"
import * as echarts from "echarts"
import "./style/index.scss"
// 样式初始化
import "normalize.css"
const app = createApp(App)
app.use(createPinia())
app.use(router)

app.config.globalProperties.$echarts = echarts

app.mount("#app")

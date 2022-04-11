/*
 * @Author: zsmya
 * @Date: 2022-04-11 11:16:51
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-11 16:57:48
 * @FilePath: /vite_ts/src/main.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
// 状态管理
app.use(createPinia())
app.mount('#app')

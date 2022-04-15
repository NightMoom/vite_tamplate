/*
 * @Author: zsmya
 * @Date: 2022-04-11 11:16:51
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-15 18:03:19
 * @FilePath: /vite_ts/src/main.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useMessage, useNotification, useDialog, useLoadingBar, autoCompleteDark } from 'naive-ui'

// svg-icon
import { installSvgComponent } from '@/icons/index'
// 全局样式
import '@/styles/index.scss'
// 初始化样式
import 'normalize.css'
// 自定义指令
import * as directives from '@/directive/index'

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

// 自定义指令
import '@/directive/index'

const app = createApp(App)
// 注册svg-icon组件
installSvgComponent(app)
// 添加自定义指令
// @ts-ignore
Object.keys(directives).forEach((i: string) => app.directive(i, directives[i]))

// 状态管理
app.use(createPinia())

// 路由
app.use(router)

// naive-ui 已使用 unplugin-vue-components 插件自动引入
// naive-ui 其他api组件
app.use(useMessage)
app.use(useNotification)
app.use(useDialog)
app.use(useLoadingBar)

app.mount('#app')

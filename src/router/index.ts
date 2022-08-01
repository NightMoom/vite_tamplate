/*
 * @Author: zsmya
 * @Date: 2022-08-01 15:45:06
 * @LastEditors: zsmya
 * @LastEditTime: 2022-08-01 16:25:08
 * @FilePath: /vite_vue3_ts/src/router/index.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import { createWebHistory, RouteRecordRaw, createRouter } from "vue-router"

const route: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: () => import("@/views/Home/Index.vue"),
  },
]

const router = createRouter({
  history: createWebHistory("/"),
  routes: route,
})

export default router

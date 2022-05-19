/*
 * @Author: zsmya
 * @Date: 2022-05-19 14:40:27
 * @LastEditors: zsmya
 * @LastEditTime: 2022-05-19 14:45:30
 * @FilePath: /three-effect/src/router/index.ts
 * @Description:  router
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import { createWebHistory, RouteRecordRaw, createRouter } from "vue-router"

const route: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/login",
    // component: () => import("@/assets")
  },
  {
    path: "/login",
    component: () => import("@/views/Login/Index.vue"),
  },
  {
    path: "/Home",
    component: () => import("@/views/Home/Index.vue"),
  },
  {
    path: "/Fly",
    component: () => import("@/views/Fly/Index.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: route,
})

export default router

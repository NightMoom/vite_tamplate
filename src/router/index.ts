/*
 * @Author: zsmya
 * @Date: 2022-06-13 14:02:42
 * @LastEditors: zsmya
 * @LastEditTime: 2022-06-14 17:40:13
 * @FilePath: /effect/src/router/index.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import { createWebHistory, RouteRecordRaw, createRouter } from "vue-router"

const route: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/Index",
    // component: () => import("@/assets")
  },
  {
    path: "/login",
    component: () => import("@/views/Login/Index.vue"),
  },
  {
    path: "/Index",
    component: () => import("@/views/Home/Index.vue"),
  },
  {
    path: "/geoJSON",
    component: () => import("@/views/GeoJSON/Index.vue"),
  },
  {
    path: "/FlyLine",
    component: () => import("@/views/FlyLine/Index.vue"),
  },
  {
    path: "/Radar",
    component: () => import("@/views/Radar/Index.vue"),
  },
  {
    path: "/RayCaster",
    component: () => import("@/views/RayCaster/Index.vue"),
  },
  // {
  //   path: "/RayEchartsOne",
  //   component: () => import("@/views/RayCaster/Echarts.vue"),
  // },
  {
    path: "/EchartsTwo",
    component: () => import("@/views/RayCaster/EchartsTwo.vue"),
  },
  {
    path: "/Build",
    component: () => import("@/views/Model/Build.vue"),
  },
  {
    path: "/Cloud",
    component: () => import("@/views/Cloud/Index.vue"),
  },
  {
    path: "/Earth",
    component: () => import("@/views/Earth/Index.vue"),
  },
]

const router = createRouter({
  history: createWebHistory("/three-effect"),
  routes: route,
})

export default router

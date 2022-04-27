/*
 * @Author: zsmya
 * @Date: 2022-04-26 15:56:24
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-27 17:58:08
 * @FilePath: /three-admin/src/router/index.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LayoutMain from "@/Layout/LayoutMain.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/Index.vue"),
  },
  {
    path: "/demo",
    name: "demo",
    meta: {
      title: "案例",
    },
    redirect: "/demo/snow",
    component: LayoutMain,
    children: [
      {
        path: "/demo/snow",
        component: () => import("@/views/Demo/Snow/Index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

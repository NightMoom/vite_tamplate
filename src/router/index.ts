/*
 * @Author: zsmya
 * @Date: 2022-04-26 15:56:24
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-29 17:07:53
 * @FilePath: /three-admin/src/router/index.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LayoutMain from "@/Layout/LayoutMain.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/geometry",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/Index.vue"),
  },
  {
    path: "/geometry",
    name: "geometry",
    meta: {
      title: "几何体",
    },
    component: LayoutMain,
    children: [
      {
        path: "/geometry/BoxGeometry",
        meta: {
          sub: "立方缓冲几何体",
          key: "BoxGeometry",
        },
        component: () => import("@/views/Geometry/BoxGeometry/index.vue"),
        children: [
          {
            path: "/geometry/BoxGeometry/NormalBoxGeometry",
            meta: {
              subtitle: "常规立方几何体",
              parent: "BoxGeometry",
            },
            component: () =>
              import("@/views/Geometry/BoxGeometry/NormalBoxGeometry.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/camera",
    name: "camera",
    meta: {
      title: "相机",
    },
    component: LayoutMain,
    children: [
      {
        path: "/camera/OrthographicCamera",
        name: "OrthographicCamera",
        component: () => import("@/views/Camera/OrthographicCamera.vue"),
      },
    ],
  },
  {
    path: "/demo",
    name: "demo",
    meta: {
      title: "案例",
    },
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

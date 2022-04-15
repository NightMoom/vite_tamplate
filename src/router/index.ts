/*
 * @Author: zsmya
 * @Date: 2022-04-15 16:43:34
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-15 18:05:53
 * @FilePath: /vite_ts/src/router/index.ts
 * @Description: vue-router
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import type { RouteRecordRaw } from 'vue-router'
import { createWebHistory, createRouter } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/views/Home/Home.vue'),
  },
]

const router = createRouter({
  history: createWebHistory('/vite/'),
  routes,
})

export default router

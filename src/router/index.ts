/*
 * @Author: zsmya
 * @Date: 2022-04-15 16:43:34
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-18 17:18:07
 * @FilePath: /vite_ts/src/router/index.ts
 * @Description: vue-router
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import type { RouteRecordRaw } from 'vue-router'
import { createWebHistory, createRouter } from 'vue-router'
import SubRouter from '@/Layout/SubRouter.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/views/Home/HomeIndex.vue'),
  },
  {
    path: '/OrbitControls',
    component: SubRouter,
    name: 'OrbitControls',
    children: [
      {
        path: '',
        component: () => import('@/views/Controls/OrbitControls.vue'),
      },
    ],
  },
  {
    path: '/Scene',
    component: SubRouter,
    name: 'Scene',
    children: [
      {
        path: '',
        component: () => import('@/views/Scene/SceneIndex.vue'),
      },
    ],
  },
  {
    path: '/Camera',
    component: SubRouter,
    name: 'Camera',
    children: [
      {
        path: '',
        component: () => import('@/views/Camera/CameraIndex.vue'),
      },
    ],
  },
  {
    path: '/PerspectiveCamera',
    component: SubRouter,
    name: 'PerspectiveCamera',
    children: [
      {
        path: '',
        component: () => import('@/views/Camera/PerspectiveCamera.vue'),
      },
    ],
  },
  {
    path: '/OrthographicCamera',
    component: SubRouter,
    name: 'OrthographicCamera',
    children: [
      {
        path: '',
        component: () => import('@/views/Camera/OrthographicCamera.vue'),
      },
    ],
  },
  {
    path: '/CubeCamera',
    component: SubRouter,
    children: [
      {
        path: '',
        component: () => import('@/views/Camera/CubeCamera.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory('/vite/'),
  routes,
})

export default router

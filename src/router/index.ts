/*
 * @Author: zsmya
 * @Date: 2022-04-15 16:43:34
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-19 17:02:21
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
    name: 'CubeCamera',
    children: [
      {
        path: '',
        component: () => import('@/views/Camera/CubeCamera.vue'),
      },
    ],
  },
  {
    path: '/LineBasicMaterial',
    component: SubRouter,
    name: 'LineBasicMaterial',
    children: [
      {
        path: '',
        component: () => import('@/views/Material/LineBasicMaterial.vue'),
      },
    ],
  },
  {
    path: '/LineDashedMaterial',
    component: SubRouter,
    name: 'LineDashedMaterial',
    children: [
      {
        path: '',
        component: () => import('@/views/Material/LineDashedMaterial.vue'),
      },
    ],
  },
  {
    path: '/ObjLoader',
    component: SubRouter,
    name: 'ObjLoader',
    children: [
      {
        path: '',
        component: () => import('@/views/Loader/ObjLoader.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory('/vite/'),
  routes,
})

export default router

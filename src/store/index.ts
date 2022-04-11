/*
 * @Author: zsmya
 * @Date: 2022-04-11 16:52:59
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-11 17:00:53
 * @FilePath: /vite_ts/src/store/index.ts
 * @Description: vuexs
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {
  state: () => ({
    name: '',
  }),

  actions: {},

  getters: {
    name: (state) => state.name,
  },
})

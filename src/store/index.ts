/*
 * @Author: zsmya
 * @Date: 2022-04-26 15:56:24
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-28 18:09:05
 * @FilePath: /three-admin/src/store/index.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", {
  // other options...
  state: () => {
    return {
      routerKey: "",
    };
  },
  getters: {
    getRouterKey: (stata) => stata.routerKey,
  },
});

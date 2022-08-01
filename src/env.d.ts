/*
 * @Author: zsmya
 * @Date: 2022-08-01 09:33:16
 * @LastEditors: zsmya
 * @LastEditTime: 2022-08-01 15:32:29
 * @FilePath: /vite_vue3_ts/src/env.d.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface Window {
  CESIUM_BASE_URL: string
}

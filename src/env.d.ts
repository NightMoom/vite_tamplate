/*
 * @Author: zsmya
 * @Date: 2022-08-01 09:33:16
 * @LastEditors: zsmya
 * @LastEditTime: 2022-08-01 18:15:47
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

interface ImportMeta {
  VITE_APP_API_URL: string
}

// declare let throttle: (fn: Function, delay?: number) => void
// declare let setCookie: (key: string, value: string, opt?: Cookies.CookieAttributes) => void
// declare let getCookies: (key: string) => string | null
// declare let setStorage: (key: string, value: string, type?: string) => void
// declare let getStorage: (key: string, type?: string) => string | null

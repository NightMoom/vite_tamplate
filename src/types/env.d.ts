/*
 * @Author: zsmya
 * @Date: 2022-04-11 11:16:51
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-15 13:46:16
 * @FilePath: /vite_ts/src/types/env.d.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
/// <reference types="vite/client" />

// // 类型声明
// type ScssModuleClasses = {
//   readonly [key: string]: string
// }
// declare module '*.scss' {
//   const classes: ScssModuleClasses
//   export default classes
// }
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line prettier/prettier
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_APP_BASE_URL: string
  readonly VITE_APP_ENV: string
  readonly VITE_APP_PORT: number | string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare type Recordable<T = any> = Record<string, T>

declare type ReadonlyRecordable<T = any> = {
  readonly [key: string]: T
}

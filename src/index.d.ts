/*
 * @Author: zsmya
 * @Date: 2022-04-11 17:23:50
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-11 17:28:45
 * @FilePath: /vite_ts/src/types/index.d.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */

import type { VNodeChild, PropType as VuePropType } from 'vue'

// vue
declare type PropType<T> = VuePropType<T>
declare type VueNode = VNodeChild | JSX.Element

declare type Recordable<T = any> = Record<string, T>

declare type ReadonlyRecordable<T = any> = {
  readonly [key: string]: T
}

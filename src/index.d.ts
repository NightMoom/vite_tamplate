/*
 * @Author: zsmya
 * @Date: 2022-04-11 17:23:50
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-15 17:58:17
 * @FilePath: /vite_ts/src/index.d.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */

import type { VNodeChild, PropType as VuePropType } from 'vue'

// vue
declare type PropType<T> = VuePropType<T>
declare type VueNode = VNodeChild | JSX.Element

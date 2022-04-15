/*
 * @Author: zsmya
 * @Date: 2022-04-15 17:24:46
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-15 17:42:33
 * @FilePath: /vite_ts/src/icons/index.ts
 * @Description: svgIcon
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import type { App } from 'vue'
// const svg = import.meta.globEager('./svg')
import SvgIcon from '@/components/SvgIcon/index.vue'

export const installSvgComponent = (app: App): void => {
  app.component('SvgIcon', SvgIcon)
}

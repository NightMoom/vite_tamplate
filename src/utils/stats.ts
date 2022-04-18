/*
 * @Author: zsmya
 * @Date: 2022-04-18 09:51:07
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-18 16:27:59
 * @FilePath: /vite_ts/src/utils/stats.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import Stats from 'stats.js'

export class StatsModule {
  el: HTMLElement
  stats: Stats
  type: number
  constructor(el: HTMLElement, type: number) {
    this.type = type
    this.el = el || document.body
    this.stats = new Stats()
    this.stats.showPanel(type)
    this.el.appendChild(this.stats.dom)
  }
  /**
   * @description 隐藏
   */
  hiddenStats() {
    this.el.removeChild(this.stats.dom)
  }

  update() {
    this.stats.update()
  }
}

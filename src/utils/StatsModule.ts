/*
 * @Author: zsmya
 * @Date: 2022-06-13 15:54:08
 * @LastEditors: zsmya
 * @LastEditTime: 2022-06-13 15:54:09
 * @FilePath: /effect/src/utils/StatsModule.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */

import Stats from "stats.js"

export default class StateModule {
  stats: Stats
  el: HTMLElement
  constructor(type?: number, el?: HTMLElement | null) {
    this.stats = new Stats()
    // 0: fps, 1: ms, 2: mb,
    const _type = type ?? 0
    const _el = el ?? document.body

    this.stats.showPanel(_type)
    _el.appendChild(this.stats.dom)

    this.el = _el
  }

  remove() {
    this.el.removeChild(this.stats.dom)
  }

  update() {
    this.stats.update()
  }
}

/*
 * @Author: zsmya
 * @Date: 2022-04-26 16:13:04
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-26 16:20:54
 * @FilePath: /three-admin/src/utils/stats.ts
 * @Description: 状态查看
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */

//状态查看
import Stats from "stats.js";

export class StatsModule {
  el: HTMLElement;
  type: number;
  public stats: Stats = new Stats();
  constructor() {
    this.type = 0;
    this.el = document.body;
  }
  create(el: HTMLElement, type: number): void {
    this.type = type;
    this.el = el || document.body;
    this.stats = new Stats();
    this.stats.showPanel(type);
    this.el.appendChild(this.stats.dom);
  }
  /**
   * @description 隐藏
   */
  hiddenStats(): void {
    this.el.removeChild(this.stats.dom);
  }

  update(): void {
    this.stats.update();
  }
}

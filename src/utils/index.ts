/*
 * @Author: zsmya
 * @Date: 2022-08-01 17:53:44
 * @LastEditors: zsmya
 * @LastEditTime: 2022-08-01 18:14:17
 * @FilePath: /vite_vue3_ts/src/utils/index.ts
 * @Description: 工具类
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */

// 防抖
export const debounce = (fn: Function, wait = 3000, immediate = false) => {
  let timer: NodeJS.Timeout | null
  return (...args: any) => {
    if (timer) {
      clearInterval(timer)
    }
    if (immediate) {
      if (!timer) {
        fn.apply(this, args)
      }
      timer = setTimeout(function () {
        //n 秒内 多次触发事件,重新计算.timeer
        timer = null //n 秒内没有触发事件 timeer 设置为null，保证了n 秒后能重新触发事件 flag = true = !timmer
      }, wait)
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, wait)
    }
  }
}

// 节流
export const throttle = (fn: Function, wait = 3000, immediate = false) => {
  let timeout: NodeJS.Timeout | null
  let previous = 0
  return (...args: any) => {
    if (immediate) {
      const now = Date.now()
      if (now - previous > wait) {
        fn.apply(this, ...args)
        previous = now
      }
    } else if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        fn.apply(this, ...args)
      }, wait)
    }
  }
}

/*
 * @Author: zsmya
 * @Date: 2022-04-11 13:44:20
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-11 14:07:05
 * @FilePath: /vite_ts/src/utils/index.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */

/**
 * @description 获取当前环境(env)
 */
export const getRunTimeEnv = (): string => {
  return import.meta.env.MODE
}

/**
 * @description 防抖
 * @param {function} fn 需要防抖的函数
 * @param {number | string} delay 时间间隔
 */
export const debounce = (fn: Function, delay: number): Function => {
  let timeout: any
  return () => {
    clearTimeout(timeout)
    timeout = setTimeout((...args: []) => {
      fn.apply(this, args)
    }, delay)
  }
}

/**
 * @description 节流
 * @param {function} fn 需要防抖的函数
 * @param {number | string} delay 时间间隔
 */
export const throttle = (fn: Function, delay: number): Function => {
  let timeout: any
  return (...args: []) => {
    if (timeout) {
      return ''
    }
    timeout = setTimeout(() => {
      fn.apply(this, args)
      timeout = null
    }, delay)
  }
}

/*
 * @Author: zsmya
 * @Date: 2022-08-01 10:31:55
 * @LastEditors: zsmya
 * @LastEditTime: 2022-08-01 14:16:01
 * @FilePath: /vite_vue3_ts/src/utils/session.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import Cookies from "js-cookie"
import { projectConfig } from "../project.config"
const prefix = projectConfig.projectName

export const setCookies = (key: string, value: string, opt?: Cookies.CookieAttributes) => {
  Cookies.set(`${prefix}${key}`, value, opt)
}

export const getCookies = (key: string) => {
  return Cookies.get(`${prefix}${key}`)
}

export const setStorage = (key: string, value: string, type?: string) => {
  if (type === "session") {
    sessionStorage.setItem(`${prefix}${key}`, value)
  } else if (type === "local") {
    localStorage.setItem(`${prefix}${key}`, value)
  } else {
    throw Error(`type is session or local. not ${type}`)
  }
}

export const getStorage = (key: string, type?: string) => {
  if (type === "session") {
    return sessionStorage.getItem(`${prefix}${key}`)
  } else if (type === "local") {
    return localStorage.getItem(`${prefix}${key}`)
  }
  console.warn(`type is session or local. not ${type}`)
  return null
}

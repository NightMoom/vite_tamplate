/*
 * @Author: zsmya
 * @Date: 2022-08-01 10:28:34
 * @LastEditors: zsmya
 * @LastEditTime: 2022-08-01 17:53:33
 * @FilePath: /vite_vue3_ts/src/utils/request.ts
 * @Description: axios 封装
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import { loadEnv } from "vite"
import axios, { AxiosRequestConfig } from "axios"
import { getCookies } from "./session"
const env = import.meta.env.MODE
const url = loadEnv(env, process.cwd(), "VITE_APP")

console.log(url)
const service = axios.create({
  baseURL: "/",
  // 请求超时
  timeout: 3000,
  // 是否携带凭证（cookies）
  withCredentials: false,
})

service.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    const token = getCookies("token")
    if (token) {
      // @ts-ignore
      config.headers.token = token
    }
    return config
  },

  (error) => {
    return error
  }
)

service.interceptors.response.use((resp) => {
  if (resp.data.code === 200) {
    return resp.data
  }
  throw Error("Error")
})

export default service

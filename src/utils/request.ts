/*
 * @Author: zsmya
 * @Date: 2022-04-11 13:35:51
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-11 14:28:05
 * @FilePath: /vite_ts/src/utils/request.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import axios, { AxiosRequestConfig } from 'axios'
import nProgress from 'nprogress'

const baseURL = import.meta.env.VITE_APP_BASE_URL
const request = axios.create({
  baseURL: baseURL,
  timeout: 10000,
})

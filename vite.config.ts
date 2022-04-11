/*
 * @Author: zsmya
 * @Date: 2022-04-11 11:16:51
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-11 17:13:55
 * @FilePath: /vite_ts/vite.config.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import type { UserConfig, ConfigEnv } from 'vite'
// 代理
import { proxy } from './build/proxy'

import { loadEnv } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as path from 'path'
import viteCompression from 'vite-plugin-compression'

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  console.log('env', env)
  const { VITE_APP_BASE_URL, NODE_ENV } = env
  console.log('VITE_APP_BASE_URL', VITE_APP_BASE_URL)
  return {
    base: VITE_APP_BASE_URL,
    // esbuild 配置
    esbuild: {},
    plugins: [
      vue(),
      // jsx 支持
      vueJsx(),
      // 打包压缩gz
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        // scss 全局环境变量
        scss: {
          additionalData: '',
        },
      },
    },
  }
}
// https://vitejs.dev/config/
// export default defineConfig({
//   base: import.meta.env.VITE_APP_BASE_URL,
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//     },
//   },
// })

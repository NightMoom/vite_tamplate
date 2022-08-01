/*
 * @Author: zsmya
 * @Date: 2022-08-01 09:33:16
 * @LastEditors: zsmya
 * @LastEditTime: 2022-08-01 16:57:41
 * @FilePath: /vite_vue3_ts/vite.config.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import viteCompression from "vite-plugin-compression"
import vueJsx from "@vitejs/plugin-vue-jsx"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import * as path from "path"
console.log(process.env)
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const { VITE_APP_BASE_URL } = loadEnv(mode, process.cwd(), "VITE_APP")
  return {
    base: VITE_APP_BASE_URL,
    plugins: [
      vue(),
      vueJsx(),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: "gzip",
        ext: ".gz",
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    server: {
      open: true,
      port: 3001,
      proxy: {},
    },
  }
})

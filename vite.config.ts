/*
 * @Author: zsmya
 * @Date: 2022-06-13 14:02:42
 * @LastEditors: zsmya
 * @LastEditTime: 2022-06-14 17:39:41
 * @FilePath: /effect/vite.config.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import * as path from "path"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import viteCompression from "vite-plugin-compression"
import vueJsx from "@vitejs/plugin-vue-jsx"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/three-effect",
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // gzip打包
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz",
    }),
    // jsx支持
    vueJsx(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})

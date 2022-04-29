/*
 * @Author: zsmya
 * @Date: 2022-04-26 15:56:24
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-29 14:53:53
 * @FilePath: /three-admin/babel.config.js
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: "css" },
    ],
  ],
};

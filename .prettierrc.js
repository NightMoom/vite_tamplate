/*
 * @Author: zsmya
 * @Date: 2022-06-13 14:02:41
 * @LastEditors: zsmya
 * @LastEditTime: 2022-08-01 09:36:48
 * @FilePath: /effect/.prettierrc.js
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
module.exports = {
  tabWidth: 2,
  jsxSingleQuote: false,
  jsxBracketSameLine: true,
  printWidth: 100,
  singleQuote: false,
  semi: false,
  overrides: [
    {
      files: "*.json",
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: "always",
}

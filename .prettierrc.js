/*
 * @Author: zsmya
 * @Date: 2022-04-11 11:20:26
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-11 11:22:55
 * @FilePath: /vite_ts/.prettierrc.js
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
module.exports = {
  tabWidth: 2,
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  printWidth: 100,
  singleQuote: true,
  semi: false,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: 'always',
}

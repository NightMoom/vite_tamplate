/*
 * @Author: zsmya
 * @Date: 2022-04-11 17:11:28
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-11 17:30:15
 * @FilePath: /vite_ts/build/index.ts
 * @Description: vite-config.js 配置方法
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */

export function wrapperEnv(envConf: Recordable): ImportMetaEnv {
  const ret: any = {}

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n')
    realName = realName === 'true' ? true : realName === 'false' ? false : realName

    if (envName === 'VITE_PORT') {
      realName = Number(realName)
    }
    if (envName === 'VITE_PROXY') {
      try {
        realName = JSON.parse(realName)
      } catch (error) {}
    }
    ret[envName] = realName
    process.env[envName] = realName
  }
  return ret
}

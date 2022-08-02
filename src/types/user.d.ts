/*
 * @Author: zsmya
 * @Date: 2022-08-01 10:18:49
 * @LastEditors: zsmya
 * @LastEditTime: 2022-08-02 10:57:00
 * @FilePath: /vite_vue3_ts/src/types/user.d.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */

interface UserInfo {
  userName: string
  userPwd: string
  userValid: string
}

interface gaspConfig {
  value: number
  duration: number
  repeat: number
  yoyo: boolean
  ease: string
}

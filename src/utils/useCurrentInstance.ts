/*
 * @Author: zsmya
 * @Date: 2022-06-13 17:15:38
 * @LastEditors: zsmya
 * @LastEditTime: 2022-06-13 17:17:58
 * @FilePath: /effect/src/utils/useCurrentInstance.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import { ComponentInternalInstance, getCurrentInstance } from "vue"

export const useCurrentInstannce = (): ComponentInternalInstance => {
  const instance = getCurrentInstance() as ComponentInternalInstance
  return instance
}

export const useGlobalProperties = () => {
  const { appContext } = useCurrentInstannce()
  return appContext.config.globalProperties
}

/*
 * @Author: zsmya
 * @Date: 2022-08-02 15:13:05
 * @LastEditors: zsmya
 * @LastEditTime: 2022-08-02 15:28:32
 * @FilePath: /effect/src/three/helper/axesHelper.ts
 * @Description: 坐标轴辅助器
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import { AxesHelper } from "three"

/**
 * @description 创建坐标轴辅助器
 * @param {Number} len 长度
 */
const createAxesHelper = (len = 10) => {
  return new AxesHelper(len)
}

export default createAxesHelper

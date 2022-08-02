/*
 * @Author: zsmya
 * @Date: 2022-08-02 09:22:12
 * @LastEditors: zsmya
 * @LastEditTime: 2022-08-02 16:22:49
 * @FilePath: /vite_vue3_ts/src/three/common/light.ts
 * @Description: 灯光
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */

// TODO 对于光源产生阴影这种情况下，是需要单独写一个方法处理,还是说聚合一起

import { ColorRepresentation, AmbientLight, DirectionalLight } from "three"

/**
 * @description 创建环境光
 * @param {ColorRepresentation} color 光源颜色
 * @param {Number} intensity 光照强度
 * @description 平行光只是均匀的照亮场景中的物体，并不会产生阴影
 */
export const createAmbLight = (color?: ColorRepresentation, intensity?: number) => {
  return new AmbientLight(color, intensity)
}

/**
 * @description 平行光
 * @param {ColorRepresentation} color 光源颜色
 * @param {Number} intensity 光照强度
 */
export const createDirLight = (color?: ColorRepresentation, intensity?: number) => {
  return new DirectionalLight(color, intensity)
}

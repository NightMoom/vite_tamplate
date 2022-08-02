/*
 * @Author: zsmya
 * @Date: 2022-08-02 15:57:23
 * @LastEditors: zsmya
 * @LastEditTime: 2022-08-02 15:58:32
 * @FilePath: /effect/src/three/common/index.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */

// TODO 统一引入并导出

import { createAmbLight, createDirLight } from "./light"
import { initCamera, initOrbControl, initRenderer, initScene } from "./initialize"
import ResourceTracker from "./ResourceTracker"

export {
  createAmbLight,
  createDirLight,
  initCamera,
  initOrbControl,
  initRenderer,
  initScene,
  ResourceTracker,
}

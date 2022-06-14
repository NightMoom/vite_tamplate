/*
 * @Author: zsmya
 * @Date: 2022-05-18 13:33:57
 * @LastEditors: zsmya
 * @LastEditTime: 2022-05-18 13:35:09
 * @FilePath: /vite-build-ts/src/three/camera.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */

import { PerspectiveCamera } from "three"

const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000)

export default camera

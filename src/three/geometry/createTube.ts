/*
 * @Author: zsmya
 * @Date: 2022-08-02 09:22:00
 * @LastEditors: zsmya
 * @LastEditTime: 2022-08-02 16:23:33
 * @FilePath: /vite_vue3_ts/src/three/geometry/createTube.ts
 * @Description: 创建管道几何体
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */

import { BufferGeometry, CatmullRomCurve3, TubeGeometry, Vector3 } from "three"

/**
 * @description 根据几何体的坐标生成管道
 * @param {BufferGeometry} geometry 几何体
 * @param {Number} tubular 管道的分段数 分段数越多，管道越圆滑(曲率)  100
 * @param {Number} radius 管道半径 默认 0.5
 * @param {number} radial 横截面分段数 分段数越多，管道越圆滑(圆) 默认 12
 * @param {Boolean} closed 是否闭合 默认不闭合
 */
const createTubeGeometry = (
  geometry: BufferGeometry,
  tubular?: number,
  radius?: number,
  radial?: number,
  closed?: boolean
) => {
  const params = {
    tubular: tubular ?? 100,
    radius: radius ?? 0.5,
    radial: radial ?? 12,
    closed: closed ?? false,
  }
  // 获取几何体顶点数组
  const position = Array.from(geometry.getAttribute("position").array) as Array<number>
  const points = []
  const len = position.length
  // 根据顶点数组重新变量生成顶点 Array<number> --> Array<Vector3>
  for (let i = 0; i < len; i += 3) {
    points.push(new Vector3(position[i], position[i + 1], position[i + 2]))
  }
  console.log(points)
  // 生成曲线
  const catCurve = new CatmullRomCurve3(points, params.closed)
  const tubeGeometry = new TubeGeometry(
    catCurve,
    params.tubular,
    params.radius,
    params.radial,
    params.closed
  )
  return tubeGeometry
}

export { createTubeGeometry }

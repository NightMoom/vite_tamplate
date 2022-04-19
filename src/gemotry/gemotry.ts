/*
 * @Author: zsmya
 * @Date: 2022-04-19 11:14:00
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-19 16:33:15
 * @FilePath: /vite_ts/src/gemotry/gemotry.ts
 * @Description: 创建gemotry工具类
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */

import { CatmullRomCurve3, BufferGeometry, Float32BufferAttribute, Vector3 } from 'three'
import { boxBuffer } from './buffer'

class gemotryUtil {
  /**
   * @description 创建矩形
   * @param {Number} width 宽
   * @param {Number} height 高
   * @param {Number} depth 深度
   * */
  createBoxBuffer(width = 1, height = 1, depth = 1) {
    const geometry: BufferGeometry = new BufferGeometry()
    const position: Array<number> = []
    boxBuffer.forEach((i) => {
      position.push(i[0] * width, i[1] * height, i[2] * depth)
    })
    geometry.setAttribute('position', new Float32BufferAttribute(position, 3))
    return geometry
  }
  hilbert3D(
    center: Vector3 = new Vector3(0, 0, 0),
    size = 10,
    iterations = 1,
    v0 = 0,
    v1 = 1,
    v2 = 2,
    v3 = 3,
    v4 = 4,
    v5 = 5,
    v6 = 6,
    v7 = 7
  ) {
    const half = size / 2

    const vecList: Array<Vector3> = [
      new Vector3(center.x - half, center.y + half, center.z - half),
      new Vector3(center.x - half, center.y + half, center.z + half),
      new Vector3(center.x - half, center.y - half, center.z + half),
      new Vector3(center.x - half, center.y - half, center.z - half),
      new Vector3(center.x + half, center.y - half, center.z - half),
      new Vector3(center.x + half, center.y - half, center.z + half),
      new Vector3(center.x + half, center.y + half, center.z + half),
      new Vector3(center.x + half, center.y + half, center.z - half),
    ]
    const vec: any = [
      vecList[v0],
      vecList[v1],
      vecList[v2],
      vecList[v3],
      vecList[v4],
      vecList[v5],
      vecList[v6],
      vecList[v7],
    ]
    if (--iterations >= 0) {
      const tmp: any = []

      Array.prototype.push.apply(
        tmp,
        //@ts-ignore
        this.hilbert3D(vec[0], half, iterations, v0, v3, v4, v7, v6, v5, v2, v1)
      )
      Array.prototype.push.apply(
        tmp,
        //@ts-ignore
        this.hilbert3D(vec[1], half, iterations, v0, v7, v6, v1, v2, v5, v4, v3)
      )
      Array.prototype.push.apply(
        tmp,
        //@ts-ignore
        this.hilbert3D(vec[2], half, iterations, v0, v7, v6, v1, v2, v5, v4, v3)
      )
      Array.prototype.push.apply(
        tmp,
        //@ts-ignore
        this.hilbert3D(vec[3], half, iterations, v2, v3, v0, v1, v6, v7, v4, v5)
      )
      Array.prototype.push.apply(
        tmp,
        //@ts-ignore
        this.hilbert3D(vec[4], half, iterations, v2, v3, v0, v1, v6, v7, v4, v5)
      )
      Array.prototype.push.apply(
        tmp,
        //@ts-ignore
        this.hilbert3D(vec[5], half, iterations, v4, v3, v2, v5, v6, v1, v0, v7)
      )
      Array.prototype.push.apply(
        tmp,
        //@ts-ignore
        this.hilbert3D(vec[6], half, iterations, v4, v3, v2, v5, v6, v1, v0, v7)
      )
      Array.prototype.push.apply(
        tmp,
        //@ts-ignore
        this.hilbert3D(vec[7], half, iterations, v6, v5, v2, v1, v0, v3, v4, v7)
      )

      // Return recursive call
      return tmp
    }

    // Return complete Hilbert Curve.
    return vec
  }
}

export default gemotryUtil

/*
 * @Author: zsmya
 * @Date: 2022-06-14 17:19:20
 * @LastEditors: zsmya
 * @LastEditTime: 2022-06-14 17:19:20
 * @FilePath: /effect/src/views/Model/three/MeshLine.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import { EdgesGeometry, LineBasicMaterial, LineSegments } from "three"

export default class MeshLine {
  material: LineBasicMaterial
  mesh: LineSegments<EdgesGeometry<any>, LineBasicMaterial>
  geometry: EdgesGeometry<any>
  constructor(geometry: any) {
    const edges = new EdgesGeometry(geometry)
    this.material = new LineBasicMaterial({
      color: 0xffffff,
    })
    const line = new LineSegments(edges, this.material)
    this.geometry = edges
    this.mesh = line
  }
}

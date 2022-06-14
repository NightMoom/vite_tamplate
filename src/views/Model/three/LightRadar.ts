/*
 * @Author: zsmya
 * @Date: 2022-05-18 10:00:31
 * @LastEditors: zsmya
 * @LastEditTime: 2022-05-18 14:22:19
 * @Description: 雷达扫描
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */

import { Color, DoubleSide, Mesh, PlaneBufferGeometry, ShaderMaterial } from "three"
import gsap from "gsap"
import vertexShader from "./glsl/radar/vertexShader.glsl?raw"
import fragmentShader from "./glsl/radar/fragmentShader.glsl?raw"

export default class LightRadar {
  geometry: PlaneBufferGeometry
  material: ShaderMaterial
  mesh: Mesh<PlaneBufferGeometry, ShaderMaterial>
  constructor() {
    this.geometry = new PlaneBufferGeometry(10, 10)
    this.material = new ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
      side: DoubleSide,
      uniforms: {
        uColor: {
          value: new Color(0xff0000),
        },
        uTime: {
          value: 0,
        },
      },
    })

    this.mesh = new Mesh(this.geometry, this.material)
    this.mesh.position.set(0, 3, 0)
    this.mesh.rotation.x = -Math.PI / 2

    gsap.to(this.material.uniforms.uTime, {
      value: 1,
      duration: 1,
      repeat: -1,
      ease: "none",
    })
  }
}

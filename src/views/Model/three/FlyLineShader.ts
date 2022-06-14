/*
 * @Author: zsmya
 * @Date: 2022-06-14 17:19:12
 * @LastEditors: zsmya
 * @LastEditTime: 2022-06-14 17:25:17
 * @FilePath: /effect/src/views/Model/three/FlyLineShader.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  CatmullRomCurve3,
  Color,
  Points,
  ShaderMaterial,
  Vector3,
} from "three"
import fragmentShader from "./glsl/flyLine/fragmentShader.glsl?raw"
import vertexShader from "./glsl/flyLine/vertexShader.glsl?raw"
import gsap from "gsap"
export default class FlyLineShader {
  lineCurve: CatmullRomCurve3
  geometry: BufferGeometry
  shaderMaterial: ShaderMaterial
  mesh: Points<BufferGeometry, ShaderMaterial>
  constructor(color?: "#1975ff") {
    const linePoints = [new Vector3(0, 0, 0), new Vector3(-4, 10, 0), new Vector3(-20, 0, 0)]
    // 创建曲线
    this.lineCurve = new CatmullRomCurve3(linePoints)
    // 获取点
    const points = this.lineCurve.getPoints(1000)
    // 创建几何顶点
    this.geometry = new BufferGeometry().setFromPoints(points)
    // 给每一个点设置属性
    const flyLineSizeArray = new Float32Array(points.length)
    for (let i = 0; i < flyLineSizeArray.length; i++) {
      flyLineSizeArray[i] = i
    }
    // 设置几何体顶点属性
    this.geometry.setAttribute("flySize", new BufferAttribute(flyLineSizeArray, 1))
    // 设置着色器材质
    this.shaderMaterial = new ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true, // 透明
      depthWrite: false, // 深度检测
      blending: AdditiveBlending,
      uniforms: {
        uTime: {
          value: 0,
        },
        uColor: {
          value: new Color(color),
        },
        uLength: {
          value: points.length,
        },
      },
    })

    this.mesh = new Points(this.geometry, this.shaderMaterial)

    // 时间动画
    gsap.to(this.shaderMaterial.uniforms.uTime, {
      value: 1000,
      duration: 1,
      repeat: -1,
      ease: "none",
    })
  }
}

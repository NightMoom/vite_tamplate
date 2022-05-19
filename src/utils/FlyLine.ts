/*
 * @Author: zsmya
 * @Date: 2022-05-19 15:02:25
 * @LastEditors: zsmya
 * @LastEditTime: 2022-05-19 16:02:22
 * @FilePath: /three-effect/src/utils/FlyLine.ts
 * @Description: 飞线
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */

import {
  CatmullRomCurve3,
  Vector3,
  Color,
  BufferGeometry,
  BufferAttribute,
  ShaderMaterial,
  AdditiveBlending,
  Points,
} from "three"
import gsap from "gsap"
import { fa } from "element-plus/lib/locale"

const vertexShader =
  //glsl
  `
  attribute float flySize;
  varying float vSize;
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uLength;
  void main () {
    vec4 viewPostion = viewMatrix * modelMatrix * vec4(position, 1);
    gl_Position = projectionMatrix * viewPostion;
    vSize = (flySize - uTime);
    if (vSize < 0.0) {
      vSize = vSize + uLength;
    }
    vSize =  (vSize - 500.0) * 0.1;
    // vSize = vSize * 0.1;
    gl_PointSize = - vSize / viewPostion.z;
  }
  `

const fragmentShader =
  //glsl
  `
  varying float vSize ;
  uniform vec3 uColor;

  void main() {
    float distanceToCenter = distance(gl_PointCoord, vec2(0.5, 0.5));
    float strength = 1.0 - (distanceToCenter * 2.0);

    if (vSize <= 0.0) {
      gl_FragColor = vec4(uColor,0.0);
    } else {
      gl_FragColor = vec4(uColor,strength);
    }
  }
`

interface gaspConfig {
  value: number
  duration: number
  repeat: number
  yoyo: boolean
  ease: string
}

export default class FlyLine {
  lineCurve: CatmullRomCurve3
  geometry: BufferGeometry
  shaderMaterial: ShaderMaterial
  mesh: Points<BufferGeometry, ShaderMaterial>

  private defaultGasp: gaspConfig = {
    value: 1000,
    duration: 1,
    repeat: -1,
    ease: "none",
    yoyo: false,
  }
  constructor(start: Array<Vector3>, color: string | number, count: number, animte?: gaspConfig) {
    this.lineCurve = new CatmullRomCurve3(start)
    // 获取点
    const points = this.lineCurve.getPoints(count)
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

    // 创建动画

    const { value, duration, repeat, yoyo, ease } = animte ?? this.defaultGasp

    gsap.to(this.shaderMaterial.uniforms.uTime, {
      value,
      duration,
      repeat,
      ease,
      yoyo,
    })
  }

  remove() {
    this.geometry.dispose()
    this.shaderMaterial.dispose()
    this.mesh.removeFromParent()
  }
}

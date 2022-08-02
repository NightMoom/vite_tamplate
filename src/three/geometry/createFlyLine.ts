/*
 * @Author: zsmya
 * @Date: 2022-08-02 10:05:37
 * @LastEditors: zsmya
 * @LastEditTime: 2022-08-02 16:23:35
 * @FilePath: /vite_vue3_ts/src/three/geometry/createFlyLine.ts
 * @Description: 创建飞线
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */

import {
  BufferGeometry,
  CatmullRomCurve3,
  LineBasicMaterial,
  Vector3,
  ColorRepresentation,
  DoubleSide,
  Line,
  Color,
  BufferAttribute,
  ShaderMaterial,
  AdditiveBlending,
  Points,
} from "three"

import gsap from "gsap"

interface gaspConfig {
  value: number
  duration: number
  repeat: number
  yoyo: boolean
  ease: string
}
/**
 * @description 创建着色器飞线
 */
const createShaderFlyLine = (
  start: Array<Vector3>,
  color: string | number,
  count: number,
  animte?: gaspConfig
) => {
  const defaultGasp: gaspConfig = {
    value: 1000,
    duration: 1,
    repeat: -1,
    ease: "none",
    yoyo: false,
  }
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
  const lineCurve = new CatmullRomCurve3(start)
  // 获取点
  const points = lineCurve.getPoints(count)
  // 创建几何顶点
  const geometry = new BufferGeometry().setFromPoints(points)
  // 给每一个点设置属性
  const flyLineSizeArray = new Float32Array(points.length)
  for (let i = 0; i < flyLineSizeArray.length; i++) {
    flyLineSizeArray[i] = i
  }
  // 设置几何体顶点属性
  geometry.setAttribute("flySize", new BufferAttribute(flyLineSizeArray, 1))

  // 设置着色器材质
  const shaderMaterial = new ShaderMaterial({
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
  const mesh = new Points(geometry, shaderMaterial)

  // 创建动画

  const { value, duration, repeat, yoyo, ease } = animte ?? defaultGasp

  gsap.to(shaderMaterial.uniforms.uTime, {
    value,
    duration,
    repeat,
    ease,
    yoyo,
  })

  return mesh
}

/**
 * @description 创建飞线，点到点
 * @param {Array<Vector3>} path 路径坐标
 * @param {Number} len 分段数
 * @param {Number} runLen 移动的点的分段数
 * @param {ColorRepresentation} lineColor 线条颜色
 * @param {Array<ColorRepresentation>} color 移动线的颜色 在移动到中心点的时候会趋向于渐变色
 */
class createPointFlyLine {
  staticLine: Line<BufferGeometry, LineBasicMaterial>
  line: Line<BufferGeometry, LineBasicMaterial>
  constructor(
    path: Array<Vector3>,
    len = 50,
    runLen = 20,
    lineColor: ColorRepresentation = 0xffffff,
    color: Array<ColorRepresentation> = [0x006666, 0xffff00]
  ) {
    const geometry = new BufferGeometry()
    // 飞线不闭合
    const curve = new CatmullRomCurve3(path)
    // 分段数等于 len+1
    const points = curve.getPoints(len)

    geometry.setFromPoints(points)
    const lineMaterial = new LineBasicMaterial({
      color: lineColor,
      side: DoubleSide,
    })
    // 静态线
    this.staticLine = new Line(geometry, lineMaterial)

    const index = runLen
    const num = 10
    const runPoints = points.slice(index, index + num)

    const runGeometry = new BufferGeometry()
    runGeometry.setFromPoints(runPoints)

    // 批量计算所有顶点颜色数据
    const posNum = runPoints.length / 2
    const posColor = []
    for (let i = 0; i < posNum; i++) {
      const color1 = new Color(color[0]) //轨迹线颜色 青色
      const color2 = new Color(color[1]) //黄色
      let $color
      if (i < posNum) {
        $color = color1.lerp(color2, i / posNum)
      } else {
        $color = color2.lerp(color1, (i - posNum) / (runPoints.length - posNum))
      }
      posColor.push($color.r, $color.g, $color.b)
    }

    // 几何体设置颜色
    runGeometry.attributes.color = new BufferAttribute(new Float32Array(posColor), 3)

    const runMaterial = new LineBasicMaterial({
      vertexColors: true,
      linewidth: 3.0,
    })

    this.line = new Line(runGeometry, runMaterial)
  }
}

export { createPointFlyLine, createShaderFlyLine }

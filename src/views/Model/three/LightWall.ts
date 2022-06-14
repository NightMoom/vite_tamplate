/*
 * @Author: zsmya
 * @Date: 2022-05-18 09:01:37
 * @LastEditors: zsmya
 * @LastEditTime: 2022-05-18 11:04:27
 * @Description: 城市光墙效果
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import {
  CylinderBufferGeometry,
  DoubleSide,
  FrontSide,
  Mesh,
  ShaderMaterial,
  Side,
  Color,
} from "three"
// import vertexShader from "./glsl/wall/vertexShader.glsl?raw"
// import fragmentShader from "./glsl/wall/fragmentShader.glsl?raw"
import gsap from "gsap"

interface animteConfig {
  x?: number
  y?: number
  z?: number
  duration?: number
  repeat?: number
  yoyo: boolean
}
interface meshPositon {
  x?: number
  y?: number
  z?: number
}
interface geometryConfig {
  radiusTop?: number
  radiusBottom?: number
  height?: number
  radialSegments?: number
  heightSegments?: number
  openEnded?: boolean
  thetaStart?: number
  thetaLength?: number
  trans?: boolean
  color?: string | number | Color
  opacity?: number
  side?: Side
  animate?: animteConfig
  position?: meshPositon
}

export default class LightWall {
  geometry: CylinderBufferGeometry
  material: ShaderMaterial
  mesh: Mesh<CylinderBufferGeometry, ShaderMaterial>

  constructor(config?: geometryConfig) {
    const _config = config || {}
    // 圆柱的顶部半径，默认值是1。
    const radiusTop = _config.radiusTop || 1
    // 圆柱的底部半径，默认值是1。
    const radiusBottom = _config.radiusBottom || 1
    // 圆柱的高度，默认值是1。
    const height = _config.height || 1
    // 圆柱侧面周围的分段数，默认为8。
    const radialSegments = _config.radialSegments || 8
    // 圆柱侧面沿着其高度的分段数，默认值为1。
    const heightSegments = _config.heightSegments || 1
    // 是否 封顶
    const openEnded = _config.openEnded || false
    // 第一个分段的起始角度，默认为0
    const thetaStart = _config.thetaStart || 0
    // 圆柱底面圆扇区的中心角
    const thetaLength = _config.thetaLength || Math.PI * 2
    // 定义将要渲染哪一面 - 正面，背面或两者 默认 FrontSide
    const side = _config.side || FrontSide
    // 动画
    const animate = _config.animate || { x: 2, z: 2, duration: 1, repeat: -1, yoyo: true }
    // 位置
    const { x = 0, y = 0, z = 0 } = _config.position || { x: 0, y: 0, z: 0 }
    // 颜色
    let color = _config.color || "0xffffff"
    // 颜色转换
    color = color instanceof Color ? color : new Color(color)
    // 透明度
    const trans = _config.trans || true
    let opacity = _config.opacity || 0.5
    opacity = trans ? (opacity = opacity || 0.5) : (opacity = 1)
    this.geometry = new CylinderBufferGeometry(
      radiusTop,
      radiusBottom,
      height,
      radialSegments,
      heightSegments,
      openEnded,
      thetaStart,
      thetaLength
    )
    this.material = new ShaderMaterial({
      vertexShader: `
        varying vec3 vPosition;
        void main() {
          vec4 viewPostion = viewMatrix * modelMatrix * vec4(position, 1);
          gl_Position = projectionMatrix * viewPostion;
          vPosition = position;
        }`,
      fragmentShader: `
        varying vec3 vPosition;
        uniform float uHeight;
        uniform vec3 uColor;
        uniform float uOpacity;
        void main() {
          float gradMix = (vPosition.y + uHeight / 5.0) / uHeight;
          // gl_FragColor = vec4(uColor, uOpacity);
          gl_FragColor = vec4(uColor, (1.0 - gradMix) * uOpacity);
  
        }`,
      transparent: true,
      side: side,
    })
    this.mesh = new Mesh(this.geometry, this.material)
    this.mesh.position.set(x, y, z)
    this.mesh.geometry.computeBoundingBox()

    if (this.mesh.geometry.boundingBox) {
      const { max, min } = this.mesh.geometry.boundingBox
      const uHeight = max.y - min.y

      this.material.uniforms.uHeight = {
        value: uHeight,
      }
      this.material.uniforms.uColor = {
        value: color,
      }
      this.material.uniforms.uOpacity = {
        value: opacity,
      }
    }
    gsap.to(this.mesh.scale, animate)
  }
  // 销毁
  destory() {
    this.geometry.dispose()
  }
}

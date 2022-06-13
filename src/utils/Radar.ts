/*
 * @Author: zsmya
 * @Date: 2022-05-20 11:38:14
 * @LastEditors: zsmya
 * @LastEditTime: 2022-06-06 16:11:32
 * @FilePath: /three-effect/src/utils/Radar.ts
 * @Description: 雷达
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */

import { Color, DoubleSide, Mesh, PlaneBufferGeometry, ShaderMaterial } from "three"
import gsap from "gsap"
interface animate {
  value?: number
  duration?: number
  repeat?: number
  yoyo?: boolean
  ease?: string
}

interface RadarConfig {
  radius?: number

  color?: number | Color
  radarAnimate?: animate
}
const fragmentShader =
  //glsl
  `
  varying vec2 vUv; 
  uniform vec3 uColor;
  uniform float uTime;
  mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),sin(_angle),cos(_angle));
  }
  void main() {

    vec2 newUv = rotate2d(uTime*6.28) * (vUv -0.5);
    newUv += 0.5;
    float alpha = 1.0 - step(0.5, distance(vUv, vec2(0.5)));
    float angle = atan(newUv.x - 0.5, newUv.y - 0.5) ;
    float strength = (angle + 3.14) / 6.28;

    gl_FragColor = vec4(uColor, alpha * strength);
  }
`

const vertexShader =
  //glsl
  `
  varying vec2 vUv;

  void main() {
    vec4 viewPostion = viewMatrix * modelMatrix * vec4(position, 1);
    gl_Position = projectionMatrix * viewPostion;

    vUv = uv;
  }
`
export default class Radar {
  geometry: PlaneBufferGeometry
  material: ShaderMaterial
  mesh: Mesh<PlaneBufferGeometry, ShaderMaterial>
  constructor(config: RadarConfig) {
    const { radius, color, radarAnimate } = config
    const gaspConfig = radarAnimate ?? {
      value: 1,
      duration: 1,
      repeat: -1,
      ease: "none",
      yoyo: false,
    }
    let _color
    if (color instanceof Color) {
      _color = color
    } else {
      _color = new Color(color || 0xff0000)
    }
    this.geometry = new PlaneBufferGeometry(radius ?? 10, radius ?? 10)
    this.material = new ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
      side: DoubleSide,
      uniforms: {
        uColor: {
          value: _color,
        },
        uTime: {
          value: 0,
        },
      },
    })

    this.mesh = new Mesh(this.geometry, this.material)
    this.mesh.position.set(0, 0, 0)
    this.mesh.rotation.x = -Math.PI / 2

    gsap.to(this.material.uniforms.uTime, gaspConfig)
    const params = {
      radius,
      color,
    }
  }
}

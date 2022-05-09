<!--
 * @Author: zsmya
 * @Date: 2022-05-09 14:17:48
 * @LastEditors: zsmya
 * @LastEditTime: 2022-05-09 18:22:40
 * @FilePath: /vite_ts/src/views/Demo/Cloud.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->

<script lang="ts" setup>
import { onMounted } from 'vue'
import CloudVectex from './glsl/cloud/vectex.glsl?raw'
import CloudFragment from './glsl/cloud/fragment.glsl?raw'
import * as dat from 'dat.gui'
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  AxesHelper,
  PlaneGeometry,
  Mesh,
  ShaderMaterial,
  DoubleSide,
  Clock,
  Color,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { StatsModule } from '@/utils/stats'
import { values } from 'lodash'

let renderer: WebGLRenderer
let scene: Scene
let camera: PerspectiveCamera
let orb: OrbitControls
let aexsHelper: AxesHelper
const gui = new dat.GUI()
onMounted(() => {
  const el: HTMLElement = document.getElementById('cloud') ?? document.body
  const width = el.clientWidth
  const height = el.clientHeight
  // 初始化场景
  scene = new Scene()

  scene.position.set(0, 0, 0)
  // 初始化相机
  camera = new PerspectiveCamera(45, width / height, 1, 1000)
  camera.position.set(1, 1, 10)
  camera.lookAt(scene.position)
  // 坐标轴辅助器
  aexsHelper = new AxesHelper(100)
  scene.add(aexsHelper)

  // fps
  const stats = new StatsModule(el, 0)
  const params = {
    uWaresFrequency: 14,
    uScale: 0.034,
    uXzScale: 1,
    uNoiseFrequency: 10,
    uNoiseScale: 1.3,
    uTime: 0,
    uLowColor: '#ff0000',
    uHighColor: '#fff000',
    uXspeed: 1,
    uZspeed: 1,
    uNouseSpeed: 0,
    uOpacity: 1,
  }

  const shaderMaterial = new ShaderMaterial({
    vertexShader: CloudVectex,
    fragmentShader: CloudFragment,
    side: DoubleSide,
    transparent: true,
    uniforms: {
      uWaresFrequency: {
        value: params.uWaresFrequency,
      },
      uScale: {
        value: params.uScale,
      },
      uXzScale: {
        value: params.uXzScale,
      },
      uNoiseFrequency: {
        value: params.uNoiseFrequency,
      },
      uNoiseScale: {
        value: params.uNoiseScale,
      },
      uTime: {
        value: params.uTime,
      },
      uLowColor: {
        value: new Color(params.uLowColor),
      },
      uHighColor: {
        value: new Color(params.uHighColor),
      },
      uXspeed: {
        value: params.uXspeed,
      },
      uZspeed: {
        value: params.uZspeed,
      },
      uNouseSpeed: {
        value: params.uNouseSpeed,
      },
      uOpacity: {
        value: params.uOpacity,
      },
    },
  })
  const panel = new PlaneGeometry(1, 1, 1024, 1024)
  const mesh = new Mesh(panel, shaderMaterial)
  mesh.rotation.x = -Math.PI / 2
  scene.add(mesh)

  gui
    .add(params, 'uWaresFrequency')
    .min(1)
    .max(100)
    .step(0.1)
    .onChange((value) => {
      shaderMaterial.uniforms.uWaresFrequency.value = value
    })
  gui
    .add(params, 'uScale')
    .min(0)
    .max(0.2)
    .step(0.001)
    .onChange((value) => {
      shaderMaterial.uniforms.uScale.value = value
    })
  gui
    .add(params, 'uNoiseFrequency')
    .min(1)
    .max(100)
    .step(0.1)
    .onChange((value) => {
      shaderMaterial.uniforms.uNoiseFrequency.value = value
    })

  gui
    .add(params, 'uNoiseScale')
    .min(0)
    .max(5)
    .step(0.1)
    .onChange((value) => {
      shaderMaterial.uniforms.uNoiseScale.value = value
    })

  gui
    .add(params, 'uXzScale')
    .min(1)
    .max(5)
    .step(0.1)
    .onChange((value) => {
      shaderMaterial.uniforms.uXzScale.value = value
    })

  gui.addColor(params, 'uLowColor').onFinishChange((value) => {
    shaderMaterial.uniforms.uLowColor.value = new Color(value)
  })
  gui.addColor(params, 'uHighColor').onFinishChange((value) => {
    shaderMaterial.uniforms.uHighColor.value = new Color(value)
  })

  gui
    .add(params, 'uXspeed')
    .min(0)
    .max(5)
    .step(0.1)
    .onChange((value) => {
      shaderMaterial.uniforms.uXspeed.value = value
    })
  gui
    .add(params, 'uZspeed')
    .min(0)
    .max(5)
    .step(0.1)
    .onChange((value) => {
      shaderMaterial.uniforms.uZspeed.value = value
    })
  gui
    .add(params, 'uNouseSpeed')
    .min(0)
    .max(5)
    .step(0.1)
    .onChange((value) => {
      shaderMaterial.uniforms.uNouseSpeed.value = value
    })
  gui
    .add(params, 'uOpacity')
    .min(0)
    .max(1)
    .step(0.1)
    .onChange((value) => {
      shaderMaterial.uniforms.uOpacity.value = value
    })

  renderer = new WebGLRenderer()
  renderer.setSize(width, height)
  renderer.setClearColor(0x000000)
  orb = new OrbitControls(camera, renderer.domElement)
  el.appendChild(renderer.domElement)
  const clock = new Clock()
  const animate = () => {
    const time = clock.getElapsedTime()
    shaderMaterial.uniforms.uTime.value = time
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    stats.update()
  }
  animate()
  window.addEventListener('resize', () => {
    camera.aspect = el.clientWidth / el.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(el.clientWidth, el.clientHeight)
  })
})
</script>

<template>
  <div id="cloud" class="cloud"></div>
</template>

<style lang="scss">
.cloud {
  width: 100%;
  height: 100%;
}
</style>

<!--
 * @Author: zsmya
 * @Date: 2022-04-26 11:04:36
 * @LastEditors: zsmya
 * @LastEditTime: 2022-05-05 09:32:50
 * @FilePath: /vite_ts/src/views/Demo/SnowFlake.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<script setup lang="ts">
import snowFlak from '@/assets/images/snow.png'
import { onMounted } from 'vue'
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  TextureLoader,
  Points,
  PointsMaterial,
  BufferGeometry,
  BufferAttribute,
  AdditiveBlending,
  AxesHelper,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { StatsModule } from '@/utils/stats'
let camera: PerspectiveCamera
let renderer: WebGLRenderer
let scene: Scene
onMounted(() => {
  const el: HTMLElement = document.getElementById('snow-flake') ?? document.body
  const width = el.clientWidth
  const height = el.clientHeight

  scene = new Scene()
  scene.position.set(0, 0, 0)

  camera = new PerspectiveCamera(45, width / height, 1, 1000)
  camera.position.set(10, 10, 10)
  camera.lookAt(scene.position)

  const axesHelper = new AxesHelper(10)

  scene.add(axesHelper)
  const textureLoader = new TextureLoader()
  const snow = textureLoader.load(snowFlak)
  console.log('snow', snow)
  const count = 1000
  const bufferGeometry = new BufferGeometry()
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const pointMaterial = new PointsMaterial()
  pointMaterial.size = 1

  pointMaterial.sizeAttenuation = true
  pointMaterial.map = snow
  pointMaterial.alphaMap = snow
  pointMaterial.transparent = true
  pointMaterial.depthWrite = false
  pointMaterial.blending = AdditiveBlending
  for (let i = 0; i < count; i++) {
    positions[i] = (Math.random() - 0.5) * 1000

    colors[i] = Math.random()
  }
  bufferGeometry.setAttribute('position', new BufferAttribute(positions, 3))
  bufferGeometry.setAttribute('color', new BufferAttribute(colors, 3))
  const points = new Points(bufferGeometry, pointMaterial)
  scene.add(points)
  renderer = new WebGLRenderer()
  renderer.setSize(width, height)

  const orb = new OrbitControls(camera, renderer.domElement)
  // 开启阻尼系数
  orb.enableDamping = true
  el.appendChild(renderer.domElement)
  const stats = new StatsModule(el, 0)
  const animate = () => {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    stats.update()
  }

  animate()
})
</script>

<template>
  <div id="snow-flake" class="snow-flake"></div>
</template>

<style lang="scss" scoped>
.snow-flake {
  width: 100%;
  height: 100%;
}
</style>

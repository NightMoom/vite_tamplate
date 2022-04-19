<!--
 * @Author: zsmya
 * @Date: 2022-04-18 15:25:10
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-19 17:46:06
 * @FilePath: /vite_ts/src/views/Loader/ObjLoader.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->

<script setup lang="ts">
import { onMounted } from 'vue'
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  AmbientLight,
  PointLight,
  LineSegments,
  LineDashedMaterial,
} from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import gemotryUtil from '@/gemotry/gemotry'
import { StatsModule } from '@/utils/stats'

let renderer: WebGLRenderer
let camera: PerspectiveCamera
let scene: Scene

onMounted(() => {
  const el: HTMLElement = document.getElementById('obj-loader') || document.body
  const width = el.clientWidth
  const height = el.clientHeight
  // 初始化场景
  scene = new Scene()
  scene.position.set(0, 0, 0)

  const ambientLight = new AmbientLight(0x000000, 1)
  scene.add(ambientLight)

  const pointLight = new PointLight(0xffffff, 0.8)
  // 初始化相机
  camera = new PerspectiveCamera(45, width / height, 1, 1000)
  camera.position.set(100, 100, 100)
  camera.lookAt(scene.position)
  camera.add(pointLight)
  scene.add(camera)

  const loader = new OBJLoader()
  loader.load(
    'module/Factory_Unit_00.obj',
    (obj) => {
      console.log(obj)
      scene.add(obj)
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    () => {
      console.log('An error happened')
    }
  )
  const geometryModule = new gemotryUtil()
  const geometryBox = geometryModule.createBoxBuffer(25, 25, 25)
  const lineSegments = new LineSegments(
    geometryBox,
    new LineDashedMaterial({ color: 0xffaa00, dashSize: 3, gapSize: 1 })
  )
  lineSegments.computeLineDistances()
  const stats = new StatsModule(el, 0)
  scene.add(lineSegments)
  renderer = new WebGLRenderer()
  renderer.setClearColor(0x000000)
  renderer.setSize(width, height)

  el.appendChild(renderer.domElement)

  const animate = () => {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    stats.update()
  }
  new OrbitControls(camera, renderer.domElement)
  animate()
})
</script>

<template>
  <div id="obj-loader" class="obj-loader"></div>
</template>

<style lang="scss" scoped>
.obj-loader {
  width: 100%;
  height: 100%;
}
</style>

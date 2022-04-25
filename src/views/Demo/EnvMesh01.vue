<!--
 * @Author: zsmya
 * @Date: 2022-04-25 15:20:48
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-25 16:20:04
 * @FilePath: /vite_ts/src/views/Demo/EnvMesh01.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<script setup lang="ts">
import { onMounted } from 'vue'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AxesHelper,
  SphereBufferGeometry,
  MeshStandardMaterial,
  Mesh,
  AmbientLight,
  TextureLoader,
  EquirectangularReflectionMapping,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'

let scene: Scene
let camera: PerspectiveCamera
let renderer: WebGLRenderer
let axesHelper: AxesHelper
let ambLight: AmbientLight
let textureLoader: TextureLoader
onMounted(() => {
  const el: HTMLElement = document.getElementById('env-test') || document.body

  const width = el.clientWidth
  const height = el.clientHeight
  // 初始化场景
  scene = new Scene()
  scene.position.set(0, 0, 0)
  // 初始化相机
  camera = new PerspectiveCamera(45, width / height, 1, 100)
  camera.position.set(10, 10, 10)
  camera.lookAt(scene.position)
  // 坐标轴指示器
  axesHelper = new AxesHelper(20)
  scene.add(axesHelper)

  ambLight = new AmbientLight(0xffffff)
  scene.add(ambLight)

  textureLoader = new TextureLoader()
  const env = textureLoader.load('env/env_test_01.jpg')
  env.mapping = EquirectangularReflectionMapping
  scene.background = env
  // 球体geometry
  const sphere = new SphereBufferGeometry(1, 20, 20)
  // 球体材质
  const material = new MeshStandardMaterial({
    color: 0xffffff,
    metalness: 0.1,
    roughness: 0.8,
    map: env,
  })
  const mesh = new Mesh(sphere, material)
  scene.add(mesh)
  // webGL渲染器
  renderer = new WebGLRenderer()
  renderer.setClearColor(0xffffff)
  renderer.setSize(width, height)

  el.appendChild(renderer.domElement)
  const orb = new OrbitControls(camera, renderer.domElement)
  const animate = () => {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }
  animate()
  // window.addEventListener('resize', () => {})
})
</script>

<template>
  <div id="env-test" class="env-test"></div>
</template>

<style lang="scss" scoped>
.env-test {
  width: 100%;
  height: 100%;
}
</style>

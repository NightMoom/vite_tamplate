<!--
 * @Author: zsmya
 * @Date: 2022-06-14 16:04:36
 * @LastEditors: zsmya
 * @LastEditTime: 2022-06-14 17:11:42
 * @FilePath: /effect/src/views/Earth/Index.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<script setup lang="ts">
import Layout from "@/layout/Index.vue"
import { onMounted, ref } from "vue"
import {
  Scene,
  PerspectiveCamera,
  AxesHelper,
  WebGLRenderer,
  AmbientLight,
  PointLight,
  Mesh,
  Object3D,
} from "three"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
let scene: Scene
let camera: PerspectiveCamera
let axesHelper: AxesHelper
let renderer: WebGLRenderer
let light: AmbientLight
let pointLight: PointLight
let orb: OrbitControls
const earth = ref(null)

onMounted(() => {
  const el = earth.value ?? document.body
  const width = el.clientWidth
  const height = el.clientHeight

  scene = new Scene()
  scene.position.set(0, 0, 0)

  axesHelper = new AxesHelper(10)
  scene.add(axesHelper)
  const object3D = new Object3D()
  camera = new PerspectiveCamera(45, width / height, 1, 1000)
  camera.position.set(5, 10, 15)
  camera.lookAt(scene.position)

  light = new AmbientLight(0xffffff, 1)
  scene.add(light)
  pointLight = new PointLight(0xffffff, 1, 100)
  pointLight.position.set(100, 100, 100)
  scene.add(pointLight)
  const dracoLoader = new DRACOLoader()

  const loader = new GLTFLoader()
  loader.setDRACOLoader(dracoLoader)
  loader.load("model/earth.glb", (gltf) => {
    console.log(gltf)
    object3D.add(gltf.scene)
  })

  loader.load("model/CHINA.glb", (gltf) => {
    object3D.add(gltf.scene)
  })
  loader.load("model/CQ.glb", (gltf) => {
    object3D.add(gltf.scene)
  })
  renderer = new WebGLRenderer({
    antialias: true,
  })
  scene.add(object3D)
  renderer.setClearColor(0x000000)
  renderer.setSize(width, height)
  orb = new OrbitControls(camera, renderer.domElement)
  el.appendChild(renderer.domElement)

  const animte = () => {
    requestAnimationFrame(animte)
    object3D.rotation.y += 0.01

    renderer.render(scene, camera)
  }
  animte()
})
</script>

<template>
  <Layout>
    <div ref="earth" class="earth"></div>
  </Layout>
</template>

<style lang="scss" scoped>
.earth {
  width: 100%;
  height: 100%;
}
</style>

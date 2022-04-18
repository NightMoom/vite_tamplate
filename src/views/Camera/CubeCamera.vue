<!--
 * @Author: zsmya
 * @Date: 2022-04-18 17:03:47
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-18 17:20:30
 * @FilePath: /vite_ts/src/views/Camera/CubeCamera.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<script setup lang="ts">
import { onMounted, render } from 'vue'

import {
  CubeCamera,
  Scene,
  WebGLRenderer,
  WebGLCubeRenderTarget,
  LinearMipmapLinearFilter,
  BoxGeometry,
  MeshLambertMaterial,
  Mesh,
  PerspectiveCamera,
} from 'three'

let renderer: WebGLRenderer
let scene: Scene
let camera: PerspectiveCamera
let cubeCamera: CubeCamera
let cubeTarget: WebGLCubeRenderTarget

onMounted(() => {
  const el = document.getElementById('cube-camera') || document.body
  const width = el.clientWidth
  const height = el.clientHeight

  // 初始化场景
  scene = new Scene()
  scene.position.set(0, 0, 0)

  // WebGLCubeRenderTarget
  cubeTarget = new WebGLCubeRenderTarget(128, {
    generateMipmaps: true,
    minFilter: LinearMipmapLinearFilter,
  })
  camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000)
  camera.position.set(10, 10, 10)
  camera.lookAt(scene.position)
  scene.add(camera)

  // 初始化相机
  cubeCamera = new CubeCamera(1, 10000, cubeTarget)

  // 创建geometry
  const geometry = new BoxGeometry(10, 10, 10)
  const material = new MeshLambertMaterial({ color: 0xffffff, envMap: cubeTarget.texture })
  const mesh = new Mesh(geometry, material)
  scene.add(mesh)
  renderer = new WebGLRenderer()
  renderer.setClearColor(0xffffff)
  renderer.setSize(width, height)

  renderer.render(scene, camera)
  const animate = () => {
    cubeCamera.update(renderer, scene)
    renderer.render(scene, camera)
    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.01
    mesh.rotation.z += 0.01
  }
  el.appendChild(renderer.domElement)
  renderer.setAnimationLoop(animate)
})
</script>

<template>
  <div id="cube-camera" class="cube-camera">
    <p>创建6个渲染到WebGLCubeRenderTarget的摄像机。</p>
  </div>
</template>

<style lang="scss" scoped>
.cube-camera {
  width: 100%;
  height: 100%;
  position: relative;
  p {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
}
</style>

<!--
 * @Author: zsmya
 * @Date: 2022-04-18 15:28:20
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-18 15:42:12
 * @FilePath: /vite_ts/src/views/Scene/SceneIndex.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<script setup lang="ts">
import { onMounted } from 'vue'
import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
} from 'three'
onMounted(() => {
  const el = document.getElementById('scene') || document.body
  const width = el.clientWidth
  const height = el.clientHeight
  // 初始化场景
  const scene = new Scene()

  // 初始化相机
  const camera = new PerspectiveCamera(45, width / height, 1, 10000)
  camera.position.set(50, 50, 50)
  camera.lookAt(scene.position)

  // 创建gemotry
  const gemotry = new BoxGeometry(10, 10, 10)
  const material = new MeshBasicMaterial({ color: 0x0fff00 })
  const mesh = new Mesh(gemotry, material)
  scene.add(mesh)

  // 创建webGL渲染器
  const renderer = new WebGLRenderer()

  renderer.setClearColor(0xffffff)
  renderer.setSize(width, height)

  renderer.render(scene, camera)

  // 添加到指定的元素
  el.appendChild(renderer.domElement)
})
</script>

<template>
  <div id="scene" class="scene">
    <p>
      场景能够让你在什么地方、摆放什么东西来交给three.js来渲染，这是你放置物体、灯光和摄像机的地方。
    </p>
  </div>
</template>
<style lang="scss" scoped>
.scene {
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

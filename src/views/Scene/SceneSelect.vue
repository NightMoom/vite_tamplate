<!--
 * @Author: zsmya
 * @Date: 2022-04-22 10:18:53
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-22 11:42:30
 * @FilePath: /vite_ts/src/views/Scene/SceneSelect.vue
 * @Description: 场景切换
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { StatsModule } from '@/utils/stats'
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  Group,
  LineSegments,
  LineDashedMaterial,
  SphereGeometry,
} from 'three'
import gemotryUtil from '@/gemotry/gemotry'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
let scene: Scene
let camera: PerspectiveCamera
let renderer: WebGLRenderer
let sphere: SphereGeometry
let sphereMaterial: LineSegments
let box: LineSegments
let orb: OrbitControls
let type = 'box'
let t: any
onMounted(() => {
  const el: HTMLElement = document.getElementById('scene-select') || document.body
  const width = el.clientWidth
  const height = el.clientHeight

  scene = new Scene()
  scene.position.set(0, 0, 0)

  camera = new PerspectiveCamera(45, width / height, 1, 1000)
  camera.position.set(100, 100, 100)
  camera.lookAt(scene.position)

  const geometryModule = new gemotryUtil()
  const geometryBox = geometryModule.createBoxBuffer(25, 25, 25)
  box = new LineSegments(
    geometryBox,
    new LineDashedMaterial({ color: 0xffaa00, dashSize: 3, gapSize: 1 })
  )
  box.computeLineDistances()
  box.visible = true
  sphere = new SphereGeometry(35, 64, 32)
  sphereMaterial = new LineSegments(
    sphere,
    new LineDashedMaterial({ color: 0xffaa00, dashSize: 3, gapSize: 1 })
  )
  sphereMaterial.visible = false
  sphereMaterial.computeLineDistances()
  const group = new Group()
  group.add(sphereMaterial)
  group.add(box)
  // scene.add(sphereMaterial)
  // scene.add(box)
  scene.add(group)
  renderer = new WebGLRenderer()
  renderer.setClearColor(0xffffff)
  renderer.setSize(width, height)
  el.appendChild(renderer.domElement)
  orb = new OrbitControls(camera, renderer.domElement)
  orb.maxDistance = 500
  orb.minDistance = 300
  const stats = new StatsModule(el, 0)
  const animate = () => {
    requestAnimationFrame(animate)
    stats.update()
    group.rotation.x += 0.01
    group.rotation.y += 0.01
    group.rotation.z += 0.01
    scene.updateMatrix()
    renderer.render(scene, camera)
  }
  animate()
  t = setInterval(() => {
    type === 'box' ? (type = 'sphere') : (type = 'box')
    change(type)
  }, 3000)
})
onUnmounted(() => {
  clearInterval(t)
})

const change = (type: string) => {
  if (type === 'sphere') {
    box.visible = false
    sphereMaterial.visible = true
  } else {
    sphereMaterial.visible = false
    box.visible = true
  }
}
</script>

<template>
  <div id="scene-select" class="scene-select">
    <n-button @click="change('sphere')">球体</n-button>
    <n-button @click="change('box')">正方体</n-button>
  </div>
</template>

<style lang="scss" scoped>
.scene-select {
  width: 100%;
  height: 100%;
}
</style>

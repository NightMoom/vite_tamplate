<!--
 * @Author: zsmya
 * @Date: 2022-05-19 14:44:54
 * @LastEditors: zsmya
 * @LastEditTime: 2022-05-19 16:15:37
 * @FilePath: /three-effect/src/views/Fly/Index.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<script setup lang="ts">
import { WebGLRenderer, Scene, PerspectiveCamera, AxesHelper, Vector3, Color, Mesh } from "three"
import { ref, onMounted, onBeforeUnmount } from "vue"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

import FlyLine from "@/utils/FlyLine"
import StatsModule from "@/utils/StatsModule"
import { stat } from "fs"
const fly = ref(null)
const statsBox = ref(null)
let camera: PerspectiveCamera
let scene: Scene
let renderer: WebGLRenderer
let axesHelper: AxesHelper
let animate: any
let orb: OrbitControls
let stats: StatsModule
const flyArray: Array<any> = []
onMounted(() => {
  const el: HTMLElement = fly.value || document.body
  const width = el.clientWidth
  const height = el.clientHeight

  // 初始化场景
  scene = new Scene()
  // 设置坐标
  scene.position.set(0, 0, 0)

  // 初始化相机
  camera = new PerspectiveCamera(75, width / height, 1, 1000)
  // 相机坐标
  camera.position.set(5, 10, 15)
  // 相机视点
  camera.lookAt(scene.position)

  // 坐标轴辅助器
  axesHelper = new AxesHelper(10)
  // 添加到场景
  scene.add(axesHelper)

  // 初始化渲染器
  renderer = new WebGLRenderer()
  renderer.setClearColor(0x000000)
  renderer.setSize(width, height)

  // 添加飞线
  // const flyStartPosition = [new Vector3(0, 0, 0), new Vector3(10, 10, 0), new Vector3(20, 0, 0)]
  // const flyLine = new FlyLine(flyStartPosition, "0xff00ff", 1000)

  // 性能监听
  stats = new StatsModule(0, statsBox.value)
  stats.stats.dom.style.position = "unset"
  // scene.add(flyLine.mesh)
  // 添加轨道控制器
  orb = new OrbitControls(camera, renderer.domElement)
  // 添加到dom
  el.appendChild(renderer.domElement)

  animate = () => {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    stats.update()
  }
  animate()
})
onBeforeUnmount(() => {
  cancelAnimationFrame(animate)
})

// 添加飞线
const addFlyLine = (count?: number) => {
  // if ()
  const number = count ?? 1
  for (let i = 0; i < number; i++) {
    // 随机颜色
    const r = Math.random()
    const g = Math.random()
    const b = Math.random()
    const color = new Color(r, g, b).getHex()
    const s = Math.random() * 2 - 1
    // 默认初始位置
    const start = new Vector3(s * 20, s * 20, s * 20)
    // 飞线末端
    const e = Math.random() * 2 - 1
    const end = new Vector3(e * 20 * e, e * e, e * 20 * e)
    // 飞线中间
    const c = Math.random() * 2 - 1
    const center = new Vector3(c * 20 * c, 0, c * 20 * c)

    const flyLine = new FlyLine([start, center, end], color, 1000)
    scene.add(flyLine.mesh)
    flyArray.push(flyLine)
  }
}

// 随机移除
const removeFlyLine = () => {
  const len = flyArray.length
  if (len) {
    const r = Math.floor(Math.random() * len)
    const target = flyArray[r]
    target.remove()
    flyArray.splice(0, r)
  }
}

// 全部移除
const removeAll = () => {
  flyArray.forEach((i) => {
    if (i) {
      i.remove()
    }
  })
}
</script>

<template>
  <div ref="fly" class="fly">
    <div class="btn-list">
      <div ref="statsBox" class="state"></div>
      <el-button type="primary" @click="addFlyLine()">添加1条飞线</el-button>
      <el-button type="primary" @click="addFlyLine(10)">添加10条飞线</el-button>

      <el-button type="primary" @click="removeFlyLine">随机移除</el-button>
      <el-button type="primary" @click="removeAll">移除全部</el-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.fly {
  width: 100vw;
  height: 100vh;
  position: relative;
  .btn-list {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
  }
  .statsBox {
    width: 80px;
  }
}
</style>

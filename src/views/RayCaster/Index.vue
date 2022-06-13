<!--
 * @Author: zsmya
 * @Date: 2022-06-13 16:10:05
 * @LastEditors: zsmya
 * @LastEditTime: 2022-06-13 18:17:02
 * @FilePath: /effect/src/views/RayCaster/Index.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<script setup lang="ts">
import Layout from "@/layout/Index.vue"
import bgHeader from "@/assets/bg-header.svg"
import { onMounted, ref, getCurrentInstance, ComponentInternalInstance } from "vue"
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  Raycaster,
  Vector2,
} from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { CSS2DRenderer, CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer"

import options from "./chart"
let scene: Scene
let camera: PerspectiveCamera
let renderer: WebGLRenderer
let orb: OrbitControls
let labelRenderer: CSS2DRenderer
let echartsBox: CSS2DObject
let validMesh: Mesh
const charts = ref(null)
const raycaster = ref(null)
const chartsBox = ref(null)
let $echarts: any = null
onMounted(() => {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance
  $echarts = appContext.config.globalProperties.$echarts
  const chartsBoxDom = chartsBox.value || document.body

  const el = raycaster.value || document.body
  const width = el.clientWidth
  const height = el.clientHeight
  // 初始化场景
  scene = new Scene()
  scene.position.set(0, 0, 0)

  // 初始化相机
  camera = new PerspectiveCamera(45, width / height, 1, 1000)
  camera.position.set(5, 10, 15)
  camera.lookAt(scene.position)

  // 弹窗
  const div = document.createElement("div")
  div.innerHTML = chartsBoxDom.innerHTML
  const echartsBox = new CSS2DObject(chartsBoxDom)

  echartsBox.position.set(0, 5, 0)
  labelRenderer = new CSS2DRenderer()
  labelRenderer.setSize(width, height)
  labelRenderer.domElement.style.position = "absolute"
  labelRenderer.domElement.style.top = "0px"
  document.body.appendChild(labelRenderer.domElement)

  // 初始化渲染器
  renderer = new WebGLRenderer()
  renderer.setClearColor(0x000000)
  renderer.setSize(width, height)
  // 添加轨道控制器
  orb = new OrbitControls(camera, renderer.domElement)
  const orbs = new OrbitControls(camera, labelRenderer.domElement)
  orb.enableDamping = true
  // 创建geometry
  const geometry = new BoxGeometry(4, 4, 4)
  const material = new MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.8,
  })
  const mesh = new Mesh(geometry, material)
  mesh.add(echartsBox)
  scene.add(mesh)

  el.appendChild(renderer.domElement)

  const animate = () => {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    labelRenderer.render(scene, camera)
  }

  animate()
})

const ray = new Raycaster()
const mouse = new Vector2()
window.addEventListener("click", (e) => {
  const el = raycaster.value || document.body

  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1
  ray.setFromCamera(mouse, camera)

  const instersect = ray.intersectObjects(scene.children)

  if (instersect.length) {
    const chartDom = document.getElementById("echarts")
    const chart = $echarts.init(chartDom)
    chart.resize(300, 240)
    chart.setOption(options)
  }
})
</script>

<template>
  <Layout>
    <div id="raycaster" ref="raycaster" class="raycaster">
      <div v-show="false" ref="chartsBox" class="chart">
        <div class="chart-header">
          <img :src="bgHeader" alt="" />
          <span class="text">测试xxx</span>
        </div>
        <div id="echarts" ref="charts" class="charts"></div>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
.raycaster {
  width: 100%;
  height: 100%;
  .chart {
    width: 300px;
    height: 270px;
    .chart-header {
      height: 30px;
      width: 100%;

      position: relative;
      .text {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        text-align: center;
        width: 100%;
        height: 100%;
        line-height: 30px;
        color: #fff;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .charts {
      width: 100%;
      height: calc(100% - 30px);
    }
  }
}
</style>

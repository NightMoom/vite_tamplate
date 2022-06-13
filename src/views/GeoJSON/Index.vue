<!--
 * @Author: zsmya
 * @Date: 2022-06-13 14:18:48
 * @LastEditors: zsmya
 * @LastEditTime: 2022-06-13 15:29:06
 * @FilePath: /effect/src/views/GeoJSON/Index.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<script setup lang="ts">
import Layout from "@/Layout/Index.vue"
import { onMounted } from "vue"
import {
  FileLoader,
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Object3D,
  Color,
  ExtrudeBufferGeometry,
  BufferGeometry,
  Shape,
  MeshBasicMaterial,
  Line,
  LineBasicMaterial,
  Mesh,
  Vector3,
} from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import * as d3 from "d3"
let scene: Scene
let el: HTMLElement
let camera: PerspectiveCamera
let renderer: WebGLRenderer
let orb: OrbitControls

interface GeoJSONItem {
  type: String
  properties: {
    adcode: Number
    name: String
    center: Array<Number>
    centroid: Array<Number>
  }
  geometry: {
    type: String
    coordinates: Array<Array<Number>>
  }
}

interface GeoJSON {
  features: Array<GeoJSONItem>
  type: String
}
onMounted(() => {
  el = document.getElementById("geo") ?? document.body
  const width = el.clientWidth
  const height = el.clientHeight
  // 初始化场景
  scene = new Scene()
  scene.position.set(0, 0, 0)

  // 初始化相机
  camera = new PerspectiveCamera(45, width / height, 1, 1000)
  camera.position.set(0, 0, 500)
  camera.lookAt(scene.position)

  // 初始化渲染器
  renderer = new WebGLRenderer()
  renderer.setClearColor(0x000000)
  renderer.setSize(width, height)

  // 初始化loader
  const loader = new FileLoader()
  loader.load("data/geoJSON.json", (jsonParse) => {
    // @ts-ignore
    const data = JSON.parse(jsonParse)
    operationData(data)
  })

  // 添加轨道控制器
  orb = new OrbitControls(camera, renderer.domElement)
  orb.enableDamping = true
  // 添加到指定元素中
  el.appendChild(renderer.domElement)

  const renderWebGL = () => {
    requestAnimationFrame(renderWebGL)
    renderer.render(scene, camera)
  }
  renderWebGL()
})
const map = new Object3D()
const operationData = (json: GeoJSON) => {
  const features = json.features
  features.forEach((feature) => {
    // 创建省份的物体
    const province = new Object3D()

    // 创建多边形
    // @ts-ignore
    province.properties = feature.properties.name

    const coordinates = feature.geometry.coordinates
    const type = feature.geometry.type
    if (type === "Polygon") {
      coordinates.forEach((coord) => {
        const mesh = createMesh(coord)
        // @ts-ignore
        mesh.properties = feature.properties.name
        province.add(mesh)
        // @ts-ignore
        const line = createLine(coord)
        province.add(line)
      })
    } else if (type === "MultiPolygon") {
      coordinates.forEach((coord) => {
        coord.forEach((k) => {
          // @ts-ignore
          const mesh = createMesh(k)

          // @ts-ignore
          mesh.properties = feature.properties.name
          province.add(mesh)
          // @ts-ignore
          const line = createLine(k)
          province.add(line)
        })
      })
    }

    map.add(province)
  })
  scene.add(map)
}
const projection = d3.geoMercator().center([116.405285, 39.904989]).translate([0, 0])
const createMesh = (coord: Array<Number>) => {
  const shape = new Shape()
  coord.forEach((row, index) => {
    // @ts-ignore
    const [longitude, latitude] = projection(row)
    if (index === 0) {
      shape.moveTo(longitude, -latitude)
    }
    shape.lineTo(longitude, -latitude)
  })
  const r = Math.random()
  const g = Math.random()
  const b = Math.random()
  const color = new Color(r, g, b)
  const geometry = new ExtrudeBufferGeometry(shape, { depth: 5 })
  const material = new MeshBasicMaterial({
    color: color,
    transparent: true,
  })

  const mesh = new Mesh(geometry, material)
  return mesh
}

const createLine = (coord: Array<Number>) => {
  const lineGeometry = new BufferGeometry()
  const pointsArray: Array<Vector3> = []

  coord.forEach((row, i) => {
    // @ts-ignore
    const [longitude, latitude] = projection(row)
    pointsArray.push(new Vector3(longitude, -latitude, 5.4))
  })
  lineGeometry.setFromPoints(pointsArray)
  const lineMaterial = new LineBasicMaterial({ color: 0xff00ff })
  return new Line(lineGeometry, lineMaterial)
}
// 监听器
window.addEventListener("resize", () => {
  camera.aspect = el.clientWidth / el.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(el.clientWidth, el.clientHeight)
})
window.addEventListener("click", () => {})
</script>

<template>
  <Layout>
    <div id="geo" class="geo-json"></div>
  </Layout>
</template>

<style lang="scss" scoped>
.geo-json {
  width: 100%;
  height: 100%;
}
</style>

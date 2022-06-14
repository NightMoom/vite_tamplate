<!--
 * @Author: zsmya
 * @Date: 2022-06-13 14:02:42
 * @LastEditors: zsmya
 * @LastEditTime: 2022-06-14 17:20:03
 * @FilePath: /effect/src/views/Home/Index.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<script setup lang="ts">
import { onMounted } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const goTo = (path: string) => {
  router.push({
    path: `/${path}`,
  })
}
</script>

<template>
  <div class="home">
    <el-row :gutter="16">
      <el-col :span="6">
        <el-card shadow="hover" @click.capture="goTo('geoJSON')"> GeoJSON地图 </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" @click.capture="goTo('FlyLine')"> 飞线 </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" @click.capture="goTo('Radar')"> 雷达扫描 </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" @click.capture="goTo('RayCaster')"> 射线追踪 </el-card>
      </el-col>
      <!-- <el-col :span="6">
        <el-card shadow="hover" @click.capture="goTo('RayEchartsOne')"> 图表1 </el-card>
      </el-col> -->
      <!-- <el-col :span="6">
        <el-card shadow="hover" @click.capture="goTo('EchartsTwo')"> 图表2 </el-card>
      </el-col> -->
      <el-col :span="6">
        <el-card shadow="hover" @click.capture="goTo('Build')"> 建筑模型 </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" @click.capture="goTo('Cloud')"> 流动的云 </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" @click.capture="goTo('Earth')"> 地球 </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 8px;
  :deep .el-col {
    margin-bottom: 10px;
  }
}
</style>

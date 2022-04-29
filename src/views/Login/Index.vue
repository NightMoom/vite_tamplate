<!--
 * @Author: zsmya
 * @Date: 2022-04-26 16:03:15
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-29 16:59:20
 * @FilePath: /three-admin/src/views/Login/Index.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<template>
  <div class="login" id="login" ref="login">
    <div class="bg" ref="loginBg"></div>
    <div class="login-form">
      <a-form
        ref="form"
        :form="formModel"
        :label-col="{ span: 5 }"
        :style="{
          maxWidth: '280px',
        }"
      >
        <a-form-item label="用户名" path="userName">
          <a-input
            type="text"
            placeholder="请输入用户名"
            v-model:value="formModel.userName"
          ></a-input>
        </a-form-item>
        <a-form-item label="密码" path="passWord">
          <a-input-password
            type="password"
            placeholder="请输入密码"
            show-password
            v-model:value="formModel.passWord"
          ></a-input-password>
        </a-form-item>
      </a-form>
      <div class="action">
        <a-button round type="primary" @click="onLoginHandle"> 登录 </a-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
import { Router, useRouter } from "vue-router";
// const ignoreRouter: Array<string> = ["/login", "*"];
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  BufferGeometry,
  BufferAttribute,
  Points,
  TextureLoader,
  AdditiveBlending,
  PointsMaterial,
  Clock,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "stats.js";
// import snowFlak from "@/assets/images/xx.png";
const loginComponent = defineComponent({
  setup() {
    const snowFlak = require("@/assets/images/xx.png");

    const router: Router = useRouter();

    // loginref
    const loginBg = ref(null);
    const onLoginHandle = (): void => {
      router.replace("/");
    };
    const formModel = ref({
      userName: "admin",
      passWord: "123456",
    });
    let renderer: WebGLRenderer;
    let camera: PerspectiveCamera;
    let scene: Scene;
    let stats: Stats;
    let points: Points;

    let bufferGeometry: BufferGeometry;
    stats = new Stats();
    onMounted(() => {
      const el: HTMLElement = loginBg.value || document.body;
      const width = el.clientWidth;
      const height = el.clientHeight;

      //  初始化场景
      scene = new Scene();
      scene.position.set(0, 0, 0);

      // 初始化相机
      camera = new PerspectiveCamera(45, width / height, 20, 40);
      camera.position.set(0, 0, 30);
      // camera.lookAt(scene.position);

      renderer = new WebGLRenderer();
      renderer.setClearColor(0x000000);
      renderer.setSize(width, height);

      // scene.add(axesHelper);
      const count = 5000;

      bufferGeometry = new BufferGeometry();
      const position = new Float32Array(count * 3);
      const pointMaterial = new PointsMaterial();

      pointMaterial.size = 0.6;
      pointMaterial.color.set(0xffffff);

      const textures = new TextureLoader();

      const snow = textures.load(snowFlak);

      pointMaterial.sizeAttenuation = true;
      pointMaterial.map = snow;
      pointMaterial.alphaMap = snow;
      pointMaterial.transparent = true;
      pointMaterial.depthWrite = false;
      pointMaterial.blending = AdditiveBlending;

      for (let i = 0; i < count * 3; i++) {
        position[i] = (Math.random() - 0.5) * 40;
      }

      bufferGeometry.setAttribute("position", new BufferAttribute(position, 3));
      points = new Points(bufferGeometry, pointMaterial);

      scene.add(points);
      el.appendChild(renderer.domElement);
      stats.showPanel(0);
      el.appendChild(stats.dom);
      const orb = new OrbitControls(camera, renderer.domElement);
      orb.enableDamping = true;
      orb.minDistance = 10;
      orb.maxDistance = 30;
      const clock = new Clock();
      let animate = (): void => {
        const time = clock.getElapsedTime();
        stats.update();
        points.rotation.x = time * 0.1;

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };

      animate();

      window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    });

    onBeforeUnmount(() => {
      bufferGeometry.dispose();
      renderer.dispose();
    });
    return {
      formModel,
      loginBg,
      onLoginHandle,
    };
  },
});
export default loginComponent;
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  width: 100%;
  height: 100%;
  .bg {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
  }
  &-form {
    position: absolute;
    top: 50%;
    left: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    z-index: 100;
    width: 300px;
    height: 200px;
    background: rgba(255, 255, 255, 0.5);
    padding: 20px 40px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    color: #fff;
    flex-wrap: wrap;
    ::v-deep .a-form-item-label {
      color: #fff;
    }
    .action {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
}
</style>

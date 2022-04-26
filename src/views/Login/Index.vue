<!--
 * @Author: zsmya
 * @Date: 2022-04-26 16:03:15
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-26 16:46:42
 * @FilePath: /three-admin/src/views/Login/Index.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<template>
  <div class="login">
    <div class="login-bg"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { Router, useRouter } from "vue-router";
const ignoreRouter: Array<string> = ["/login", "*"];

const loginComponent = defineComponent({
  setup() {
    const router: Router = useRouter();
    const routers = router.getRoutes();
    console.log("routers", routers);
    onMounted(() => {
      console.log("1");
    });
  },
});
export default loginComponent;
</script>

<style></style>

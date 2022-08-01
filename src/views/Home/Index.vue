<!--
 * @Author: zsmya
 * @Date: 2022-08-01 15:37:56
 * @LastEditors: zsmya
 * @LastEditTime: 2022-08-01 17:25:38
 * @FilePath: /vite_vue3_ts/src/views/Home/Index.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<template>
  <div ref="login" class="login">
    <el-form v-model="userInfo" label-width="80px">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="userInfo.userName" type="text" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="userPwd">
        <el-input
          v-model="userInfo.userPwd"
          type="password"
          placeholder="请输入用户名密码"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="userValid">
        <el-input v-model="userInfo.userValid" type="text" placeholder="请输入验证码">
          <template #append>
            <img src="@/assets/logo.png" alt="" height="32" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue"

const Login = defineComponent({
  name: "AppLogin",
  setup() {
    const Login = ref(null)
    const userInfo = reactive<UserInfo>({
      userName: "",
      userPwd: "",
      userValid: "",
    })

    console.log(import.meta.env.VITE_APP_API_URL)

    const login = () => {}
    return {
      Login,
      userInfo,
      login,
    }
  },
})
export default Login
</script>

<style lang="scss" scoped></style>

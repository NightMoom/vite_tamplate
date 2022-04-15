/*
 * @Author: zsmya
 * @Date: 2022-04-15 14:46:24
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-15 16:35:59
 * @FilePath: /vite_ts/src/directive/modules/permission.ts
 * @Description: 按钮权限指令
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
export default {
  // 指令具有一组生命周期钩子：
  // 在绑定元素的 attribute 或事件监听器被应用之前调用
  // eslint-disable-next-line
  created() {},
  // 在绑定元素的父组件挂载之前调用
  // eslint-disable-next-line
  beforeMount() {},
  // 在绑定元素的父组件挂载之后调用
  mounted(el: HTMLElement, binding: any) {
    const attr = el.getAttribute('attr')
    const { value } = binding
    if (!value) {
      el.setAttribute('per', '权限数组未传入')
    } else {
      if (value.includes(attr) > -1) {
        el.classList.add('n-button--disabled')
      }
    }
  },
  // 在包含组件的 VNode 更新之前调用
  // eslint-disable-next-line
  beforeUpdate() {},
  // 在包含组件的 VNode 及其子组件的 VNode 更新之后调用
  // eslint-disable-next-line
  updated() {},
  // 在绑定元素的父组件卸载之前调用
  // eslint-disable-next-line
  beforeUnmount() {},
  // 在绑定元素的父组件卸载之后调用
  // eslint-disable-next-line
  unmounted() {},
}

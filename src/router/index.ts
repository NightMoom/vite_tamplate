import { createWebHistory, RouteRecordRaw, createRouter } from "vue-router"

const route: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/login",
    // component: () => import("@/assets")
  },
  {
    path: "/login",
    component: () => import("@/views/Login/Index.vue"),
  },
  {
    path: "/Home",
    component: () => import("@/views/Home/Index.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: route,
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // 一级路由
  { path: '/', component: () => import('@/views/member/layout'), children: [{ path: '/', component: () => import('@/views/home/index') }] }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

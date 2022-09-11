import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // 一级路由
  {
    path: '/',
    component: () => import('@/views/member/layout'),
    children: [
      { path: '/', component: () => import('@/views/home/index') },
      { path: '/category/:id', component: () => import('@/views/category/TopCategory') },
      { path: '/category/sub/:id', component: () => import('@/views/category/SubCategory') }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 }
  }
})

export default router

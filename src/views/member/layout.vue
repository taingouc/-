<template>
  <!-- 顶部通栏 -->
  <AppTopnav></AppTopnav>
  <!-- 吸顶头部组件 -->
  <AppHeaderSticky></AppHeaderSticky>
  <!-- 头部组件 -->
  <AppHeader></AppHeader>
  <!-- 内容主体 -->
  <div class="main">
    <!-- 二级路由 -->
    <router-view></router-view>
  </div>
  <!-- 底部组件 -->
  <AppFooter></AppFooter>
</template>

<script>
import AppTopnav from '@/components/app-topnav.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderSticky from '@/components/app-header-sticky.vue'
import { useStore } from 'vuex'
export default {
  name: 'Layout',
  components: {
    AppTopnav,
    AppHeader,
    AppFooter,
    AppHeaderSticky
  },
  setup() {
    // 获取分类数据
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style lang="less" scoped></style>

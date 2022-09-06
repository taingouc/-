<template>
  <!-- 顶部通栏 -->
  <AppTopnav></AppTopnav>
  <!-- 头部组件 -->
  <AppHeader></AppHeader>
  <!-- 内容主体 -->
  <div class="main">
    <!-- 二级路由 -->
    <router-view></router-view>
  </div>
  <!-- 底部组件 -->
  <footer></footer>
</template>

<script>
import AppTopnav from '@/components/app-topnav.vue'
import AppHeader from '@/components/app-header.vue'
export default {
  name: 'Layout',
  components: {
    AppTopnav,
    AppHeader
  }
}
</script>

<style lang="less" scoped>
.main {
  .hoverShadow();
  background-color: @helpColor;
}
</style>

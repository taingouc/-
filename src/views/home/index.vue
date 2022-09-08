<template>
  <div class="home-entry">
    <div class="container">
      <!-- 首页入口 -->
      <div class="home-entry">
        <!-- 左侧分类 -->
        <HomeCategory></HomeCategory>
        <!-- 轮播图 -->
        <HomeBanner></HomeBanner>
      </div>
    </div>
  </div>
</template>

<script>
import HomeCategory from './components/home-category'
import HomeBanner from './components/home-banner'
export default {
  name: 'Home',
  components: {
    HomeCategory,
    HomeBanner
  }
}
</script>

<style lang="less" scoped></style>

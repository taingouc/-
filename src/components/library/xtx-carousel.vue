<template>
  <div class="xtx-carousel" @mouseenter="stop()" @mouseleave="start()">
    <!-- 轮播图容器 -->
    <ul class="carousel-body">
      <li class="carousel-item" v-for="(item, i) in sliders" :key="i" :class="{ fade: index === i }">
        <RouterLink to="/">
          <img :src="item.imgUrl" alt="" />
        </RouterLink>
      </li>
    </ul>
    <!-- 上一张 -->
    <a href="javascript:;" class="carousel-btn prev" @click="toggle(-1)"><i class="iconfont icon-angle-left"></i></a>
    <!-- 下一张 -->
    <a href="javascript:;" class="carousel-btn next" @click="toggle(1)"><i class="iconfont icon-angle-right"></i></a>
    <!-- 指示圆点 -->
    <div class="carousel-indicator">
      <span v-for="(item, i) in sliders" :key="i" :class="{ active: index === i }" @click="index = i"></span>
    </div>
  </div>
</template>

<script>
import { onUnmounted, ref, watch } from 'vue'
export default {
  name: 'XtxCarousel',
  props: {
    // 轮播图数据
    sliders: {
      Type: Array,
      default: []
    },
    // 控制是否自动轮播
    autoPlay: {
      type: Boolean,
      default: false
    },
    // 轮播切换时长
    duration: {
      type: Number,
      default: 3000
    }
  },
  setup(props) {
    // 默认显示图片的索引
    const index = ref(0)
    // 自动轮播图逻辑
    let timer = null
    const autoPlayFn = () => {
      clearInterval(timer)
      // 设置定时器自动播放
      timer = setInterval(() => {
        index.value++
        if (index.value >= props.sliders.length) {
          index.value = 0
        }
      }, props.duration)
    }
    watch(
      () => props.sliders,
      (newVal) => {
        if (newVal.length && props.autoPlay) {
          autoPlayFn()
        }
      },
      { immediate: true }
    )
    // 鼠标移动到轮播图组件 清除定时器
    const stop = () => {
      if (timer) clearInterval(timer)
    }
    // 鼠标离开轮播图组件，开启定时器
    const start = () => {
      if (props.sliders.length && props.autoPlay) {
        autoPlayFn()
      }
    }
    // 点击下方小圆点切换,为每个小圆点绑定click事件 赋值index=索引值
    // 点击左右按钮进行切换
    const toggle = (step) => {
      const i = index.value + step
      if (i === -1) {
        index.value = props.sliders.length - 1
        return
      }
      if (i === props.sliders.length) {
        index.value = 0
        return
      }
      index.value = i
    }
    // 组件卸载时，清除定时器
    onUnmounted(() => {
      clearInterval(timer)
    })
    return { index, stop, start, toggle }
  }
}
</script>
<style scoped lang="less">
.xtx-carousel {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background: #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      &.prev {
        left: 20px;
      }
      &.next {
        right: 20px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>

<template>
  <div class="xtx-bread-item">
    <router-link v-if="to" :to="to"><slot /></router-link>
    <span v-else><slot /></span>
    <i class="iconfont icon-angle-right" v-if="to"></i>
  </div>
</template>
<script>
export default {
  name: 'XtxBreadItem',
  props: {
    to: {
      type: [String, Object],
      default: ''
    }
  }
}
</script>
<style lang="less"></style>

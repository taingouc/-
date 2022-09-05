import { createStore } from 'vuex'

export default createStore({
  //  state看做 data 数据
  state: {},
  // 可以看作 computed 计算属性
  getters: {},
  // 可以看作 methods 方法,更改 Vuex 中的 state 的唯一方法只有提交 mutation
  mutations: {},
  // actions用来处理mutations中的异步操作，触发mutations中的函数
  actions: {},
  modules: {}
})

import { createStore } from 'vuex'
// 导入vuex持久化插件
import createPersistedstate from 'vuex-persistedstate'
// 导入需要抽离出来的命名空间模块
import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'
export default createStore({
  //  state看做 data 数据
  state: {},
  // 可以看作 computed 计算属性
  getters: {},
  // 可以看作 methods 方法,更改 Vuex 中的 state 的唯一方法只有提交 mutation
  mutations: {},
  // actions用来处理mutations中的异步操作，触发mutations中的函数
  actions: {},
  // modules用来向外导出抽离出来的命名空间模块
  modules: {
    cart,
    user,
    category
  },
  // 持久化插件配置
  plugins: [
    // 默认持久化数据存储在localStorage中
    createPersistedstate({
      // 定义本地存储名字
      key: 'erabbit-client-pc-store',
      // 指定需要存储的模块
      paths: ['user', 'cart']
    })
  ]
})

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入自己的ui组件库
import ui from './components/library'
// 重置样式的库
import 'normalize.css'
// 项目的公共样式
import '@/assets/styles/common.less'
createApp(App).use(store).use(router).use(ui).mount('#app')

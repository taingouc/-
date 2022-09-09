// 扩展vue原有的功能：全局组件，自定义指令，挂载原型方法，注意：没有全局过滤器。
// 这就是插件
// vue2.0插件写法要素：导出一个对象，有install函数，默认传入了Vue构造函数，Vue基础之上扩展
// vue3.0插件写法要素：导出一个对象，有install函数，默认传入了app应用实例，app基础之上扩展

// 骨架屏组件
import XtxSkeleton from './xtx-skeleton.vue'
// 轮播图组件
import XtxCarousel from './xtx-carousel.vue'
// 更多组件
import XtxMore from './xtx-more.vue'
// 导入图片懒加载失败 默认显示的图片
import defaultImg from '@/assets/images/200.png'
export default {
  install(app) {
    // 在app上进行扩展，app提供 component directive 函数
    // 如果要挂载原型 app.config.globalProperties 方式
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)
    // 定义的懒加载指令
    defineDirective(app)
  }
}

// 定义指令
const defineDirective = (app) => {
  // 1.图片懒加载指令
  // 原理：先存储图片的地址，图片不能绑定在src上，当图片进入可视区，把存储图片的地址设置给图片的src(操作dom)
  app.directive('lazy', {
    // vue2监听指令的dom是否创建好使用inserted钩子函数
    // vue3指令的钩子函数和组件一样，则使用组件的mounted钩子
    mounted(el, binding) {
      // el观察的dom元素，binding.value指令的值
      // 创建一个观察对象，来观察当前使用指令的元素
      const observe = new IntersectionObserver(
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            // 观察的元素进入可视区isIntersecting为true
            // 我们只需要第一次进入触发，后续不再触发，停止观察
            observe.unobserve(el)
            // 观察的图片元素进入可视区，会将指令的值，也就是图片地址赋值给该图片的src
            el.src = binding.value
            // 处理图片加载失败
            el.onerror = () => {
              el.src = defaultImg
            }
          }
        },
        {
          // 设置距离可视区域多少触发懒加载
          threshold: 0
        }
      )
      observe.observe(el)
    }
  })
}

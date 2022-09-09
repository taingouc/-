// 存放全局复用的逻辑
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

/**
 *  数据懒加载
 * @param {function} apiFn 接口函数
 */
export const useLazyData = (apiFn) => {
  // 定义一个空的响应式数据对象
  const result = ref([])
  // 定义一个向外导出的target对象
  const target = ref(null)
  // stop停止观察
  const { stop } = useIntersectionObserver(
    // target监听的dom对象
    target,
    ([{ isIntersecting }], observerElement) => {
      // isIntersecting是否进入可视区
      if (isIntersecting) {
        // 进入可视区停止观察
        stop()
        // 调用api函数获取对应数据
        apiFn().then((data) => {
          // 把要用到的数据赋值给定义好的数据对象
          result.value = data.result
        })
      }
    }
  )
  // 将进入可视区域获取的数据返回,
  return { result, target }
}

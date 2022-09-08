import request from '@/utils/request.js'
/**
 *
 * @param {} limit -品牌个数
 * @returns Promise
 */
export const findBrand = (limit = 6) => {
  return request('/home/brand', 'get', { limit })
}

/**
 * 获取广告图
 * @returns Promise
 */
export const findBanner = () => {
  return request('/home/banner', 'get')
}

/**
 *
 * @returns 新鲜好物
 */
export const findNew = () => {
  return request('home/new', 'get')
}
/**
 *
 * @returns 人气推荐
 */
export const findHot = () => {
  return request('home/hot', 'get')
}

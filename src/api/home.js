import request from '@/utils/request.js'
/**
 *
 * @param {} limit -品牌个数
 * @returns Promise
 */
export const findBrand = (limit = 6) => {
  return request('/home/brand', 'get', { limit })
}

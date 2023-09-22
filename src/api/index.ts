import AxiosInstance from '@/utils/AxiosInstance'

export function getData() {
  return AxiosInstance({
    url: '/todos/1',
    method: 'get'
  })
}

import AxiosInstances from '@/utils/http'

export function getData() {
  return AxiosInstances({
    url: '/todos/1',
    method: 'get'
  })
}

import AxiosInstances from '@/utils/http'

// base
export function getData() {
  return AxiosInstances({
    url: '/todos/1',
    method: 'get'
  })
}

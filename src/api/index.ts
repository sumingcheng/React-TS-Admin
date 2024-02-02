import AxiosInstance from '@/utils/AxiosInstance'

export function getData() {
  return AxiosInstance({
    url: '/todos/1',
    method: 'get'
  })
}

export function getAnswer(data: any) {
  return AxiosInstance({
    url: '/chat/getAnswer',
    method: 'post',
    data
  })
}

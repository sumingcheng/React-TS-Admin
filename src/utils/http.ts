import axios, {AxiosInstance, AxiosRequestConfig, AxiosError} from 'axios'
import {message} from 'antd'

interface RequestInfo {
  timestamp: number;
}

const AxiosInstances: AxiosInstance = axios.create({
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  baseURL: process.env.BASE_URL,
  timeout: 10000,
  withCredentials: false,
})

const requestMap = new Map<string, RequestInfo>()

const generateRequestKey = (config: AxiosRequestConfig) => {
  return `${config.url}_${config.method}`
}

AxiosInstances.interceptors.request.use(
    config => {
      const key = generateRequestKey(config)
      const now = Date.now()

      const info = requestMap.get(key)

      if (info && (now - info.timestamp < 1000)) {
        message.warning('请不要重复请求')
        return Promise.reject(new Error('重复请求'))
      }

      if (!info) {
        requestMap.set(key, {timestamp: now})

        // Remove the request info after 1 second
        setTimeout(() => {
          requestMap.delete(key)
        }, 1000)
      }

      return config
    },
    error => Promise.reject(error),
)

AxiosInstances.interceptors.response.use(
    res => {
      // No need to delete the request info here, since it's handled in the request interceptor
      if (!res.data) {
        throw new Error('无效的响应数据')
      }

      return res.data
    },
    (error: AxiosError) => {
      const key = generateRequestKey(error.config)

      if (error.code === 'ECONNABORTED') {
        message.warning('请求超时，请稍后重试')
      } else {
        message.error('请求失败，请稍后重试')
      }

      return Promise.reject(error)
    },
)

export default AxiosInstances

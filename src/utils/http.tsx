import axios from 'axios';
import {message} from 'antd';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

const AxiosInstances = axios.create({
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  baseURL: process.env.BASE_URL,
  timeout: 10000,
  withCredentials: false, // 默认值
});

const requestMap = new Map();

AxiosInstances.interceptors.request.use(
    (config) => {
      const key = `${config.url}_${config.method}`;
      if (requestMap.has(key)) {
        message.success('请不要重复请求');
        return Promise.reject(new Error('重复请求'));
      }
      requestMap.set(key, true);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
);

AxiosInstances.interceptors.response.use(
    (res) => {
      const key = `${res.config.url}_${res.config.method}`;
      requestMap.delete(key);

      // 验证响应数据（假设响应是一个带有 'data' 属性的对象）
      if (!res.data) {
        return Promise.reject(new Error('无效的响应数据'));
      }

      return res.data;
    },
    (error) => {
      const key = `${error.config.url}_${error.config.method}`;
      requestMap.delete(key);

      if (error.code === 'ECONNABORTED') {
        // 处理请求超时
        message.warning('请求超时，请稍后重试');
      } else {
        // 处理其他错误
        message.error('请求失败，请稍后重试');
      }

      return Promise.reject(error);
    },
);

export default AxiosInstances;

import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const NProgressHandler: React.FC = () => {
  const location = useLocation()

  useEffect(() => {
    // 当路径改变时，立即完成前一个进度条
    NProgress.done()
    // 然后开始一个新的进度条
    NProgress.start()

    const timer = setTimeout(() => NProgress.done(), 500) // 根据实际情况调整延迟

    return () => {
      // 清除延时
      clearTimeout(timer)
      // 确保进度条完成
      NProgress.done()
    }
  }, [location.pathname])

  return null
}

export default NProgressHandler

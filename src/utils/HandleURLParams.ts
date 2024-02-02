// 在 components/HandleURLParams.js 中
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCid } from '@/store/slices/cidSlice'

const HandleURLParams: React.FC = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const cid = queryParams.get('cid')

    if (cid) {
      dispatch(setCid(cid))
    }
  }, [location, dispatch])

  return null // 该组件不渲染任何内容
}

export default HandleURLParams

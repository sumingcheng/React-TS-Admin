import { useEffect, FC } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCid, setName } from '@/store/slices/urlParamsSlice' // 确保路径正确

const HandleURLParams: FC = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const cid = queryParams.get('cid')
    const name = queryParams.get('name') // 获取name参数

    if (cid) {
      dispatch(setCid(cid))
    }

    if (name) {
      dispatch(setName(name)) // 将name存储到Redux状态中
    }
  }, [location, dispatch])

  return null // 该组件不渲染任何内容
}

export default HandleURLParams

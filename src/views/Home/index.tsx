import React, { useState, useEffect } from 'react'
import '@/assets/home.less'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '@/store/themeSlice'
import { getData } from '@/api'
import { Demo } from '@/views/Home/type'

const Home: React.FC = () => {
  // const theme = useSelector((state: RootStateType) => state.theme)
  const dispatch = useDispatch()

  const [count, setCount] = useState(new Demo())
  useEffect(() => {
    console.log(count, count.getRequestBody())
  }, [])

  const [state, setState] = useState(null)
  const getTheme = async () => {
    const res = await getData()
    console.log(res)
    setState(res)
  }

  return (
    <div>
      <Button onClick={() => dispatch(toggleTheme())}>测试按钮</Button>
      <Button type={'primary'} onClick={() => getTheme()}>
        请求数据测试
      </Button>
      <div>{state && JSON.stringify(state)}</div>
      <div className={`h-96`}></div>
      <div className={`h-96`}></div>
      <div className={`h-96`}></div>
      <div className={`h-96`}></div>
    </div>
  )
}

export default Home

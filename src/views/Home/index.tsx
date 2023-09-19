import React, { useState } from 'react'
import '@/assets/home.less'
import { Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '@/store/themeSlice'
import { getData } from '@/api'
import { Demo } from '@/views/Home/type'

const Home: React.FC = () => {
  const theme = useSelector((state: RootStateType) => state.theme)
  const dispatch = useDispatch()

  const [count, setCount] = useState(new Demo())

  console.log(count, count.getRequestBody())

  const [state, setState] = useState({})
  const getTheme = async () => {
    const res = await getData()
    console.log(res)
    setState(res)
  }

  return (
    <div>
      <Button onClick={() => dispatch(toggleTheme())}>切换主题</Button>
      <Button type={'primary'} onClick={() => getTheme()}>
        请求
      </Button>
      <div>{JSON.stringify(state)}</div>
      <div className={`h-96`}></div>
      <div className={`h-96`}></div>
      <div className={`h-96`}></div>
      <div className={`h-96`}></div>
      <h1 className="text-3xl font-bold underline bg-sky-500">{theme}</h1>
    </div>
  )
}

export default Home

import React, {useState} from 'react'
import '@/assets/home.less'
import {Button} from 'antd'
import {useSelector, useDispatch} from 'react-redux'
import {toggleTheme} from '@/store/themeSlice'
import {getData} from '@/api'


const Home: React.FC = () => {
  const theme = useSelector((state: RootStateType) => state.theme)
  const dispatch = useDispatch()

  const [state, setState] = useState({})
  const getTheme = () => {
    getData().then(res => {
      console.log(res)
      setState(res)
    })
  }

  return (
      <div>
        <Button onClick={() => dispatch(toggleTheme())}>切换主题</Button>
        <Button type={'primary'} onClick={() => getTheme()}>请求</Button>
        <div>{JSON.stringify(state)}</div>
        <h1 className="text-3xl font-bold underline bg-sky-500">{theme}</h1>
      </div>
  )
}

export default Home

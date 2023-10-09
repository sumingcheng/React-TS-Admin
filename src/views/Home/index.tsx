import React from 'react'
import '@/assets/home.less'
import { Button } from 'antd'
// import { useDispatch } from 'react-redux'
import { getData } from '@/api'
import { Demo } from '@/views/Home/type'

const Home: React.FC = () => {
  // const theme = useSelector((state: RootStateType) => state.theme)
  // const dispatch = useDispatch()

  const [count, setCount] = useState<Demo>(new Demo())

  useEffect(() => {
    setCount(prevUser => {
      prevUser.code = '9999'
      return prevUser
    })
    console.log(count, count.getRequestBody())
  }, [])

  const [state, setState] = useState(null)
  const getTheme = async () => {
    const res = await getData()
    setState(res)
  }

  return (
    <div>
      <Button onClick={() => setState(null)}>清空数据</Button>
      <Button type={'primary'} onClick={() => getTheme()}>
        请求数据测试
      </Button>
      <div className={`mt-4`}>
        <pre>{state && JSON.stringify(state, null, 2)}</pre>
      </div>
      <div className={`h-96`}></div>
      <div className={`h-96`}></div>
      <div className={`h-96`}></div>
      <div className={`h-96`}></div>
    </div>
  )
}

export default Home

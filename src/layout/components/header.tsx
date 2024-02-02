import React, { FC } from 'react'
import { Header } from 'antd/es/layout/layout'
import '@/assets/layout.less'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/rootReducer'

const App: FC = () => {
  const name = useSelector((state: RootState) => state.urlParams.name) // 获取name

  return (
    <Header className="app-header">
      <div className={'title'}>{name}</div>
      <div></div>
      {/*<div>配置项</div>*/}
    </Header>
  )
}
export default App

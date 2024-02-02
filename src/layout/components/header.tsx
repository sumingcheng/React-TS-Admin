import React, { FC } from 'react'
import { Header } from 'antd/es/layout/layout'
import '@/assets/layout.less'

const App: FC = () => {
  return (
    <Header className="app-header">
      <div className={'title'}>smc</div>
      <div></div>
      {/*<div>配置项</div>*/}
    </Header>
  )
}
export default App

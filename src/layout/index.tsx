import React, {useState} from 'react'
import {Layout, Watermark, theme} from 'antd'
import {Outlet} from 'react-router-dom'
import BreadCrumbs from '@/layout/breadCrumbs'
import Sidebar from '@/layout/sidebar'
import LayoutHeader from '@/layout/header'
import '@/assets/layout.less'

const {Header, Content} = Layout

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {token: {colorBgContainer}} = theme.useToken()

  return (
      <>
        <LayoutHeader/>
        <Layout style={{minHeight: '100vh'}}>
          <Sidebar collapsed={collapsed} onCollapse={setCollapsed}/>
          <Layout>
            <Header className="breadcrumbs-header">
              <BreadCrumbs/>
            </Header>
            <Watermark content="素明诚">
              <Content className="app-content" style={{background: colorBgContainer}}>
                <Outlet/>
              </Content>
            </Watermark>
          </Layout>
        </Layout>
      </>
  )
}

export default App

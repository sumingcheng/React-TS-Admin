import React, {useState} from 'react'
import {Layout, Watermark, theme} from 'antd'
import {Outlet} from 'react-router-dom'
import BreadCrumbs from '@/layout/components/breadCrumbs'
import Sidebar from '@/layout/components/sidebar'
import LayoutHeader from '@/layout/components/header'
import '@/assets/layout.less'

const {Header, Content} = Layout

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {token: {colorBgContainer}} = theme.useToken()

  return (
      <>
        <LayoutHeader/>
        <Layout>
          <Sidebar collapsed={collapsed} onCollapse={setCollapsed}/>
          <Layout className={`overflow-y-auto`}>
            <Header className="breadcrumbs-header">
              <BreadCrumbs/>
            </Header>
            <Content className="app-content" style={{background: colorBgContainer}}>
              <Watermark content="素明诚">
                <Outlet/>
              </Watermark>
            </Content>
          </Layout>
        </Layout>
      </>
  )
}

export default App

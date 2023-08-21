import React, { useState } from 'react'
import { Layout, theme, Watermark } from 'antd'
import { Outlet } from 'react-router-dom'
import BreadCrumbs from '@/layout/components/breadCrumbs'
import Sidebar from '@/layout/components/sidebar'
import LayoutHeader from '@/layout/components/header'
import '@/assets/layout.less'

const { Header, Content } = Layout

interface Props {
  children?: React.ReactNode
}

const App: React.FC<Props> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <>
      <LayoutHeader />
      <Layout>
        <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />
        <Layout className={`overflow-y-auto`}>
          <Header className="breadcrumbs-header">
            <BreadCrumbs />
          </Header>
          <Content
            className="app-content relative"
            style={{ background: colorBgContainer }}>
            <Watermark content="素明诚">
              <Outlet />
            </Watermark>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default App

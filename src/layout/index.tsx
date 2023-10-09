import React from 'react'
import { Layout, theme, Watermark } from 'antd'
import { Outlet } from 'react-router-dom'
import BreadCrumbs from '@/layout/breadCrumbs'
import Sidebar from '@/layout/sidebar'
import LayoutHeader from '@/layout/header'
import '@/assets/layout.less'
import { Props } from '@/layout/type'

const { Header, Content } = Layout

const App: React.FC<Props> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <>
      <LayoutHeader />
      <Watermark content="SMC">
        <Layout>
          <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />
          <Layout className={`overflow-y-auto`}>
            <Header className="breadcrumbs-header">
              <BreadCrumbs />
            </Header>
            <Content className="app-content relative" style={{ background: colorBgContainer }}>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Watermark>
    </>
  )
}

export default App

import React, { FC } from 'react'
import { Layout, theme } from 'antd'
import { Outlet } from 'react-router-dom'
import LayoutHeader from '@/layout/components/header'
import '@/assets/layout.less'
import { Props } from '@/layout/type'
import HandleURLParams from '@/utils/HandleURLParams'

const { Header, Content } = Layout

const App: FC<Props> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <>
      <LayoutHeader />
      {/*<Sidebar collapsed={collapsed} onCollapse={setCollapsed} />*/}
      <Layout className={`overflow-y-auto`}>
        {/*<Header className="breadcrumbs-header">/!*<BreadCrumbs />*!/</Header>*/}
        <Content className="app-content relative" style={{ background: colorBgContainer }}>
          <Outlet />
        </Content>
      </Layout>
    </>
  )
}

export default App

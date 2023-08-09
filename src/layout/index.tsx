import React, {useState} from 'react'
import {UserOutlined, PieChartOutlined, DesktopOutlined, TeamOutlined, FileOutlined} from '@ant-design/icons'
import {Layout, Menu, theme, Watermark} from 'antd'
import {MenuItem, getItem} from '@/layout/type'
import BreadCrumbs from '@/layout/breadCrumbs'

const {Header, Content, Sider} = Layout

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined/>),
  getItem('Option 2', '2', <DesktopOutlined/>),
  getItem('User', 'sub1', <UserOutlined/>, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined/>, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined/>),
]

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {token: {colorBgContainer}} = theme.useToken()

  return (
      <>
        <Header className={`px-4 flex items-center justify-between text-white bg-#001529`}>
          <div>smc</div>
          <div></div>
          <div>配置项</div>
        </Header>
        <Layout style={{minHeight: '100vh'}}>
          <Sider breakpoint="lg" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="h-16">4484915615646</div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/>
          </Sider>
          <Layout>
            <Header style={{padding: 0, background: colorBgContainer}}>
              <BreadCrumbs/>
            </Header>
            <Watermark content="素明诚">
              <Content
                  style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    background: colorBgContainer,
                  }}
              >
              </Content>
            </Watermark>
          </Layout>
        </Layout>
      </>
  )
}

export default App

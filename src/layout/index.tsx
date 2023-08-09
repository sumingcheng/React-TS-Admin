import React, {useState} from 'react'
import {MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined} from '@ant-design/icons'
import {Layout, Menu, Button, theme, Watermark} from 'antd'

const {Header, Sider, Content} = Layout

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: {colorBgContainer},
  } = theme.useToken()

  return (
      <Layout style={{minHeight: '100vh'}}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="demo-logo-vertical"/>
          <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              items={[
                {
                  key: '1',
                  icon: <UserOutlined/>,
                  label: 'nav 1',
                },
                {
                  key: '2',
                  icon: <VideoCameraOutlined/>,
                  label: 'nav 2',
                },
                {
                  key: '3',
                  icon: <UploadOutlined/>,
                  label: 'nav 3',
                },
              ]}
          />
        </Sider>
        <Layout>
          <Header style={{padding: 0, background: colorBgContainer}}>
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
            />
          </Header>
          <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
              }}
          >
            <Watermark content="素明诚"/>
          </Content>
        </Layout>
      </Layout>
  )
}

export default App

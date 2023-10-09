import React from 'react'
import { Menu, MenuProps } from 'antd'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons'
import Slider from 'antd/es/layout/Sider'
import { useNavigate } from 'react-router-dom'
import { getItem, MenuItem } from '@/layout/type'

const items: MenuItem[] = [
  getItem('首页', '/', <PieChartOutlined />),
  getItem('detail', '/detail', <DesktopOutlined />),
  getItem('User', '/user', <UserOutlined />),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />)
]

const Sidebar: React.FC<{
  collapsed: boolean
  onCollapse: (value: boolean) => void
}> = ({ collapsed, onCollapse }) => {
  const navigate = useNavigate()
  const onClick: MenuProps['onClick'] = e => {
    console.log(e.key)
    navigate(e.key)
  }

  return (
    <Slider
      className="sidebar-menu"
      breakpoint="lg"
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}>
      <Menu
        onClick={onClick}
        theme="light"
        defaultSelectedKeys={['1']}
        mode="inline"
        items={items}
      />
    </Slider>
  )
}

export default Sidebar

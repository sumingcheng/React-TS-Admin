import React, { FC } from 'react'
import { Breadcrumb } from 'antd'

const App: FC = () => (
  <Breadcrumb
    className={`text-sm`}
    separator=">"
    items={[
      {
        title: 'Home'
      },
      {
        title: 'Application Center',
        href: ''
      },
      {
        title: 'Application List',
        href: ''
      },
      {
        title: 'An Application'
      }
    ]}
  />
)

export default App

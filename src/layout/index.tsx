import React from 'react'
import Watermark from './watermark'

const Layout: React.FC = () => {
  return (
      <div>
        <Watermark text="素明诚" fontSize={14} visible={false}/>
        {/* 其他组件和内容 */}
      </div>
  )
}

export default Layout

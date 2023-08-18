import React, { StrictMode } from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import RootRouter from '@/router/index'
import rootReducer from '@/store/rootReducer'
import 'nprogress/nprogress.css'
import '@/assets/global/tailwind.css'
import '@/assets/global/normalize.less'

const store = configureStore({
  reducer: rootReducer
})

function Root() {
  return (
    <Provider store={store}>
      <StrictMode>
        <RootRouter />
      </StrictMode>
    </Provider>
  )
}

createRoot(document.getElementById('root')).render(<Root />)
// 动态设置标题
document.getElementsByTagName('title')[0].innerHTML =
  process.env.tabTitle

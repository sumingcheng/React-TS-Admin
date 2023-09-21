import React, { StrictMode } from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import rootReducer from '@/store/rootReducer'
import RootRoute from '@/router'
import 'nprogress/nprogress.css'
import '@/assets/global/tailwind.css'
import '@/assets/global/normalize.less'
import { setTitle } from '@/utils/dynamicSettings'

const store = configureStore({
  reducer: rootReducer
})

function Root() {
  return (
    <Provider store={store}>
      <StrictMode>
        <RootRoute />
      </StrictMode>
    </Provider>
  )
}

createRoot(document.getElementById('root')).render(<Root />)
// 设置标题
setTitle()

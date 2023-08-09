import React, {StrictMode} from 'react'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import {createRoot} from 'react-dom/client'
import rootReducer from '@/store/rootReducer'
import App from '@/router/index'
import '@/assets/tailwind.css'
import '@/assets/normalize.less'

const store = configureStore({
  reducer: rootReducer,
})

function Root() {
  return (
      <Provider store={store}>
        <StrictMode>
          <App/>
        </StrictMode>
      </Provider>
  )
}

createRoot(document.getElementById('root')).render(<Root/>)
// 动态设置标题
document.getElementsByTagName('title')[0].innerHTML = process.env.tabTitle

import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

// 使用 configureStore 创建 store，并将 rootReducer 传入
const store = configureStore({
  reducer: rootReducer
})

// 导出 AppDispatch 类型，代表 dispatch 函数的类型
export type AppDispatch = typeof store.dispatch

export default store

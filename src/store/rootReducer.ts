// 在 rootReducer.js 中
import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import cidReducer from './slices/cidSlice' // 导入cidReducer

const rootReducer = combineReducers({
  counter: counterReducer,
  cid: cidReducer // 添加cidReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

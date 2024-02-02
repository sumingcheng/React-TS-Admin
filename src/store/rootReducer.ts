// 在 rootReducer.js 中
import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import urlParamsReducer from './slices/urlParamsSlice' // 导入cidReducer

const rootReducer = combineReducers({
  counter: counterReducer,
  urlParams: urlParamsReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

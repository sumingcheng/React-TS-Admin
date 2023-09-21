import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'

// 使用 combineReducers 组合所有的 reducers
const rootReducer = combineReducers({
  counter: counterReducer // 将 counterSlice 的 reducer 放入 'counter' key 下
})

// 导出 RootState 类型，代表整个应用的 state 类型
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

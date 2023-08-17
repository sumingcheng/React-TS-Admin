// combineReducers 可以将多个 reducer 函数合并成一个 rootReducer
import { combineReducers } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'

const rootReducer = combineReducers({
  // 这意味着你可以使用 state.theme 来访问 themeReducer 管理的状态
  theme: themeReducer
})

export default rootReducer

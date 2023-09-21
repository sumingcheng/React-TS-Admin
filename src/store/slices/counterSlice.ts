import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// 定义 counter state 的接口
interface CounterState {
  value: number
}

// 初始化 state 的默认值
const initialState: CounterState = {
  value: 0
}

// 使用 createSlice 创建一个 slice，包含 reducers 和 actions
export const counterSlice = createSlice({
  name: 'counter', // slice 的名称
  initialState, // 初始状态
  reducers: {
    // reducers 定义
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    // 使用 PayloadAction 定义 action 的 payload 类型
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

// 导出 actions 以供组件使用
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// 导出 selector 以供组件使用来选择 state
export const selectCount = (state: { counter: CounterState }) =>
  state.counter.value

// 导出 reducer 供 store 使用
export default counterSlice.reducer

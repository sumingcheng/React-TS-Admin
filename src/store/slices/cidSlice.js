// 在slices/cidSlice.js中
import { createSlice } from '@reduxjs/toolkit'

export const cidSlice = createSlice({
  name: 'cid',
  initialState: {
    value: ''
  },
  reducers: {
    setCid: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setCid } = cidSlice.actions
export default cidSlice.reducer

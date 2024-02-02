// 在slices/urlParamsSlice.js中
import { createSlice } from '@reduxjs/toolkit'

export const urlParamsSlice = createSlice({
  name: 'urlParams',
  initialState: {
    cid: '',
    name: ''
  },
  reducers: {
    setCid: (state, action) => {
      state.cid = action.payload
    },
    setName: (state, action) => {
      state.name = action.payload
    }
  }
})

export const { setCid, setName } = urlParamsSlice.actions
export default urlParamsSlice.reducer

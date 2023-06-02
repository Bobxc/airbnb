import { createSlice } from '@reduxjs/toolkit'

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    count: 8,
  },
  reducers: {},
})

export default homeSlice.reducer

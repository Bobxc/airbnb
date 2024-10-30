import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './home'
import entireReducer from './entire'
import detailReducer from './detail'

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer
  }
})

export default store

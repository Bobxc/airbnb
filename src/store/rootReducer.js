import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import homeReducer from './home'
import entireReducer from './entire'
import detailReducer from './detail'

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  home: homeReducer,
  entire: entireReducer,
  detail: detailReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer

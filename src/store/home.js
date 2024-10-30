import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecommendData, getHomeLongforData, getHomePlusData } from '@/services/modules/home'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeGoodPriceDataAction = createAsyncThunk('fetchHomeGoodPriceData', async () => {
  return await getHomeGoodPriceData()
})

export const fetchHomeHighScoreDataAction = createAsyncThunk('fetchHomeHighScoreData', async () => {
  return await getHomeHighScoreData()
})

export const fetchHomeDisCountDataAction = createAsyncThunk('fetchHomeDisCountData', async () => {
  return await getHomeDiscountData()
})

export const fetchHomeRecommendDataAction = createAsyncThunk('fetchHomeRecommendData', async () => await getHomeHotRecommendData())

export const fetchHomeLongforDataAction = createAsyncThunk('fetchLongforData', async () => await getHomeLongforData())

export const fetchHomePlusDataAction = createAsyncThunk('fetchHomePlusData', async () => await getHomePlusData())

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {}
  },
  // reducers: {
  //   changeGoodPriceInfoAction(state, { payload }) {
  //     state.goodPriceInfo = payload
  //   }
  // },
  // extraReducers: {
  //   [fetchHomeDataAction.fulfilled](state, { payload }) {
  //     state.goodPriceInfo = payload
  //   }
  // }
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeGoodPriceDataAction.fulfilled, (state, { payload }) => {
        state.goodPriceInfo = payload
      })
      .addCase(fetchHomeHighScoreDataAction.fulfilled, (state, { payload }) => {
        state.highScoreInfo = payload
      })
      .addCase(fetchHomeDisCountDataAction.fulfilled, (state, { payload }) => {
        state.discountInfo = payload
      })
      .addCase(fetchHomeRecommendDataAction.fulfilled, (state, { payload }) => {
        state.recommendInfo = payload
      })
      .addCase(fetchHomeLongforDataAction.fulfilled, (state, { payload }) => {
        state.longforInfo = payload
      })
      .addCase(fetchHomePlusDataAction.fulfilled, (state, { payload }) => {
        state.plusInfo = payload
      })
  }
})

// export const { changeGoodPriceInfoAction } = homeSlice.reducer

export default homeSlice.reducer

import React, { memo, useEffect } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  fetchHomeDisCountDataAction,
  fetchHomeGoodPriceDataAction,
  fetchHomeHighScoreDataAction,
  fetchHomeLongforDataAction,
  fetchHomePlusDataAction,
  fetchHomeRecommendDataAction
} from '@/store/home'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyO } from '@/utils'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV3 from './c-cpns/home-section-v3'
import HomeLongfor from './c-cpns/home-longfor'

const Home = memo(() => {
  const { discountInfo, recommendInfo, longforInfo, goodPriceInfo, highScoreInfo, plusInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeGoodPriceDataAction())
    dispatch(fetchHomeHighScoreDataAction())
    dispatch(fetchHomeDisCountDataAction())
    dispatch(fetchHomeRecommendDataAction())
    dispatch(fetchHomeLongforDataAction())
    dispatch(fetchHomePlusDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}
        {isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo} />}
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
      {/* <div className="content">{isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}</div> */}
    </HomeWrapper>
  )
})

export default Home

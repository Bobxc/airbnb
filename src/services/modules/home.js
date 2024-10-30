import bobxRequest from '..'

export function getHomeGoodPriceData() {
  return bobxRequest.get({
    url: '/home/goodprice'
  })
}

export function getHomeHighScoreData() {
  return bobxRequest.get({
    url: '/home/highscore'
  })
}

export function getHomeDiscountData() {
  return bobxRequest.get({
    url: '/home/discount'
  })
}

export function getHomeHotRecommendData() {
  return bobxRequest.get({
    url: '/home/hotrecommenddest'
  })
}

export function getHomeLongforData() {
  return bobxRequest.get({
    url: '/home/longfor'
  })
}

export function getHomePlusData() {
  return bobxRequest.get({
    url: '/home/plus'
  })
}

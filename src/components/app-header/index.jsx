import React, { memo } from 'react'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/haader-center'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper } from './style'

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  )
})

export default AppHeader

import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false)

  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false)
    }
    window.addEventListener('click', windowHandleClick, true)
    return () => {
      window.removeEventListener('click', windowHandleClick, true)
    }
  }, [])

  function profileClickHandle() {
    setShowPanel(true)
  }
  return (
    <RightWrapper>
      <div className="btns">
        <div className="btn">登录</div>
        <div className="btn">注册</div>
        <div className="btn">
          <IconGlobal />
        </div>
      </div>
      <div className="profile" onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">展开体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight

import bobxRequest from '@/services'
import React, { memo, useEffect } from 'react'

const Home = memo(() => {

  useEffect(() => {
    bobxRequest.get({
      url: '/home/highscore'
    }).then(res => {
      console.log('res', res)
    })
  }, [])
  return (
    <div>Home</div>
  )
})

export default Home
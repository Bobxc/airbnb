import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/entire/createActions'
import EntrieFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'

const Entrie = memo(() => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRoomListAction())
  }, [dispatch])
  return (
    <EntireWrapper>
      <EntrieFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entrie

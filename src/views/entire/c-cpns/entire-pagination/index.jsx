import React, { memo } from 'react'
import { PaginationWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Pagination } from '@mui/material'
import { fetchRoomListAction } from '@/store/entire/createActions'

const EntirePagination = memo(() => {
  const { totalCount, roomList, currentPage } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      roomList: state.entire.roomList,
      currentPage: state.entire.currentPage
    }),
    shallowEqual
  )

  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  const dispatch = useDispatch()
  function pageChangeHandle(e, pageCount) {
    dispatch(fetchRoomListAction(pageCount - 1))
  }
  return (
    <PaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination count={totalPage} onChange={pageChangeHandle} />
          <div className="desc">
            第{startCount} - {endCount} 个房源，共超过 {totalCount} 个
          </div>
        </div>
      )}
    </PaginationWrapper>
  )
})

export default EntirePagination

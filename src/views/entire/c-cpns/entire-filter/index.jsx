import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

const EntrieFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([])

  function itemClickHandle(item) {
    const newItems = [...selectItems]
    if (newItems.includes(item)) {
      const itemIndex = newItems.findIndex((filterItem) => filterItem === item)
      newItems.splice(itemIndex, 1)
    } else {
      newItems.push(item)
    }
    setSelectItems(newItems)
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item) => (
          <div className={classNames('item', { active: selectItems.includes(item) })} key={item} onClick={() => itemClickHandle(item)}>
            {item}
          </div>
        ))}
      </div>
    </FilterWrapper>
  )
})

export default EntrieFilter

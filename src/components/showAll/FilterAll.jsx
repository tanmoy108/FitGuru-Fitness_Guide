import React from 'react'
import AllItem from './AllItem'

const FilterAll = ({Arr,condition,id}) => {
  return (
    <div className='item-container'>
    {
      Arr.filter((items, ids) => {
        return (
          condition === "true" ? ids < 4 && items.id !== id : ids<4
        )
      }).map((item, id) => {
        return (
          <AllItem key={id} item={item} />
        )
      })
    }
  </div>
  )
}

export default FilterAll

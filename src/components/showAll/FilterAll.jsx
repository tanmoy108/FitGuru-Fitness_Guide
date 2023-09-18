import React from 'react'
import AllItem from './AllItem'

const FilterAll = ({allExercise}) => {
  return (
    <div className='item-container'>
    {
      allExercise.filter((items, ids) => {
        return (
          ids < 4
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

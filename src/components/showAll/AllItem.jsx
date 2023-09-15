import React from 'react'

const AllItem = (props) => {
    const {item} = props;
  return (
    <div>
        <img src={item.gifUrl} alt={item.name} />
        <p>{item.bodyPart} {item.target}</p>
        <h4>{item.name}</h4>
    </div>
  )
}

export default AllItem
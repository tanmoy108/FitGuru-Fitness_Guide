import React from 'react'
import { useNavigate } from 'react-router-dom';

const AllItem = (props) => {
    const {item} = props;
    const navigate = useNavigate();
    const HandleClick =()=>{
      navigate(`/exercises/${item.id}`)
    }
  return (
    <div className='item-box' onClick={HandleClick} >
        <img src={item.gifUrl} alt={item.name} />
        <div className='item-label' >
        <p className='item-bodypart' >{item.bodyPart}</p>
        <p className='item-target' >{item.target}</p>
        </div>
        <h4>{item.name.toUpperCase()}</h4>
    </div>
  )
}

export default AllItem
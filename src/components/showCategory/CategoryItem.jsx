import React from 'react'
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';

const CategoryItem = (props) => {
    const {item,HandleCategory} = props;
  return (
    <>
    <div className="categoryBox" onClick={()=>HandleCategory(item)} >
        <FitnessCenterRoundedIcon sx={{mb:2}} fontSize="large" style={{color:"#ee2323"}}/>
        {item}
    </div>
    </>
  )
}

export default CategoryItem
import React from 'react'
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';

const CategoryItem = (props) => {
    const {item} = props;
    console.log(item);
  return (
    <>
    <div className="categoryBox">
        <FitnessCenterRoundedIcon sx={{mb:2}} fontSize="large" style={{color:"#ee2323"}}/>
        {item}
    </div>
    </>
  )
}

export default CategoryItem
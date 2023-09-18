import React from 'react'
import FilterAll from '../showAll/FilterAll'
import {Typography} from "@mui/material"
const SimilarCard = ({type,name,Arr,id}) => {
    return (
        <>
            <Typography sx={{fontSize:"1.5em"}} variant="h4" my={3} gutterBottom>
                Similar Exercise of <span style={{ color: "#ee2323", fontWeight: "bold" }} >{name}</span> {type}
            </Typography>
            <FilterAll Arr={Arr} condition={"true"} id={id} />
        </>
    )
}

export default SimilarCard
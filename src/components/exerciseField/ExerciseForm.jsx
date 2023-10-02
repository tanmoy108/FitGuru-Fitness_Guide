import {React,useState} from 'react'
import { Stack,TextField} from "@mui/material"
import "./ExerciseForm.scss"
import ShowCategoryBody from '../showCategory/ShowCategoryBody';
import { exerciseText } from '../../redux/excersiseText/excerciseTextAction';
import { useDispatch } from "react-redux";
const ExerciseForm = () => {
    const dispatch = useDispatch()
    const [search,setSearch] = useState("");

    const HandleChange = (e) =>{
        setSearch(e.target.value);
    }

    const HandleSubmit = () =>{
        dispatch(exerciseText(search.toLowerCase()));
    }

    return (
        <>
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            my={5}>
            <h2 style={{textAlign:"center",marginTop:"50px"}} >Awesome Exercises You
                Should Know</h2>
            <Stack direction={{md:"row",xs:"column"}} >
            <TextField id="outlined-basic" label="Search Exercises" variant="outlined" sx={{width:{lg:'500px'}}} value={search} onChange={HandleChange} />
            <button className="form-button" onClick={HandleSubmit}>Submit</button>
            </Stack>
        </Stack>
        <ShowCategoryBody/>
        </>
    )
}

export default ExerciseForm
import {React,useState} from 'react'
import { Stack,TextField} from "@mui/material"
import "./ExerciseForm.scss"
import ShowCategoryBody from '../showCategory/ShowCategoryBody';
const ExerciseForm = () => {

    const [search,setSearch] = useState("");

    const HandleChange = (e) =>{
        setSearch(e.target.value);
    }

    const HandleSubmit = () =>{
        console.log(search);
    }

    return (
        <>
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            my={5}>
            <h2 style={{textAlign:"center"}} >Awesome Exercises You
                Should Know</h2>
            <Stack direction="row">
            <TextField id="outlined-basic" label="Search Exercises" variant="outlined" sx={{width:{lg:'500px'}}} value={search} onChange={HandleChange} />
            <button className="form-button" onClick={HandleSubmit}>Submit</button>
            </Stack>
        </Stack>
        <ShowCategoryBody/>
        </>
    )
}

export default ExerciseForm
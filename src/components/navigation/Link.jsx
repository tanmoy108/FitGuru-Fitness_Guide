import React from 'react'
import {Stack,Typography} from '@mui/material'
import {Link,useNavigate} from "react-router-dom"
const LinkNav = (props) => {
    const {fontcolor} = props;
    const navigate = useNavigate();
  return (
    <Stack
                direction="row"
                justifyContent="space-between"
            >
                <Typography
                    variant="h5"
                    onClick={() => navigate("/")}
                    sx={{color:fontcolor === "true" ? "black" : "#fff",my:3}}
                >
                    Fitness
                </Typography>
                <Stack
                direction="row"
                spacing={{md:8, xs:3}}
                sx={{my:4}}
                >
                    <Link to="/" style={{color:fontcolor === "true" ? "black" : "white", textDecoration: "none", textTransform: 'uppercase',fontWeight:"bold" }} >
                        Home
                    </Link>
                    <Link to="/exercises" style={{color:fontcolor === "true" ? "black" : "white", textDecoration: "none", textTransform: 'uppercase',fontWeight:"bold"  }} >
                        Exercises
                    </Link>
                </Stack>
            </Stack>
  )
}

export default LinkNav
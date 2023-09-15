import React from "react"
import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom"
import {
    Typography,
    Stack,
    Container
} from "@mui/material";
import "./Navigation.css";


const Navigation = () => {
    const navigate = useNavigate();
    return (
        <div className="header-img" >
            <Container maxWidth="lg">
            <Stack
                direction="row"
                justifyContent="space-between"
            >
                <Typography
                    variant="h5"
                    onClick={() => navigate("/")}
                    sx={{color:'#fff',my:3}}
                >
                    Fitness
                </Typography>
                <Stack
                direction="row"
                spacing={{md:8, xs:3}}
                sx={{my:4}}
                >
                    <Link to="/" style={{color:"white", textDecoration: "none", textTransform: 'uppercase',fontWeight:"bold" }} >
                        Home
                    </Link>
                    <Link to="/exercises" style={{color:"white", textDecoration: "none", textTransform: 'uppercase',fontWeight:"bold"  }} >
                        Exercises
                    </Link>
                </Stack>
            </Stack>
            <Outlet />
        </Container>
        </div>
    )
}

export default Navigation;
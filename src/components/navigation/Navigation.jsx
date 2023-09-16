import React from "react";
import { Outlet } from "react-router-dom";
import {
    Container
} from "@mui/material";
import "./Navigation.css";
import LinkNav from "./Link"

const Navigation = () => {
    return (
        <div className="header-img" >
            <Container maxWidth="lg">
                <LinkNav />
                <Outlet />
            </Container>
        </div>
    )
}

export default Navigation;
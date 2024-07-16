import React from "react";
import Header from "./header";
import { Container, Grid } from "@mui/material";
import SideNav from "./sidenav";
import URoutes  from "./routes";

export default function UserHP(){
    return (
        <>
        <Header/>
        <Container>
            <Grid container spacing={2}>
                <Grid item md={3}><SideNav/></Grid>
                <Grid item md={9}><URoutes/></Grid>
            </Grid>
        </Container>
        </>
    )
} 
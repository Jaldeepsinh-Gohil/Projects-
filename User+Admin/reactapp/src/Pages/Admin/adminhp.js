import React from "react";
import { Container, Grid } from "@mui/material";
import Aheader from "./aheader";
import AsideNav from "./asidenav";
import Aroutes from "./aroutes";


export default function AdminHP(){
    return (
        <>
        <Aheader/>
        <Container>
            <Grid container spacing={2}>
                <Grid item md={3}><AsideNav/></Grid>
                <Grid item md={9}><Aroutes/></Grid>
            </Grid>
        </Container>
        </>
    )
} 
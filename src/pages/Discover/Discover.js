import React, { useState } from "react";
import { Button, Container, Grid, Fab, Stack } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import AddIcon from "@mui/icons-material/Add";

import { useNavigate } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import HackathonCard from "../../components/HackathonCard/HackathonCard";
import InternshipCard from "../../components/InternshipCard/InternshipCard";

import "./Discover.css";

const Discover = () => {
    
    const nav = useNavigate();
    const [filterOption, setFilterOption] = useState({
        Internship: true,
        Hackathon: true,
        Projects: true,
    });
    return (
        <div>
            <NavBar />
            <Container>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <h3>Discover</h3>
                    <Button
                        size="small"
                        variant="contained"
                        startIcon={<FilterAltOutlinedIcon />}
                        style={{
                            color: "black",
                            backgroundColor: "#C4C4C4",
                        }}
                    >
                        Filter
                    </Button>
                </Grid>

                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    className="filter-box"
                >
                    <Stack spacing={2}>
                        <span>Post Type</span>
                        <span>Post Type</span>
                        <span>Post Type</span>
                        <span>Post Type</span>
                    </Stack>
                    <Stack spacing={2}>
                        <span>Colleges</span>
                        <span>All Colleges</span>
                        <span>Only My College</span>
                    </Stack>
                </Grid>

                <Fab
                    variant="extended"
                    color="primary"
                    style={{
                        position: "fixed",
                        bottom: "4rem",
                        right: "12rem",
                        zIndex: 1,
                        color: "white",
                    }}
                    onClick={() => {
                        nav("/newpost");
                    }}
                >
                    <AddIcon sx={{ mr: 1 }} />
                    Create
                </Fab>
                <Grid container direction="row">
                    <Grid item xs={12} md={6} lg={4} className="cardSpace">
                        <ProjectCard />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} className="cardSpace">
                        <InternshipCard />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} className="cardSpace">
                        <HackathonCard />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} className="cardSpace">
                        <ProjectCard />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} className="cardSpace">
                        <ProjectCard />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Discover;

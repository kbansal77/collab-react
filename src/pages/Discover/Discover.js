import React from "react";
import { Button, Container, Grid, Fab } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import AddIcon from '@mui/icons-material/Add';

import { useNavigate } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import HackathonCard from "../../components/HackathonCard/HackathonCard";
import InternshipCard from "../../components/InternshipCard/InternshipCard";

import "./Discover.css";

const Discover = () => {
  const nav = useNavigate()
  return (
    <div
      style={{
        marginBottom: "5vh",
      }}
    >
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
        <Fab variant="extended" color="primary" style={{
          position: 'fixed',
          bottom: "4rem",
          right: "12rem",
          zIndex:1
        }}
        onClick={()=>{nav("/newpost")}}
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

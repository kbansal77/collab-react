import React, { useState } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

import "./NavBar.css";

const NavBar = () => {
  return (
    <Container
      style={{
        marginTop: "5px",
      }}
    >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <h1 className="collab">COLLAB</h1>
          <Button
            className="lbtn"
            variant="outlined"
            startIcon={<AccountCircleRoundedIcon />}
          >
            Log In
          </Button>
        </Grid>
    </Container>
  );
};

export default NavBar;

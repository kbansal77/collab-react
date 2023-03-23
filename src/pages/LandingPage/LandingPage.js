import React from "react";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import NavBar from "../../components/NavBar/NavBar";
import Landing from "../../images/Landing.svg";
import "./LandingPage.css";

import { useAuth } from "../../contexts/AuthContext";

import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();
    const { isNewUser, Gsignup } = useAuth();

    async function loginhandler(e) {
        e.preventDefault();
        await Gsignup();
        console.log(isNewUser);
        navigate("/discover");
    }

    return (
        <Grid>
            <NavBar />
            <Container>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                    style={{
                        height: "90vh",
                    }}
                >
                    <Grid item xs={12} md={6}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-start"
                        >
                            <h2>Connect, Collaborate, Create</h2>
                            <Button
                                variant="contained"
                                style={{
                                    // margin:"0 auto",
                                    color: "white",
                                    borderRadius: "50px",
                                }}
                                onClick={loginhandler}
                            >
                                Get Started
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={Landing} width="100%" />
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};

export default LandingPage;

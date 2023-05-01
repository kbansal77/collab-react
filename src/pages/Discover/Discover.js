import React, { useState, useEffect } from "react";
import { Button, Container, Grid, Fab, Stack } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import AddIcon from "@mui/icons-material/Add";

import { Navigate, useNavigate } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import axios from "axios";

import "./Discover.css";
import { getAuth } from "firebase/auth";

const Discover = () => {
    const { currentUser } = getAuth();
    const nav = useNavigate();
    const [userData, setUserData] = useState([]);
    const [filteredData, setFilteredData] = useState([])
    const [filterOption, setFilterOption] = useState({
        Internship: true,
        Hackathon: true,
        Projects: true,
    });
    const [isData, setIsData] = useState(true);
    const checkUserDetails = () => {
        axios
            .get(`http://127.0.0.1:8000/user/${currentUser.email}`)
            .then((res) => {
                console.log(res.data);
                // if (
                //     res.data["college"] === "" ||
                //     res.data["github"] === "" ||
                //     res.data["graduating_year"] === "" ||
                //     res.data["linkedin"] === "" ||
                //     res.data["resume"] === ""
                // ) {
                //     nav("/editprofile");
                // }
                setUserData(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    const validatePost = (post) => {
        if (post["created_by"] === currentUser["email"]) return false;
        if (
            Number(userData["graduating_year"]) < Number(post["batch"][0]) ||
            Number(userData["graduating_year"] > post["batch"][1])
        )
            return false;
        if (
            post["college"] === "All Colleges" ||
            post["college"] === userData["college"]
        )
            return true;
        return false;
    };

    const [data, setData] = useState([]);
    useEffect(() => {
        // Update the document title using the browser API
        checkUserDetails()
        
        getData();

        // setData(response)
    }, []);
    useEffect(()=>{
        if(data.length > 0){
            console.log("line 75")
            const newPosts = data.filter(validatePost)
            setFilteredData(newPosts)
        }
    }, [ data])

    console.log("filteredData", filteredData)

    const getData = () => {
        axios.get(`http://127.0.0.1:8000/post/`).then((res) => {
            // const filteredData = res.data.filter(validatePost);
            // console.log(filteredData);
            setData(res.data);
        });
    };
    console.log(data);
    console.log(userData);

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
                    {/* <Button
                        size="small"
                        variant="contained"
                        startIcon={<FilterAltOutlinedIcon />}
                        style={{
                            color: "black",
                            backgroundColor: "#C4C4C4",
                        }}
                    >
                        Filter
                    </Button> */}
                </Grid>

                {/* <Grid
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
                </Grid> */}

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
                    {!data ? (
                        <Backdrop
                            sx={{
                                color: "#fff",
                                zIndex: (theme) => theme.zIndex.drawer + 1,
                            }}
                            open={!data ? true : false}
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    ) : (
                        <></>
                    )}
                    {filteredData &&
                        userData &&
                        filteredData.map((post, i) => {
                            return (
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    lg={4}
                                    className="cardSpace"
                                    key={i}
                                >
                                    <ProjectCard
                                        key={i}
                                        data={post}
                                        getData={getData}
                                        user={currentUser}
                                    />
                                </Grid>
                            );
                        })}
                    {!isData ? (
                        <span>No Post for your qualification available</span>
                    ) : (
                        ""
                    )}
                </Grid>
            </Container>
        </div>
    );
};

export default Discover;

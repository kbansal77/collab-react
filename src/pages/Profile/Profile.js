import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import PropTypes from "prop-types";
import {
    Container,
    Grid,
    Tabs,
    Tab,
    Box,
    Typography,
    Avatar,
    Button,
} from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import ProjectCard from "../../components/ProjectCard/ProjectCard";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const Profile = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(0);
    const { currentUser, Gsignup } = useAuth();
    const [data, setData] = useState({
        id: "",
        name: "",
        photoURL: "",
        posts_created: [],
        posts_applied: [],
        posts_saved: [],
        email: "",
        graduating_year: "",
        degree: "",
        college: "",
        resume: "",
        linkedin: "",
        blogs: "",
        website: "",
        describe: "",
        github: "",
    });
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        // Update the document title using the browser API
        getData();

        // setData(response)
    }, []);

    const getData = () => {
        axios
            .get(`http://127.0.0.1:8000/user/${currentUser.email}/`)
            .then((res) => {
                setData(res.data);
            });
    };
    console.log(data);

    return (
        <>
            <NavBar />
            <Container>
                {data["name"] !== "" ? (
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="flex-start"
                    >
                        <Grid items md={3}>
                            <Grid
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Avatar
                                    alt={data["name"]}
                                    src={data["photoURL"]}
                                    sx={{ width: 150, height: 150 }}
                                />
                                <h3>{data["name"]}</h3>
                                <h4>{data["email"]}</h4>
                                <Button
                                    variant="outlined"
                                    fullWidth
                                    onClick={() => navigate("/editprofile")}
                                >
                                    Edit Profile
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid items md={9}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="fullWidth"
                                aria-label="basic tabs example"
                            >
                                <Tab label="Posts Created" {...a11yProps(0)} />
                                <Tab label="Saved Posts" {...a11yProps(1)} />
                                <Tab label="Applied Posts" {...a11yProps(2)} />
                            </Tabs>
                            <TabPanel value={value} index={0}>
                                <Grid container direction="row">
                                    {data["posts_created"] ? (
                                        data["posts_created"].map((post) => {
                                            return (
                                                <Grid
                                                    item
                                                    xs={12}
                                                    md={6}
                                                    className="cardSpace"
                                                >
                                                    <ProjectCard
                                                        data={post}
                                                        getData={getData}
                                                        user={currentUser}
                                                    />
                                                </Grid>
                                            );
                                        })
                                    ) : (
                                        <></>
                                    )}
                                </Grid>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                {data["posts_saved"] ? (
                                    data["posts_saved"].map((post) => {
                                        return (
                                            <Grid
                                                item
                                                xs={12}
                                                md={6}
                                                className="cardSpace"
                                            >
                                                <ProjectCard
                                                    data={post}
                                                    getData={getData}
                                                    user={currentUser}
                                                />
                                            </Grid>
                                        );
                                    })
                                ) : (
                                    <></>
                                )}
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                {data["posts_applied"] ? (
                                    data["posts_applied"].map((post) => {
                                        return (
                                            <Grid
                                                item
                                                xs={12}
                                                md={6}
                                                className="cardSpace"
                                            >
                                                <ProjectCard
                                                    data={post}
                                                    getData={getData}
                                                    user={currentUser}
                                                />
                                            </Grid>
                                        );
                                    })
                                ) : (
                                    <></>
                                )}
                            </TabPanel>
                        </Grid>
                    </Grid>
                ) : (
                    <Backdrop
                        sx={{
                            color: "#fff",
                            zIndex: (theme) => theme.zIndex.drawer + 1,
                        }}
                        open={!data["name"] ? true : false}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                )}
            </Container>
        </>
    );
};

export default Profile;

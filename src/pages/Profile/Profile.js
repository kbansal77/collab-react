import React, { useState } from "react";
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
    Button
} from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";

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
    const [value, setValue] = useState(0);
    const { currentUser, Gsignup } = useAuth();
    console.log(currentUser)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <NavBar />
            <Container>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid items md={3}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Avatar
                                alt={currentUser.displayName}
                                src={currentUser.photoURL}
                                sx={{ width: 200, height: 200 }}
                            />
                            <h3>{currentUser.displayName}</h3>
                            <h4>{currentUser.email}</h4>
                            <Button variant="outlined" fullWidth>Edit Profile</Button>
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
                            Item One
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item Two
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Item Three
                        </TabPanel>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Profile;

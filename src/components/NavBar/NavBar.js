import React, { useState } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

import "./NavBar.css";

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [anchorEl, setAnchorEl] = useState(null);
    const { currentUser, Gsignup, logout } = useAuth();

    async function loginhandler(e) {
        e.preventDefault();
        await Gsignup();
        navigate("/discover");
    }

    function handlelogout(e) {
        e.preventDefault();
        setAnchorEl(null);
        logout();
        navigate("/");
    }
    
    
    const open = Boolean(anchorEl);

    const navigateToProfile = () => {
        setAnchorEl(null);
        navigate("/profile");
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    return (
        <Container>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <h1 className="collab">COLLAB</h1>
                {/* <Button
            className="lbtn"
            variant="outlined"
            startIcon={<AccountCircleRoundedIcon />}
          >
            Log In
          </Button> */}
                {location.pathname === "/" ? (
                    <></>
                ) : currentUser ? (
                    <>
                        <Button
                            id="basic-button"
                            className="lbtn"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            variant="outlined"
                            startIcon={<AccountCircleRoundedIcon />}
                            onClick={handleClick}
                        >
                            Profile
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={()=>setAnchorEl(null)}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                        >
                            <MenuItem onClick={navigateToProfile}>
                                Profile
                            </MenuItem>
                            <MenuItem onClick={handlelogout}>
                                Logout
                            </MenuItem>
                        </Menu>
                    </>
                ) : (
                    <Button
                        id="basic-button"
                        className="lbtn"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        variant="outlined"
                        startIcon={<AccountCircleRoundedIcon />}
                        onClick={loginhandler}
                    >
                        Log In
                    </Button>
                )}
                {/* {currentUser ? (
                    <>
                        <Button
                            id="basic-button"
                            className="lbtn"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            variant="outlined"
                            startIcon={<AccountCircleRoundedIcon />}
                            onClick={()=>handleClick}
                        >
                            Profile
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={()=>setAnchorEl(null)}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                        >
                            <MenuItem onClick={()=>setAnchorEl(null)}>Profile</MenuItem>
                            <MenuItem onClick={()=>handlelogout}>Logout</MenuItem>
                        </Menu>
                    </>
                ) : location.pathname != "/" ? (
                    <Button
                        className="lbtn"
                        variant="outlined"
                        onClick={loginhandler}
                    >
                        Log In
                    </Button>
                ) : (
                    <></>
                )} */}
            </Grid>
        </Container>
    );
};

export default NavBar;

import React from "react";
import { Grid, Card, Button, Stack, Chip, Divider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./ProjectCard.css";

const ProjectCard = ({ data, user, getData }) => {
    const navigate = useNavigate();
    const deadline = new Date(data["deadline"]);

    const handleApplyPost = () =>{
        axios.put(`http://127.0.0.1:8000/post/apply/${data["id"]}/${user["email"]}/`).then((res)=>{
            console.log(res)
            getData()
        })
    }

    const handleSavePost = () =>{
        axios.put(`http://127.0.0.1:8000/post/save/${data["id"]}/${user["email"]}/`).then((res)=>{
            console.log(res)
            getData()
        })
    }

    const handleExpandPost = () =>{
        navigate(`/post/${data["id"]}`)
    }
    console.log(data);
    return (
        <Card
            style={{
                position: "relative",
                margin: "5px",
            }}
        >
            <CardMedia
                style={{
                    height:"30vh"
                }}
                component="img"
                alt="Card Image"

                image={data["cover"]}
            />
            <CardContent
                className="overlay"
                style={{
                    color: "white",
                }}
            >
                <Grid container direction="column">
                    <h2>{data["title"]}</h2>
                    <div>
                        <Stack
                            direction="row"
                            divider={
                                <Divider orientation="vertical" flexItem />
                            }
                            spacing={1}
                        >
                            <span>{data["post_type"]}</span>
                            {data["internship_stipend"] != "No" ? (
                                <span>Stipend</span>
                            ) : (
                                <></>
                            )}
                            {data["job_offer"] != "No" ? (
                                <span>Job Offer</span>
                            ) : (
                                <></>
                            )}
                        </Stack>

                        {user["email"] === data["created_by"] ? (
                            <></>
                        ) : (
                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="flex-end"
                            >
                                <IconButton
                                    style={{
                                        border: "1px solid #FD927E",
                                        backgroundColor: "white",
                                    }}
                                    size="large"
                                    className="btnoverlay"
                                    color="primary"
                                    aria-label="delete"
                                    onClick={handleSavePost}
                                >
                                    {data["saved_by"].includes(
                                        user["email"]
                                    ) ? (
                                        <BookmarkAddedIcon />
                                    ) : (
                                        <BookmarkAddIcon />
                                    )}
                                </IconButton>
                            </Grid>
                        )}
                    </div>
                </Grid>
            </CardContent>
            <CardContent>
                <Grid container direction="row">
                    {data["tech_stack"].map((tech, i) => {
                        return (
                            <Chip
                                className="tschip"
                                color="primary"
                                label={tech}
                                key = {i}
                            />
                        );
                    })}
                </Grid>
                <Stack direction="row" gap={3}>
                    <strong>Application Closes on:</strong>
                    <span>{deadline.toLocaleDateString()}</span>
                </Stack>
                <p className="sdisc">{data["project_description"]}</p>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    {user["email"] === data["created_by"] ? (
                        <>
                            <Button variant="outlined" onClick={handleExpandPost}>Expand To Edit</Button>
                        </>
                    ) : data["applied_by"].includes(user["email"]) ? (
                        <CardActions>
                            <Button variant="outlined" onClick={handleExpandPost}>Expand To Withdraw</Button>
                        </CardActions>
                    ) : (
                        <CardActions>
                            <Button variant="outlined" onClick={handleExpandPost}>
                                Expand To Apply
                            </Button>
                        </CardActions>
                    )}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;

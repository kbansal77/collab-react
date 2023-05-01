import {
    Card,
    Container,
    Grid,
    Button,
    Stack,
    Chip,
    Avatar,
    CardContent,
    CardMedia,
    IconButton,
    Tooltip,
    Badge,
    Divider,
} from "@mui/material";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { DataGrid } from "@mui/x-data-grid";
import React, { useState, useEffect } from "react";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import EditIcon from "@mui/icons-material/Edit";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import NavBar from "../../components/NavBar/NavBar";

import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";

import "./Projectpage.css";
import { getAuth } from "firebase/auth";

const Projectpage = ({ handleData }) => {
    const columns = [
        { field: "name", headerName: "Name", width: 230 },
        { field: "email", headerName: "Email", width: 230 },
        {
            field: "graduating_year",
            headerName: "Graduation Year",
            // type: "number",
            width: 100,
        },
        { field: "github", headerName: "Github", width: 90 },
        { field: "college", headerName: "College", width: 90 },
        { field: "linkedin", headerName: "LinkedIn", width: 90 },
        { field: "blogs", headerName: "Blogs", width: 90 },
        { field: "website", headerName: "Website", width: 90 },
        {
            field: "match",
            headerName: "Match Percentage",
            // type: "number",
            width: 90,
        },
    ];
    const rows = [];
    const navigate = useNavigate();
    const { currentUser } = getAuth();
    const location = useLocation();
    const [viewApplicants, setViewApplicants] = useState(false);
    const [applicantsData, setApplicantsData] = useState([]);
    const [data, setData] = useState();
    useEffect(() => {
        // Update the document title using the browser API
        getData();

        // setData(response)
    }, []);

    const getData = () => {
        axios
            .get(
                `http://127.0.0.1:8000/post/${location["pathname"].replace(
                    "/post/",
                    ""
                )}`
            )
            .then((res) => {
                setData(res.data);
            });
    };
    handleData(data);

    const handleSavePost = () => {
        axios
            .put(
                `http://127.0.0.1:8000/post/save/${data["id"]}/${currentUser["email"]}/`
            )
            .then((res) => {
                console.log(res);
                getData();
            });
    };
    const handleApplyPost = () => {
        axios
            .put(
                `http://127.0.0.1:8000/post/apply/${data["id"]}/${currentUser["email"]}/`
            )
            .then((res) => {
                console.log(res);
                getData();
            });
    };

    const getApplicants = () => {
        axios
            .get(`http://127.0.0.1:8000/post/${data["id"]}/applicants`)
            .then((res) => {
                setApplicantsData(res.data);
                if (res.data[0]) {
                    setViewApplicants(!viewApplicants);
                }
            });
    };
    let deadline;
    let startdate;
    if (data) {
        deadline = new Date(data["deadline"]);
        startdate = new Date(
            data["internship_start_date"]
        ).toLocaleDateString();
    }

    console.log(data);
    console.log(rows);
    return (
        <div
            style={{
                marginBottom: "5vh",
            }}
        >
            <NavBar />
            <Container>
                <Card
                    style={{
                        position: "relative",
                        margin: "5px",
                    }}
                >
                    {data ? (
                        <>
                            <CardMedia
                                className="resize"
                                component="img"
                                alt="Card Image"
                                image={data["cover"]}
                            />

                            <CardContent
                                className="overlay2"
                                style={{
                                    color: "white",
                                }}
                            >
                                <Grid container direction="row">
                                    <Grid item xs={8}>
                                        <h2>{data["title"]}</h2>

                                        <Stack
                                            direction="row"
                                            divider={
                                                <Divider
                                                    orientation="vertical"
                                                    flexItem
                                                />
                                            }
                                            spacing={1}
                                        >
                                            <span>{data["post_type"]}</span>
                                            {data["internship_stipend"] !=
                                            "No" ? (
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

                                        <br />
                                        <strong>Application Closes on: </strong>
                                        <span>
                                            {deadline.toLocaleDateString()}
                                        </span>
                                    </Grid>
                                    <Grid item xs={4}>
                                        {currentUser["email"] ===
                                        data["created_by"] ? (
                                            <Grid
                                                container
                                                direction="row"
                                                justifyContent="center"
                                                alignItems="center"
                                                gap={2}
                                                style={{
                                                    height: "100%",
                                                }}
                                            >
                                                <Button
                                                    variant="contained"
                                                    style={{ color: "white" }}
                                                    startIcon={<EditIcon />}
                                                    onClick={() =>
                                                        navigate(
                                                            `/editpost/${data["id"]}`
                                                        )
                                                    }
                                                >
                                                    Edit Post
                                                </Button>
                                                {!viewApplicants ? (
                                                    <Badge
                                                        badgeContent={
                                                            data["applied_by"]
                                                                .length
                                                        }
                                                        color="primary"
                                                        showZero
                                                    >
                                                        <Button
                                                            variant="contained"
                                                            style={{
                                                                color: "white",
                                                            }}
                                                            onClick={
                                                                getApplicants
                                                            }
                                                        >
                                                            Check Response
                                                        </Button>
                                                    </Badge>
                                                ) : (
                                                    <Button
                                                        variant="contained"
                                                        style={{
                                                            color: "white",
                                                        }}
                                                        onClick={() =>
                                                            setViewApplicants(
                                                                !viewApplicants
                                                            )
                                                        }
                                                    >
                                                        View Post
                                                    </Button>
                                                )}
                                            </Grid>
                                        ) : (
                                            <Grid
                                                container
                                                direction="row"
                                                justifyContent="center"
                                                alignItems="center"
                                                gap={2}
                                                style={{
                                                    height: "100%",
                                                }}
                                            >
                                                {data["saved_by"].includes(
                                                    currentUser["email"]
                                                ) ? (
                                                    <Button
                                                        variant="contained"
                                                        style={{
                                                            color: "white",
                                                        }}
                                                        onClick={handleSavePost}
                                                        startIcon={
                                                            <BookmarkAddedIcon />
                                                        }
                                                    >
                                                        Unsave
                                                    </Button>
                                                ) : (
                                                    <Button
                                                        variant="contained"
                                                        onClick={handleSavePost}
                                                        style={{
                                                            color: "white",
                                                        }}
                                                        startIcon={
                                                            <BookmarkAddIcon />
                                                        }
                                                    >
                                                        Save
                                                    </Button>
                                                )}
                                                {data["applied_by"].includes(
                                                    currentUser["email"]
                                                ) ? (
                                                    <Button
                                                        variant="contained"
                                                        color="error"
                                                        onClick={
                                                            handleApplyPost
                                                        }
                                                        style={{
                                                            color: "white",
                                                        }}
                                                    >
                                                        Withdraw
                                                    </Button>
                                                ) : (
                                                    <Button
                                                        variant="contained"
                                                        style={{
                                                            color: "white",
                                                        }}
                                                        onClick={
                                                            handleApplyPost
                                                        }
                                                    >
                                                        Apply Now
                                                    </Button>
                                                )}
                                            </Grid>
                                        )}
                                        {/* <Grid
                                            container
                                            direction="row"
                                            justifyContent="center"
                                            alignItems="center"
                                            gap={2}
                                            style={{
                                                height: "100%",
                                            }}
                                        >
                                          
                                            <Button
                                                variant="contained"
                                                startIcon={
                                                    <BookmarkBorderOutlinedIcon />
                                                }
                                            >
                                                Save
                                            </Button>
                                            <Button variant="contained">
                                                Apply Now
                                            </Button>
                                        </Grid> */}
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardContent
                                style={{
                                    padding: "1rem",
                                }}
                            >
                                {viewApplicants && applicantsData ? (
                                    <div style={{ height: 400, width: "100%" }}>
                                        <DataGrid
                                            rows={applicantsData}
                                            columns={columns}
                                            paginationModel={{
                                                page: 0,
                                                pageSize: 5,
                                            }}
                                            checkboxSelection
                                        />
                                    </div>
                                ) : (
                                    <Grid container direction="row">
                                        <Grid
                                            item
                                            xs={8}
                                            style={{
                                                paddingRight: "1rem",
                                            }}
                                        >
                                            <Grid container direction="column">
                                                <strong>Tech Stack</strong>
                                                <Grid container direction="row">
                                                    {data["tech_stack"].map(
                                                        (tech, i) => {
                                                            return (
                                                                <Chip
                                                                    key={i}
                                                                    className="tschip"
                                                                    color="primary"
                                                                    label={tech}
                                                                />
                                                            );
                                                        }
                                                    )}
                                                </Grid>
                                            </Grid>
                                            <hr
                                                style={{
                                                    borderTop:
                                                        "1px solid rgba(253, 146, 126, 50%)",
                                                }}
                                            />
                                            <Grid container direction="column">
                                                <strong>
                                                    Project Discription
                                                </strong>
                                                <div>
                                                    <p className="justify">
                                                        {
                                                            data[
                                                                "project_description"
                                                            ]
                                                        }
                                                    </p>
                                                </div>
                                            </Grid>
                                            <Grid container direction="column">
                                                <strong>
                                                    Roles & Responsibilities
                                                </strong>
                                                <span className="rolename">
                                                    {data["role_name"]}
                                                </span>
                                                <span className="description">
                                                    Role Description
                                                </span>
                                                <div>
                                                    <p className="justify">
                                                        {
                                                            data[
                                                                "role_description"
                                                            ]
                                                        }
                                                    </p>
                                                </div>
                                                {data["document_link"] ? (
                                                    <span>
                                                        For Further Infomation
                                                        Refer
                                                        <a
                                                            href={
                                                                data[
                                                                    "document_link"
                                                                ]
                                                            }
                                                        >
                                                            This Docs
                                                        </a>
                                                        .
                                                    </span>
                                                ) : (
                                                    ""
                                                )}
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Card>
                                                <CardContent
                                                    style={{
                                                        color: "rgba(253, 146, 126)",
                                                    }}
                                                >
                                                    <Grid
                                                        container
                                                        direction="column"
                                                    >
                                                        <span>
                                                            Recruiter Details
                                                        </span>
                                                        <Stack
                                                            direction="row"
                                                            gap={3}
                                                            style={{
                                                                margin: "auto",
                                                            }}
                                                        >
                                                            <Avatar
                                                                alt={
                                                                    data[
                                                                        "ownerData"
                                                                    ]["name"]
                                                                }
                                                                sx={{
                                                                    width: 56,
                                                                    height: 56,
                                                                }}
                                                                src={
                                                                    data[
                                                                        "ownerData"
                                                                    ][
                                                                        "photoURL"
                                                                    ]
                                                                }
                                                            />
                                                            <span
                                                                style={{
                                                                    height: "100%",
                                                                    margin: "auto 0",
                                                                }}
                                                            >
                                                                {
                                                                    data[
                                                                        "ownerData"
                                                                    ]["name"]
                                                                }
                                                            </span>
                                                        </Stack>
                                                        <Stack
                                                            direction="row"
                                                            justifyContent="center"
                                                            alignItems="center"
                                                            spacing={2}
                                                        >
                                                            {data["ownerData"][
                                                                "email"
                                                            ] ? (
                                                                <a
                                                                    href={`mailto:${data["ownerData"]["email"]}`}
                                                                >
                                                                    <Tooltip
                                                                        title={
                                                                            data[
                                                                                "ownerData"
                                                                            ][
                                                                                "email"
                                                                            ]
                                                                        }
                                                                    >
                                                                        <IconButton>
                                                                            <MailOutlineRoundedIcon />
                                                                        </IconButton>
                                                                    </Tooltip>
                                                                </a>
                                                            ) : (
                                                                ""
                                                            )}

                                                            {data["ownerData"][
                                                                "linkedin"
                                                            ] ? (
                                                                <a
                                                                    href={
                                                                        data[
                                                                            "ownerData"
                                                                        ][
                                                                            "linkedin"
                                                                        ]
                                                                    }
                                                                >
                                                                    <Tooltip
                                                                        title={
                                                                            data[
                                                                                "ownerData"
                                                                            ][
                                                                                "linkedin"
                                                                            ]
                                                                        }
                                                                    >
                                                                        <IconButton>
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="24"
                                                                                height="24"
                                                                                viewBox="0 0 24 24"
                                                                                style={{
                                                                                    fill: "rgba(0, 0, 0, 1)",
                                                                                }}
                                                                            >
                                                                                <circle
                                                                                    cx="4.983"
                                                                                    cy="5.009"
                                                                                    r="2.188"
                                                                                ></circle>
                                                                                <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                                                                            </svg>
                                                                        </IconButton>
                                                                    </Tooltip>
                                                                </a>
                                                            ) : (
                                                                ""
                                                            )}
                                                            {data["ownerData"][
                                                                "github"
                                                            ] ? (
                                                                <a
                                                                    href={
                                                                        data[
                                                                            "ownerData"
                                                                        ][
                                                                            "github"
                                                                        ]
                                                                    }
                                                                >
                                                                    <Tooltip
                                                                        title={
                                                                            data[
                                                                                "ownerData"
                                                                            ][
                                                                                "github"
                                                                            ]
                                                                        }
                                                                    >
                                                                        <IconButton>
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="24"
                                                                                height="24"
                                                                                viewBox="0 0 24 24"
                                                                                style={{
                                                                                    fill: "rgba(0, 0, 0, 1)",
                                                                                }}
                                                                            >
                                                                                <path
                                                                                    fillRule="evenodd"
                                                                                    clipRule="evenodd"
                                                                                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                                                                ></path>
                                                                            </svg>
                                                                        </IconButton>
                                                                    </Tooltip>
                                                                </a>
                                                            ) : (
                                                                ""
                                                            )}

                                                            {data["ownerData"][
                                                                "resume"
                                                            ] ? (
                                                                <Tooltip title="Resume">
                                                                    <IconButton>
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="24"
                                                                            height="24"
                                                                            viewBox="0 0 24 24"
                                                                            style={{
                                                                                fill: "rgba(0, 0, 0, 1)",
                                                                            }}
                                                                        >
                                                                            <path d="M19.903 8.586a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.952.952 0 0 0-.051-.259c-.01-.032-.019-.063-.033-.093zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z"></path>
                                                                            <path d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z"></path>
                                                                        </svg>
                                                                    </IconButton>
                                                                </Tooltip>
                                                            ) : (
                                                                ""
                                                            )}
                                                        </Stack>
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                            {data["post_type"] === "Project" ? (
                                                <Grid
                                                    container
                                                    direction="row"
                                                    style={{
                                                        textAlign: "center",
                                                        margin: "1rem 0",
                                                    }}
                                                >
                                                    <Grid item xs={6}>
                                                        <span>Team Size</span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>
                                                            {data["team_size"]}
                                                        </span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>
                                                            Eligible Batch
                                                        </span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>
                                                            {data["batch"][0]} -{" "}
                                                            {data["batch"][1]}
                                                        </span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>
                                                            Eligible Colleges
                                                        </span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>
                                                            {data["college"]}
                                                        </span>
                                                    </Grid>
                                                </Grid>
                                            ) : data["post_type"] ===
                                              "Internship" ? (
                                                <Grid
                                                    container
                                                    direction="row"
                                                    style={{
                                                        textAlign: "center",
                                                        margin: "1rem 0",
                                                    }}
                                                >
                                                    <Grid item xs={6}>
                                                        <span>Team Size</span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>
                                                            {data["team_size"]}
                                                        </span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>
                                                            Eligible Batch
                                                        </span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>
                                                            {data["batch"][0]} -{" "}
                                                            {data["batch"][1]}
                                                        </span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>
                                                            Eligible Colleges
                                                        </span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>
                                                            {data["college"]}
                                                        </span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>Duration</span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>
                                                            {
                                                                data[
                                                                    "internship_duration"
                                                                ]
                                                            }{" "}
                                                            months
                                                        </span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>
                                                            Starting Date
                                                        </span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>{startdate}</span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>Stipend</span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        {data[
                                                            "internship_stipend"
                                                        ] === "No" ? (
                                                            <span>
                                                                No Stipend
                                                            </span>
                                                        ) : (
                                                            <span>
                                                                {
                                                                    data[
                                                                        "internship_stipend"
                                                                    ]
                                                                }{" "}
                                                                per month
                                                            </span>
                                                        )}
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>Venue</span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        {data[
                                                            "internship_venue"
                                                        ] ? (
                                                            <span>Online</span>
                                                        ) : (
                                                            <span>
                                                                {
                                                                    data[
                                                                        "internship_venue"
                                                                    ]
                                                                }
                                                            </span>
                                                        )}
                                                    </Grid>
                                                </Grid>
                                            ) : data["post_type"] ===
                                              "Hackathon" ? (
                                                <Grid
                                                    container
                                                    direction="row"
                                                    style={{
                                                        textAlign: "center",
                                                        margin: "1rem 0",
                                                    }}
                                                >
                                                    <Grid item xs={6}>
                                                        <span>Team Size</span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>
                                                            {data["team_size"]}
                                                        </span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>
                                                            Eligible Batch
                                                        </span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>
                                                            {data["batch"][0]} -{" "}
                                                            {data["batch"][1]}
                                                        </span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>
                                                            Eligible Colleges
                                                        </span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>
                                                            {data["college"]}
                                                        </span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>Duration</span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>
                                                            {
                                                                data[
                                                                    "hackathon_duration"
                                                                ]
                                                            }{" "}
                                                            hours
                                                        </span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>
                                                            Starting Date
                                                        </span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>{startdate}</span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>
                                                            Hakathon Website
                                                        </span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <a
                                                            href={
                                                                data[
                                                                    "hackathon_website"
                                                                ]
                                                            }
                                                        >
                                                            <span>
                                                                Website link
                                                            </span>
                                                        </a>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <span>Venue</span>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        {data[
                                                            "hackathon_venue"
                                                        ] ? (
                                                            <span>Online</span>
                                                        ) : (
                                                            <span>
                                                                {
                                                                    data[
                                                                        "hackathon_venue"
                                                                    ]
                                                                }
                                                            </span>
                                                        )}
                                                    </Grid>
                                                </Grid>
                                            ) : (
                                                ""
                                            )}

                                            {/* <Grid item xs={6}>
                                            <span>Duration</span>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <span>2 months</span>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <span>Starting Date</span>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <span>04/01/2022</span>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <span>Stipend</span>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <span>No Stipend</span>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <span>Working Hours</span>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <span>8 hours/week</span>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <span>Venue</span>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <span>Online</span>
                                        </Grid> */}
                                        </Grid>
                                    </Grid>
                                )}
                            </CardContent>
                        </>
                    ) : (
                        <Backdrop
                            sx={{
                                color: "#fff",
                                zIndex: (theme) => theme.zIndex.drawer + 1,
                            }}
                            open={!data ? true : false}
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    )}
                </Card>
            </Container>
        </div>
    );
};

export default Projectpage;

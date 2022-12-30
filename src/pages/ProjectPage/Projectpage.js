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
} from "@mui/material";
import React, { useState, useEffect } from "react";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import NavBar from "../../components/NavBar/NavBar";

import "./Projectpage.css";

const Projectpage = () => {
  const [postType, setPostType] = useState("");
  useEffect(() => {
    setPostType("hackathon");
  });
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
          <CardMedia
            className="resize"
            component="img"
            alt="Card Image"
            image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <CardContent
            className="overlay_content"
            style={{
              color: "white",
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              // alignItems="center"
            >
              <span>Report This Post</span>
            </Grid>
          </CardContent>
          <CardContent
            className="overlay2"
            style={{
              color: "white",
            }}
          >
            <Grid container direction="row">
              <Grid item xs={9}>
                <h2>Heading</h2>
                {postType == "project" ? (
                  <span>Project</span>
                ) : postType == "internship" ? (
                  <span>Internship</span>
                ) : // add company name here
                postType == "hackathon" ? (
                  <span>Hackathon</span>
                ) : (
                  ""
                )}

                <br />
                <span>Application Closes on DD/MM/YYYY at HH:MM AM</span>
              </Grid>
              <Grid item xs={3}>
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
                    startIcon={<BookmarkBorderOutlinedIcon />}
                  >
                    Save
                  </Button>
                  <Button variant="contained">Apply Now</Button>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
          <CardContent
            style={{
              padding: "1rem",
            }}
          >
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
                    <Chip className="tschip" color="primary" label="ReactJS" />
                    <Chip className="tschip" color="primary" label="MongoDB" />
                    <Chip
                      className="tschip"
                      color="primary"
                      label="Material UI"
                    />
                    <Chip className="tschip" color="primary" label="NodeJS" />
                    <Chip
                      className="tschip"
                      color="primary"
                      label="ExpressJS"
                    />
                  </Grid>
                </Grid>
                <hr
                  style={{
                    borderTop: "1px solid rgba(253, 146, 126, 50%)",
                  }}
                />
                <Grid container direction="column">
                  <strong>Project Discription</strong>
                  <div>
                    <p className="justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Facilisi massa eu eleifend lacinia. Eget nulla iaculis vel
                      ut condimentum. Lectus urna ut ipsum, nec a amet, odio et,
                      pretium. Cras donec malesuada scelerisque ornare ornare
                      tortor cum. Sodales magna mi turpis tortor erat cras mi.
                      Erat faucibus convallis enim sed fusce turpis aliquet ut.
                      Ut suscipit magnis mattis eu.Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Facilisi massa eu eleifend
                      lacinia. Eget nulla iaculis vel ut condimentum. Lectus
                      urna ut ipsum, nec a amet, odio et, pretium. Cras donec
                      malesuada scelerisque ornare ornare tortor cum. Sodales
                      magna mi turpis tortor erat cras mi. Erat faucibus
                      convallis enim sed fusce turpis aliquet ut. Ut suscipit
                      magnis mattis eu.
                    </p>
                    <p className="justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Facilisi massa eu eleifend lacinia. Eget nulla iaculis vel
                      ut condimentum. Lectus urna ut ipsum, nec a amet, odio et,
                      pretium. Cras donec malesuada scelerisque ornare ornare
                      tortor cum. Sodales magna mi turpis tortor erat cras mi.
                      Erat faucibus convallis enim sed fusce turpis aliquet ut.
                      Ut suscipit magnis mattis eu.Lorem ipsum dolor sit amet,
                    </p>
                  </div>
                </Grid>
                <Grid container direction="column">
                  <strong>Roles & Responsibilities</strong>
                  <span className="rolename">Role 1</span>
                  <span className="description">Role Description</span>
                  <div>
                    <p className="justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Facilisi massa eu eleifend lacinia. Eget nulla iaculis vel
                      ut condimentum. Lectus urna ut ipsum, nec a amet, odio et,
                      pretium. Cras donec malesuada scelerisque ornare ornare
                      tortor cum. Sodales magna mi turpis tortor erat cras mi.
                      Erat faucibus convallis enim sed fusce turpis aliquet ut.
                      Ut suscipit magnis mattis eu.Lorem ipsum dolor sit amet,
                    </p>
                  </div>
                  <span className="rolename">Role 1</span>
                  <span className="description">Role Description</span>
                  <div>
                    <p className="justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Facilisi massa eu eleifend lacinia. Eget nulla iaculis vel
                      ut condimentum. Lectus urna ut ipsum, nec a amet, odio et,
                      pretium. Cras donec malesuada scelerisque ornare ornare
                      tortor cum. Sodales magna mi turpis tortor erat cras mi.
                      Erat faucibus convallis enim sed fusce turpis aliquet ut.
                      Ut suscipit magnis mattis eu.Lorem ipsum dolor sit amet,
                    </p>
                  </div>
                  <span>
                    For Further Infomation Refer
                    <a href="">This Docs</a>.
                  </span>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Card>
                  <CardContent
                    style={{
                      color: "rgba(253, 146, 126)",
                    }}
                  >
                    <Grid container direction="column">
                      <span>Recruiter Details</span>
                      <Stack
                        direction="row"
                        gap={3}
                        style={{
                          margin: "auto",
                        }}
                      >
                        <Avatar
                          alt="Cindy Baker"
                          sx={{ width: 56, height: 56 }}
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        />
                        <span
                          style={{
                            height: "100%",
                            margin: "auto 0",
                          }}
                        >
                          Kartik Bansal
                        </span>
                      </Stack>
                      <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                      >
                        <Tooltip title="Mail">
                          <IconButton>
                            <MailOutlineRoundedIcon />
                          </IconButton>
                        </Tooltip>

                        <Tooltip title="Linkedin">
                          <IconButton>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              style={{ fill: "rgba(0, 0, 0, 1)" }}
                            >
                              <circle cx="4.983" cy="5.009" r="2.188"></circle>
                              <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                            </svg>
                          </IconButton>
                        </Tooltip>

                        <Tooltip title="GitHub">
                          <IconButton>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              style={{ fill: "rgba(0, 0, 0, 1)" }}
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                              ></path>
                            </svg>
                          </IconButton>
                        </Tooltip>

                        <Tooltip title="GitLab">
                          <IconButton>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              style={{ fill: "rgba(0, 0, 0, 1)" }}
                            >
                              <path d="M20.892 9.889a.664.664 0 0 0-.025-.087l-2.104-6.479a.84.84 0 0 0-.8-.57.822.822 0 0 0-.789.575l-2.006 6.175H8.834L6.826 3.327a.823.823 0 0 0-.786-.575h-.006a.837.837 0 0 0-.795.575L3.133 9.815c0 .005-.005.01-.007.016l-1.067 3.281a1.195 1.195 0 0 0 .435 1.34l9.227 6.706c.167.121.393.12.558-.003l9.229-6.703a1.2 1.2 0 0 0 .435-1.34l-1.051-3.223zM17.97 3.936l1.809 5.566H16.16l1.81-5.566zm-11.94 0 1.812 5.566H4.228L6.03 3.936zm-2.982 9.752a.253.253 0 0 1-.093-.284l.793-2.437 5.817 7.456-6.517-4.735zm1.499-3.239h3.601l2.573 7.916-6.174-7.916zm7.452 8.794-2.856-8.798h5.718l-1.792 5.515-1.07 3.283zm1.282-.877 2.467-7.588.106-.329h3.604l-5.586 7.156-.591.761zm7.671-4.678-6.519 4.733.022-.029 5.794-7.425.792 2.436a.25.25 0 0 1-.089.285z"></path>
                            </svg>
                          </IconButton>
                        </Tooltip>

                        <Tooltip title="Resume">
                          <IconButton>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              style={{ fill: "rgba(0, 0, 0, 1)" }}
                            >
                              <path d="M19.903 8.586a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.952.952 0 0 0-.051-.259c-.01-.032-.019-.063-.033-.093zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z"></path>
                              <path d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z"></path>
                            </svg>
                          </IconButton>
                        </Tooltip>
                      </Stack>
                    </Grid>
                  </CardContent>
                </Card>
                {postType === "project" ? (
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
                      <span>5</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span>Eligible Batch</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span>2018 - 2023</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span>Eligible Colleges</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span>All</span>
                    </Grid>
                  </Grid>
                ) : postType === "internship" ? (
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
                      <span>5</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span>Eligible Batch</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span>2018 - 2023</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span>Eligible Colleges</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span>All</span>
                    </Grid>
                    <Grid item xs={6}>
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
                    </Grid>
                  </Grid>
                ) : postType === "hackathon" ? 
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
                      <span>5</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span>Eligible Batch</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span>2018 - 2023</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span>Eligible Colleges</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span>All</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span>Duration</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span>24 hours</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span>Starting Date</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span>04/01/2022</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span>Hakathon Website</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span>sfiuefsife</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span>Venue</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span>Online</span>
                    </Grid>
                  </Grid>:""}

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

                {}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Projectpage;

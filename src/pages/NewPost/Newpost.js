import { Card, Container, Grid, TextField, Autocomplete } from "@mui/material";
import React from "react";
import moment from "moment";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateAdapter from "@mui/lab/AdapterMoment";
import NavBar from "../../components/NavBar/NavBar";

const NewPost = () => {
    // var datetime = new Date();
    const [value, setValue] = React.useState(null);
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
                    <h3>Create New Post</h3>
                </Grid>
                <Card
                    style={{
                        padding: "1.5rem",
                    }}
                >
                    <Grid container>
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <div>
                                <label>Post Title</label>
                            </div>
                        </Grid>
                        <Grid
                            items
                            md={9}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <TextField
                                id="outlined-title-input"
                                // label="Post Title"
                                style={{
                                    width: "100%",
                                }}
                                type="text"
                                autoComplete="post-title"
                            />
                        </Grid>
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <label className="formHeading">Post Cover</label>
                        </Grid>
                        <Grid
                            items
                            md={9}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <TextField
                                id="outlined-cover-input"
                                style={{
                                    width: "100%",
                                }}
                                type="text"
                            />
                        </Grid>
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <label className="formHeading">
                                Application Deadline
                            </label>
                        </Grid>
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <LocalizationProvider
                                style={{
                                    width: "100%",
                                }}
                                dateAdapter={DateAdapter}
                            >
                                <DatePicker
                                    views={["year", "month", "day"]}
                                    value={value}
                                    minDate={moment()}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField {...params} />
                                    )}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                          <label className="formHeading">
                                Applicable Batches
                            </label>
                        </Grid>
                        {/* <Autocomplete
                            multiple
                            limitTags={1}
                            id="multiple-limit-tags"
                            options={top100Films}
                            getOptionLabel={(option) => option.title}
                            
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="limitTags"
                                    placeholder="Favorites"
                                />
                            )}
                        /> */}
                    </Grid>
                </Card>
            </Container>
        </div>
    );
};

export default NewPost;

import {
    Button,
    Card,
    Container,
    Grid,
    TextField,
    Autocomplete,
    Chip,
    RadioGroup,
    Radio,
    FormControlLabel,
    Stack,
    Slider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import moment from "moment";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateAdapter from "@mui/lab/AdapterMoment";
import NavBar from "../../components/NavBar/NavBar";

import EditorJS from "@editorjs/editorjs";

import EditorInput from "../../components/Editor/EditorInput";

function valuetext(value) {
    return `${value}°C`;
}

const editor = new EditorJS({
    /**
     * Id of Element that should contain Editor instance
     */
    holder: "editorjs",
    // tools: {
    //     header: {
    //       class: Header,
    //       inlineToolbar: ['link']
    //     },
    //     list: {
    //       class: List,
    //       inlineToolbar: true
    //     }
    //   },
});

const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

const marks = [
    {
        value: 2000,
        label: "2000",
    },
    {
        value: 2010,
        label: "2010",
    },
    {
        value: 2020,
        label: "2020",
    },
    {
        value: 2025,
        label: "2025",
    },
];

const NewPost = () => {
    const [chipData, setChipData] = useState([]);
    const [tovalue, setToValue] = useState("");
    const [postType, setPostType] = useState("Project");
    const [value, setValue] = useState(null);
    const [val, setVal] = useState([2019, 2023]);
    const [venue, setVenue] = useState("");
    const [stipend, setStipend] = useState("")
    const [jobOffer, setJobOffer] = useState("")

    const handleJobOffer =(e)=>{
        setJobOffer(e.target.value)
    }
    const handleToKeyDown = (event) => {
        if (["Enter", "Tab", ",", " "].includes(event.key)) {
            event.preventDefault();

            var value = tovalue.trim();

            if (value && chipData.includes(value) == false) {
                setChipData([...chipData, tovalue]);
            }
            setToValue("");
        }
    };
    // var datetime = new Date();
    const handlePostChange = (event) => {
        setPostType(event.target.value);
    };
    // const [value1, setValue1] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setVal(newValue);
    };
    const handleToChange = (event) => {
        setToValue(event.target.value);
    };

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip !== chipToDelete));
    };

    const handleVenue = (event) => {
        setVenue(event.target.value);
    };

    const handleStipend = (event) =>{
        setStipend(event.target.value)
    }

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
                    <Grid container justifyContent="center" alignItems="center">
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
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
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
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
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
                            md={2}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <label className="formHeading">
                                Applicable Batches
                            </label>
                        </Grid>
                        <Grid
                            items
                            md={4}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <Slider
                                max={2025}
                                min={2000}
                                value={val}
                                onChange={handleChange}
                                // defaultValue={[2019,2023]}
                                valueLabelDisplay="on"
                                getAriaValueText={valuetext}
                                disableSwap
                                marks={marks}
                            />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <label className="formHeading">Tech Stack</label>
                        </Grid>
                        <Grid
                            items
                            md={9}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            {/* {chipData.map((data) => {

                                <ListItem key={data.key}>
                                    <Chip
                                        label={data.label}
                                        onDelete={handleDelete(data)}
                                    />
                                </ListItem>;
                            })} */}
                            <Stack direction="row">
                                {chipData.map((data, index) => {
                                    return (
                                        <div key={index}>
                                            <Chip
                                                label={data}
                                                color="primary"
                                                variant="outlined"
                                                onDelete={handleDelete(data)}
                                            />
                                        </div>
                                    );
                                })}
                            </Stack>
                            {chipData.length < 5 ? (
                                <TextField
                                    id="outlined-cover-input"
                                    style={{
                                        width: "100%",
                                    }}
                                    onKeyDown={handleToKeyDown}
                                    onChange={handleToChange}
                                    value={tovalue}
                                    type="text"
                                />
                            ) : (
                                <></>
                            )}
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
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <label className="formHeading">
                                Applicable College
                            </label>
                        </Grid>
                        <Grid items md={3}>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={value}
                                onChange={handleChange}
                            >
                                <FormControlLabel
                                    value="All Colleges"
                                    control={<Radio />}
                                    label="All Colleges"
                                />
                                <FormControlLabel
                                    value="College id"
                                    control={<Radio />}
                                    label="Only My College"
                                />
                            </RadioGroup>
                        </Grid>
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <label className="formHeading">Team Size</label>
                        </Grid>
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <TextField
                                id="outlined-cover-input"
                                style={{
                                    width: "100%",
                                }}
                                type="number"
                            />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <label className="formHeading">
                                Project Description
                            </label>
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
                                multiline
                            />
                            {/* <div id="editorjs"></div> */}
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <label className="formHeading">Role Name</label>
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
                            {/* <div id="editorjs"></div> */}
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <label className="formHeading">
                                Role Description
                            </label>
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
                                multiline
                            />
                            {/* <div id="editorjs"></div> */}
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <label className="formHeading">Post Type</label>
                        </Grid>
                        <Grid
                            items
                            md={9}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={postType}
                                onChange={handlePostChange}
                            >
                                <FormControlLabel
                                    value="Project"
                                    control={<Radio />}
                                    label="Project"
                                />
                                <FormControlLabel
                                    value="Internship"
                                    control={<Radio />}
                                    label="Internship"
                                />
                                <FormControlLabel
                                    value="Hackathon"
                                    control={<Radio />}
                                    label="Hackathon"
                                />
                            </RadioGroup>

                            {/* <div id="editorjs"></div> */}
                        </Grid>
                    </Grid>
                    {postType === "Hackathon" ? (
                        <>
                            <Grid
                                container
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid
                                    items
                                    md={3}
                                    style={{
                                        margin: "1rem 0",
                                    }}
                                >
                                    <label className="formHeading">
                                        Hackathon Starting Date
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
                                        Hackathon Duration
                                    </label>
                                </Grid>
                                <Grid
                                    items
                                    md={3}
                                    style={{
                                        margin: "1rem 0",
                                    }}
                                >
                                    <TextField
                                        id="outlined-cover-input"
                                        style={{
                                            width: "100%",
                                        }}
                                        type="number"
                                    />
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid
                                    items
                                    md={3}
                                    style={{
                                        margin: "1rem 0",
                                    }}
                                >
                                    <label className="formHeading">
                                        Hackathon Website
                                    </label>
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
                                    {/* <div id="editorjs"></div> */}
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid
                                    items
                                    md={3}
                                    style={{
                                        margin: "1rem 0",
                                    }}
                                >
                                    <label className="formHeading">
                                        Hackathon Venue
                                    </label>
                                </Grid>
                                <Grid
                                    items
                                    md={4}
                                    style={{
                                        margin: "1rem 0",
                                    }}
                                >
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        value={venue}
                                        onChange={handleVenue}
                                    >
                                        <FormControlLabel
                                            value="Online"
                                            control={<Radio />}
                                            label="Online"
                                        />
                                        <FormControlLabel
                                            value="Offline"
                                            control={<Radio />}
                                            label="Offline"
                                        />
                                    </RadioGroup>

                                    {/* <div id="editorjs"></div> */}
                                </Grid>
                                {venue === "Offline" ? (
                                    <Grid
                                        items
                                        md={5}
                                        style={{
                                            margin: "1rem 0",
                                        }}
                                    >
                                        <TextField
                                            id="outlined-cover-input"
                                            style={{
                                                width: "50%",
                                            }}
                                            type="text"
                                        />
                                    </Grid>
                                ) : (
                                    <></>
                                )}
                            </Grid>
                        </>
                    ) : postType === "Internship" ? (
                        <>
                            <Grid
                                container
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid
                                    items
                                    md={3}
                                    style={{
                                        margin: "1rem 0",
                                    }}
                                >
                                    <label className="formHeading">
                                        Internship Starting Date
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
                                        Internship Duration
                                    </label>
                                </Grid>
                                <Grid
                                    items
                                    md={3}
                                    style={{
                                        margin: "1rem 0",
                                    }}
                                >
                                    <TextField
                                        id="outlined-cover-input"
                                        style={{
                                            width: "100%",
                                        }}
                                        type="number"
                                    />
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid
                                    items
                                    md={3}
                                    style={{
                                        margin: "1rem 0",
                                    }}
                                >
                                    <label className="formHeading">
                                        Internship Venue
                                    </label>
                                </Grid>
                                <Grid
                                    items
                                    md={4}
                                    style={{
                                        margin: "1rem 0",
                                    }}
                                >
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        value={venue}
                                        onChange={handleVenue}
                                    >
                                        <FormControlLabel
                                            value="Online"
                                            control={<Radio />}
                                            label="Online"
                                        />
                                        <FormControlLabel
                                            value="Offline"
                                            control={<Radio />}
                                            label="Offline"
                                        />
                                    </RadioGroup>

                                    {/* <div id="editorjs"></div> */}
                                </Grid>
                                {venue === "Offline" ? (
                                    <Grid
                                        items
                                        md={5}
                                        style={{
                                            margin: "1rem 0",
                                        }}
                                    >
                                        <TextField
                                            id="outlined-cover-input"
                                            style={{
                                                width: "50%",
                                            }}
                                            type="text"
                                        />
                                    </Grid>
                                ) : (
                                    <></>
                                )}
                            </Grid>
                            <Grid
                                container
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid
                                    items
                                    md={3}
                                    style={{
                                        margin: "1rem 0",
                                    }}
                                >
                                    <label className="formHeading">
                                        Stipend
                                    </label>
                                </Grid>
                                <Grid
                                    items
                                    md={4}
                                    style={{
                                        margin: "1rem 0",
                                    }}
                                >
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        value={stipend}
                                        onChange={handleStipend}
                                    >
                                        <FormControlLabel
                                            value="No"
                                            control={<Radio />}
                                            label="No"
                                        />
                                        <FormControlLabel
                                            value="Yes"
                                            control={<Radio />}
                                            label="Yes"
                                        />
                                    </RadioGroup>

                                    {/* <div id="editorjs"></div> */}
                                </Grid>
                                {stipend === "Yes" ? (
                                    <Grid
                                        items
                                        md={5}
                                        style={{
                                            margin: "1rem 0",
                                        }}
                                    >
                                        <TextField
                                            id="outlined-cover-input"
                                            style={{
                                                width: "50%",
                                            }}
                                            type="text"
                                        />
                                    </Grid>
                                ) : (
                                    <></>
                                )}
                            </Grid>
                            <Grid
                                container
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid
                                    items
                                    md={3}
                                    style={{
                                        margin: "1rem 0",
                                    }}
                                >
                                    <label className="formHeading">
                                        Performance Based Job Offer
                                    </label>
                                </Grid>
                                <Grid
                                    items
                                    md={4}
                                    style={{
                                        margin: "1rem 0",
                                    }}
                                >
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        value={jobOffer}
                                        onChange={handleJobOffer}
                                    >
                                        <FormControlLabel
                                            value="No"
                                            control={<Radio />}
                                            label="No"
                                        />
                                        <FormControlLabel
                                            value="Yes"
                                            control={<Radio />}
                                            label="Yes"
                                        />
                                    </RadioGroup>

                                    {/* <div id="editorjs"></div> */}
                                </Grid>
                            </Grid>
                        </>
                    ) : (
                        <></>
                    )}
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <label className="formHeading">Document Link</label>
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
                            {/* <div id="editorjs"></div> */}
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <Button
                            variant="contained"
                            style={{
                                color: "white",
                                width: "100%",
                            }}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Card>
            </Container>
        </div>
    );
};

export default NewPost;

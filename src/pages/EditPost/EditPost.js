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
import axios from "axios";
import { styled } from "@mui/material/styles";
import React, { useState, useRef, useEffect } from "react";
import moment from "moment";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import DatePicker from "@mui/lab/DatePicker";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "react-date-picker";
import DateAdapter from "@mui/lab/AdapterMoment";
import NavBar from "../../components/NavBar/NavBar";

import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, useLocation, Link } from "react-router-dom";


function valuetext(value) {
    return `${value}°C`;
}

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

const EditPost = ({postData}) => {
    const location = useLocation();
    console.log(postData)
    const [data, setData] = useState();
    const [chipData, setChipData] = useState(postData["tech_stack"]);
    const [tovalue, setToValue] = useState("");
    const [postType, setPostType] = useState(postData["post_type"]);
    const [value, setValue] = useState(postData["college"]);
    const [val, setVal] = useState(postData["batch"]);
    const [venue, setVenue] = useState(postData["hackathon_venue"]);
    const [stipend, setStipend] = useState(postData["internship_stipend"]);
    const [jobOffer, setJobOffer] = useState(postData["job_offer"]);
    
    const { currentUser } = useAuth();
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 1);

    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 50);
    const [deadline, setDeadline] = useState(postData["deadline"]);

    const [isloading, setIsLoading] = useState(false);
    let post_title =""

    const [postTitle, setPostTitle] = useState(postData["title"]);
    const [postCover, setPostCover] = useState(postData["cover"]);
    const [documentLink, setDocumentLink] = useState(postData["document_link"]);
    const [duration, setDuration] = useState(postData["hackathon_duration"])
    const [teamSize, setTeamSize] = useState(postData["team_size"]);
    const [startingDate, setStartingDate] = useState(postData["hackathon_starting_date"])
    const [websiteLink, setWebsiteLink] = useState(postData["hackathon_website"])
    const [roleName, setRoleName] = useState(postData["role_name"])
    const [roleDescription,setRoleDescription] = useState(postData["role_description"])

    const [projectDescription, setProjectDescription] = useState(postData["project_description"])
    const startMaxDate = new Date();
    startMaxDate.setDate(startMaxDate.getDate() + 100);
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     getData();

    //     // setData(response)
    // }, []);

    // useEffect(()=>{
    //     setPostTitle[postData["title"]]
    // }, [postData])

    // const getData = () => {
    //     axios
    //         .get(
    //             `http://127.0.0.1:8000/post/${location["pathname"].replace(
    //                 "/editpost/",
    //                 ""
    //             )}`
    //         )
    //         .then((res) => {
    //             setData(res.data);
    //         }).then(()=>{
    //             post_title = data["title"]
    //             console.log(post_title)
    //             setPostTitle(data["title"])
    //             setPostCover(data["postCover"])
    //             setDeadline(data["deadline"])
    //             setVal(data["batch"])
    //             setChipData(data["tech_stack"])
    //             setValue(data["college"])
    //             setTeamSize(data["team_size"])
    //             setProjectDescription(data["project_description"])
    //             setRoleName(data["role_name"])
    //             setRoleDescription(data["role_description"])
    //             setPostType(data["post_type"])
    //             setDocumentLink(data["document_link"])
    //             setStartingDate(data["internship_start_date"])
    //         });
    // };
    console.log(data)
    const navigate = useNavigate();
    

    // if(data){
    //     

    // }

    const onSubmit = async() =>{
        try{
            const data = {
            title: postTitle,
            cover: postCover,
            deadline: deadline,
            batch: val,
            tech_stack: chipData,
            college: value,
            team_size: teamSize,
            project_description: projectDescription,
            role_name: roleName,
            role_description: roleDescription,
            post_type: postType,
            document_link: documentLink,
            internship_start_date: startingDate,
            internship_duration: duration,
            internship_venue: venue,
            internship_stipend: stipend,
            job_offer: jobOffer,
            hackathon_starting_date: startingDate,
            hackathon_duration: duration,
            hackathon_website: websiteLink,
            hackathon_venue: venue,
            saved_by: [],
            applied_by: [],
            created_by: currentUser.email,
            created_at: new Date(),
        };
            console.log(data)
            const response = await axios.post("http://127.0.0.1:8000/post/", data);
            if(response.status === 200)
                navigate('/discover')
        }
        catch (error) {
            console.error(error);
        }
    }


    const handleJobOffer = (e) => {
        setJobOffer(e.target.value);
    };
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

    const handleStipend = (event) => {
        setStipend(event.target.value);
    };

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
                    <h3>Edit Post</h3>
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
                                value={postTitle}
                                // label="Post Title"
                                style={{
                                    width: "100%",
                                }}
                                onChange={(e) => setPostTitle(e.target.value)}
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
                                value={postCover}
                                style={{
                                    width: "100%",
                                }}
                                onChange={(e) => setPostCover(e.target.value)}
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
                            <DatePicker
                                onChange={(e) => setDeadline(e)}
                                minDate={minDate}
                                maxDate={maxDate}
                                value={deadline}
                            />
                            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer
                                    components={["DatePicker"]}
                                >
                                    <DatePicker
                                        label="Controlled picker"
                                        value={deadline}
                                        onChange={(newValue) =>
                                            setDeadline(newValue)
                                        }
                                    />
                                </DemoContainer>
                            </LocalizationProvider> */}
                            {/* <LocalizationProvider
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
                            </LocalizationProvider> */}
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
                                {chipData && chipData.map((data, index) => {
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
                            {chipData && chipData.length < 5 ? (
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
                                onChange={(e) => setValue(e.target.value)}
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
                                value={teamSize}
                                onChange={(e) => setTeamSize(e.target.value)}
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
                                value={projectDescription}
                                onChange={(e)=>setProjectDescription(e.target.value)}
                                multiline
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
                                value={roleName}
                                onChange={(e)=>setRoleName(e.target.value)}
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
                                value={roleDescription}
                                onChange={(e)=>setRoleDescription(e.target.value)}
                                type="text"
                                multiline
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
                                    <DatePicker
                                        onChange={(e) =>
                                            setStartingDate(e)
                                        }
                                        minDate={minDate}
                                        maxDate={maxDate}
                                        value={startingDate}
                                    />
                                    {/* <LocalizationProvider
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
                                    </LocalizationProvider> */}
                                </Grid>
                                <Grid
                                    items
                                    md={3}
                                    style={{
                                        margin: "1rem 0",
                                    }}
                                >
                                    <label className="formHeading">
                                        Hackathon Duration (hours)
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
                                        value={duration}
                                        onChange={(e)=>setDuration(e)}
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
                                        value={websiteLink}
                                        onChange={(e)=>setWebsiteLink(e.target.value)}
                                        type="text"
                                    />
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                justifyContent="flex-start"
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
                                </Grid>
                                {venue != "Online" ? (
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
                                            value={venue}
                                            onChange={(e) =>
                                                setVenue(e.target.value)
                                            }
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
                                    <DatePicker
                                        onChange={(e) =>
                                            setStartingDate(e)
                                        }
                                        minDate={minDate}
                                        maxDate={maxDate}
                                        value={startingDate}
                                    />

                                    {/* <LocalizationProvider
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
                                    </LocalizationProvider> */}
                                </Grid>
                                <Grid
                                    items
                                    md={3}
                                    style={{
                                        margin: "1rem 0",
                                    }}
                                >
                                    <label className="formHeading">
                                        Internship Duration (months)
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
                                        value={duration}
                                        onChange={(e)=>setDuration(e)}
                                        style={{
                                            width: "100%",
                                        }}
                                        type="number"
                                    />
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                justifyContent="flex-start"
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
                                </Grid>
                                {venue != "Online" ? (
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
                                            value={venue}
                                            onChange={(e) =>
                                                setVenue(e.target.value)
                                            }
                                            type="text"
                                        />
                                    </Grid>
                                ) : (
                                    <></>
                                )}
                            </Grid>
                            <Grid
                                container
                                justifyContent="flex-start"
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
                                        Stipend (per month)
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
                                </Grid>
                                {stipend != "No" ? (
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
                                            value={stipend}
                                            onChange={(e) =>
                                                setStipend(e.target.value)
                                            }
                                            type="text"
                                        />
                                    </Grid>
                                ) : (
                                    <></>
                                )}
                            </Grid>
                            <Grid
                                container
                                justifyContent="flex-start"
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
                                onChange={(e) =>
                                    setDocumentLink(e.target.value)
                                }
                                type="text"
                            />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <Button
                            variant="contained"
                            style={{
                                color: "white",
                                width: "100%",
                            }}
                            onClick={onSubmit}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Card>
            </Container>
        </div>
    );
};

export default EditPost;

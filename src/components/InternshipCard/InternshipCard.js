import React from "react";
import { Grid, Card, Button, Stack, Chip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import Divider from '@mui/material/Divider';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

import "./InternshipCard.css";

const InternshipCard = () => {
  return (
    <Card
      style={{
        position: "relative",
        margin: "5px",
      }}
    >
      <CardMedia
        component="img"
        alt="Card Image"
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <CardContent
        className="overlay"
        style={{
          color: "white",
        }}
      >
        <Grid container direction="column">
          <h2>Heading</h2>
          <div>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={1}
            >
              <span>Internship</span>
              <span>Stipend</span>
              <span>Job Offer </span>
            </Stack>

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
              >
                <BookmarkBorderOutlinedIcon />
              </IconButton>
            </Grid>
          </div>
        </Grid>
      </CardContent>
      <CardContent>
        <Grid container direction="row">
          <Chip className="tschip" color="primary" label="ReactJS" />
          <Chip className="tschip" color="primary" label="MongoDB" />
          <Chip className="tschip" color="primary" label="Material UI" />
          <Chip className="tschip" color="primary" label="NodeJS" />
          <Chip className="tschip" color="primary" label="ExpressJS" />
        </Grid>
        <Stack direction="row" gap={3}>
          <strong>Application Closes on:</strong>
          <span>01/12/2021</span>
        </Stack>
        <p className="sdisc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
          massa eu eleifend lacinia. Eget nulla iaculis vel ut condimentum.
          Lectus urna ut ipsum, nec a amet, odio et, pretium. Cras donec
          malesuada scelerisque ornare ornare tortor cum. Sodales magna mi
          turpis tortor erat cras mi. Erat faucibus convallis enim sed fusce
          turpis aliquet ut. Ut suscipit magnis mattis eu.
        </p>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button variant="outlined">Expand To Apply</Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default InternshipCard;

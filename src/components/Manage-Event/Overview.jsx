import React from 'react'
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

import Card from "@mui/material/Card";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

const Overview = () => {
  return (
    <div>
      <Card
        sx={{
          display: "flex",
          alignItems: "flex-start",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
      >
        {/* Preview of ticket */}
        <CardMedia
          component="img"
          sx={{ height: 400, width: 400, padding: 4 }}
          image="https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=400,height=400/event-defaults/1-1/retro2.png"
          alt="event ticket"
        />

        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 2,
            width: "100%",
          }}
        >
          <Typography
            component="div"
            variant="h5"
            sx={{ alignSelf: "flex-start" }}
          >
            When & Where
          </Typography>

          <div
            className=" font-sans font-bold"
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "40px",
              fontSize: "20px",
            }}
          >
            <div className="flex start-2">
              <CalendarMonthIcon
                sx={{ marginRight: 2, color: "green", fontSize: 50 }}
              />
              <div>
                <Typography component="div" variant="subtitle1">
                  Day
                </Typography>
                <Typography component="div" variant="subtitle2">
                  Time
                </Typography>
              </div>
            </div>

            <div className="flex start-2">
              <PlaceIcon
                sx={{ marginRight: 2, color: "green", fontSize: 50 }}
              />
              <div>
                <Typography component="div" variant="subtitle1">
                  Place
                </Typography>
                <Typography component="div" variant="subtitle2">
                  City, State
                </Typography>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <CardActionArea sx={{ borderRadius: "10px" }}>
              <CardActions
                sx={{ justifyContent: "center", borderRadius: "10px" }}
                style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
              >
                <Button size="small" color="primary">
                  Check in Guest
                </Button>
              </CardActions>
            </CardActionArea>
          </div>
          <div className="flex gap-2 mt-5">
            <CardActionArea sx={{ borderRadius: "10px" }}>
              <CardActions
                sx={{ justifyContent: "center", borderRadius: "10px" }}
                style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
              >
                <Button size="small" color="primary">
                  Edit Event
                </Button>
              </CardActions>
            </CardActionArea>
            <CardActionArea sx={{ borderRadius: "10px" }}>
              <CardActions
                sx={{ justifyContent: "center", borderRadius: "10px" }}
                style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
              >
                <Button size="small" color="primary">
                  Change Photo
                </Button>
              </CardActions>
            </CardActionArea>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Overview
import React from 'react'
import Card from '@mui/material/Card'
import { CardContent, Typography } from '@mui/material'
import {Button,CardActionArea,CardActions} from '@mui/material'
import EmailIcon from "@mui/icons-material/Email";
const WeeklyEmail = () => {
  return (
    <>
      <Card
        style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
        className=" bg-whiteInverted  mt-2 "
      >
        <CardActionArea>
          <CardContent className="flex gap-4">
            <div className="mt-2">
              <EmailIcon />
            </div>
            <div>
              <Typography
                style={{ fontFamily: "sans-serif", fontWeight: "bolder" }}
              >
                Subscribe to What’s Happening in Dubai
              </Typography>
              <Typography style={{ fontFamily: "sans-serif" }}>
                New events, straight to your inbox, every week.
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button style={{ width: "100%",color:'black',fontWeight:'bolder' }}>Subscribe</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default WeeklyEmail
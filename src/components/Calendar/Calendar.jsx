import { Stack } from '@mui/material'
import React from 'react'
import CalendarCard from './CalendarCard'
import Grid from '@mui/material/Unstable_Grid2'
const Calendar = () => {
  return (
    <Stack style={{justifyContent:'center'}}>
      {/* Information div */}
      <div
        className=" zm-container text-emerald-100  font-sans"
        sx={{ opacity: 1 }}
      >
        <div className=" flex-center spread mb-2 gap-2 font-black text-3xl" style={{marginTop:'20px', fontSize:'50px'}}>
          <h1>Calendars</h1>
        </div>
        {/* <div className=" zm-container  text-secondary-alpha pt-2 pb-4 mb-2">
          Every week, we feature some of the most popular tech events in cities
          like San Francisco and New York. In addition, you can check out and
          subscribe to some great calendars from the community.
        </div> */}
      </div>

      {/* Personal Cards */}
      <div style={{ margin: "10px 0px 10px 0px" }}>
        <div className=" text-emerald-100  font-sans font-bold m-2">
          <h1 className="text-xl" >My Calendars</h1>
          
        </div>

        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
              <CalendarCard/>
            </Grid>
          ))}
        </Grid>
      </div>

      {/* Calendars */}
      <div
        style={{
          margin: "10px 0px 10px 0px",
          paddingTop: "2rem",
          borderTop: "1px solid",
        }}
      >
        <div className=" text-emerald-100  font-sans font-bold m-2">
          <h2>
            <div className="text-xl">Subscribed Calendars</div>
          
          </h2>
          <div className="right-element"></div>
        </div>

        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {Array.from(Array(1)).map((_, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
              <CalendarCard/>
            </Grid>
          ))}
        </Grid>
      </div>
    </Stack>
  );
}

export default Calendar
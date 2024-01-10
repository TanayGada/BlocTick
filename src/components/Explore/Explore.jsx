import {Box,Stack} from '@mui/material'
import Grid from "@mui/material/Unstable_Grid2"; 
import CityCard from './CityCard'
import SubscribeCards from './SubscribeCards';

const Explore = () => {
  return (
    <Stack style={{marginLeft:'10%'  , marginRight:'10%'}}>


      {/* Information div */}
      <div
        class=" zm-container text-emerald-100  font-sans"
        sx={{ opacity: 1 }}
      >
        <div class=" flex-center spread mb-2 gap-2 font-black text-3xl">
          <h1>Explore Events</h1>
        </div>
        <div class=" zm-container  text-secondary-alpha pt-2 pb-4 mb-2">
          Every week, we feature some of the most popular tech events in cities
          like San Francisco and New York. In addition, you can check out and
          subscribe to some great calendars from the community.
        </div>
      </div>



      {/* citycards */}
      <div style={{ margin: "10px 0px 10px 0px" }}>
        <div className=" text-emerald-100  font-sans font-bold m-2">
          <h1 className="text-xl">Popular Events</h1>
          <h2 className="text-xl font-light ">Updated Weekly</h2>
        </div>

        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
              <CityCard />
            </Grid>
          ))}
        </Grid>
      </div>


      {/* Calendars */}
      <div style={{ margin: "10px 0px 10px 0px",paddingTop:'2rem',borderTop:'1px solid' }}>
        <div class=" text-emerald-100  font-sans font-bold m-2">
          <h2>
            <div class="text-xl">Featured Calendars</div>
            <div class=" text-xl font-light">That We Love</div>
          </h2>
          <div class="right-element"></div>
        </div>

        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {Array.from(Array(7)).map((_, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
              <SubscribeCards />
            </Grid>
          ))}
        </Grid>
      </div>
    </Stack>
  );
}

export default Explore
import {Box,Stack} from '@mui/material'
import Grid from "@mui/material/Unstable_Grid2"; 
import CityCard from './CityCard'
import SubscribeCards from './SubscribeCards';
import Layout from '../../Layout/Layout1'

const ExplorePage = () => {
  return (
    <Layout>
      <Stack style={{ borderTop: '10px' }}>
        <div
          className=' zm-container text-emerald-100  font-sans'
          sx={{ opacity: 1 }}
        >
          <div
            className=' flex-center spread mb-2 gap-2 font-black text-3xl'
            style={{ marginTop: '20px', fontSize: '50px' }}
          >
            <h1>Explore Events</h1>
          </div>
          <div className=' zm-container  text-secondary-alpha pt-2 pb-4 mb-2'>
            Every week, we feature some of the most popular online events and
            offline events in Mumbai.
          </div>
        </div>

        <div style={{ margin: '10px 0px 10px 0px' }}>
          <div className=' text-emerald-100  font-sans font-bold m-2'>
            <h1 className='text-xl'>Popular Events</h1>
            <h2 className='text-xl font-light '>Updated Weekly</h2>
          </div>

          <Grid
            container
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 1, sm: 3, md: 3 }} 
            alignItems='center'
            justifyContent='center'
          >
            <CityCard name='Mumbai' image='./mumbai.jpg' />
            <CityCard name='Pune' image='./pune.jpg' />
            <CityCard name='Bangalore' image='./bangalore.jpg' />
            <CityCard name='Chennai' image='./chennai.jpg' />
            <CityCard name='Delhi' image='./delhi.jpg' />
            <CityCard name='Jaipur' image='./jaipur.jpg' />
          </Grid>
        </div>

        {/* Calendars */}
        <div
          style={{
            margin: '10px 0px 10px 0px',
            paddingTop: '2rem',
            borderTop: '1px solid',
          }}
        >
          <div className=' text-emerald-100  font-sans font-bold m-2'>
            <h2>
              <div className='text-xl'>Featured Calendars</div>
              <div className=' text-xl font-light'>That We Love</div>
            </h2>
            <div className='right-element'></div>
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
    </Layout>
  )
}

export default ExplorePage
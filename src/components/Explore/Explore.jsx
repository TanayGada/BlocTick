import {Stack} from '@mui/material'
import Grid from "@mui/material/Unstable_Grid2"; 
import CityCard from './CityCard'
import SubscribeCards from './SubscribeCards';
import Layout from '../../Layout/Layout1'
import Mumbai from '../../assets/Mumbai.jpg'
import Pune from '../../assets/Pune.png'
import Jaipur from '../../assets/Jaipur.png'
import Delhi from '../../assets/Delhi.jpg'
import Chennai from '../../assets/Chennai.jpg'
import Bangalore from '../../assets/Bangalore.jpg'

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
            columns={{ xs: 1, sm: 1, md: 3 }} 
            alignItems='center'
            justifyContent='center'
          >
            
            <CityCard name='Mumbai' image={Mumbai} />
            <CityCard name='Pune' image={Pune} />
            <CityCard name='Bangalore' image={Bangalore} />
            <CityCard name='Chennai' image={Chennai} />
            <CityCard name='Delhi' image={Delhi} />
            <CityCard name='Jaipur' image={Jaipur} />
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
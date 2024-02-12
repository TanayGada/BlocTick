import React from 'react'
import Typography from '@mui/material/Typography'
import WeeklyEmail from '../WeeklyEmail'
import { Button } from 'flowbite-react'
import AddIcon from '@mui/icons-material/Add'
import Layout from '../../../Layout/Layout1'
import TimeItem from '../TimeItem'
import MumbaiIm from '../../../assets/Mumbai.jpg'

const Mumbai = () => {
  return (
    <Layout>
      <div className=' zm-container text-emerald-100  font-sans' x={{ opacity: 1 }}>
        <div
          style={{
            height: '300px',
            backgroundImage: `url(${MumbaiIm})`,
            display: 'flex',
            alignItems: 'center',
          }}
        >
         
          <div className='flex-col ml-6'>
            <Typography
              variant='h6'
              style={{ fontFamily: 'sans-serif', fontWeight: 'bolder' }}
            >
              What's happening in
            </Typography>
            <Typography
              variant='h4'
              style={{ fontFamily: 'sans-serif', fontWeight: 'bolder' }}
            >
              Mumbai
            </Typography>
          </div>
        </div>
      </div>
      {/* subscribe to all events in city */}

      <WeeklyEmail />

      {/* events timeline */}
      <div>
        <div className=' flex justify-between mt-5 '>
          <Typography
            variant='h5'
            className=' text-emerald-100  font-sans  '
            style={{ fontWeight: 'bolder' }}
          >
            Events
          </Typography>
          <Button
            style={{ color: 'black', fontWeight: 'bolder' }}
            
            
          >
            <AddIcon /> Submit Event
          </Button>
        </div>

        <TimeItem categoryId ="Mumbai"/>
      </div>
    </Layout>
  )
}

export default Mumbai

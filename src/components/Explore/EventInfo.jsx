import React from 'react'
import Layout from '../../../Layout/Layout1'
import { Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import PlaceIcon from '@mui/icons-material/Place'
import RegistrationCard from './RegistrationCard'

const EventInfo = () => {
  return (
    <Layout>
      <div className='flex gap-5 mt-20 '>
        <div className='left ' style={{ width: '500px', height: '500px' }}>
          <img
            src='https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=280,height=280/event-covers/q8/11e3a5cf-82a6-4f45-a0b6-8575aad328a8'
            alt='event image'
            className='h-72  mb-10'
          />
          <Typography>Hosted By</Typography>
          <div className='flex gap-2'>
            <Avatar
              alt='Cindy Baker'
              src='https://mui.com/static/images/avatar/3.jpg'
            />
            <Typography sx={{ alignSelf: 'center' }}> Author Name</Typography>
          </div>
          <Typography>Contact the author</Typography>
          <Typography>Report Event</Typography>
        </div>
        <div className='right'>
          <Typography variant='h4' style={{ fontWeight: 'bolder' }}>
            Event Title
          </Typography>

          {/* Date and address */}
          <div className='mt-5 mb-5'>
            <div className='flex'>
              <div>
                <CalendarMonthIcon
                  sx={{ fontSize: '50px', marginRight: '10px' }}
                />
              </div>
              <div>
                <Typography>Day, Date Month</Typography>
                <Typography>Time</Typography>
              </div>
            </div>
            <div className='flex'>
              <div>
                <PlaceIcon sx={{ fontSize: '50px', marginRight: '10px' }} />
              </div>
              <div>
                <Typography>Venue</Typography>
                <Typography>Address</Typography>
              </div>
            </div>
          </div>

          {/* RegistrationCard */}
          <RegistrationCard />

          {/* About Eve */}
          <div className='mt-5 mb-5'>
            <Typography variant='h5'>About Event</Typography>
            <hr></hr>
            <Typography>
              <p className='mt-5 mb-5 font-bold'>
                If you are a Chief Marketing Officer, Marketing Head, Digital
                Marketing Head or e-Business Head of a leading brand located at
                UAE then attending The Partner Connect Program must be on your
                to-do list
              </p>
              <p className='mt-5 mb-5 font-bold'>
                ​The Partner Connect Program shall allow you to meet a number of
                partners that would add value to your marketing & digital
                marketing goals for 2024
              </p>
              <p className='mt-5 mb-5 font-bold'>
                ​Event Details - 09 February 2024 at Taj Business Bay, Dubai
                4.00 p.m. onwards followed by Drinks & Dinner
              </p>
            </Typography>
          </div>

          {/* Location */}
          <div className='mt-5 mb-5'>
            <Typography variant='h5'>Location</Typography>
            <hr></hr>
            <Typography>
              <p className='mt-5 font-extrabold'>Taj Dubai</p>
              <p className='mb-5 font-bold'>
                Burj Khalifa St - Business Bay - Dubai - United Arab Emirates
                Opera Banquet 3
              </p>
            </Typography>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default EventInfo

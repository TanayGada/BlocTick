import React from 'react'
import calendar from '../../../assets/calendar.png'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
const EventAbsent = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          marginTop: '7rem',
        }}
      >
        <img
          src={calendar}
          width={'150px'}
          alt='EventAbsent Calendar'
          style={{ filter: 'hue-rotate(90deg)' }}
        />
      </div>
      <div
        style={{
          marginTop: '2.3rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ fontSize: '1.8rem' }}>
          <h1>No Upcoming Events</h1>
        </div>
        <div>
          <h6>You have no Upcoming events. Why not host one?</h6>
        </div>
        <Stack style={{ padding: '2rem' }} direction='row' spacing={2}>
          <Button style={{ color: 'black' }} href='#text-buttons'>
            <Link
              to='/create-event'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Create Event
            </Link>
          </Button>
        </Stack>
      </div>
    </>
  )
}

export default EventAbsent


import React from 'react'
import { Button, Timeline, TimelineBody } from 'flowbite-react'
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi'
import { Typography } from '@mui/material'
const PresentEvents = [
  {
    time: '22nd Feb',
    nameOfEvent: 'HackEth',
    location: 'Matunga',
    GuestCnt: '5',
    id: 1,
  },
  {
    time: '22nd Feb',
    nameOfEvent: 'HackEth',
    location: 'Matunga',
    GuestCnt: '5',
    id: 2,
  },
  {
    time: '22nd Feb',
    nameOfEvent: 'HackEth',
    location: 'Matunga',
    GuestCnt: '5',
    id: 3,
  },
  {
    time: '22nd Feb',
    nameOfEvent: 'HackEth',
    location: 'Matunga',
    GuestCnt: '5',
    id: 4,
  },
]

const PresentEvent = ({ time, nameOfEvent, location, GuestCnt }) => {
  return (
    <>
      <Timeline.Item>
        <div className='flex'>
          <Timeline.Point icon={HiCalendar} />

          <Timeline.Content className='w-full'>
            <div
              style={{
                background: 'rgb(255,255,255,0.3)',
                borderRadius: '20px',
                padding: '10px',
                margin: '10px',
              }}
            >
              <Timeline.Time>{time}</Timeline.Time>
              <Timeline.Title>{nameOfEvent}</Timeline.Title>
              <Timeline.Body>{location}</Timeline.Body>
              <Timeline.Body>{GuestCnt} guests</Timeline.Body>
              <div className='flex gap-5'>
                <Button color='gray'>
                  Manage Events
                  <HiArrowNarrowRight className='ml-2 h-3 w-3' />
                </Button>
                <Button color='gray'>
                  CheckIn Guests
                  <HiArrowNarrowRight className='ml-2 h-3 w-3' />
                </Button>
              </div>
            </div>
          </Timeline.Content>
        </div>
      </Timeline.Item>
    </>
  )
}

function EventPresent() {
  return (
    <Timeline>
      {PresentEvents.map((event) => {
        return <PresentEvent {...event} key={event.id} />
      })}
    </Timeline>
  )
}

export default EventPresent

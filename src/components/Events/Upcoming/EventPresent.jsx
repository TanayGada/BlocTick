import React from 'react'
import { Button, Timeline, TimelineBody } from 'flowbite-react'
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi'
import { Typography } from '@mui/material'
import { useAuthContext } from '../../../hooks/useAuthContext'
import Image from '../../../Image'

const PresentEvent = (events) => {

  const { user } = useAuthContext() 

const {
  eventStartDate
,
eventOrganizerEmailId,
  eventName,
  eventLocation,
  eventTicketsCount,
} = events
   const dateObject = new Date(eventStartDate)
   // Extracting hours, minutes, and seconds
   const hours = dateObject.getUTCHours()
   const minutes = dateObject.getUTCMinutes()
   const timeString = `${hours}:${minutes}`

   const options = { day: 'numeric', month: 'short', year: 'numeric' }

   const formattedDate = dateObject.toLocaleDateString('en-US', options)

  return (
    <>
      <Timeline.Item>
        <div className='flex'>
          <Timeline.Point icon={HiCalendar} />

          <Timeline.Content className='w-full'>
            <div
              style={{
                background: 'rgb(255,255,255,0.6)',
                borderRadius: '20px',
                padding: '1rem',
                paddingLeft: '2rem',
                margin: '5px',
              }}
            >
              <div className='flex justify-between'>
                <div>
                  <Timeline.Time style={{ marginRight: '1rem' }}>
                    {timeString}
                  </Timeline.Time>
                  <Timeline.Title>{eventName}</Timeline.Title>
                  <Timeline.Body>{eventLocation}</Timeline.Body>
                  <Timeline.Body>{eventTicketsCount} guests</Timeline.Body>
                  <div className='flex gap-5 mt-10'>
                    
                    {eventOrganizerEmailId === user.email ? (
                      <Button color='gray'>
                        Manage Events
                        <HiArrowNarrowRight className='ml-2 h-3 w-3' />
                      </Button>
                    ) : null}

                    <Button color='gray'>
                      CheckIn Guests
                      <HiArrowNarrowRight className='ml-2 h-3 w-3' />
                    </Button>
                  </div>
                </div>
                <div>
                  <div>
                    <div style={{ borderRadius: '10px', width: '200px' }}>
                      <Image />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Timeline.Content>
        </div>
      </Timeline.Item>
    </>
  )
}

const EventPresent = ({events}) => {
  return (
    <Timeline>
      {events.map((event) => {
        return <PresentEvent {...event} key={event._id} />
      })}
    </Timeline>
  )
}

export default EventPresent

import React from 'react'
import {Timeline} from 'flowbite-react'
import {HiCalendar } from 'react-icons/hi'

const CityEvents = [
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

const TimeEvent = ({ time, nameOfEvent, location, GuestCnt }) => {
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
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div className='ml-5'>
                <Timeline.Time>{time}</Timeline.Time>
                <Timeline.Title>{nameOfEvent}</Timeline.Title>
                <Timeline.Body>{location}</Timeline.Body>
                <Timeline.Body>{GuestCnt} guests</Timeline.Body>
                <Timeline.Body style={{ fontWeight: 'bold' }}>
                  Type of Event
                </Timeline.Body>
              </div>
              <div style={{ alignSelf: 'center' }}>
                <img
                  src='https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=280,height=280/event-covers/rj/0b9ea337-be78-4a02-88a3-c5695b3625ed'
                  alt='img'
                  style={{ borderRadius: '10px', width: '200px' }}
                ></img>
              </div>

              {/* <div className="flex gap-5">
                <Button color="gray">
                  Manage Events
                  <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                </Button>
                <Button color="gray">
                  CheckIn Guests
                  <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                </Button>
              </div> */}
            </div>
          </Timeline.Content>
        </div>
      </Timeline.Item>
    </>
  )
}

function TimeItem() {
  return (
    <Timeline>
      {CityEvents.map((event) => {
        return <TimeEvent {...event} key={event.id} />
      })}
    </Timeline>
  )
}

export default TimeItem

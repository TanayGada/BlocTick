import React from 'react'
import { Button, Timeline } from 'flowbite-react'
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi'

const EventPresent = () => {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <div
            style={{
              background: 'white',
              borderRadius: '20px',
              padding: '10px',
              margin: '10px',
            }}
          >
            <Timeline.Time>February 2022</Timeline.Time>
            <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </Timeline.Body>
            <Button color='gray'>
              Learn More
              <HiArrowNarrowRight className='ml-2 h-3 w-3' />
            </Button>
          </div>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <div
            style={{
              background: 'white',
              borderRadius: '20px',
              padding: '10px',
              margin: '10px',
            }}
          >
            <Timeline.Time>February 2022</Timeline.Time>
            <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </Timeline.Body>
            <Button color='gray'>
              Learn More
              <HiArrowNarrowRight className='ml-2 h-3 w-3' />
            </Button>
          </div>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <div
            style={{
              background: 'white',
              borderRadius: '20px',
              padding: '10px',
              margin: '10px',
            }}
          >
            <Timeline.Time>February 2022</Timeline.Time>
            <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </Timeline.Body>
            <Button color='gray'>
              Learn More
              <HiArrowNarrowRight className='ml-2 h-3 w-3' />
            </Button>
          </div>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  )
}

export default EventPresent

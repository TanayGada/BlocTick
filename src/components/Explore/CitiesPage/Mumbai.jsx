import React from 'react'
import background from '../../../assets/mumbai.png'
import Typography from '@mui/material/Typography'
import SubscribeCard from '../WeeklyEmail'
import { Button } from 'flowbite-react'
import AddIcon from '@mui/icons-material/Add'
import { Timeline } from 'flowbite-react'
import Layout from '../../../Layout/Layout1'
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi'

const Mumbai = () => {
  return (
    <Layout>
      <div
        class=' zm-container text-emerald-100  font-sans'
        sx={{ opacity: 1 }}
      >
        <div
          style={{
            backgroundImage: `url(${background})`,
            height: '300px',
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
            disableFocusRipple
            disableElevation
          >
            <AddIcon /> Submit Event
          </Button>
        </div>
        <Timeline>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '10px',
                  margin: '10px',
                }}
              >
                <Timeline.Time>February 2022</Timeline.Time>
                <Timeline.Title>
                  Application UI code in Tailwind CSS
                </Timeline.Title>
                <Timeline.Body>
                  Get access to over 20+ pages including a dashboard layout,
                  charts, kanban board, calendar, and pre-order E-commerce &
                  Marketing pages.
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
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '10px',
                  margin: '10px',
                }}
              >
                <Timeline.Time>February 2022</Timeline.Time>
                <Timeline.Title>
                  Application UI code in Tailwind CSS
                </Timeline.Title>
                <Timeline.Body>
                  Get access to over 20+ pages including a dashboard layout,
                  charts, kanban board, calendar, and pre-order E-commerce &
                  Marketing pages.
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
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '10px',
                  margin: '10px',
                }}
              >
                <Timeline.Time>February 2022</Timeline.Time>
                <Timeline.Title>
                  Application UI code in Tailwind CSS
                </Timeline.Title>
                <Timeline.Body>
                  Get access to over 20+ pages including a dashboard layout,
                  charts, kanban board, calendar, and pre-order E-commerce &
                  Marketing pages.
                </Timeline.Body>
                <Button color='gray'>
                  Learn More
                  <HiArrowNarrowRight className='ml-2 h-3 w-3' />
                </Button>
              </div>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </div>
    </Layout>
  )
}

export default Mumbai

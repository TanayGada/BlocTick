import {React,useState,useEffect} from 'react'
import Layout from '../../Layout/Layout1'
import { Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import PlaceIcon from '@mui/icons-material/Place'
import RegistrationCard from './RegistrationCard'
import { useParams } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import axios from 'axios'
import Image from '../../Image'


const EventInfo = () => {
   const { eventId } = useParams()
  // const eventId = props.match.params.eventId
  

  const url = `http://localhost:5001/events/${eventId}`
  const [loading, setLoading] = useState(true)
  const [eventData, setEventData] = useState([])
  
  // const { cityEvents, dispatch } = useUpcomingEventsDataContext()
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })

        console.log('response:', response.data)
        

        const fetchedEventData = response.data
        // const fetchedPastEvents2 = response.data.pastEvents;
        // const fetchedCityEvents = fetchedCityEvents1.concat(fetchedPastEvents2)

        setEventData(fetchedEventData)
        // setPast(fetchedPastEvents2)
        // console.log('cityEvents:', cityEvents)
        // console.log('past:', past)

        // dispatch({ type: 'SET_CITY_EVENTS', payload: data })
      } catch (error) {
        console.error('Error fetching upcoming events:', error)
      } finally {
        setLoading(false)
        // console.log('cityEvents:', cityEvents);
      }
    }
    if (user) {
      fetchEventData()
    }
  }, [url, user, loading]) ///loading


  const {
    evenName,
    eventStartDate,
    eventEndDate,
    eventLocation,
    eventAddress,
    eventDescription,
    eventOrganizerEmailId,
  } = eventData

   const dateObject = new Date(eventStartDate)
   // Extracting hours, minutes, and seconds
   const hours = dateObject.getUTCHours()
   const minutes = dateObject.getUTCMinutes()
   const timeString = `${hours}:${minutes}`

   const options = { day: 'numeric', month: 'short', year: 'numeric' }

   const formattedDate = dateObject.toLocaleDateString('en-US', options)




  return (
    <Layout>
      <div className='flex gap-5 mt-20 '>
        <div className='left ' style={{ width: '500px', height: '500px' }}>
          <div
           
            className='h-72  mb-10'
          >
            <Image/>
          </div>
          <Typography>Hosted By</Typography>
          <div className='flex gap-2'>
            <Avatar src='/broken-image.jpg' />
            <Typography sx={{ alignSelf: 'center' }}>
              {' '}
              {eventOrganizerEmailId}
            </Typography>
          </div>
          <Typography>Contact the author</Typography>
          <Typography>Report Event</Typography>
        </div>
        <div className='right'>
          <Typography variant='h4' style={{ fontWeight: 'bolder' }}>
            {evenName}
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
                <Typography>{formattedDate}</Typography>
                <Typography>{timeString}</Typography>
              </div>
            </div>
            <div className='flex'>
              <div>
                <PlaceIcon sx={{ fontSize: '50px', marginRight: '10px' }} />
              </div>
              <div>
                <Typography>{eventLocation}</Typography>
                <Typography>{eventAddress}</Typography>
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
              <p className='mt-5 mb-5 font-bold'>{eventDescription}</p>
            </Typography>
          </div>

          {/* Location */}
          <div className='mt-5 mb-5'>
            <Typography variant='h5'>Location</Typography>
            <hr></hr>
            <Typography>
              <p className='mt-5 font-extrabold'>{eventLocation}</p>
              <p className='mb-5 font-bold'>{eventAddress}</p>
            </Typography>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default EventInfo


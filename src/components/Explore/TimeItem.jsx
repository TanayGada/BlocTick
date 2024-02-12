import {React, useState, useEffect }from 'react'
import {Timeline} from 'flowbite-react'
import {HiCalendar } from 'react-icons/hi'
import axios from 'axios'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'
import Image from '../../Image'




const TimeEvent = ({
  eventStartDate,
  eventName,
  eventLocation,
  eventTicketsCount,
  eventTicketsPrice,
  eventOrganizerEmailId,
  eventId
}) => {
  
  const navigate =  useNavigate()
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
              onClick={() => navigate(`/events/${eventId}`)}
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
                <Timeline.Time style={{display:'flex', gap:'1rem'}}>
                  <div>{timeString} </div>
                  <div>{formattedDate}</div>
                  </Timeline.Time>
                <Timeline.Title>{eventName}</Timeline.Title>
                <Timeline.Body>{eventLocation}</Timeline.Body>
                <Timeline.Body>{eventTicketsCount} Guests</Timeline.Body>
                <Timeline.Body>INR {eventTicketsPrice}</Timeline.Body>
                <Timeline.Body style={{ fontWeight: 'bold' }}>
                  Created By {eventOrganizerEmailId}
                </Timeline.Body>
              </div>
              <div style={{ alignSelf: 'center' }}>
                <div
                  
                  style={{ borderRadius: '10px', width: '200px' }}
                >
                <Image/>
                
                </div>
              </div>
            </div>
          </Timeline.Content>
        </div>
      </Timeline.Item>
    </>
  )
}

function TimeItem({categoryId}) {

const url = `http://localhost:5001/events/category/${categoryId}`
const [loading, setLoading] = useState(true)
const [cityEvents, setCityEvents] = useState([])
// const [past, setPast] = useState([])
// const [upcoming, setUpcoming] = useState([])

// const { cityEvents, dispatch } = useUpcomingEventsDataContext()
const { user } = useAuthContext()

useEffect(() => {
  const fetchCityEvents = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      console.log('response:', response.data);
      
      const fetchedCityEvents1 = response.data.upcomingEvents;
      // const fetchedPastEvents2 = response.data.pastEvents;
      // const fetchedCityEvents = fetchedCityEvents1.concat(fetchedPastEvents2)

      
      setCityEvents(fetchedCityEvents1)
      // setPast(fetchedPastEvents2)
            console.log('cityEvents:', cityEvents)
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
    fetchCityEvents()
  }
}, [ url,user,loading]) ///loading


return (

  <Timeline>
    {cityEvents.map((event) => {
      return <TimeEvent {...event} key={event._id} />
    })}
  </Timeline>
)
}

export default TimeItem

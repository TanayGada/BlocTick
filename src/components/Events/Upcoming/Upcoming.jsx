import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import EventAbsent from './EventAbsent'
import EventPresent from './EventPresent'
import axios from 'axios'

import { useAuthContext } from '../../../hooks/useAuthContext'






const Upcoming = () => {
const { user } = useAuthContext()
const emailId = user.email

const url = `/customers/${emailId}/`
  
  const [loading, setLoading] = useState(true)
  const [upcomingEventData, setUpcomingEventData] = useState([])
  const [pastEventData, setPastEventData] = useState([])
  
  
  

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })

        console.log('response:', response.data)
        

        // const fetchedEventData = response.data
        const fetchedPastEvents = response.data.pastEvents;
        const fetchedUpcomingEvents = response.data.upcomingEvents;

        setUpcomingEventData(fetchedUpcomingEvents)
        setPastEventData(fetchedPastEvents)
        console.log('upcomingEventData:', upcomingEventData)
        console.log('pastEventData:', pastEventData)
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



  return (
    // <div style={{ marginLeft: '1rem' }}>
    //   {loading ? (
    //     console.log('Loading')
    //   ) : upcomingEventsData != null ? (
    //     <EventPresent events={upcomingEventsData} />
    //   ) : (
    //     <EventAbsent />
    //   )}
    // </div>
    <h1>Upcoming</h1>
  )
  }

// // Use prop types to validate the props that you pass to your child components
// Upcoming.propTypes = {
//   events: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       date: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// }

export default Upcoming

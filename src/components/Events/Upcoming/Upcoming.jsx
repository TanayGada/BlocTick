import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import EventAbsent from './EventAbsent'
import EventPresent from './EventPresent'
import axios from 'axios'
import { useUpcomingEventsDataContext } from '../../../hooks/useUpcomingEventsDataContext'
import { useAuthContext } from '../../../hooks/useAuthContext'

const url = '/events/upcoming'

const Upcoming = () => {
  const [loading, setLoading] = useState(true)

  const { upcomingEventsData, dispatch } = useUpcomingEventsDataContext()
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchUpcomingEventsData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            'Authorization': `Bearer ${user.token}`,
          },
        })
        const data = response.data
        dispatch({ type: 'SET_UPCOMING_EVENTS', payload: data })
      } catch (error) {
        console.error('Error fetching upcoming events:', error)
      } finally {
        setLoading(false)
      }
    }
    if(user){
      fetchUpcomingEventsData()
    }
    
  }, [dispatch, user])

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

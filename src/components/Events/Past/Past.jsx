import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import EventAbsent from './EventAbsent'
import EventPresent from './EventPresent'
import axios from 'axios'

import { useAuthContext } from '../../../hooks/useAuthContext'

const Past = () => {
  const { user } = useAuthContext()
 
  const emailId = user.email

  const url = `http://localhost:5001/customers/${emailId}`

  const [loading, setLoading] = useState(true)
  
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
        const fetchedPastEvents = response.data.pastEvents
        setPastEventData(fetchedPastEvents)
        console.log('pastEventData:', pastEventData)
      } catch (error) {
        console.error('Error fetching upcoming events:', error)
      } finally {
        setLoading(false)
        
      }
    }
    if (user) {
      fetchEventData()
    }
  }, [url, user, loading]) ///loading

  return (
    <div style={{ marginLeft: '1rem' }}>
      {loading ? (
        console.log('Loading')
      ) : pastEventData != null ? (
        <EventPresent events={pastEventData} />
      ) : (
        <EventAbsent />
      )}
    </div>
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

export default Past

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import EventAbsent from './EventAbsent'
import EventPresent from './EventPresent'
import axios from 'axios'
import { usePastEventsDataContext } from '../../../hooks/usePastEventsDataContext'
import { useAuthContext } from '../../../hooks/useAuthContext'

const url = '/events/past'

const Past = () => {
  const [loading, setLoading] = useState(true)

  const { PastEventsData, dispatch } = usePastEventsDataContext()
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchPastEventsData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        const data = response.data
        dispatch({ type: 'SET_PAST_EVENTS', payload: data })
      } catch (error) {
        console.error('Error fetching past events:', error)
      } finally {
        setLoading(false)
      }
    }
    if (user) {
      fetchPastEventsData()
    }
  }, [dispatch, user])

  return (
    <div style={{ marginLeft: '1rem' }}>
      {loading ? (
        console.log('Loading')
      ) : PastEventsData != null ? (
        <EventPresent events={PastEventsData} />
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

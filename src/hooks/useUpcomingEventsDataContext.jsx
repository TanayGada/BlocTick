import { UpcomingEventsDataContext } from '../contexts/UpcomingEventsDataContext'
import { useContext } from 'react'

export const useUpcomingEventsDataContext = () => {
  const context = useContext(UpcomingEventsDataContext)

  if (!context) {
    throw Error(
      'useUpcomingEventsDataContext must be used within a upcomingEventsDataProvider'
    )
  }

  return context
}

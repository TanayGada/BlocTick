import {createContext, useReducer} from 'react'


export const UpcomingEventsDataContext = createContext();

export const upcomingEventsDataReducer = (state, action) => {
    switch (action.type) {
        case 'GET_UPCOMING_EVENTS_DATA':
            return {
              upcomingEventsData: action.payload,
            }
        case 'UPDATE_UPCOMING_EVENTS_DATA':
            return {
                upcomingEventsData: [ action.payload, ...state.upcomingEventsData]
            }
            default:
                return state;
        }
}


export const UpcomingEventsDataProvider = ({children}) => {

    const [state, dispatch] = useReducer(upcomingEventsDataReducer,{ upcomingEventsData:null})

    


    return (
      <UpcomingEventsDataContext.Provider value={{ ...state, dispatch }}>
        {children}
      </UpcomingEventsDataContext.Provider>
    )
}
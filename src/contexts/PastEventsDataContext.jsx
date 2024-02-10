// import { createContext, useReducer } from 'react'

// export const PastEventsDataContext = createContext()

// export const pastEventsDataReducer = (state, action) => {
//   switch (action.type) {
//     case 'GET_PAST_EVENTS_DATA':
//       return {
//         pastEventsData: action.payload,
//       }
//     case 'UPDATE_PAST_EVENTS_DATA':
//       return {
//         pastEventsData: [action.payload, ...state.pastEventsData],
//       }
//     default:
//       return state
//   }
// }

// export const PastEventsDataProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(pastEventsDataReducer, {
//     pastEventsData: null,
//   })

//   return (
//     <PastEventsDataContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </PastEventsDataContext.Provider>
//   )
// }

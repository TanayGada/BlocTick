import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App'
import Events from './components/Events/Events'
import Calendar from './components/Calendar/Calendar'
import Explore from './components/Explore/Explore'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Events />,
      },
      {
        path: 'events',
        element: <Events />,
      },
      {
        path: 'calendar',
        element: <Calendar />,
      },
      {
        path: 'explore',
        element: <Explore />,
      },
    ],
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)



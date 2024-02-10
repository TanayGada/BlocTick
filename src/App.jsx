import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import CreateEventPage from './components/Create-Event/CreateEvent'
import EventsPage from './components/Events/Events'
import CalendarPage from './components/Calendar/Calendar'
import ExplorePage from './components/Explore/Explore'
import Signup from './components/Login-Page/SignUp'
import LogIn from './components/Login-Page/LogIn'
import LandingPage from './components/LandingPage/Landing'
import Profile from './components/ProfilePage/Profile'
import Bangalore from './components/Explore/CitiesPage/Bangalore'
import Chennai from './components/Explore/CitiesPage/Chennai'
import Delhi from './components/Explore/CitiesPage/Delhi'
import Pune from './components/Explore/CitiesPage/Pune'
import Jaipur from './components/Explore/CitiesPage/Jaipur'
import Mumbai from './components/Explore/CitiesPage/Mumbai'
import ManageEvent from './components/Manage-Event/ManageEvent'
import Registration from './components/Manage-Event/Registration'
import Guests from './components/Manage-Event/Guests'
import EventInfo from './components/Explore/EventInfo'

const App = () => {
  const { user } = useAuthContext()
  return (
    <Router>
      <Routes>
        <Route path='/'>
          <Route
            path=''
            element={!user ? <LandingPage /> : <Navigate to='/events' />}
          />
          <Route
            path='events'
            element={user ? <EventsPage /> : <Navigate to='/login' />}
          />
          <Route
            path='calendar'
            element={user ? <CalendarPage /> : <Navigate to='/login' />}
          />
          <Route path='explore'>
            <Route
              path=''
              element={user ? <ExplorePage /> : <Navigate to='/login' />}
            />
            <Route
              path='mumbai'
              element={user ? <Mumbai /> : <Navigate to='/login' />}
            />
            <Route
              path='bangalore'
              element={user ? <Bangalore /> : <Navigate to='/login' />}
            />
            <Route
              path='chennai'
              element={user ? <Chennai /> : <Navigate to='/login' />}
            />
            <Route
              path='delhi'
              element={user ? <Delhi /> : <Navigate to='/login' />}
            />
            <Route
              path='pune'
              element={user ? <Pune /> : <Navigate to='/login' />}
            />
            <Route
              path='jaipur'
              element={user ? <Jaipur /> : <Navigate to='/login' />}
            />
          </Route>
          <Route
            path='create-event'
            element={user ? <CreateEventPage /> : <Navigate to='/login' />}
          />
          <Route
            path='profile'
            element={user ? <Profile /> : <Navigate to='/login' />}
          />
          <Route
            path='login'
            element={!user ? <LogIn /> : <Navigate to='/events' />}
          />
          <Route
            path='signup'
            element={!user ? <Signup /> : <Navigate to='/events' />}
          />
          <Route path='explore/'></Route>

          <Route
            path='manageevent/'
            element={user ? <ManageEvent /> : <Navigate to='/login' />}
          >
            <Route
              path='overview'
              element={user ? <ManageEvent /> : <Navigate to='/login' />}
            />
          </Route>
          <Route
            path='registration'
            element={user ? <Registration /> : <Navigate to='/login' />}
          />
          <Route
            path='guests'
            element={user ? <Guests /> : <Navigate to='/login' />}
          />
          <Route
            path='events/:eventId'
            element={user ? <EventInfo /> : <Navigate to='/login' />}
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

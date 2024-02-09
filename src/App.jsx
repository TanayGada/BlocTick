import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom' 
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

const App = () => {

  const {user} = useAuthContext()
  return (

    <Router>
      <Routes>
        <Route
          path='/'
          element={!user ? <LandingPage /> : <Navigate to='/events' />}
        />
        <Route
          path='/events'
          element={user ? <EventsPage /> : <Navigate to='/login' />}
        />
        <Route
          path='/calendar'
          element={user ? <CalendarPage /> : <Navigate to='/login' />}
        />
        <Route
          path='/explore'
          element={user ? <ExplorePage /> : <Navigate to='/login' />}
        />
        <Route
          path='/create-event'
          element={user ? <CreateEventPage /> : <Navigate to='/login' />}
        />
        <Route
          path='/profile'
          element={user ? <Profile /> : <Navigate to='/login' />}
        />
        <Route
          path='/login'
          element={!user ? <LogIn /> : <Navigate to='/events' />}
        />
        <Route
          path='/signup'
          element={!user ? <Signup /> : <Navigate to='/events' />}
        />
        <Route
          path='/explore/mumbai'
          element={user ? <Mumbai /> : <Navigate to='/login' />}
        />
        <Route
          path='/explore/bangalore'
          element={user ? <Bangalore /> : <Navigate to='/login' />}
        />
        <Route
          path='/explore/chennai'
          element={user ? <Chennai /> : <Navigate to='/login' />}
        />
        <Route
          path='/explore/delhi'
          element={user ? <Delhi /> : <Navigate to='/login' />}
        />
        <Route
          path='/explore/pune'
          element={user ? <Pune /> : <Navigate to='/login' />}
        />
        <Route
          path='/explore/jaipur'
          element={user ? <Jaipur /> : <Navigate to='/login' />}
        />
       
      </Routes>
    </Router>
  )
}

export default App

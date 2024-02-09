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

// import { useState } from 'react'
// import { WagmiProvider } from 'wagmi'
// import { config } from '../src/config'
// import { Account } from './blockchain/account'
// import { WalletOptions } from './blockchain/wallet-options'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


// const queryClient = new QueryClient()

// function ConnectWallet() {
//   const { isConnected } = Account()
//   if (isConnected) return <Account />
//   return <WalletOptions />
// }



const App = () => {

  const {user} = useAuthContext()
  return (
    // <WagmiProvider config={config}>
    //   <QueryClientProvider client={queryClient}>

    //     <div className='card'>
    //       <ConnectWallet />

    //     </div>
    //   </QueryClientProvider>
    // </WagmiProvider>

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
          element={user ? <Profile
           /> : <Navigate to='/login' />}
        />
        <Route
          path='/login'
          element={!user ? <LogIn /> : <Navigate to='/events' />}
        />
        <Route
          path='/signup'
          element={!user ? <Signup /> : <Navigate to='/events' />}
        />
      </Routes>
    </Router>
  )
}

export default App

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
// import { GoogleOAuthProvider } from '@react-oauth/google'
import { UpcomingEventsDataProvider } from './contexts/UpcomingEventsDataContext'
import { AuthContextProvider } from './contexts/AuthContext'
import { PastEventsDataProvider } from './contexts/PastEventsDataContext'

const root = createRoot(document.getElementById('root'))


root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PastEventsDataProvider>
        <UpcomingEventsDataProvider>
          <App />
        </UpcomingEventsDataProvider>
      </PastEventsDataProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
  //  <GoogleOAuthProvider clientId='695931706593-v3002vj61lbnoq3jgrniv3383cbekuft.apps.googleusercontent.com'></GoogleOAuthProvider>
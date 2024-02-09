import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
// import { GoogleOAuthProvider } from '@react-oauth/google'
import { UpcomingEventsDataProvider } from './contexts/UpcomingEventsDataContext'
import { AuthContextProvider } from './contexts/AuthContext'
import { PastEventsDataProvider } from './contexts/PastEventsDataContext'
import { useState } from 'react'
import { WagmiProvider } from 'wagmi'
import { config } from '../src/config'
import { Account } from './blockchain/Functions/ReadFunctions/Account'
import { WalletOptions } from './blockchain/Functions/ReadFunctions/wallet-options'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()


const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <PastEventsDataProvider>
            <UpcomingEventsDataProvider>
              <App />
            </UpcomingEventsDataProvider>
          </PastEventsDataProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
//  <GoogleOAuthProvider clientId='695931706593-v3002vj61lbnoq3jgrniv3383cbekuft.apps.googleusercontent.com'></GoogleOAuthProvider>

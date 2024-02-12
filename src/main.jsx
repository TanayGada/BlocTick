import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import { AuthContextProvider } from './contexts/AuthContext'

import { WagmiProvider } from 'wagmi'
import { config } from '../src/config'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'



const queryClient = new QueryClient()

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
   
      <AuthContextProvider>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
           
            <App />
          </QueryClientProvider>
        </WagmiProvider>
      </AuthContextProvider>
    
  </React.StrictMode>
)

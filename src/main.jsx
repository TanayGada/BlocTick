import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import { AuthContextProvider } from './contexts/AuthContext'

import { WagmiProvider } from 'wagmi'
import { config } from '../src/config'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  DynamicContextProvider,
  DynamicWidget,
} from '@dynamic-labs/sdk-react-core'
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum'

const queryClient = new QueryClient()

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <DynamicContextProvider
      settings={{
        environmentId: '7ff768b0-a743-4919-9a26-c8dde6b14635',
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <AuthContextProvider>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <DynamicWidget />
            <App />
          </QueryClientProvider>
        </WagmiProvider>
      </AuthContextProvider>
    </DynamicContextProvider>
  </React.StrictMode>
)

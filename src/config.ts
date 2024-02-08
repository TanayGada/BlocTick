import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { injected, walletConnect } from 'wagmi/connectors'
import {polygonMumbai } from 'wagmi/chains'


export const config = createConfig({
  // extensionOnly: true,
  // autoConnect: true,

  chains: [mainnet, sepolia, polygonMumbai],
  connectors: [
    injected(),


  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygonMumbai.id]: http(),
  },
})



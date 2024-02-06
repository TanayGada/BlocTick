// import { injected, walletConnect } from 'wagmi/connectors'
// import { createConfig, http } from 'wagmi'
// import { mainnet, sepolia } from 'wagmi/chains'

// export const config = createConfig({
//   extensionOnly: true, // Corrected to use lowercase 'true'
//   chains: [mainnet, sepolia],
//   connectors: [
//     injected(),

//     walletConnect({
//       projectId: ' ', // yet to put
//     }),
//   ],
//   transports: {
//     [mainnet.id]: http(),
//     [sepolia.id]: http(),
//   },
// })


import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { injected, walletConnect } from 'wagmi/connectors'

export const config = createConfig({
  extensionOnly: true,
  chains: [mainnet, sepolia],
  connectors: [
    injected({ target: 'metaMask' }),

    walletConnect({
      projectId: ' ', //yet to put
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})



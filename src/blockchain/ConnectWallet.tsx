import React from 'react'
import { Account } from './Functions/ReadFunctions/Account'
import { WalletOptions } from './Functions/ReadFunctions/wallet-options'
import { useAccount, useDisconnect } from 'wagmi'
import { CheckBalance } from './Functions/ReadFunctions/CheckBalance'
import { Typography } from '@mui/material'

export function ConnectWallet() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  if (address)
    return (
      <div>
        <h1>Your Wallet is Connected</h1>
        <h1>Your Address: {address}</h1>
        <div>
          <button onClick={() => disconnect()}>Disconnect</button>
        </div>
        <CheckBalance />
      </div>
    )
  return (
    <>
      <div className='flex-col  '>
        <div className='justify-center text-black font-extrabold ml-4'>
          <p>Connect Wallet:</p>
        </div>

        <WalletOptions />
      </div>
    </>
  )
}

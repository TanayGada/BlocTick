import React from 'react'
import { Account } from './Functions/ReadFunctions/Account'
import { WalletOptions } from './Functions/ReadFunctions/wallet-options'
import { useAccount, useDisconnect} from 'wagmi'
import { CheckBalance } from './Functions/ReadFunctions/CheckBalance'


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
        <h1>Connect Wallet</h1>
      <WalletOptions />
    </>
  )
}

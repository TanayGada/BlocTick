import React from 'react'
import { useReadContract, useAccount } from 'wagmi'
import { config } from '../../../config'
import { abi } from '../../../abi'
import { WalletOptions } from './wallet-options'
import { Deposit } from '../WriteFunctions/Deposit'
import { useNavigate} from 'react-router-dom'

export function CheckBalance() {
  const navigate = useNavigate()
  const { address } = useAccount()
  const requiredBalance = 1e16
  const {
    data: balance,
    isLoading,
    error,
  } = useReadContract({
    config,
    abi,
    functionName: 'checkBalance',
    address: '0x34a0286c6cd5aB85F2A376939D97Be4F01b9FC6D', // contract address
    args: [],
    account: address, // user ka account address
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error fetching balance: {error.message}</div>
  }

  if (address) {
    return (
      <>
        <div>Your Balance: {20000}</div>
        <div>Minimum Required Deposit: {(requiredBalance * 0.002) / 1e9}</div>
        {isNaN(parseInt(balance)) || parseInt(balance) < requiredBalance ? (
          <>
            <div>
              You Need to Deposit:{' '}
              {isNaN(parseInt(balance))
                ? 2*requiredBalance / 1e12
                : 2*requiredBalance / 1e12}
            </div>
            <Deposit />
          </>
        ) : (
          <div>
            <div> You can Create Event</div>
            <button
              onClick={() => {
                navigate('/create-event')
              }}
            >
              Create Event
            </button>
          </div>
        )}
      </>
    )
  } else {
    return (
      <div>
        <button onClick={WalletOptions}>Connect Wallet</button>
      </div>
    )
  }
}

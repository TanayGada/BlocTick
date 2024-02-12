
import * as React from 'react'
import {
  type BaseError,
  useWaitForTransactionReceipt,
  useWriteContract,
  useAccount
} from 'wagmi'
import { abi } from '../../../abi'
import { parseEther } from 'viem'
import {useNavigate} from 'react-router-dom'

export function Deposit() {
  const {address} = useAccount();
  const { data: hash, error, isPending, writeContract } = useWriteContract()
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const input = '0.02'
    writeContract({
      address: '0x34a0286c6cd5aB85F2A376939D97Be4F01b9FC6D',
      abi,
      functionName: 'deposit',
      args: [],
      value: parseEther(input),
      account: address,
    })
  }

  const navigate = useNavigate();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    })

  return (
    <form onSubmit={submit}>
      {/* <input name="address" placeholder="0xA0Cf…251e" required />
      <input name="value" placeholder="0.05" required /> */}
      <button disabled={isPending} type='submit'>
        {isPending ? 'Confirming...' : 'deposit'}
      </button>
      {/* {hash && <div>Transaction Hash: {hash}</div>} */}
      {isConfirming && <div>Waiting for confirmation...</div>}
      {isConfirmed && (
        <div>
          <div>Transaction confirmed.</div>
          <div> You can now Create Event</div>
          <button onClick={() => {
            navigate('/create-event')
          }}>Create Event</button>
        </div>
      )}
      {error && (
        <div>Error: {(error as BaseError).shortMessage || error.message}</div>
      )}
    </form>
  )
}
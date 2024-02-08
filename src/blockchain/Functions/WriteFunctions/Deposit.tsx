import * as React from 'react'
import {
  type BaseError,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi'
import { abi } from '../../../abi'
import { parseEther } from 'viem'

export function Deposit() {
  const { data: hash, error, isPending, writeContract } = useWriteContract()
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // const formData = new FormData(e.target as HTMLFormElement);
    // const tokenId = formData.get("tokenId") as string;
    writeContract({
      address: '0x813a632A0dE5f0B56CD7Cfc6fbEA3Cc626Ee3451',
      abi,
      functionName: 'deposit',
      args: [],
      value: parseEther('0.01'),
      account: '0x37cE4B56d54E1f759CD49748E5F73b45A321958b',
    })
  }

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
      {hash && <div>Transaction Hash: {hash}</div>}
      {isConfirming && <div>Waiting for confirmation...</div>}
      {isConfirmed && <div>Transaction confirmed.</div>}
      {error && (
        <div>Error: {(error as BaseError).shortMessage || error.message}</div>
      )}
    </form>
  )
}

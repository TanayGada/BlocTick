// import { writeContract } from '@wagmi/core'
// import { abi } from '../../../abi'
// import { config } from '../../../config'
// import { parseEther } from 'viem'



// export const CreateEvent = async ({eventTicketPrice, eventTicketsCount, myEpoch})=>{
    


// const create = await writeContract(config, {
//   abi,
//   address: '0x23Eb585676AeC3B57D22A5752e09103AB9a92eb6',
//   functionName: 'createEvent',
//   args: [1n, [eventTicketPrice], [eventTicketsCount], ['0'], myEpoch],
//   value: parseEther('0.01'),
//   account: '0x37cE4B56d54E1f759CD49748E5F73b45A321958b',
// })
// return(
//     console.log("Event Created Successfully!")
// )
// }


import * as React from 'react'
import {
  type BaseError,
  useWaitForTransactionReceipt,
  useWriteContract,
  useAccount,
} from 'wagmi'
import { abi } from '../../../abi'
import { parseEther } from 'viem'
import { useNavigate } from 'react-router-dom'

export function Withdraw() {
  const { address } = useAccount()
  const { data: hash, error, isPending, writeContract } = useWriteContract()
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // const formData = new FormData(e.target as HTMLFormElement);
    // const tokenId = formData.get("tokenId") as string;
    writeContract({
      address: '0x23Eb585676AeC3B57D22A5752e09103AB9a92eb6',
      abi,
      functionName: 'withdraw',
      args: [0n],
      value: 0n,
      account: address,
    })
  }

  const navigate = useNavigate()
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    })

  return (
    <form onSubmit={submit}>
      {/* <input name="address" placeholder="0xA0Cf…251e" required />
      <input name="value" placeholder="0.05" required /> */}
      <button disabled={isPending} type='submit'>
        {isPending ? 'Confirming...' : 'Withdraw'}
      </button>
      {hash && <div>Transaction Hash: {hash}</div>}
      {isConfirming && <div>Waiting for confirmation...</div>}
      {isConfirmed && (
        <div>
          <div>Transaction confirmed.</div>
        </div>
      )}
      {error && (
        <div>Error: {(error as BaseError).shortMessage || error.message}</div>
      )}
    </form>
  )
}


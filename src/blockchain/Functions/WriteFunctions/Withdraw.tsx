import {useAccount, useBalance, useWriteContract} from 'wagmi'
import { abi } from '../../../abi'
import { config } from '../../../config'
import { parseEther } from 'viem'






export function Withdraw() {
    const address = useAccount()
    const balance = useBalance()
    const writeContract = useWriteContract()
const withdraw = await writeContract(config, {
  abi,
  address: '0x813a632A0dE5f0B56CD7Cfc6fbEA3Cc626Ee3451',
  functionName: 'withdraw',
  args: [balance],
  value: parseEther(balance),
  account: address,
})
}
// import * as React from 'react'
// import {
//   type BaseError,
//   useWaitForTransactionReceipt,
//   useWriteContract,
//   useAccount
// } from 'wagmi'
// import { abi } from '../../../abi'
// import { parseEther } from 'viem'

// export function Deposit({ balance, requiredBalance }) {
//  const { address } = useAccount() as { address?: string }

//   const { data: hash, error, isPending, writeContract } = useWriteContract()

//   async function submit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault()
//     writeContract({
//       address: '0x23Eb585676AeC3B57D22A5752e09103AB9a92eb6',
//       abi,
//       functionName: 'deposit',
//       args: [],
//       value: parseEther('0.01'),
//       account: address,
//     })
//   }

//   const { isLoading: isConfirming, isSuccess: isConfirmed } =
//     useWaitForTransactionReceipt({
//       hash,
//     })

//   if (balance < requiredBalance) {
//     return (
//       <form onSubmit={submit}>
//         <button disabled={isPending} type='submit'>
//           {isPending ? 'Confirming...' : 'Deposit'}
//         </button>
//         {hash && <div>Transaction Hash: {hash}</div>}
//         {isConfirming && <div>Waiting for confirmation...</div>}
//         {isConfirmed && <div>Transaction confirmed.</div>}
//         {error && (
//           <div>Error: {(error as BaseError).shortMessage || error.message}</div>
//         )}
//       </form>
//     )
//   } else {
//     return <div></div>
//   }
// }



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
    // const formData = new FormData(e.target as HTMLFormElement);
    // const tokenId = formData.get("tokenId") as string;
    writeContract({
      address: '0x23Eb585676AeC3B57D22A5752e09103AB9a92eb6',
      abi,
      functionName: 'deposit',
      args: [],
      value: parseEther('0.01'),
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
      {hash && <div>Transaction Hash: {hash}</div>}
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
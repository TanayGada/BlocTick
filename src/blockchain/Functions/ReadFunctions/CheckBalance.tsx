import { type BaseError, useReadContract } from 'wagmi'
import { config } from '../../../config'
import { abi } from '../../../abi'

export function CheckBalance() {
  const { data: balance } = useReadContract({
    config,
    abi,
    functionName: 'checkBalance',
    address: '0x813a632A0dE5f0B56CD7Cfc6fbEA3Cc626Ee3451', //contract address
    args: [],
    account: '0x37cE4B56d54E1f759CD49748E5F73b45A321958b', //user ka account address
  })
  // console.log(balance)
  return <div>Balance: {balance?.toString()}</div>
}

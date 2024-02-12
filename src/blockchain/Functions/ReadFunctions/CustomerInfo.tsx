import { useReadContract, useAccount } from 'wagmi'
import { abi } from '../../../abi'
import { config } from '../../../config'


export function CustomerInfo() {
    const address = useAccount()
  const { data: output } = useReadContract({
    config,
    abi,
    functionName: 'CustomerInfo',
    address: '0x34a0286c6cd5aB85F2A376939D97Be4F01b9FC6D',

    args: ['type', 'count'],
    account: address, //our address
  })
  console.log(output)
  return
}

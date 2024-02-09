import { useReadContract, useAccount } from 'wagmi'
import { abi } from '../../../abi'
import { config } from '../../../config'


export function CustomerInfo() {
    const address = useAccount()
  const { data: output } = useReadContract({
    config,
    abi,
    functionName: 'CustomerInfo',
    address: '0x23Eb585676AeC3B57D22A5752e09103AB9a92eb6',

    args: ['type', 'count'],
    account: address, //our address
  })
  console.log(output)
  return
}

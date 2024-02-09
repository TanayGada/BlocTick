import { useAccount, useDisconnect, useEnsName } from 'wagmi'

export function Account() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
 



  return (
    <div>
      {/* {ensAvatar && <img alt='ENS Avatar' src={ensAvatar} />}
      {address && <div>{ensName ? `${ensName} (${address})` : address}</div>} */}
      {/* <div>{address}</div> */}
      
      <button onClick={() => disconnect()}>Disconnect</button>
      
    </div>
  )
}

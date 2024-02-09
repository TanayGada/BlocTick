// import * as React from "react";
import { useConnect } from 'wagmi'

export function WalletOptions() {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => (
    <button key={connector.uid} onClick={() => connect({ connector })}>
      <div
      style={{padding:'1rem',margin:'1rem', backgroundColor:'green', borderRadius:'1rem'}}>{connector.name}</div>
    </button>
  ))
}

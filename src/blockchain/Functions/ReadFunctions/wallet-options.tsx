// import * as React from "react";
import { Typography } from '@mui/material'
import { useConnect } from 'wagmi'

export function WalletOptions() {
  const { connectors, connect } = useConnect()

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' ,width:'100%'}}>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            style={{
              padding: '1rem',
              margin: '1rem',
              backgroundColor: 'green',
              borderRadius: '1rem',
              color: 'black',
              fontWeight: 'bolder',
              cursor: 'pointer', // Add cursor style for better indication
              transition: 'background-color 0.3s ease', // Add transition for a smoother hover effect
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = '#4CAF50')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = 'green')
            }
          >
            {connector.name}
          </button>
        ))}
      </div>
    </>
  )
}

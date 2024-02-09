import React from 'react'
import { ConnectWallet } from '../../blockchain/ConnectWallet'
import Layout2 from '../../Layout/Layout2'
import { CheckBalance } from '../../blockchain/Functions/ReadFunctions/CheckBalance'

function Profile() {
  return (
    <Layout2>
      <div style={{
        marginRight:'3rem',
        marginLeft:'3rem',
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '1rem',
      }}>
        <ConnectWallet />

      </div>
    </Layout2>
  )
}

export default Profile
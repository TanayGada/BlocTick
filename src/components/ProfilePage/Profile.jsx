import React from 'react'
import { ConnectWallet } from '../../blockchain/ConnectWallet'
import Layout4 from '../../Layout/Layout4'
import { CheckBalance } from '../../blockchain/Functions/ReadFunctions/CheckBalance'
import { Withdraw } from '../../blockchain/Functions/WriteFunctions/Withdraw'

function Profile() {
  return (
    <Layout4>
      <div style={{
        marginRight:'3rem',
        marginLeft:'3rem',
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '1rem',
      }}>
        <ConnectWallet />

        <Withdraw/>

      </div>
    </Layout4>
  )
}

export default Profile
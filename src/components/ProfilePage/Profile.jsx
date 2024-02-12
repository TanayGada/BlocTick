import React from 'react'
import { ConnectWallet } from '../../blockchain/ConnectWallet'
import Layout from '../../Layout/Layout1'
import { CheckBalance } from '../../blockchain/Functions/ReadFunctions/CheckBalance'
import { Avatar, Typography } from '@mui/material'
import { useAuthContext } from '../../hooks/useAuthContext'

const Profile = () => {

  const user = useAuthContext()
  return (
    <Layout>
      {/* personalinfo */}
      <div
        style={{
          backgroundColor: 'rgb(255,255,255,0.3)',
          backdropFilter: 'blur(15px)',
          padding:'auto',
          margin: 'auto',
          width: '60%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderRadius:'20px',
        }}
      >
        <Avatar
          src='/broken-image.jpg'
          sx={{ height: '200px', width: '200px', alignSelf: 'center', marginTop:'1.2rem'}}
        />
        {/* <Avatar
          alt='Cindy Baker'
          src='https://mui.com/static/images/avatar/3.jpg'
          sx={{ height: '200px', width: '200px', alignSelf: 'center' }}
        /> */}

        <Typography sx={{ alignSelf: 'center' }}>{user.email}</Typography>

        <div
          style={{
            margin: 'auto',
            backdropFilter: 'blur(15px)',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            padding: '2rem',
            borderRadius: '1rem',
            marginTop: '1.5rem',

          }}
        >
          <ConnectWallet />
        </div>
      </div>
    </Layout>
  )
}

export default Profile

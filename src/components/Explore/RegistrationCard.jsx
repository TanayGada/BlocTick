import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Avatar, Button, CardActionArea } from '@mui/material'
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined'
import { useAuthContext } from '../../hooks/useAuthContext'


const RegistrationCard = () => {
const {user} = useAuthContext()



  return (
    <>
      <Card
        sx={{ maxWidth: 'full', borderRadius: '10px' }}
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
        className=' bg-whiteInverted  mt-2 '
      >
        <CardContent>
          <div className='m-2'>
            <Typography>Registration</Typography>
          </div>
          <hr></hr>

          <div className='flex gap-2 m-2'>
            <div style={{ alignSelf: 'center' }}>
              <ConfirmationNumberOutlinedIcon />
            </div>
            <div>
              <Typography>Event full or not</Typography>
              <Typography>If event full,please join the waitlist</Typography>
            </div>
          </div>
          <hr></hr>

          <div className='m-2'>
            <Typography>
              Please click on the button below to join the waitlist. You will be
              notified if additional spots become available.
            </Typography>
            <div className='flex gap-2 '>
              <Avatar
                alt='Cindy Baker'
                src='https://mui.com/static/images/avatar/3.jpg'
              />
              <Typography style={{ alignSelf: 'center' }}>{user.email}</Typography>
              <Typography style={{ alignSelf: 'center' }}>
                User Email
              </Typography>
            </div>
          </div>
        </CardContent>
        <div className='p-2'>
          <CardActionArea>
            <Button sx={{ width: '100%' }}>Join Waitlist</Button>
          </CardActionArea>
        </div>
      </Card>
    </>
  )
}

export default RegistrationCard

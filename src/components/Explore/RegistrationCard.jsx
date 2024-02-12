import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Avatar, Button, CardActionArea } from '@mui/material'
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined'
import { useAuthContext } from '../../hooks/useAuthContext'


const RegistrationCard = () => {
const {user} = useAuthContext()




// const handleSubmit = (e) => {
// e.preventDefault()
// handleBuyTicket()

// }


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
              <Typography>10 Tickets Remaining!!</Typography>
              <Typography>Join Fast</Typography>
            </div>
          </div>
          <hr></hr>

          <div className='m-2'>
            <Typography>
              Please click on the button below to Register
            </Typography>
            <div className='flex gap-2 '>
              <Avatar src='/broken-image.jpg' />
              <Typography style={{ alignSelf: 'center' }}>
                {user.email}
              </Typography>
             
            </div>
          </div>
        </CardContent>
        <div className='p-2'>
          <CardActionArea>
            <Button sx={{ width: '100%' }}
          >Register</Button>
          </CardActionArea>
        </div>
      </Card>
    </>
  )
}

export default RegistrationCard

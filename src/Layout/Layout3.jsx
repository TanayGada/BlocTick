import React from 'react'
import Navbar1 from '../components/Navbar/Navbar1'
import Footer1 from '../components/Footer/Footer1'
// import { Outlet } from 'react-router-dom'
import '../App.css'
import MiniNav from '../components/Manage-Event/Nav'
// import SignUp from './components/Login-Page/SignUp'
import logo from '../assets/logo1.svg'  
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";


const Layout3 = ({ children ,name}) => {
  return (
    <div className='animated-background'>
      <Navbar1 />
      <div className='main-container'>
        <div style={{ marginTop: '70px' }}>
          <div
            className='zm-container text-emerald-100  font-sans flex justify-between  '
            sx={{ opacity: 1}}
          >
            <div className='flex gap-2'>
   
              <Typography variant='h5'>{name}</Typography>
            </div>
            <Button
              variant='contained'
              endIcon={<ArrowOutwardIcon />}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0)',
                color: 'black',
              }}
            >
              Event Page
            </Button>
          </div>
          <MiniNav />
          <main>{children}</main>
        </div>
        <Footer1 className='footer' />
      </div>
    </div>
  )
}

export default Layout3

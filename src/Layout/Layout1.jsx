import React from 'react'
import Navbar1 from '../components/Navbar/Navbar1'
import Footer1 from '../components/Footer/Footer1'
// import { Outlet } from 'react-router-dom'
import '../App.css'
// import SignUp from './components/Login-Page/SignUp'

const Layout = ({ children }) => {
  return (
    <div className='animated-background'>
      <Navbar1 />
      <div className='main-container'>
        <div style={{ marginTop: '50px' }}>
          <main>{children}</main>
        </div>
        <Footer1 className='footer' />
      </div>
    </div>
  )
}

export default Layout

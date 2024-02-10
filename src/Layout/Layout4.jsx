import React from 'react'
import Navbar1 from '../components/Navbar/Navbar1'

// import { Outlet } from 'react-router-dom'
import '../App.css'
// import SignUp from './components/Login-Page/SignUp'

const Layout4 = ({ children }) => {
  return (
    <div className='animated-background'>
      <Navbar1 />
      <div className='main-container'>
        <div style={{ marginTop: '50px' }}>
          <main>{children}</main>
        </div>
        
      </div>
    </div>
  )
}

export default Layout4

import React from 'react'
import Navbar1 from './components/Navbar/Navbar1'
import Footer1 from './components/Footer/Footer1'
import { Outlet } from 'react-router-dom'
import './App.css'
import SignUp from './components/Login-Page/SignUp'

function App() {
  return (
    <>
   
      <div className='animated-background'>
        <Navbar1 />
        <div
          style={{
            margin: '0 auto',
            width: '60%',
            textAlign: 'center',
          }}
        >
          <div className='main-content'>
            <Outlet />
          </div>
          <Footer1 className='footer' />
        </div>
      </div>
    </>
  )
}

export default App

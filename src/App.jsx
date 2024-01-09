import React from 'react'
import Navbar1 from './components/Navbar/Navbar1'
import Footer1 from './components/Footer/Footer1'
import { Outlet } from 'react-router-dom'
import './App.css'
function App() {
  return (
    <>
      <div
        className='animated-background'
      >
        <Navbar1/>
        <Outlet />
        <Footer1 />
      </div>
    </>
  )
}

export default App

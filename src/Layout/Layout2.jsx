import React from 'react'
import '../App'


const Layout2 = ({ children }) => {
  return (
    <div className='animated-background'>
      
      <div className='main-container'>
        <div style={{ marginTop: '50px' }}>
          <main>{children}</main>
        </div>
        
      </div>
    </div>
  )
}

export default Layout2

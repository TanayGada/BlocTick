import React from 'react'
import './SignUp.css'

const SignUp = () => {
  const handleEmailSubmit = (event) => {
    event.preventDefault()

  }

  const handleGoogleSignIn = () => {
    
  }

  return (
    <div className='signup-container'>
      <header>
        <h1>BlocTick</h1>
        
        <button>Sign In</button>
      </header>

      <main>
        <div className='signup-card'>
          <h2>Welcome to BlocTick</h2>
          <p>Please sign in or sign up below.</p>

          <form onSubmit={handleEmailSubmit}>
            <input type='email' placeholder='you@email.com' required />
            <button type='submit'>Continue with Email</button>
          </form>

          <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        </div>
      </main>
    </div>
  )
}

export default SignUp

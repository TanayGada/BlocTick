import { useState, useEffect } from 'react'
import { useSignup } from '../../hooks/useSignup.jsx'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { TextField, Button, Grid, Typography } from '@mui/material'
import Layout2 from '../../Layout/Layout2'
import logo from '../../assets/logo2.png'



const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, error, isLoading } = useSignup()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
     navigate('/events')
  }

  return (
    <Layout2>
      <div
        style={{
          background: 'rgba(205,251,155,0.4)',
          backdropFilter: 'blur(10px)',
          paddingBottom: '20px',
          borderRadius: '17px',
          paddingTop: '20px',
          margin: 'auto',
          maxWidth: '350px',
          marginTop: '10rem',
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} direction='column' alignItems='center'>
            <Grid item>
              <img src={logo} alt='Logo' style={{ width: '50px' }} />
            </Grid>
            <Grid item>
              <Typography variant='h4'>Welcome to BlocTick</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1'>Please LogIn</Typography>
            </Grid>
            <Grid item sx={{ width: '80%' }}>
              <TextField
                type='email'
                variant='outlined'
                fullWidth
                value={email}
                placeholder='Enter Email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item sx={{ width: '80%' }}>
              <TextField
                placeholder='Enter Password'
                type='password'
                variant='outlined'
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>

            <Button
              type='submit'
              variant='contained'
              color='primary'
              disabled={isLoading}
              onClick={handleSubmit}
              style={{ marginTop: '1rem', marginLeft: '1rem', width: '78%' }}
            >
              SignUp
            </Button>
            
            {error && <div>{error}</div>}
          </Grid>
        </form>
      </div>
    </Layout2>
  )
}

export default Signup

// import React, { useState, useEffect } from 'react'

// import { GoogleLogin } from '@react-oauth/google'
// import axios from 'axios'
// import { TextField, Button, Grid, Typography } from '@mui/material'
// import Layout2 from '../../Layout/Layout2'
// import { jwtDecode } from 'jwt-decode'
// import logo from '../../assets/logo2.png'


// const LoginForm = () => {
  
//   const [user, setUser] = useState(null)
//   const [profile, setProfile] = useState(null)
//   const [email, setEmail] = useState('')

//   const onLoginSuccess = (response) => {
//     setUser(response)
//   }

//   const onLoginError = (error) => {
//     console.log('Login Failed:', error)
//   }

//   const onLogoutSuccess = () => {
//     setProfile(null)
//   }

//   const fetchUserProfile = async () => {
//     if (user) {
//       try {
//         const res = await axios.get(
//           `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
//           {
//             headers: {
//               Authorization: `Bearer ${user.access_token}`,
//               Accept: 'application/json',
//             },
//           }
//         )

//         setProfile(res.data)
//       } catch (err) {
//         console.log(err)
//       }
//     }
//   }

//   const onSubmit = (event) => {
//     event.preventDefault()
//     console.log('Form data submitted:', { email })
//     // Send the data to the backend or perform other actions
//   }

//   const onGoogleLoginSuccess = async (response) => {
//     const decoded = jwtDecode(response.credential)
//     console.log('Google login successful:', decoded);

//     // Send user data to the backend
//     try {
//       const res = await axios.post('http://localhost:1000/', {
//         user: decoded,
//       })
//       console.log('Data sent to backend: ', res.data)

//       // Redirect to the home page on successful signup
      
//     } catch (error) {
//       console.error('Error sending data to backend: ', error)

//       // Handle error, for now, you can log it
//       console.error('Error during signup:', error)

//     }
//   }

//   const onGoogleLoginFailure = (error) => {
//     console.log('Google login failure:', error)
//     // Handle the error
//   }

//   useEffect(() => {
//     fetchUserProfile()
//   }, [user])

//   return (
//     <Layout2>
//       <div
//         style={{
//           background: 'rgba(205,251,155,0.4)',
//           backdropFilter: 'blur(10px)',
//           paddingBottom: '20px',
//           borderRadius: '17px',
//           paddingTop: '20px',
//           margin: 'auto',
//           maxWidth: '350px',
//           marginTop: '10rem',
//         }}
//       >
//         <form onSubmit={onSubmit}>
          <Grid container spacing={2} direction='column' alignItems='center'>
            <Grid item>
              <img src={logo} alt='Logo' style={{ width: '50px' }} />
            </Grid>
            <Grid item>
              <Typography variant='h4'>Welcome to BlocTick</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1'>
                Please sign in or sign up below.
              </Typography>
            </Grid>
            <Grid item sx={{ width: '80%' }}>
              <TextField
               
                type='email'
                variant='outlined'
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item sx={{ width: '80%' }}>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                fullWidth
                disabled={isLoading}
              >
                Login
              </Button>
            </Grid>
            {/* <Grid item sx={{ width: '80%' }}>
              {profile ? (
                <div>
                  <GoogleLogout onSuccess={onLogoutSuccess} />
                </div>
              ) : (
                // <GoogleLogin
                //   clientId='695931706593-v3002vj61lbnoq3jgrniv3383cbekuft.apps.googleusercontent.com'
                //   onSuccess={onGoogleLoginSuccess}
                //   onFailure={onGoogleLoginFailure}
                //   render={(renderProps) => (
                    // <Button
                    //   variant='contained'
                    //   color='secondary'
                    //   fullWidth
                    //   onClick={handlegoogle}
                    //   // style={{ width: '100%' }}
                    //   // onClick={renderProps.onClick}
                    //   // disabled={renderProps.disabled}
                    // >
                    //   Sign in with Google
                    // </Button>
                  )}
                />
              )}
            </Grid> */}
          </Grid>
//         </form>
//       </div>
//     </Layout2>
//   )
// }

// export default LoginForm

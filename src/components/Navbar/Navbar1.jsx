import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import logo from '../../assets/logo2.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import '../../App.css'
import { useLogout } from '../../hooks/useLogout'

const pages = ['Events', 'Calendar', 'Explore']




const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  // const [activeLink, setActiveLink] = useState(null)
  const [top, setTop] = useState(true)
  const {logout} = useLogout()
  const navigate = useNavigate()

  const handleClick = async() => {
    await logout();
    navigate('/')
  }

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 40 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleLinkClick = (page) => {
    // setActiveLink(page)
    handleCloseNavMenu
  }

  return (
    <AppBar
      position='fixed'
      sx={{
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backdropFilter: 'blur(15px)',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        boxShadow: !top ? '0px 5px 15px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'box-shadow 0.3s ease-in-out',
        zIndex: 100,
        height: '50px',
        paddingBottom: '10px',
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <div className='logo-container'>
            <img
              src={logo}
              style={{
                width: '25px',
                fill: 'none',
                color: 'rgba(255, 255, 255, 0.5)',
              }}
              alt='Logo'
            />
          </div>

          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {pages.map((page) => (
              <NavLink
                key={page}
                to={`/${page.toLowerCase()}`}
                style={{ textDecoration: 'none' }}
              >
                <Typography
                  key={page}
                  variant='body1'
                  sx={{
                    mx: 2,
                    cursor: 'pointer',
                    color: 'grey',
                    ':hover': {
                      color: 'black',
                    },
                  }}
                >
                  {page}
                </Typography>
              </NavLink>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'right',
              alignItems: 'center',
              marginLeft: 'auto',
            }}
          >
            <Link
              to='/create-event'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Typography
                variant='body1'
                onClick={() => handleLinkClick('create-event')}
                sx={{
                  mx: 2,
                  cursor: 'pointer',
                  // color: determineTextColor(activeLink, 'create-event'),
                  ':hover': {
                    color: 'black',
                  },
                }}
              >
                Create Event
              </Typography>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  src='/broken-image.jpg'
                 
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* View Profile */}
              <MenuItem onClick={handleCloseUserMenu}>
                <NavLink
                  to={`/profile`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Typography textAlign='center'>View Profile</Typography>
                </NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink
                  // to={`/`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Typography textAlign='center' onClick={handleClick}>
                    Logout
                  </Typography>
                </NavLink>
              </MenuItem>

              {/* <MenuItem onClick={handleCloseUserMenu}>
                <NavLink
                  to={`/login`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Typography textAlign='center'>Login</Typography>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <NavLink
                  to={`/signup`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Typography textAlign='center'>SignUp</Typography>
                </NavLink>
              </MenuItem> */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar

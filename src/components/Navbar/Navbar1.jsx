import React from 'react'
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
import { Link } from 'react-router-dom'
import { useState } from 'react'

const pages = ['Events', 'Calendar', 'Explore']
const settings = ['View Profile', 'Logout']

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const [activeLink, setActiveLink] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleLinkClick = (page) => {
    setActiveLink(page)
    handleCloseNavMenu()
  }
  return (
    <AppBar
      position='fixed'
      sx={{
        boxSizing: 'border-box',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backdropFilter: 'blur(15px)',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        boxShadow: '0.1 0px 0px rgba(0, 0,0,0)',
        zIndex: 1000,
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
              alignItems: 'center', // Center content vertically
            }}
          >
            {pages.map((page) => (
              <Link
                key={page}
                to={`/${page.toLowerCase()}`}
                style={{ textDecoration: 'none' }}
              >
                <Typography
                  key={page}
                  variant='body1'
                  onClick={() => handleLinkClick(page)}
                  sx={{
                    mx: 2,
                    cursor: 'pointer',
                    color: activeLink === page ? 'black' : 'grey',
                    ':hover': {
                      color: 'black',
                    },
                  }}
                >
                  {page}
                </Typography>
              </Link>
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
                onClick={handleCloseNavMenu}
                sx={{
                  mx: 2,
                  cursor: 'pointer',
                  color: 'grey',
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
                <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ResponsiveAppBar


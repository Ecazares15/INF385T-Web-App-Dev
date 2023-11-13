import { useState, useEffect} from 'react';
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography, Menu, MenuItem, Tooltip, Avatar, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Lock, Person, Logout } from '@mui/icons-material';
import wanderWorldLogo from '../assets/wanderworld_logo.svg';
import { Link } from 'react-router-dom';
import photoURL from '../assets/profile.jpg'
import { useValue } from '../context/ContextProvider'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase'

const user = { name: 'test', photoURL }

const pages = ['Feed', 'Community'];
const settings = ['Profile', 'Logout'];

const NavBar = () => {

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("uid", user.uid)
        console.log("email", user.email)
        dispatch({ type: 'UPDATE_USER', payload: {name: user.email, photoURL: null} })
      } else {
        console.log("user is logged out")
      }
    })
  }, [])

  const handleLogout = () => {
    signOut(auth).then(() => {
      // sign out successful
      console.log("signed out successfully")
      dispatch({ type: 'UPDATE_USER', payload: null })
    }).catch((error) => {
      console.log(error)
    })
  }

  const { state: { currentUser }, dispatch } = useValue()

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {/* NORMAL LAYOUT */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <img src={wanderWorldLogo} alt='logo' width={50} />
          </Box>
          <Typography
            variant='h5'
            noWrap
            component='a'
            href="/"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex', color: 'inherit', textDecoration: 'none' } }}>
            WanderWorld
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start' }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link style={{ textDecoration: 'none', color: 'white' }} to={`/${page}`}>{page}</Link>
              </Button>
            ))}
          </Box>

          {/* XS LAYOUT */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link style={{ textDecoration: 'none', color: 'black' }} to={`/${page}`}>{page}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <img src={wanderWorldLogo} alt='logo' width={50} />
          </Box>
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=""
            sx={{ mr: 2, flexGrow: 1, display: { xs: 'flex', md: 'none', color: 'inherit', textDecoration: 'none' } }}>
            WanderWorld
          </Typography>

          {/* LOGIN & PROFILE */}
          {!currentUser ? (
            <Button color='inherit' startIcon={<Lock />} onClick={() => dispatch({ type: 'OPEN_LOGIN' })}>
              Login
            </Button>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open User Settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    color="secondary"
                    src={currentUser?.photoURL}
                    alt={currentUser?.name}>
                    {currentUser?.name?.charAt(0).toUpperCase()}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
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
                <MenuItem>
                  <ListItemIcon><Person fontSize='small' /></ListItemIcon>
                  <Link style={{ textDecoration: 'none', color: 'black' }} to="/profile">Profile</Link>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon><Logout fontSize='small' /></ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
};

export default NavBar;
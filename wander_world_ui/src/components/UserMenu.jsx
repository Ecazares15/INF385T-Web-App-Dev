import { Menu, MenuItem, ListItemIcon } from '@mui/material';
import { Person, Logout } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useValue } from '../context/ContextProvider'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase'

const UserMenu = ({anchorUserMenu, setAnchorUserMenu}) => {

    const handleCloseUserMenu = () => {
        setAnchorUserMenu(null);
    };
    
    const handleLogout = () => {
        signOut(auth).then(() => {
          // sign out successful
          console.log("signed out successfully")
          dispatch({ type: 'UPDATE_USER', payload: null })
        }).catch((error) => {
          console.log(error)
        })
      }
    
    const { dispatch } = useValue()

  return (
    <Menu
        anchorEl={anchorUserMenu}
        open={Boolean(anchorUserMenu)}
        onClose={handleCloseUserMenu}
        onClick={handleCloseUserMenu}
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
  )
}

export default UserMenu
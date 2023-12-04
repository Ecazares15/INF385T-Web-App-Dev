import { auth } from '../firebase'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Button, colors } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';
import { useValue } from '../context/ContextProvider'

function Profile() {
    const hostname = "https://wander-world-api.vercel.app"
    const { state: { currentUser }, dispatch } = useValue()
    const [userDetails, setUserDetails] = useState({
        name: 'Loading...',
        email: 'Loading...',
        photoURL: null
    });

    useEffect(() => {
        const currentUser = auth.currentUser;
        if (currentUser) {
            fetchUserDetails(currentUser.uid);
        }
    }, []);

    const fetchUserDetails = async (uid) => {
        try {
            const response = await axios.get(`${hostname}/users/${uid}`);
            setUserDetails(response.data);
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    };

    const handleDeleteAccount = async () => {
        const currentUser = auth.currentUser;
        if (!currentUser) {
            console.error("No user is currently signed in.");
            return;
        }
    
        if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
            currentUser.delete().then(() => {
                console.log("User account deleted successfully.");
                dispatch({ type: 'UPDATE_USER', payload: null })
                // Redirect to login or some other page
                // window.location.href = '/login'; // or use a React Router method
            }).catch((error) => {
                console.error("Error deleting user account:", error);
                // Handle the error appropriately
                // Show an error message to the user, etc.
            });
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', marginTop: '20px' }}>
          <Avatar
            style={{
              backgroundColor: userDetails?.photoURL ? undefined : colors.green[500],
              marginRight: '30px',
              width: '90px', 
              height: '90px'
            }}
            alt={userDetails?.name}
          >
            {userDetails?.name?.charAt(0).toUpperCase()}
          </Avatar>
          <div>
            <h1>Welcome, {userDetails?.name}!</h1>
            <h3>{userDetails?.email}</h3>
          </div>
        </div>
        <Button color="error" variant="contained" endIcon={<DeleteForever/>} onClick={handleDeleteAccount}>Delete Account</Button>
      </div>
    )
}

export default Profile
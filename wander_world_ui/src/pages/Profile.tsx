import { auth } from '../firebase'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, colors } from '@mui/material';

function Profile() {
    const hostname = "https://wander-world-api.vercel.app"
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

    const fetchUserDetails = async (uid: string) => {
        try {
            const response = await axios.get(`${hostname}/users/${uid}`);
            setUserDetails(response.data);
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    };

    return (
        <div>
            <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ marginBottom: '20px' }}>
                <Avatar
                    style={{
                      backgroundColor: userDetails?.photoURL ? undefined : colors.green[500]
                    }}
                    alt={userDetails?.name}>
                    {userDetails?.name?.charAt(0).toUpperCase()}
                  </Avatar>
                  <h1>Welcome, {userDetails.name}!</h1>
                  <h3>Email: {userDetails.email}</h3>
            </div>
        </div>
        </div>
    )
}

export default Profile
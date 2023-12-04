import { auth } from '../firebase'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
    const [userDetails, setUserDetails] = useState({
        name: 'Loading...',
        email: 'Loading...',
        // Include other fields as needed with default values
    });

    useEffect(() => {
        // Check if there's a user logged in
        const currentUser = auth.currentUser;
        if (currentUser) {
            // Fetch user details from your API
            fetchUserDetails(currentUser.uid);
        }
    }, []);

    const fetchUserDetails = async (uid: string) => {
        try {
            const response = await axios.get(`http://localhost:5000/users/${uid}`);
            setUserDetails(response.data);
        } catch (error) {
            console.error("Error fetching user details:", error);
            // Handle errors here, such as showing an alert or a message on the UI
        }
    };

    return (
        <div>
            <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ marginBottom: '20px' }}>
                <h1>Welcome, {userDetails.name}!</h1>
                <h3>Email: {userDetails.email}</h3>
                {/* Display other user details here */}
            </div>
            {/* Add other profile related elements here */}
        </div>
        </div>
    )
}

export default Profile
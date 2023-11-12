import React, { useState } from 'react';
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';
import PasswordInput from '../components/PasswordInput';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);

    // handle authentication

  };

  return (
    <Container className='mt-5' sx={{ display: "flex", justifyContent: "center" }}>
      <Paper className="w-50 h-50 text-center" elevation={1}>
        <div className="m-5">
          <div className='pb-3'>
            <h1>Login</h1>
          </div>
          <div className='pb-3'>
            <TextField
              required
              label="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='pb-3'>
            <PasswordInput setPassword={setPassword} />
          </div>
          <div>
            <Button variant="contained" onClick={handleLogin}>Login</Button>
          </div>
        </div>
      </Paper>
    </Container>
  );
}

export default Login;
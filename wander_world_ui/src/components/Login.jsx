import { useState, useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PasswordField from "./PasswordField";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from "@mui/material";
import { Close, Send } from "@mui/icons-material";
import { useValue } from "../context/ContextProvider";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'
import axios from "axios";

function Login() {
  
  const {state:{openLogin}, dispatch} = useValue()
  const [title, setTitle] = useState('Login')
  const [isRegister, setIsRegister] = useState(false)
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  const hostname = "https://wander-world-api.vercel.app"

  const handleClose = () => {
    dispatch({type:'CLOSE_LOGIN'})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value
    const password = passwordRef.current.value
    if (isRegister) {
      const name = nameRef.current.value
      const confirmPassword = confirmPasswordRef.current.value
      // REGISTER
      if (password !== confirmPassword) {
        dispatch({type:'UPDATE_ALERT', payload: {open:true, severity:'error', message:"Passwords don't match"}})
        return
      } 
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          // signed in!
          const user = userCredential.user
          console.log(user)
          const userData = {
            uid: user.uid, // or any other user details you want to store
            name: name,
            email: email
          };
  
          // Send POST request to Flask API
          await axios.post(`${hostname}/users`, userData)
            .then(response => {
              console.log('User added to MongoDB:', response.data);
            })
            .catch(error => {
              console.error('Error adding user to MongoDB:', error);
            });
            
          dispatch({type:'UPDATE_ALERT', payload: {open:true, severity:'success', message:"Account created!"}})
          handleClose()
          
        }).catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode, errorMessage)
        })
    } else {
      // LOGIN
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // signed in!
          const user = userCredential.user
          console.log(user)
          dispatch({type:'UPDATE_ALERT', payload: {open:true, severity:'success', message:"Logged in successfully!"}})
          handleClose()
        }).catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode, errorMessage)
          dispatch({type:'UPDATE_ALERT', payload: {open:true, severity:'error', message:"Invalid email or password"}})
        })
    }
  }

  useEffect(() => {
    isRegister ? setTitle('Register') : setTitle('Login')
  }, [isRegister])

  return (
    <Dialog open={openLogin} onClose={handleClose}>
        <DialogTitle>
          {title}
          <IconButton
            sx={{
              position:'absolute',
              top:8,
              right:8,
              color:(theme)=> theme.palette.grey[500]
            }}
            onClick={handleClose}
            aria-label="close">
            <Close/>
          </IconButton>
        </DialogTitle>
        <form onSubmit={handleSubmit}>
            <DialogContent dividers>
              <DialogContentText>
                Please fill out your information in the fields below!
              </DialogContentText>
              {isRegister &&
              <TextField
                autoFocus
                margin='normal'
                variant='standard'
                id='name'
                label='Name'
                type='text'
                fullWidth
                inputRef={nameRef}
                inputProps={{minLength:2}}
                required
                />}
              <TextField
                autoFocus={!isRegister}
                margin='normal'
                variant='standard'
                id='email'
                label='Email'
                type='text'
                fullWidth
                inputRef={emailRef}
                inputProps={{minLength:2}}
                required
              />
              <PasswordField {...{passwordRef}}/>
              {isRegister && <PasswordField passwordRef={confirmPasswordRef} id='confirmPassword' label="Confirm Password"/>}
            </DialogContent>
            <DialogActions>
              <Button type='submit' variant='contained' endIcon={<Send/>} sx={{right: 8, top: 8}}>
                Submit
              </Button>
            </DialogActions>
        </form>
        <DialogActions sx={{justifyContent:'left', p:'5px 24px'}}>
          {isRegister ? "Do you have an account? Sign in now! " : "Don't have an account? Create one now! " }
          <Button color="secondary" onClick={() => setIsRegister(!isRegister)} sx={{left: 8}}>
            {isRegister ? 'Login' : 'Register'}
          </Button>
        </DialogActions>
    </Dialog>
  );
}

export default Login;
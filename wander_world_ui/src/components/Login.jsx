import { useState, useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PasswordField from "./PasswordField";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from "@mui/material";
import { Close, Send } from "@mui/icons-material";
import { useValue } from "../context/ContextProvider";

function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleLogin = async () => {
  //   console.log("Email:", email);
  //   console.log("Password:", password);

  //   // handle authentication
  // };

  const {state:{openLogin}, dispatch} = useValue()
  const [title, setTitle] = useState('Login')
  const [isRegister, setIsRegister] = useState(false)
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  const handleClose = () => {
    dispatch({type:'CLOSE_LOGIN'})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = passwordRef.current.value
    const confirmPassword = confirmPasswordRef.current.value
    if (password !== confirmPassword) {
      console.log("here")
      dispatch({type:'UPDATE_ALERT', payload: {open:true, severity:'error', message:"Passwords don't match"}})
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
            onClick={handleClose}>
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

{/* <Container
      className="mt-5"
      sx={{ display: "flex", justifyContent: "center" }}>
      <Paper className="w-50 h-50 text-center" elevation={1}>
        <div className="m-5">
          <div className="pb-3">
            <h1>Login</h1>
          </div>
          <div className="pb-3">
            <TextField
              required
              label="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="pb-3">
            <PasswordInput setPassword={setPassword} />
          </div>
          <div>
            <Button variant="contained" onClick={handleLogin}>
              Login
            </Button>
          </div>
        </div>
      </Paper>
    </Container> */}
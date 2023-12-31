import { Visibility, VisibilityOff } from '@mui/icons-material'
import { InputAdornment, TextField, IconButton } from '@mui/material'
import { useState } from 'react'

const PasswordField = ({passwordRef, id='password', label='Password'}) => {

  const [showPassword, setShowPassword] = useState(false)

  const handleClick = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDown = (e) => {
    e.preventDefault()
  }
  return (
    <TextField
      autoFocus
      margin='normal'
      variant='standard'
      id={id}
      label={label}
      type={showPassword ? 'text':'password'}
      fullWidth
      inputRef={passwordRef}
      inputProps={{minLength:2}}
      required
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton aria-label="visibility" onClick={handleClick} onMouseDown={handleMouseDown}>
            {showPassword ? <VisibilityOff/> : <Visibility/>}
            </IconButton>
          </InputAdornment>
        )
      }}
      />
  )
}

export default PasswordField
import { AlertTitle, Container, Alert, Button } from '@mui/material'
import { Lock } from '@mui/icons-material'
import { useValue } from '../context/ContextProvider'

const AccessMessage = () => {
    const {dispatch} = useValue()
  return (
    <Container sx={{py:5}}>
        <Alert severity='error' >
            <AlertTitle>Forbidden Access 🚨</AlertTitle>
            Please login or register to access this page!
            <Button
            variant='contained'
            sx={{ml:2}}
            startIcon={<Lock/>}
            onClick={()=>dispatch({type:'OPEN_LOGIN'})}>
                Login
            </Button>
        </Alert>
    </Container>
  )
}

export default AccessMessage
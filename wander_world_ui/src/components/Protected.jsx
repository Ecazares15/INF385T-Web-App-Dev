import React from 'react'
import AccessMessage from './AccessMessage'
import { useValue } from '../context/ContextProvider'

const Protected = ({children}) => {
  const {state:{currentUser}} = useValue()
  return (
    currentUser ? children : <AccessMessage/>
  )
}

export default Protected
import React from 'react'
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Registerformik from '../../components/pure/forms/registerFormik'

export default function RegisterPage() {

  const history = useHistory()

  const login = () => {
      history.push('/login')
  }

  return (
    <div>
        <h1>Register Page</h1>
        <Registerformik/>
        <Button variant="contained" onClick={login}>Login</Button>

    </div>
  )
}

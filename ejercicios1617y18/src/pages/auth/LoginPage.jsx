import React from 'react'
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

import Loginformik from '../../components/pure/forms/loginFormik'

export default function LoginPage() {

  const history = useHistory()

  const register = () => {
      history.push('/register')
  }

  return (
    <div>
        <h1>Login Page</h1>
        <Loginformik></Loginformik>
        <Button variant="contained" onClick={register}>Register</Button>

    </div>
  )
}

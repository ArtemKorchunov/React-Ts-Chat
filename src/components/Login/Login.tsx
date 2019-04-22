import React from 'react'

import LoginView from './Login.view'
import LoginForm from './LoginForm';

const Login = () => {
  return <LoginView form={<LoginForm />}/>
}

export default Login

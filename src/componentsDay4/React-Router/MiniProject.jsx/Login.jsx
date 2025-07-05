import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({setIsLogin}) => {
    const navigate=useNavigate();
    const handleLogin=()=>{
        setIsLogin(true);
        navigate('/dashboard');
    }
  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Click to Login</button>
    </div>
  )
}

export default Login
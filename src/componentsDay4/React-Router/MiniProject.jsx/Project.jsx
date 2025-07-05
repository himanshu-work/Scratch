import React, { useState } from 'react'
import{Link, Route, Routes} from 'react-router-dom'
import Home from './Home'
import User from './User'
import Login from './Login'
import Protected from './Protected'
import Dashboard from './Dashboard'
import NotFound from './NotFound'
const Project = () => {
    const[isLogin,setIsLogin]=useState(false);
  return (
    <div>
        <nav>
            <Link to='/'>HOME</Link>
            <Link to='/dashboard'> Dashboard</Link>
            <Link to='/user/101'> User101</Link>
            <Link to='/login'> Login</Link>
        </nav>

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/dashboard' element={
                <Protected isLogin={isLogin}>
                    <Dashboard/>
                </Protected>
            } />
            <Route path='/user/:id' element={<User/>} />
            <Route path='/login' element={<Login setIsLogin={setIsLogin}/>} />
            <Route  path="*" element={<NotFound/>}/>
            
        </Routes>
    </div>
  )
}

export default Project
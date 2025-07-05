import React from 'react'
import {Link, Route, Routes} from 'react-router-dom';
import Home from './React-Router/Home';
import About from './React-Router/About';
import Contact from './React-Router/Contact';
import RouteParameters from './React-Router/RouteParameters';
import Login from './React-Router/Login';
const ComponentDay4 = () => {
  return (
    <div>
        <nav>
            <Link to="/"> Home </Link>
            <Link to='/about'>About </Link>
            <Link to='/contact'>Contact</Link>
        </nav>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/user/:id' element={<RouteParameters/>} />
            <Route  path='/login' element={<Login/>} />
        </Routes>
    </div>
  )
}

export default ComponentDay4
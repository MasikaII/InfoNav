import React from 'react'
import { Link } from "react-router-dom";
import { useAuth } from './auth'
function Sidebar() {
  const auth = useAuth()
  return (
    <nav class="sidebar_nav">
    <div>
        <span className='nav_link'>
        <Link to="/home" class="text_decorator">Home</Link></span>
        <span className='nav_link'>
        <Link to="/About" class="text_decorator">About</Link></span>
         <span className='nav_link'>
        <Link to="/Profile" class="text_decorator">Profile</Link></span>
  </div>
    <div className='sidebar_bottom' >
    <span className='nav_link_bottom'>
    <Link to="/Post" class="text_decorator">Post</Link></span>
        <span className='nav_link_bottom'>
        <Link to="/chat" class="text_decorator">Chat</Link>
        </span>
        <span className='nav_link'>
        <Link to="/Login" class="text_decorator">Login</Link>
        </span>
    </div>
    </nav>
  )
}

export default Sidebar
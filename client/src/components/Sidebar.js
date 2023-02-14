import React from 'react'

function Sidebar() {
  return (
    <nav class="sidebar_nav">
    <div>
        <span className='nav_link'>Home</span>
        <span className='nav_link'>Profile</span>
        <span className='nav_link'>About</span>
    </div>
    <div className='sidebar_bottom'>
    <span className='nav_link_bottom'>Post</span>
        <span className='nav_link_bottom'>Chat</span>
        <span className='nav_link'>Log In</span>
    </div>
    </nav>
  )
}

export default Sidebar
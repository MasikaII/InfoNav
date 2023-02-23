import { useNavigate } from 'react-router-dom'
import React from 'react'
import { useAuth } from './auth'
import { Button } from '@mui/material';
const Profile = () => {
  return (
    <div>
    <h1 style={{ color: 'White',
    textAlign: 'center',
    color: 'black'
  }}>This is the profile page</h1>
  <button>chat</button>
    </div>
  )
}

export default Profile
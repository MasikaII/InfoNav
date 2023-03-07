import React from 'react'
import SignIn from './mysignin'
import { Link } from "react-router-dom";


function GoogleAuth() {
  return (
    <div style={{
      boxsizing: 'border-box',
      position: 'absolute',
      border: '2px solid #187741',
      padding: '0 1rem',
      borderradius: '20px',
      top: '167px',
      right: '230px',
      height: '350px',
      width: '300px',
      borderRadius: '10px',
      alignItems: 'center',
      backgroundColor: '#187741',
    }} className= "sign in">
      <div>
      <SignIn />
      </div>
      <span>
        <Link to="/Login" style={{
        borderRadius: '20px',
        border: '2px solid white',
        height: '35px',
        width: '240px',
        marginTop: '50%',
        MarginBottom: '10px',
        color: 'black',
        background: 'white',
        textDecoration: 'none',
        fontSize: '15px',
      }}>Login</Link>
    </span>
    </div> 

  )
}

export default GoogleAuth

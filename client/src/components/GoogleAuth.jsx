import React from 'react'
import SignIn from './mysignin'
import { Link } from "react-router-dom";


function GoogleAuth() {
  return (
    <div style={{
      boxsizing: 'border-box',
      position: 'absolute',
      border: '2px solid #062A42',
      padding: '0 1rem',
      borderradius: '20px',
      top: '167px',
      right: '230px',
      height: '350px',
      width: '300px',
      borderRadius: '10px',
      alignItems: 'center',
    }} className= "sign in">
      <div>
      <SignIn />
      </div>
    </div> 

  )
}

export default GoogleAuth

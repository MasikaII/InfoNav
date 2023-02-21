import React from 'react'
import SignIn from './mysignin'

function GoogleAuth() {
  return (
    <div style={{
      boxsizing: 'border-box',
      position: 'absolute',
      border: '1px solid #5f6472',
      padding: '0 1rem',
      borderradius: '20px',
      top: '167px',
      right: '230px',
      height: '350px',
      width: '300px',
      borderRadius: '10px',
      alignItems: 'center'


    }}>
      <div className="google-btn" >
      <div className="google-icon-wrapper" >
      <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
      </div>
      <p className="btn-text"><b>Sign in with google</b></p>
      </div>
      <div>
      <SignIn />
      </div>
    </div> 

  )
}

export default GoogleAuth

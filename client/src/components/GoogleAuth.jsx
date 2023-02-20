import React from 'react'

function GoogleAuth() {
  return (
   <div style={{ boxsizing: 'border-box',
    position: 'absolute',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '20px',
    padding: '0 1rem',
    borderradius: '20px',
    top: '120px',
    right: '30px',
    backgroundColor: '#fff',
    // width: '10px',

   }}>
  <div className="google-btn" >
    <div className="google-icon-wrapper" >
      <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
    </div>
    <p className="btn-text"><b>Sign in with google</b></p>
  </div>
  </div>

  )
}

export default GoogleAuth
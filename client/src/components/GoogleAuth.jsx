import React, { useEffect, useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";
import { useNavigate } from "react-router-dom";


function GoogleAuth() {
  const [value, setValue] = useState('');
  const Navigate = useNavigate();

  const handleClick = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      alert(JSON.stringify(data))
      localStorage.setItem("user", JSON.stringify(data));
      Navigate("/home");
    }
    catch (err) {
      alert(err.message)
    }
  };

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []);


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
      alignItems: 'center'
    }} className="sign in">
      <div className="google-btn" >
        <div className="google-icon-wrapper" >
          <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google img" />
        </div>
        {value ? <Home /> :
          <p className="btn-text"><b onClick={handleClick}>Sign in with google</b></p>}
      </div>
      <div>
      </div>
    </div>

  )
}

export default GoogleAuth

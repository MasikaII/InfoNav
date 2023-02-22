import React, { useEffect, useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [value, setValue] = useState('');
  const Navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      Navigate("/home");
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []);

  return (
    <div>
      {value ? <Home /> :
        <button onClick={handleClick} style={{
        borderRadius: '20px',
        border: '1px solid #5f6472',
        height: '40px',
        width: '210px',
        marginTop: '20px',
        alignItems: 'center',
      }}>Sign in with Google</button>
      }
    </div>
  );
}

export default SignIn;
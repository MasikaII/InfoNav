import React, { useEffect, useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";
//import { useNavigate } from "react-router-dom";

function SignIn() {
  const [value, setValue] = useState('');
  //const Navigate = useNavigate();
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email)
      localStorage.setItem("email", data.user.email)
      //Navigate("/home")
    });
  }

  useEffect(() => {
    setValue(localStorage.getItem('email'))
  })


  return (
    <div>
      {value ? <Home /> :
        <button onClick={handleClick}>Signin with Google</button>
      }
    </div>
  );
}

export default SignIn;


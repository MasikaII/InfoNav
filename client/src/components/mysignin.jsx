import React, { useEffect, useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [value, setValue] = useState('');
  const Navigate = useNavigate();

  const handleClick = async () => {
    // signInWithPopup(auth, provider).then((data) => {
    //   setValue(data.user.email);
    //   alert(JSON.stringify(data))
    //   localStorage.setItem("user", JSON.stringify(data));
    //   Navigate("/home");
    // });
    try {
      const data = await signInWithPopup(auth, provider);
      // setValue(data.user.email);
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
    <div>
      {value ? <Home /> :
        <button onClick={handleClick} style={{
          borderRadius: '20px',
          border: '1px solid #5f6472',
          height: '35px',
          width: '240px',
          marginTop: '20px',
        }} className="Googlef">Sign in with Google</button>
      }
    </div>
  );
}

export default SignIn;

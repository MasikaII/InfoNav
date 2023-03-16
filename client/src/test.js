import { useEffect, useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { db, auth } from "../firebase-config";
import { useHistory } from "react-router-dom";
import { auth } from "./firebase-config";

function SignIn() {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        history.push("/home");
      }
    });
    return unsubscribe;
  }, [history]);

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        localStorage.setItem("email", user.email);
        history.push("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return null;
}

export default SignIn;


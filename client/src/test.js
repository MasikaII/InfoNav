import { useEffect, useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useHistory } from "react-router-dom";

function SignIn() {
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


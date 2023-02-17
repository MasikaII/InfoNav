import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function Mylogin() {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('User Login Failed:', error)
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (user) {
          const response = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
            }
          });
          setProfile(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, [user]
  );

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div>
      <h2> Login Page</h2><br></br>
      {
        profile ? (
          <div>
            <img src={profile.picture} alt="userimage" />
            <h3>User Logged in</h3>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p><br></br>
            <button onClick={logOut}>Log out</button>
          </div>
        ) : (
          <button onClick={() => login()}> Sign in with Google </button>
        )
      }

    </div>
  );
}
export default Mylogin;

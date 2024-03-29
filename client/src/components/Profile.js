import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import "./About.css"
import "./HomeSidebar.css";
const Profile = () => {
  const [myuser,setMyUser]=useState(null)
  useEffect(()=>{
  let user=localStorage.getItem('user')
   if (user) setMyUser(JSON.parse(user))
  },[])
  return (
    <>
    <div>
    <h1 style={{ color: 'White',
    textAlign: 'center',
    color: '#062a42',
    fontSize: '30px',
  }}>Profile</h1>
 
  <div style={{textAlign: 'center',
  border: '1px solid #062A42',
  border: '1px solid #062a42',
  padding: '0',
  borderRadius: '20px',
  margin: 'auto',
  background: 'white',
  backgroundColor: 'white',
  }}>
  <h2>
  <img  style={{ borderRadius: '50px',
  PhotoSizeSelectActual: '100px',
}}src={myuser?.user?.photoURL} alt="profile pic" />
  </h2>
  <h2>
  {myuser?.user?.displayName}
  </h2>
  {myuser?.user.providerData[0].email}
  { myuser?.user?.displayphoneNumber}
  </div>
    </div>
    </>
  )
}

export default Profile
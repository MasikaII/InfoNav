import { PhotoSizeSelectActual } from '@material-ui/icons';
import React,{useState,useEffect} from 'react';

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
    color: 'green',
    fontSize: '30px',
  }}>Profile</h1>
 
  <div style={{textAlign: 'center',
  border: '1px solid green',
  margin: '0',
  height: '350px',
  padding: '0',
  width: '400px',
  borderRadius: '20px',
  margin: 'auto',
  }}>
  <h2>
  <img  style={{ borderRadius: '50px',
  PhotoSizeSelectActual: '70px',
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
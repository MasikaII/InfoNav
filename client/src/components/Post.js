import React from 'react';
import './Post.css';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db , auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
function Post() {
  const [title, setTitle] = useState('')
  const [postText, setPostText] = useState('')

  const postsCollectionRef = collection(db, 'posts')
  let navigate = useNavigate();
  const createPost = async  () => {
    await addDoc(postsCollectionRef, {
      title, 
      postText,
      author: {name: auth.currentUser.displayName, id: auth.currentUser.uid }}); {

    }
    navigate('/home')
  };
  return (
    <div className='createPostPage' style={{ marginTop: '20px'}}>
      <div className='cpContainer'>
        <h1 >Post</h1>
        <div className='inputGp'>
          <label> Title: </label>
    <input placeholder='Title...' onChange={(event) => {
      setTitle(event.target.value);}}
      />
     </div>
     <div className='inputGp'>
      <label> Post: </label>
      <textarea placeholder='Post...' onChange={(event) => {
      setPostText(event.target.value);
    }}
    />
      </div>
    <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  )
}

export default Post
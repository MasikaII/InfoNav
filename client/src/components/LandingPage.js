import React from 'react';
import Content from './Content';
import './Landingpage.css';
import GoogleAuth from './GoogleAuth';
import Landingsidebar from './Landingsidebar';
import Post from './Post';
import {getDocs, collection, deleteDoc, Doc, doc } from 'firebase/firestore';
import { db } from '../firebase-config';
import { useEffect } from 'react';

function LandingPage   () {
       const [postList, setPostList] = React.useState([]);
    const PostsCollectionRef = collection(db, 'posts')

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(PostsCollectionRef);
            console.log(data.docs.map((doc ) => ({...doc.data(), id: doc.id})))
            setPostList(data.docs.map((doc ) => ({...doc.data(), id: doc.id})));
        };

        getPosts();
    }, []);
    const deletePost = async (id) => {
        const postDoc = doc(db, 'Posts', id)
        await deleteDoc(postDoc)
    }
    return (
    <>
        <div className='land'>
        <div className='landingpage_container'>
            <Landingsidebar/>
            <div className='landingpage_container'>
            </div>
            <div  style={{ marginTop: '350px'}}>
            <div> {postList.map((post) => {
                return (
                    <div className='post' style={{
                     width: '850px',
                     height:'auto',
                     maxHeight: '600px',
                     margin: '20px',
                     padding: '20px',
                     borderRadius: '5px',
                     display: 'flex',
                     justifyContent: 'center',
                     position:'relative',
                     zIndex:'1',
                     verflow: 'hidden',
                     overflowY: 'auto',
                     alignContent: 'center',
                     background: 'white',
                     border: '1px solid white',
                     top: '400px'
                    }}>
                        <div className='posHeader'>
                            <div> 
                            <h1 style={{}}>{post.title}</h1>
                            </div>
                            <div className='deletePost'>
                            <button  style={{ borderRadius: '10px', background: '#062A42', color: 'white', border: '#062A42'}}onClick={() => deletePost(post.id)}> DeletePost </button>
                            </div>
                            <p>{post.postText}</p>
                            <p stye={{ color: 'white'}}>Author: {post.author.name}</p> 
                    </div>
                    </div>
                )
            })}
            <div>
            </div>
            </div>
            </div>
            <div className='landingpage_container_auth'>
            <GoogleAuth/>
            </div>
            </div>
        </div>
    </>
    )
}
export default LandingPage;                     
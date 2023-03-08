import React from 'react';
import Content from './Content';
import HomeSidebar from './HomeSidebar';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import {getDocs, collection, deleteDoc, Doc, doc } from 'firebase/firestore';
import { db } from '../firebase-config';
import { useEffect } from 'react';

function Home() {
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
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear()
        navigate('/')
    };
    return (
        <div style={{marginTop:'19rem'}}>
            <div className='home'>
            <div style={{marginTop:'-25rem'}}>
            <button onClick={logout} style={{
                height: '50px',
                width: '190px',
                borderRadius: '20px',
                top: '0',               
                diplay: 'flex',
                border: '3px solid #062A42',
                color: 'white',
                fontSize: '15px',
                background: '#062A42'
                 }}>Log out</button>
            <HomeSidebar />  
            </div> 
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
                     top: '390px'
                    }}>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                        <div className='posHeader'>
                            <div> 
                            <h1 style={{}}>{post.title}</h1>
                            </div>
                            <p stye={{ color: 'white', fontWeight: 'bold'}}>Author: {post.author.name}</p> 
                            <p>{post.postText}</p>
                            </div>
                            <div className='deletePost'>
                            <button  style={{ borderRadius: '10px', background: '#062A42', color: 'white', border: '#062A42'}}onClick={() => deletePost(post.id)}> DeletePost </button>
                            </div>
                    </div>
                )
            })}
            <div>
              </div>
            </div>              
            </div>   
        </div>
    )
}

export default Home;

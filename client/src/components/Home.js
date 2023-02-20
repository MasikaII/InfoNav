import React from 'react';
import Content from './Content';
import Search from './Search';
import HomeSidebar from './HomeSidebar';
import './Home.css';
import SignIn from './mysignin';
import { useNavigate } from 'react-router-dom';
//import GoogleAuth from './GoogleAuth';


function Home() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear()
        navigate('/')
    };
    return (
        <div>
            <div className='home'>
                <HomeSidebar />
                <div>
                    <button onClick={logout}>logout</button>
                    <Content />
                </div>
            </div>
        </div>
    )
}

export default Home;

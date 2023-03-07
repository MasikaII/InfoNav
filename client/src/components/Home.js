//import { Button } from '@mui/material';
//import React, { useEffect } from 'react';
import Content from './Content';
//import Search from './Search';
import HomeSidebar from './HomeSidebar';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import SettingsIcons from '@mui/icons-material/Settings';
//import GoogleAuth from './GoogleAuth';
import { useSelector } from "react-redux";

function Home() {
        const isLoggedIn = useSelector((state) => state.isLoggedIn);
        console.log(isLoggedIn);

        const navigate = useNavigate();

        const logout = () => {
                localStorage.clear()
                navigate('/')
        };

        return (
                <>
                        {isLoggedIn &&
                                <div>
                                        <div className='home'>
                                                <div>
                                                        <button onClick={logout} style={{
                                                                height: '50px',
                                                                width: '190px',
                                                                borderRadius: '20px',
                                                                top: '0',
                                                                diplay: 'flex',
                                                                border: '3px solid #062A42',
                                                                color: '#062A42',
                                                                fontSize: '15px',
                                                        }}>Log out</button>
                                                        <HomeSidebar />
                                                </div>
                                                <div style={{top: '600px', backgroundColor: 'white', marginTop: '110px', borderRadius: '10px'}}>
                                                <Content />
                                                </div>
                                        </div>
                                </div>}
                </>
        )
}

export default Home;

import React from 'react';
import Content from './Content';
import Search from './Search';
import Sidebar from './Sidebar';
import './Landingpage.css';
import GoogleAuth from './GoogleAuth';

function LandingPage   () {
    return (
        <div style={{
            backgroundColor: 'rgb(250,245,255)',
            height:'103vh'
        }}>
        <div className='landingpage_container'>
            <Sidebar/>
            <div className='landingpage_container'>
            <div className='landingpage_container'>
            <Content/>
            </div>
            <div className='landingpage_container_auth'>
            <GoogleAuth/>
            </div>
            </div>
        </div>
        </div>
    )
}

export default LandingPage;
import React from 'react';
import Content from './Content';
import './Landingpage.css';
import GoogleAuth from './GoogleAuth';
import Landingsidebar from './Landingsidebar';

function LandingPage   () {
    return (
    <>
        <div className='land'>
        <div className='landingpage_container'>
            <Landingsidebar/>
            <div className='landingpage_container'>
            <Content/>
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
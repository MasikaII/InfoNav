import React from 'react';
import Content from './Content';
import './Landingpage.css';
import GoogleAuth from './GoogleAuth';
import Landingsidebar from './Landingsidebar';
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <>
            <div className='land'>
                <div className='landingpage_container'>
                    <Landingsidebar />
                    <div className='landingpage_container'>
                        <Content />
                    </div>
                    <div className='loginmail'>
                        <Link to='/signup' style={{background: 'white'}}>Login</Link>
                    </div>
                    <div className='landingpage_container_auth'>
                        <GoogleAuth />
                    </div>
                </div>
            </div>
        </>
    )
}
export default LandingPage;                     

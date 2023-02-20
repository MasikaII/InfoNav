import React from 'react';
import Content from './Content';
import Search from './Search';
import HomeSidebar from './HomeSidebar';
import './Home.css';
import GoogleAuth from './GoogleAuth';


function Home () {
    return (
        <div> 
        <div className='home'>
            <HomeSidebar/>
            <div>
            <Content/>
            </div>
            </div>
        </div>
    )
}

export default Home;
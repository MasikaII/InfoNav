import React from 'react';
import Content from './Content';
import Search from './Search';
import HomeSidebar from './HomeSidebar';
import './Home.css';


function Home () {
    return (
        <div>
        
        <div className='home'>
            <HomeSidebar/>
            <div>
            <Search/>
            <Content/>
            </div>
        </div>
        </div>
    )
}

export default Home;
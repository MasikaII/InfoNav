import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import LandingPage from "./components/LandingPage";
import Home from './components/Home';
import About from './components/About';
//import Profile from './components/Profile';
import Header from './components/common/header/Header';
//import Navbar from './components/common/header/navbar/Navbar';
import GoogleAuth from './components/GoogleAuth';
import Chat from './components/Chat';
import Blog from './components/blog';
import { useSelector } from 'react-redux';
import BlogInfo from './components/Bloginfo';
import AddBlog from './components/AddBlog';
import MyAuth from './components/myauth'
import BlogEdit from './components/BlogEdit';
//import { Auth0Provider } from "@auth0/auth0-react";

function App() {
        const isLoggedIn = useSelector(state => state.isLoggedIn);
        console.log(isLoggedIn);
        return (
                <>
                        <div style={{ background: "url(/The Future Of Ag Biosecurity In The U_S 1.svg)" }}>
                        </div>
                        <Header />
                        <BrowserRouter>
                                <Routes>
                                        <Route path="/" element={<LandingPage />} />
                                        <Route path="/home" element={<Home />} />
                                        <Route path="/signup" element={<MyAuth />} />
                                        <Route path="/about" element={<About />} />
                                        <Route path="/signin" component={GoogleAuth} />
                                        <Route path="/chat" element={<Chat />} />
                                        <Route path="/post" element={<Blog />} />
                                        <Route path="/myblogs" element={<BlogInfo />} />
                                        <Route path="/myblogs/:id" component={<BlogEdit />} />
                                        <Route path="/blogs/add" element={<AddBlog />} />
                                </Routes>
                        </BrowserRouter>
                </>
        );
        {/*        return (
                <>

                        <Auth0Provider
                                redirectUri={window.location.origin}
                        >
                                <BrowserRouter>

                                        <Routes>
                                                <Route path="/" element={<LandingPage />} />
                                                <Route path="/Login" element={<Mylogin />} />
                                                <Route path="/Home" element={<Home />} />
                                                <Route path="/about" element={<About />} />
                                        </Routes>
                                </BrowserRouter>

                        </Auth0Provider>
                </>
        );*/}

}

export default App;

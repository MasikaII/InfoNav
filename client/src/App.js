import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import LandingPage from "./components/LandingPage";
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Header from './components/common/header/Header';
//import Navbar from './components/common/header/navbar/Navbar';
import GoogleAuth from './components/GoogleAuth';
//import { Button } from '@mui/material';
import Chat from './components/Chat';
import Blog from './components/blog';
import { useSelector } from 'react-redux';
import BlogInfo from './components/Bloginfo';
import AddBlog from './components/AddBlog';
import MyAuth from './components/myauth'
import BlogEdit from './components/BlogEdit';

function App() {
        const isLoggedIn = useSelector(state => state.isLoggedIn);
        console.log(isLoggedIn);
        return (
                <>
                        <Header />
                        <BrowserRouter>
                                <Routes>
                                        <Route path="/" element={<LandingPage />} />
                                        <Route path="/profile" element={<Profile />} />
                                        <Route path="/login" element={<Login />} />
                                        <Route path="/register" element={<Register />} />
                                        <Route path="/home" element={<Home />} />
                                        <Route path="/signup" element={<MyAuth />} />
                                        <Route path="/about" element={<About />} />
                                        <Route path="/signin" component={GoogleAuth} />
                                        <Route path="/chat" element={<Chat />} />
                                        <Route path="/post" element={<Blog />} />
                                        <Route path="/myblogs" element={<BlogInfo />} />
                                        <Route path="/myblogs/:id" element={<BlogEdit />} />
                                        <Route path="/blogs/add" element={<AddBlog />} />
                                </Routes>
                        </BrowserRouter>
                </>
        );
}

export default App;

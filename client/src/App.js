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
import Navbar from './components/common/header/navbar/Navbar';
import SignIn from './components/mysignin'
import Chat from './components/Chat';
import Post from './components/Post';

function App() {
        return (
                <>
                <div style={{ background: "url(/The Future Of Ag Biosecurity In The U_S 1.svg)" }}>
                </div>
                <Header />
                 <BrowserRouter>
                        <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/chat" element={<Chat />} />
                        <Route path="/post" element={<Post />} />
                        </Routes>
                </BrowserRouter>
                </>
        );
}
export default App;
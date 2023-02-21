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
//import { AuthProvider } from './components/auth';
import Header from './components/common/header/Header';
import Navbar from './components/common/header/navbar/Navbar';
//import GoogleAuth from './components / GoogleAuth';
import SignIn from './components/mysignin'
function App() {
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
                                        <Route path="/about" element={<About />} />
                                        <Route path="/signin" component={SignIn} />
                                </Routes>
                        </BrowserRouter>
                </>
        );
}

export default App;

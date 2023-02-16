import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import LandingPage from "./components/LandingPage";
import { Login } from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import About from './components/About';


// import Feed from "./componentsChat";
// import Sidebar from "./components/Sidebar";

function App() {
    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

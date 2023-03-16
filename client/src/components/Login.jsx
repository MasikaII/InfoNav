import React, { useState } from "react"
import { Link, Navigate } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
//import { useAuth } from "./auth";
// Render Prop
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";

export default function Login() {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [redirect, setRedirect] = useState('');
        async function login(ev) {
                ev.preventDefault();
                const response = await fetch('http://localhost:7000/api/user/login', {
                        method: 'POST',
                        body: JSON.stringify({ username, password }),
                        headers: { 'Content-Type': 'application/json' },
                        credential: 'include'
                });

                if (response.ok) {
                        setRedirect(true);
                } else {
                        alert('wrong credentials');
                }
        }

        if (redirect) {
                return <Navigate to={'/home'} />;
        }

        return (
                <div>
                        <div className="heading-container">
                                <h3>
                                        Login Form
                                </h3>
                        </div>

                        <Box
                                component="form"
                                sx={{
                                        '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                        >
                                <TextField id="email"
                                        label="Enter your username"
                                        variant="outlined"
                                        value={username}
                                        onChange={ev => setUsername(ev.target.value)} />
                                <TextField id="password"
                                        label="Enter your Password"
                                        variant="outlined"
                                        value={password}
                                        onChange={ev => setPassword(ev.target.value)} />
                        </Box>
                        <Button variant="contained" onClick={login}>Log in</Button>
                        <br /><br />
                        <div>
                                <Link to='/register'>
                                        <span style={{
                                                color: 'black',
                                                textDecoration: 'none',
                                        }}>
                                                Don't have an account? Register here.
                                        </span>
                                </Link>
                        </div>
                </div>
        );
}

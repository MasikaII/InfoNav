import React, { useState } from "react"
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function register(ev) {
        ev.preventDefault();
        await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        })
    }
    return (
        <div>
            <div className="heading-container">
                <h3>
                    Sign Up Form
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
                <TextField id="username"
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
            <Button variant="contained" onClick={register}> Register </Button>
            <br /><br />
            <div>
                <Link to='/login'>
                    <span style={{
                        color: 'black',
                        textDecoration: 'none',
                    }}>
                        Already have an account? Sign in here.
                    </span>
                </Link>
            </div>
        </div>
    );
}



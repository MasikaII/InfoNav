import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const auth = useAuth()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        navigate('/home')
    }
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            paddingTop:'10srem',
            backgroundColor: "#010922",
            height: "100vh",
            
        }}>
        <div className="auth-form-container">
            <h2 style={{
                textAlign: "center",
                fontWeight:'700',
                color:'white'
            }}>Log In</h2>
            <form className="login-form" onSubmit={handleSubmit}>
               <div style={{margin:'0.2rem'}}>
                 <div>
                    <label htmlFor="email">email</label>
                 </div>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
               </div>
               
<div>
<div>
    <label htmlFor="password">password</label>
</div>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
</div>
                <button className="link-btn-login" type="submit">Log In</button>
            </form>
            {/* <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button> */}
            <div style={{
                color:'white',
                marginTop:"3rem",
                textAlign:'center'
            }}>
                <Link to="/register">
                    <span style={{
                        color:'white',
                        textDecoration:'none',
                        fontSize:'.8rem',
                        textAlign:'center'
                    }}>
                        Don't have an account? Register here.
                    </span>
                </Link>
            </div>
        </div>
        </div>
    )
}
export default Login;
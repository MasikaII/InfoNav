import React from 'react';
// import Content from './Content';
import './Landingpage.css';
import GoogleAuth from './GoogleAuth';
import Landingsidebar from './Landingsidebar';
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <>
            <div className='container'>
                <div className='firstContent' style={{ justifyContent: 'center' }}>
                    <article>
                        <h1 style={{ fontWeight: 'bold', fontSize: '40px' }}>No more Searching  for answer on google!  <br></br>Get your answers from the best
                            <span style={{ color: '#187741' }}>  Agriculture answers </span> <br></br>
                            across all your
                            <span style={{ color: '#187741' }}> devices with Imfo nav
                            </span>
                            with InfoNav</h1>
                        <p>InfoNav is a platform that help you get your information powored by AI.</p>
                        <section style={{ display: 'flex', gap: '50px' }}>
                            <span className="top_button" style={{
                                height: "50px",
                                width: "200px",
                                border: '1px solid white'
                            }}>
                                <Link className="text_decorator" to="/signup" style={{ color: 'white' }}>Login</Link>
                            </span>
                            <span className="top_button" style={{
                                height: "50px",
                                width: "200px",
                                background: 'white',
                                border: '1px solid white'
                            }}>
                                <Link className="text_decorator" to="/signup" style={{ color: 'black' }}>Get started</Link>
                                {/* <GoogleAuth /> */}
                            </span>
                        </section>
                    </article>
                </div>
            </div>
            <div className='container-2'>
                <div className='firstContent' style={{ justifyContent: 'center' }}>
                    <article>
                        <h1 style={{ fontWeight: 'bold', }}>No more Searching  for answer on google! Get your answers from the best
                            <span style={{ color: '#187741' }}>  Agriculture Solutions </span> <br></br>
                            across all your
                            <span style={{ color: '#187741' }}> devices with Info nav
                            </span>
                        </h1>
                        <p style={{
                            fontFamily: 'sans-serif',
                            lineHeight: "1.5"
                        }}>InfoNav is a platform that help you get your information powored by AI chat with our model today for free.
                            Our AI-enhanced website leverages advanced machine learning algorithms to provide farmers with real-time weather forecasts, market prices, and disease control methods.
                            This information is delivered through an easy-to-use interface, making it accessible to even the most technologically challenged farmers. We are proud to be using our skills and expertise to make a positive impact on the lives of farmers in Africa.
                            Our team is dedicated to continuously improving our platform and expanding its reach, so that more and more farmers can benefit from the information it provides.
                            Our mission is to empower farmers with the tools and information they need to improve their yields, reduce their costs, and increase their income. We believe that by doing so, we can help to create a more sustainable and prosperous future for farmers in Africa. Join us on this journey as we work to make a difference,
                            one farmer at a time
                            <section style={{ display: 'flex', gap: '150px' }}>
                                <span>
                                    <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="ai" style={{ height: '200px', width: '350px', marginTop: '50px', borderRadius: '5px' }}></img>
                                </span>
                                <span>
                                    <img src="https://images.unsplash.com/photo-1509100194014-d49809396daa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="ai" style={{ height: '200px', width: '350px', marginTop: '50px', borderRadius: '5px' }}></img>
                                </span>
                                <span style={{ marginRight: '20px' }}>
                                    <img src="https://images.unsplash.com/photo-1535275226173-7ee8b465f0c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="my-2 w-24 h-24 object-contain mix-blend-darken" style={{ height: '200px', width: '350px', marginTop: '50px', borderRadius: '5px' }}></img>
                                </span>
                                <span style={{ marginRight: '20px' }}>
                                    <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="my-2 w-24 h-24 object-contain mix-blend-darken" style={{ height: '200px', width: '350px', marginTop: '50px', borderRadius: '5px' }}></img>
                                </span>
                            </section>
                        </p>
                    </article>
                </div>
            </div>
            <footer style={{
                height: '50vh'
            }}>
                <div class="container-3">
                    <div class="footer">
                        <div class="logo">
                            <p id="normal">Info</p>
                            <p id="styled">Nav</p>
                            <p class="tagline" style={{ marginTop: '50px' }}>Connect, Streamline, Transform</p>
                        </div>
                        <div class="footer_column">
                            <div class="footer_header">
                                <h3>Help</h3>
                                <a href="support" style={{ textDecoration: 'none', color: 'white' }}>Support</a>
                                <a href="tutorials" style={{ textDecoration: 'none', color: 'white', marginTop: '10px' }}>Tutorials</a>
                            </div>
                            <div class="footer_features">
                                <h3>Features</h3>
                                <a href="platform" style={{ textDecoration: "none", color: 'white' }}>Cross Platform</a>
                                <a href="security" style={{ textDecoration: "none", color: 'white', marginTop: '10px' }}>Data Security</a>
                            </div>
                            <div class="footer_contact">
                                <h3>Contact Us</h3>
                                <a href="mail_us" style={{ textDecoration: "none", color: 'white' }}>info@infonav</a>
                                <a href="contact" style={{ textDecoration: "none", color: 'white', marginTop: '10px' }}>Contact us</a>
                            </div>
                        </div>
                    </div>
                    <div class="socials">
                        <div class="copy">
                            <p>© copyright InfoNav inc.</p>
                            <p>All rights preserved</p>
                        </div>
                        <div class="paragraph" style={{ marginTop: '50px' }}>

                            <p>Terms of Service</p>
                            <p>Privacy Policy</p>
                            <p>Partners and Affiliates</p>
                        </div>
                        {/*
                <div class="links">
                    <a href="https://twitter.com">
                        <img src="./images/Twitter.svg">
                    </a>
                    <a href="https://facebookcom">
                        <img src="./images/Facebook.svg">
                    </a>
                    <a href="https://linkedin.com">
                        <img src="./images/Linkedin.svg">
                    </a>
                    <a href="https://instagram.com">
                        <img src="./images/Insta.svg">
                    </a>
                </div>
      */}
                    </div>
                </div>
            </footer>
        </>
    )
}
export default LandingPage;                   

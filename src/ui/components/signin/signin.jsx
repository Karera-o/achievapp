import React from "react"
import './signin.css'
import logo from './logo.png'
import google from './google.png'
import facebook from './facebook1.png'
import { Link } from "react-router-dom";
// import { BrowserRouter as router, Route} from "react-router-dom"


export const SignIn = () =>{

    return(
        <div id="signinContent">
            <div id="signinHeader">
                <span><img src={logo} alt="" /></span>
                <h3>AchievApp</h3>
            </div>
            <form action="" id="signinForm">
                <h1>SIGN IN</h1>
                <p>Welcome to AchievApp fill in this form</p>
                <div className="signinInput">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Enter your email"/>
                </div>
                <div className="signinInput">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="............"/>
                </div>
                
                <button><Link to="/navbar">Sign up</Link></button>
                <p id="or">OR</p>
                <div id="loginButtons">
                <button><img src={facebook} alt="" />Log in with facebook</button>
                <button><img src={google} alt="" />Log in with Google account</button>
            </div>
            </form>
            
            <p id="signinAlternative">Don't have an account? <span>
            <Link to="/signup">Sign up</Link>
            </span></p>
        </div>
    );
}
import React from "react"
import './signup.css'
import logo from './logo.png'
import google from './google.png'
import facebook from './facebook1.png'
import { Link } from "react-router-dom";


export const SignUp = () =>{

    return(
        <div id="signupContent">
            <div id="signupHeader">
                <span><img src={logo} alt="" /></span>
                <h3>AchievApp</h3>
            </div>
            <form action="" id="signupForm">
                <h1>SIGN UP</h1>
                <p>Welcome to AchievApp fill in this form</p>
                <div className="signupInput">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Enter your email"/>
                </div>
                <div className="signupInput">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="............"/>
                </div>
                <div className="signupInput">
                    <label htmlFor="">Confirm password</label>
                    <input type="password" placeholder="............"/>
                </div>
                <button>Sign Up</button>
                <p id="or">OR</p>
                <div id="loginButtons">
                <button><img src={facebook} alt="" />Facebook account</button>
                <button><img src={google} alt="" />Google account</button>
            </div>
            </form>
            

            <p id="signinAlternative">Already have an account? <span><Link to="/signin">Sign in</Link></span></p>
        </div>
    );
}
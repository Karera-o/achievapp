import React from "react"
import './signin.css'
import logo from './logo.png'
import google from './google.png'
import facebook from './facebook1.png'
import { Link } from "react-router-dom";


export const SignIn = () =>{

    return(
        <div id="signinContent">
            <div id="signinHeader">
                <span><img src={logo} alt="" /></span>
                <h3>AchievApp</h3>
            </div>
            <form action="/src/ui/components/navSide/navSide.jsx" id="signinForm">
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
                
                <Link to="/navbar" id="link"><button type="submit">Sign in</button></Link>
                <div id="forgetPassword">
                    <div>
                    <input type="checkbox" />
                    <span>Keep me logged in</span>
                    </div>
                    <Link to="/signin" className="link"> Forget password</Link>
                </div>
                {/* <p id="or"><hr /> OR <hr /></p> */}
                <div id="loginButtons">
                <button><img src={facebook} alt="" />Log in with facebook</button>
                <button><img src={google} alt="" />Log in with Google account</button>
            </div>
            </form>
            
            <p id="signinAlternative">Don't have an account? <span>
            <Link to="/signup" >Sign up</Link>
            </span></p>
        </div>
    );
}
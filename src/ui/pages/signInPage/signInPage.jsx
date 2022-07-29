import React from "react";
import { SignUp } from "../../components/signUp/signup";
import "./signInPage.css";


export const SignInPage = ()=>{

    return(
        <div id="signUpPageContent">
            <div id="signUpPageLeftSide">
                <SignUp/>
            </div>
            <div id="signUpPageRightSide">
                <h1>AchievApp</h1>
            </div>
        </div>
    );
}
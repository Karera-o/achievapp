import React from "react";
import { SignIn } from "../../components/signin/signin";
import "./signInPage.css";


let SignInPage = ()=>{

    return(
        <div id="signInPageContent">
            <div id="signInPageLeftSide">
                <SignIn/>
            </div>
            <div id="signInPageRightSide">
                <h1>AchievApp</h1>
            </div>
        </div>
    );
}

export default SignInPage;
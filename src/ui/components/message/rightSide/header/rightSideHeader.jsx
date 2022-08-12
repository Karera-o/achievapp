import React from "react";
import "./rightSideHeader.css";
import profile from "./profile.jpg"; 
import {BsCameraVideo,BsTelephone} from "react-icons/bs";

class RightSideHeader extends React.Component{

    render(){
        return(
            <div id="rightSideHeader">
                <span><img src={profile} alt="" /></span>
                <div>
                    <p>Aurore</p>
                    <h5>Online</h5>
                </div>
                
                <ul>
                    <li><BsCameraVideo size="1.5em"/></li>
                    <li><BsTelephone size="1.5em"/></li>
                </ul>
            </div>
        );
    }
}
export default RightSideHeader
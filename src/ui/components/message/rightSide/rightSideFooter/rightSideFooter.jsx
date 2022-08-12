import React, { Component } from "react";
import "./rightSideFooter.css";
import { MdAddPhotoAlternate,MdSend } from "react-icons/md"
import { BiMicrophone } from 'react-icons/bi'


export class RightSideFooter extends Component{

    render(){
        return(
            <div id="rightSideFooter">
                <ul id="rightSideFooter_ul">
                    
                    <li id="rightSideFooter_ulInput">
                        <input type="text" placeholder="Write a message . . . . . . . ."/>
                    </li>
                    <li><MdAddPhotoAlternate size="1.4em"/></li>
                    <li><BiMicrophone size="1.4em"/></li>
                    <li><span id="icon"><MdSend size=".8em" color="white"/></span></li>
                </ul>
            </div>
        );
    }
}
import React from 'react'
import "./messageLeftSide.css"
import man from "./man.jpeg"
import { GoPlus } from "react-icons/go"

function Contact(){
    return(
        <div id='contactContent'>
            <span id='image'><img src={man} alt="" /></span>
            <div>
                <h3>Jackson nshuti</h3>
                <p>Good Morning</p>
            </div>
            <span id='messageNumber'>1</span>
        </div>
    );
}
function  MessageLeftSide() {
  return (
    <div className='messageleftsideContent'>
        <div id='messageleftsideHeader'>
            <div>
                <h1>Inbox</h1>
                <GoPlus size="1.7em"/>
            </div>
            <header>
                <h3>General</h3>
                <h2>Total</h2>
            </header>
        </div>
        <div id='messageleftsideContent'>
            <Contact /> 
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
        </div>
        
    </div>
  )
}

export default MessageLeftSide
import React from 'react'
import "./rightSidePost.css"
import profile from "./man.jpeg"
import { FaShareSquare } from "react-icons/fa"
import { TbEdit } from "react-icons/tb"

function RightSidePost() {
  return (
    <div id='RightSidePost'>
        
        <div>
            <div id='background'>

            </div>
            <div id='userProfile'>
                <img src={profile} alt="" />
            </div>
        </div>
        
        <header id='userNames'>
            <h3><span>Salahudin Jafar</span> &nbsp;&nbsp; <FaShareSquare size="0.8em" id='icon'/></h3>
            <h5>Software engineer</h5>
        </header>
        <div id='userStatistics'>
            <header>
                <h3>201</h3>
                <h5>Posts</h5>
            </header>
            <header>
                <h3>11,2k</h3>
                <h5>Followers</h5>
            </header>
            <header>
                <h3>501</h3>
                <h5>Following</h5>
            </header>
            
            
        </div>
        <button><TbEdit className='icon' size="1.3em"/>&nbsp;&nbsp; <span>Create Post</span> </button>

    </div>
  )
}

export default RightSidePost
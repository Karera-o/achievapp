import React from 'react'
import "./mainCard.css"
import { BsThreeDots } from "react-icons/bs"

export const MainCard = () => {
  return (
    <div id='maincardContent'>
        <div  id='maincardHeader'>
            <span><img src="" alt="" /></span>
            <h3>NaoMi Yashida</h3>
            <h5>1 hour ago</h5>
            <span><BsThreeDots/></span>
        </div>
        <div id='maincardPost'>
            <p>“Business ideas are sensitive to market conditions, culture, technological development and other things. What maybe was a bad business idea ten years ago may be a great business idea today. Give it a try. Mayflower Plymouth.”</p>
        </div>
        <div id='maincardLike'>

        </div>
        <div id='maincardUserComment'>
            <span><img src="" alt="" /></span>
            <input type="text" placeholder='Write your comment'/>
        </div>
        <div id='maincardComment'>
            <span><img src="" alt="" /></span>
            <p>“When we invest, It’s about the big picture, and having a holistic approach to investing”</p>
        </div>
        <div id='maincardLoadComment'>
            <button>view All Comments</button>
        </div>
        
    </div>
  )
}

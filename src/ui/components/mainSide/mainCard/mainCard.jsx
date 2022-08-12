import React from 'react'
import "./mainCard.css"
import man from "./man.jpeg"
import man1 from "./man1.jpg"
import profile from "./profile.jpg"
import woman from "./woman.jpeg"
import woman1 from "./woman.jpg"

import { BsThreeDots } from "react-icons/bs"
import { BiLike } from "react-icons/bi"
import { FaRegComment } from "react-icons/fa"

const post1 = {
    profile: man,
    name: "Naomi Yashida",
    time: "1 hour ago",
    likes: 100,
    comment: 98,
    profileCommnent: woman
}
const post2 = {
    profile: man1,
    name: "Leonard Adleman",
    time: "2 hour ago",
    likes: 127,
    comment: 153,
    profileCommnent: woman
}
const post3 = {
    profile: woman,
    name: "Lisa Antony",
    time: "2 hour ago",
    likes: 27 ,
    comment: 30,
    profileCommnent: woman1
}
const post4 = {
    profile: woman1,
    name: "Cecilia R.Aragon",
    time: "2 hour ago",
    likes: 54 ,
    comment: 8,
    profileCommnent: profile
}
const post5 = {
    profile: profile,
    name: "Andrew Appel",
    time: "2 hour ago",
    likes: 78 ,
    comment: 83,
    profileCommnent: woman1
}
const post6 = {
    profile: man,
    name: "Serge Aho",
    time: "2 hour ago",
    likes: 12 ,
    comment: 5,
    profileCommnent: man1
}
const post7 = {
    profile: woman1,
    name: "Cecilia R.Aragon",
    time: "2 hour ago",
    likes:  82,
    comment: 12,
    profileCommnent: profile
}
const post8 = {
    profile: profile,
    name: "Andrew Appel",
    time: "2 hour ago",
    likes: 10 ,
    comment: 8,
    profileCommnent: woman1
}
// const postsArray = [post1,post2];

export const MainCard1 = props => {
  return (
    <div id='maincardContent'>
        <div  id='maincardHeader'>
            <span><img src={props.profile} alt="" /></span>
            <header>
                <h3>{props.name}</h3>
                <h5>{props.time}</h5>
            </header>
            
            <span id='maincardIcon'><BsThreeDots/></span>
        </div>
        <div id='maincardPost'>
            <p>“Business ideas are sensitive to market conditions, culture, technological development and other things. What maybe was a bad business idea ten years ago may be a great business idea today. Give it a try. Mayflower Plymouth.”</p>
        </div>
        <div id='maincardLike'>
            <span><BiLike/>&nbsp;&nbsp;{props.likes} likes</span>
            <span><FaRegComment/>&nbsp;&nbsp;{props.comment} comments</span>
        </div>
        <div id='maincardUserComment'>
            <span><img src={man} alt="" /></span>
            <input type="text" placeholder='Write your comment'/>
        </div>
        <div id='maincardComment'>
            <span><img src={props.profileCommnent} alt="" /></span>
            <div>
                <h3>Ismael bin Mail</h3>
                <p>“When we invest, It’s about the big picture, and having a holistic approach to investing”</p>
            </div>
            
        </div>
        <div id='maincardLoadComment'>
            <button>view All Comments</button>
            {/* <Link><view All Comments</Link> */}
        </div>
        
    </div>
  )
}


export const MainCard = () => {

    const postsArray = [post1,post2,post3,post4,post5,post6,post7,post8]
    const posts = []
    postsArray.forEach(post =>{

        posts.push(<MainCard1 profile={post.profile} name={post.name} time={post.time} likes={post.likes} comment={post.comment} profileCommnent={post.profileCommnent}/>)
    })
    return(
        <div id='postsContainer'>
        
            {posts}
        </div> 
            
        
    );
}


import React from "react"
import "./navSide.css"
import {AiFillHome,AiFillMessage} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import {BsFillBookmarkDashFill} from "react-icons/bs"
import {MdSettings} from "react-icons/md"


export const NavSide = () =>{

    return(
        <div id="leftSide">
             <header id="left_side_header" className="left_side_section">
                    <div><CgProfile size="2em"  id="logo"/> <span>AchievApp</span></div>
                    <h3>Menu</h3>
                    
            </header>
            <section id="left_side_first_section" className="left_side_section">
                <ul id="left_side_menu">

                    <li className="hey"><AiFillHome color="pink"/><p>Home</p></li>
                    <li className="hey"><AiFillMessage size="1.3em"/><p>Messages</p></li>
                    <li className="hey"><CgProfile size="1.3em"/> <p>Profile</p></li>
                    <li className="hey"><BsFillBookmarkDashFill size="1.3em"/><p>Bookmark</p></li>
                    <li className="hey"><MdSettings size="1.3em"/><p>settings</p></li>
                
                </ul>
            </section>
        </div>
    );
}

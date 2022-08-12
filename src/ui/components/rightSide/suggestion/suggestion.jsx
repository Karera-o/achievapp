import React from 'react'
import "./suggestion.css"
import woman from "./woman1.jpg"

const Suggestion1 = () => {
  return (
    <div id='suggestionUser'>
        <img src={woman} alt="" />
        <header>
            <h3>Sarah Tancredi</h3>
            <h5>Software engineer</h5>
        </header>
        <button>Follow</button>
    </div>
  )
}


const Suggestion = () => {
    return(
        <div id='suggestionContent'>
            <div id='title'><span>Suggestion for you</span> 
                <button>See All</button>
            </div>
            <Suggestion1 />
            <Suggestion1 />
            <Suggestion1 />
            <Suggestion1 />
            
        </div>
    );
}
export default Suggestion
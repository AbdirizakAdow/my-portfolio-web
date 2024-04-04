import React from "react";
import Abdirizak from "./Abdirizak.png"
 const Skills = () => {
    return(
        <div className="hero"> 
            <img className = "img" src={Abdirizak} alt="my Image" />
    <h2>I have many skills about my field and they are:</h2>
      <ul className='list'>
        <li>Web developer</li>
        <li>Graphic Desing</li>
        <li>Typing</li>
      </ul>
        </div>
    )
 }
 export default Skills;
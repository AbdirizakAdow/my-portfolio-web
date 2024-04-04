import React from "react";
import Abdirizak from "./Abdirizak.png"
 const Projects = () => {
    return(
        <div className="hero"> 
            <img className = "img" src={Abdirizak} alt="my Image Description" />
      <h2>My Projects</h2>
      <div className="project">
        <ul>
            <li className='list1'>
            <h3 className='list3'>Travel Agent magnagemt system 2022</h3>
                </li>
                <p>using Html and Css </p>
        <li>
          <h3 className='list2'>EVC Plus 2023</h3>
          </li>
        <p>using Java Progaramming </p>
        <li >
        <h3>Rental Car Managment system 2024</h3>
        </li>
        <p>using C# and SQL servar </p>
        
        <li>
        <h3 className='list4'>Personal portifolio 2024</h3>
        </li>
        <p>using ReactJsx</p>
        </ul>
      </div>
        </div>
    )
 }
 export default Projects;
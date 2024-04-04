import React from "react";
import Abdirizak from "./Abdirizak.png"
 const Home = () => {
    return(
        <div className="hero"> 
            <h2 className="Hi">Hey, <p className="p">Mr/Mrs</p> welcome my portfolio</h2>
        <img className = "img" src={Abdirizak} alt="my Image Description" />
        <h1 className="Hello">Hello, I'm Abdirizak Hazzan</h1>
        <p>A budding software developer passionate about web technologies.</p>
        </div>
    )
 }
 export default Home;
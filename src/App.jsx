import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import Navbar from "./Navbar";
import Home from "./Home";
import Bio from "./Bio";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import Contact from './Contact'

 const App = () => {
    return(
      <Router>
        <Navbar/>
        <Switch>
            <Route path='/' Component ={Home} exact><Home/></Route>
            <Route path='/Bio' Component ={Bio} exact><Bio/></Route>
            <Route path='/Skills' Component ={Skills} exact><Skills/></Route>
            <Route path='/Projects' Component ={Projects} exact><Projects/></Route>
            <Route path='/About' Component ={About} exact><About/></Route>
            <Route path='/Contact' Component ={Contact} exact><Contact/></Route>
        </Switch>
      </Router>  
    )
 }
 export default App;
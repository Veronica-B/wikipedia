import React from 'react';
import About from '../pages/about'
import Home from '../pages/home'
import Contact from '../pages/contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../App.css';

function Navbar() {
    return(
        //All the router stuff (ex:links, switches, etc) must all be in the Router tag. 
        //You can add divs and classnames within
    <Router>
<div>
 <nav>
   <ul>
     <li>
       <Link to="/">Home</Link>
     </li>
     <li>
       <Link to="/about">About</Link>
     </li>

     <li>
       <Link to="/contact">Contact</Link>
     </li>
   </ul>
 </nav>

 {/* A <Switch> looks through its children <Route>s and
     renders the first one that matches the current URL. */}
 <Switch>
   <Route exact path="/about">
     <About />
   </Route>
   <Route exact path="/">
     <Home />
   </Route>
   <Route exact path="/contact">
     <Contact />
   </Route>
 </Switch>
 </div>
</Router>
    )
}

export default Navbar

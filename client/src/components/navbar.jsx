import React from 'react';
import Sephora from '../pages/sephora'
import Home from '../pages/home'
import Contact from '../pages/contact'
import Verification from '../pages/verification'
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
{/*Front-end starts here */}
<div>
 <nav>
   <ul>
     <li>
       <Link to="/">Home</Link>
     </li>
     <li>
       <Link to="/sephora">Sephora</Link>
     </li>

     <li>
       <Link to="/contact">Contact</Link>
     </li>

     <li>
       <Link to="/verification">Verify</Link>
     </li>
   </ul>
 </nav>
{/*Front-end ends here */}
 {/* A <Switch> looks through its children <Route>s and
     renders the first one that matches the current URL. */}
       <Switch>
   <Route exact path="/sephora">
     <Sephora />
   </Route>
   <Route exact path="/">
     <Home />
   </Route>
   <Route exact path="/contact">
     <Contact />
   </Route>
   <Route exact path="/verification">
     <Verification />
   </Route>
 </Switch>
 </div>
</Router>
    )
}

export default Navbar

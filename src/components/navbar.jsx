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
<React.Fragment>

      <head>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V" crossorigin="anonymous" />
      </head>

      <header>
      <section className="headerContainer">
      <div className="wiki-logo"></div>
      <nav className="navbar">
   <ul className="nav-links">
     <li>
       <Link to="/">Home</Link>
     </li>
     <li>
       <Link to="/sephora">(sep)</Link>
     </li>

     <li>
       <Link to="#">Donate</Link>
     </li>
     
     <li>
       <Link to="/contact">Contact</Link>
     </li>

     <li>
       <Link to="/verification">(verify)</Link>
     </li>

     
   </ul>
 </nav>

      </section>
      </header>

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
 </React.Fragment>
 
</Router>
    )
}

export default Navbar
